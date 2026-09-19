const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
function createServer(options={}){
const base=options.base||__dirname,root=path.join(base,'dist'),state=options.state||path.join(base,'.local'),authFile=path.join(state,'owner.json'),contentFile=path.join(root,'content.js'),sessions=new Map(),attempts=new Map();
const hash=(p,s)=>crypto.scryptSync(p,s,64).toString('hex');
function clean(input){
const text=(v,max=12000)=>{if(typeof v!=='string'||v.length>max)throw Error('文字格式或长度不正确');return v},out={profile:{},nodeEdits:{},works:{},music:{}};
for(const k of ['name','intro','portrait'])if(input.profile?.[k]!==undefined)out.profile[k]=text(input.profile[k]);
if(out.profile.portrait&&!/^(https:\/\/|assets\/)/.test(out.profile.portrait))throw Error('照片请使用 assets/ 路径或 HTTPS 链接');
for(const [id,e] of Object.entries(input.nodeEdits||{})){if(!/^[a-z0-9-]{1,80}$/.test(id))throw Error('节点编号不正确');out.nodeEdits[id]={};for(const k of ['intro','claim','book','url'])if(e[k]!==undefined)out.nodeEdits[id][k]=text(e[k]);if(e.url&&!/^https?:\/\//i.test(e.url))throw Error('文献链接格式不正确');if(e.guide){out.nodeEdits[id].guide={};for(const lang of ['zh','en','ja','ko'])if(e.guide[lang]!==undefined)out.nodeEdits[id].guide[lang]=text(e.guide[lang]);}}
for(const k of ['title','subtitle','description','status'])out.works[k]=text(input.works?.[k]||'');
if(!Array.isArray(input.works?.chapters)||input.works.chapters.length!==4)throw Error('请保留第1至第4章');
out.works.chapters=input.works.chapters.map((c,i)=>{if(!Array.isArray(c.sections)||c.sections.length>40)throw Error('目录格式不正确');return{number:i+1,title:text(c.title),summary:text(c.summary),sections:c.sections.map(s=>text(s,1000))}});
if(!/^[A-Za-z0-9]{22}$/.test(input.music?.albumId||''))throw Error('Spotify 专辑编号不正确');out.music={enabled:input.music.enabled===true,albumId:input.music.albumId,title:text(input.music.title,300),artist:text(input.music.artist,300)};return out;
}
return http.createServer(async(req,res)=>{const reply=(s,o)=>{res.writeHead(s,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(o))};try{
if(!/^(127\.0\.0\.1|localhost):\d+$/.test(req.headers.host||''))return reply(403,{error:'仅限本机访问'});
const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('X-Frame-Options','DENY');
if(pathname.startsWith('/api/')){
const token=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith('atlas_owner='))?.slice(12),authenticated=sessions.get(token)>Date.now();if(token&&!authenticated)sessions.delete(token);
if(req.method==='GET'&&pathname==='/api/status')return reply(200,{needsSetup:!fs.existsSync(authFile),authenticated});
if(!['GET','POST','PUT'].includes(req.method))return reply(405,{error:'不支持此操作'});
let body={};if(req.method!=='GET'){if(req.headers.origin!=='http://'+req.headers.host||!req.headers['content-type']?.startsWith('application/json'))return reply(403,{error:'请求来源不正确'});let raw='';for await(const chunk of req){raw+=chunk;if(Buffer.byteLength(raw)>1048576)return reply(413,{error:'内容过大'})}try{body=JSON.parse(raw)}catch{return reply(400,{error:'格式不正确'})}}
const session=()=>{const id=crypto.randomBytes(32).toString('hex');sessions.set(id,Date.now()+28800000);res.setHeader('Set-Cookie','atlas_owner='+id+'; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800')};
if(req.method==='POST'&&pathname==='/api/setup'){if(fs.existsSync(authFile))return reply(409,{error:'已设置密码，请登录'});if(typeof body.password!=='string'||body.password.length<12||body.password.length>256)return reply(400,{error:'密码须为12至256个字符'});const salt=crypto.randomBytes(32).toString('hex');fs.mkdirSync(state,{recursive:true});fs.writeFileSync(authFile,JSON.stringify({salt,hash:hash(body.password,salt)}),{flag:'wx',mode:0o600});session();return reply(200,{ok:true})}
if(req.method==='POST'&&pathname==='/api/login'){const key=req.socket.remoteAddress,now=Date.now(),history=(attempts.get(key)||[]).filter(t=>now-t<60000);if(history.length>=8)return reply(429,{error:'尝试过于频繁，请一分钟后重试'});history.push(now);attempts.set(key,history);if(!fs.existsSync(authFile))return reply(409,{error:'请先设置密码'});if(typeof body.password!=='string'||body.password.length>256)return reply(401,{error:'密码不正确'});const stored=JSON.parse(fs.readFileSync(authFile,'utf8'));if(!crypto.timingSafeEqual(Buffer.from(hash(body.password,stored.salt),'hex'),Buffer.from(stored.hash,'hex')))return reply(401,{error:'密码不正确'});attempts.delete(key);session();return reply(200,{ok:true})}
if(!authenticated)return reply(401,{error:'请先登录'});
if(req.method==='POST'&&pathname==='/api/logout'){sessions.delete(token);res.setHeader('Set-Cookie','atlas_owner=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');return reply(200,{ok:true})}
if(req.method==='GET'&&pathname==='/api/content'){const c={window:{}};vm.runInNewContext(fs.readFileSync(contentFile,'utf8'),c,{timeout:100});return reply(200,c.window.ATLAS_CONTENT)}
if(req.method==='GET'&&pathname==='/api/catalog'){const c={window:{}};for(const f of ['data.js','fields.js','academic-i18n.js','chinese-ir.js','reading-guides.js'])vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),c,{timeout:200});return reply(200,{nodes:c.window.ATLAS.nodes,guides:c.window.READING_GUIDES})}
if(req.method==='PUT'&&pathname==='/api/content'){let c;try{c=clean(body)}catch(e){return reply(400,{error:e.message})}fs.writeFileSync(contentFile+'.tmp','window.ATLAS_CONTENT = '+JSON.stringify(c,null,2).replace(/</g,'\\u003c')+';\n');fs.renameSync(contentFile+'.tmp',contentFile);return reply(200,{ok:true})}return reply(404,{error:'不存在此入口'});
}
if(!['GET','HEAD'].includes(req.method))return reply(405,{error:'页面只支持浏览'});
const admin=pathname==='/admin'||pathname.startsWith('/admin/'),dir=admin?path.join(base,'owner'):root,relative=admin?(pathname.replace(/^\/admin\/?/,'')||'index.html'):(pathname==='/'?'index.html':pathname.slice(1)),file=path.resolve(dir,relative);if(!file.startsWith(dir+path.sep))return reply(403,{error:'无权访问'});
if(admin){res.setHeader('Cache-Control','no-store');res.setHeader('Content-Security-Policy',"default-src 'self'; style-src 'self'; script-src 'self'; frame-ancestors 'none'; base-uri 'none'")}
fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.setHeader('Content-Type',({html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',svg:'image/svg+xml',png:'image/png',jpg:'image/jpeg',webp:'image/webp'})[path.extname(file).slice(1)]||'application/octet-stream');res.end(req.method==='HEAD'?undefined:data)});
}catch(e){if(!res.headersSent)reply(500,{error:'操作失败，请检查本机文件是否可写'});else res.end()}});
}
module.exports={createServer};
