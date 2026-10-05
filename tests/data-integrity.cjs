const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..'),context={window:{}};
const scripts=['data.js','fields.js','academic-i18n.js','chinese-ir.js','reading-guides.js'];
for(const name of scripts)vm.runInNewContext(fs.readFileSync(path.join(root,'dist',name),'utf8'),context);
const beforeIds=new Set(context.window.ATLAS.nodes.map(n=>n.id));
for(const name of ['politics.js','knowledge-tree-data.js','portraits.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'dist',name),'utf8'),context);
const w=context.window,a=w.ATLAS,ids=new Set(a.nodes.map(n=>n.id));
assert.equal(ids.size,a.nodes.length,'Node IDs must be unique');
const schools=new Set(a.schools.map(s=>s[0])),disciplines=new Set(a.disciplines.map(d=>d[0]));
for(const n of a.nodes){
 assert(schools.has(n.school),'Unknown school: '+n.id);
 assert(Number.isFinite(n.year),'Invalid year: '+n.id);
 assert(n.disciplines.length&&n.disciplines.every(d=>disciplines.has(d)),'Invalid discipline: '+n.id);
 assert(n.url.startsWith('https://'),'Expected HTTPS source: '+n.id);
 if(!beforeIds.has(n.id)){
  assert.equal(w.ACADEMIC_I18N[n.id]?.length,6,'Incomplete translations: '+n.id);
  assert(w.ACADEMIC_I18N[n.id].every(t=>typeof t==='string'&&t.trim()));
  for(const lang of ['zh','en','ja','ko'])assert(w.READING_GUIDES[n.id]?.[lang],'Missing reading guide: '+n.id+'/'+lang);
 }
}
for(const e of a.edges){assert(ids.has(e.from)&&ids.has(e.to),'Dangling edge: '+e.from+' / '+e.to);assert(['inherit','critique','fork','dialogue'].includes(e.type));assert(e.note.trim());}
const tree=w.ATLAS_KNOWLEDGE_TREE,groupIds=new Set(tree.groups.map(g=>g.id));
assert.equal(groupIds.size,tree.groups.length);
for(const g of tree.groups)for(const item of g.items){
 for(const key of ['term','en','definition','distinction','example','prompt'])assert(item[key]?.trim(),'Missing concept '+key);
 assert(item.refs.length&&item.refs.every(id=>ids.has(id)),'Dangling concept reference: '+item.term);
}
for(const c of tree.comparisons){assert(c.rows.every(r=>r.length===c.headers.length));assert(c.refs.every(id=>ids.has(id)));}
for(const r of tree.route)assert(r.groups.every(id=>groupIds.has(id)));
const portraits=w.ATLAS_PORTRAITS,names=['Andre Gunder Frank','Ernst-Otto Czempiel','Hedley Bull','Robert W. Cox'];
for(const name of names){
 assert(portraits.missing.includes(name),'Unresolved portrait must remain missing');
 const p=portraits.candidates[name];
 assert.deepEqual(Object.keys(p).sort(),['src','name','page','source','credit','licenseUrl'].sort());
 assert.equal(p.name,name);assert.equal(p.licenseUrl,'','No license may be inferred');
 assert(!portraits.people[name],'Unresolved portrait must not be active');
 assert(Object.values(portraits.nodes).every(ps=>ps.every(photo=>photo.name!==name)));
 assert(portraits.review.people[name]?.evidence.length);
}
for(const [id,ps] of Object.entries(portraits.nodes)){
 assert(ids.has(id),'Portrait node missing: '+id);
 for(const p of ps)if(!/^https?:/.test(p.src))assert(fs.existsSync(path.join(root,'dist',p.src)),'Missing image: '+p.src);
}
const html=fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
for(const name of ['politics.js','knowledge-tree-data.js','knowledge-tree.js','knowledge-tree.css'])assert(html.includes('"'+name+'"'),'Unloaded feature file');
assert(html.indexOf('"politics.js"')<html.indexOf('"apply-content.js"'));
assert(html.indexOf('"apply-content.js"')<html.indexOf('"app.js"'));
context.window.PROFILE={};context.window.ATLAS_CONTENT={nodeEdits:{hobbes:{intro:'test edit applied after new nodes load'}}};
vm.runInNewContext(fs.readFileSync(path.join(root,'dist/apply-content.js'),'utf8'),context);
assert.equal(a.nodes.find(n=>n.id==='hobbes').intro,'test edit applied after new nodes load');
assert(html.indexOf('"knowledge-tree.js"')>html.indexOf('"enhancements.js"'));
assert(fs.readFileSync(path.join(root,'admin-server.cjs'),'utf8').includes("'reading-guides.js','politics.js'"),'Admin catalogue must load foundations');
console.log(`${a.nodes.length} nodes, ${a.edges.length} edges, ${tree.groups.reduce((n,g)=>n+g.items.length,0)} concepts: integrity OK; 4 unresolved portraits isolated`);
