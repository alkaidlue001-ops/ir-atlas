(() => {
'use strict';
const $=s=>document.querySelector(s),el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
const copy=(zh,en,ja,ko)=>({zh,en,ja,ko});
const words={
works:copy('写作','Writing','執筆','글쓰기'),graph:copy('谱系图','Genealogy','系譜図','계보도'),people:copy('人物索引','Scholars','人物索引','학자 목록'),
guide:copy('这部文献主要讲什么','Inside this work','この文献の内容','이 문헌의 주요 내용'),focus:copy('怎样读这部文献','Reading questions','読み解くための問い','읽기 질문'),
credits:copy('人物图像来源','Image credits','人物画像の出典','인물 이미지 출처'),
music:copy('展开音乐','Open music','音楽を開く','음악 열기'),close:copy('关闭','Close','閉じる','닫기'),
listen:copy('在 Spotify 中打开整张专辑 ↗','Open the album on Spotify ↗','Spotifyでアルバムを開く ↗','Spotify에서 앨범 열기 ↗'),
musicNote:copy('播放范围由 Spotify、登录状态和所在地区决定。','Playback depends on Spotify, sign-in and region.','再生範囲はSpotify、ログイン状態、地域によって異なります。','재생 범위는 Spotify, 로그인 상태, 지역에 따라 다릅니다.'),
toc:copy('章节目录','Chapter outline','章の目次','장 목차'),owner:copy('管理','Manage','管理','관리'),
workNote:copy('以下展示第1至第4章的简介与目录。','Introductions and outlines for chapters 1–4.','第1章から第4章の紹介と目次。','제1~4장의 소개와 목차.'),
draft:copy('书稿进行中 · 第1—4章','Manuscript in progress · Chapters 1–4','執筆中の原稿・第1〜4章','집필 중 원고·제1~4장'),
version:copy('2014 · 原版豪华版','2014 · Original deluxe edition','2014年・オリジナルのデラックス版','2014년·오리지널 디럭스판')
};
function language(){return document.documentElement.lang==='zh-CN'?'zh':document.documentElement.lang}
function L(obj){return typeof obj==='string'?obj:obj?.[language()]||obj?.en||obj?.zh||''}
function localText(e,translation){e.dataset.noTranslate='true';e.textContent=L(translation);return e}
let gallery=false;
const publicContent=window.ATLAS_CONTENT||{},portraits=window.ATLAS_PORTRAITS?.nodes||{};
const worksView=el('section','writing-page');worksView.id='worksView';worksView.hidden=true;document.querySelector('main').insertBefore(worksView,$('.site-foot'));
const workTab=el('button','tab');workTab.dataset.view='works';const nav=$('header nav');nav.insertBefore(workTab,nav.querySelector('[data-view="about"]'));
function switchView(view){document.querySelectorAll('main>section[id$="View"]').forEach(e=>e.hidden=e.id!==view+'View');document.querySelectorAll('.tab').forEach(b=>{b.classList.toggle('active',b.dataset.view===view);b.setAttribute('aria-pressed',String(b.dataset.view===view))});window.scrollTo({top:0,behavior:'auto'})}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>switchView(b.dataset.view));$('#goProfile').onclick=()=>switchView('profile');
const workTranslations={
title:copy(publicContent.works.title,'Why States Act as They Do','国家はなぜこう行動するのか','국가는 왜 이렇게 행동하는가'),
subtitle:copy(publicContent.works.subtitle,'The international system, power and strategic choice','国際システム、権力、戦略的選択','국제체제, 권력, 전략적 선택'),
description:copy(publicContent.works.description,'A manuscript in progress on international relations. The first four chapters move from anarchy and structure to polarity and balancing, using historical situations to distinguish concepts, mechanisms and evidence.','国際関係についての執筆中の原稿です。最初の四章では無政府状態と構造から極性と均衡へ進み、歴史的状況を通じて概念・機構・証拠を区別します。','국제관계에 관한 집필 중 원고입니다. 앞의 네 장은 무정부 상태와 구조에서 극성과 균형으로 이어지며, 역사적 상황을 통해 개념·기제·증거를 구분합니다。'),
titles:[
copy('没有世界政府，国家会怎样？','What do states do without a world government?','世界政府がなければ、国家はどう行動するか','세계정부가 없다면 국가는 어떻게 행동할까'),
copy('Waltz所说的结构究竟是什么','What does Waltz mean by structure?','ウォルツのいう構造とは何か','월츠가 말하는 구조란 무엇인가'),
copy('世界上有几个强国，为什么重要','Why does the number of great powers matter?','大国の数はなぜ重要なのか','강대국의 수는 왜 중요한가'),
copy('国家为什么制衡强者','Why do states balance against the strong?','国家はなぜ強国に対抗するのか','국가는 왜 강자를 견제하는가')],
summaries:[
copy('', 'Contrasts realism, liberalism, constructivism and other approaches to ask how competition and cooperation coexist under anarchy.','無政府状態の下で競争と協力がなぜ共存するのかを、リアリズム、自由主義、構成主義などから比較します。','무정부 상태에서 경쟁과 협력이 왜 공존하는지 현실주의, 자유주의, 구성주의 등을 비교합니다.'),
copy('', 'Distinguishes system from structure, explains three structural elements, and traces competition, socialization and the limits of systemic theory.','体系と構造を区別し、三つの構成要素、競争と社会化、体系理論の限界を説明します。','체제와 구조를 구분하고 세 구조 요소, 경쟁과 사회화, 체제이론의 한계를 설명합니다.'),
copy('', 'Explores polarity, alliance responsibilities and the measurement of power, distinguishing different meanings of stability.','極性、同盟の責任、国力測定を検討し、安定という語の異なる意味を区別します。','극성, 동맹 책임, 국력 측정을 살펴보며 안정의 서로 다른 의미를 구분합니다.'),
copy('', 'Distinguishes balancing from bandwagoning and internal from external balancing, asking when threat perceptions and coordination costs change the outcome.','均衡と追随、内的均衡と外的均衡を区別し、脅威認識や調整費用が結果をどう変えるかを問います。','균형과 편승, 내적 균형과 외적 균형을 구분하고 위협 인식과 조정비용이 결과를 어떻게 바꾸는지 묻습니다.')],
sections:[
['Anarchy is not chaos|無政府状態は混乱ではない|무정부 상태는 혼란이 아니다','Realism and self-help|リアリズムと自助|현실주의와 자조','The security dilemma|安全保障のジレンマ|안보 딜레마','Cooperation without world government|世界政府なき協力|세계정부 없는 협력','Constructivism and mutual understanding|構成主義と相互理解|구성주의와 상호이해','Other approaches to order|秩序へのその他の視角|질서에 대한 다른 관점','Debates in 2026|2026年の議論|2026년의 논의','Anarchy as a starting point|出発点としての無政府状態|출발점으로서의 무정부 상태'],
['A theorist shaped by war|戦争を経験した理論家|전쟁을 경험한 이론가','Structure is not the whole system|構造は体系のすべてではない|구조는 체제 전체가 아니다','Three structural elements|構造の三要素|구조의 세 요소','Why different states behave similarly|異なる国家が似た行動をとる理由|서로 다른 국가가 비슷하게 행동하는 이유','Balance without a designer|設計者なき均衡|설계자 없는 균형','Waltz on bipolar stability|ウォルツと二極の安定|월츠와 양극의 안정','The post-Cold War test|冷戦後の理論的検証|탈냉전 이후의 이론 검토','The scope of structural realism|構造的リアリズムの射程|구조적 현실주의의 범위','Critiques and extensions|批判と展開|비판과 확장','Using structure carefully|構造理論を慎重に用いる|구조이론을 신중하게 활용하기'],
['From a strong state to a pole|強国から一つの極へ|강국에서 하나의 극으로','Numbers and strategic calculation|数と戦略的計算|수와 전략적 계산','The case for bipolarity|二極を支持する議論|양극을 지지하는 논의','Multipolar options and risks|多極の選択肢と危険|다극의 선택과 위험','War under unipolarity|単極下の戦争|단극 아래의 전쟁','Measuring power|国力を測る|국력 측정','Resources and network positions|資源とネットワークの位置|자원과 네트워크 위치','Who claims multipolarity?|誰が多極化を語るのか|누가 다극화를 주장하는가','Why the number matters|数が重要である理由|수가 중요한 이유'],
['Capabilities and uncertainty|能力と不確実性|능력과 불확실성','Balancing and bandwagoning|均衡と追随|균형과 편승','Internal and external balancing|内的均衡と外的均衡|내적 균형과 외적 균형','Walt and balance of threat|ウォルトと脅威均衡|월트와 위협균형','Why balancing fails|均衡が失敗する理由|균형이 실패하는 이유','Offensive realism|攻撃的リアリズム|공격적 현실주의','Technology, institutions and supply chains|技術・制度・サプライチェーン|기술·제도·공급망','Returning to the village example|村の事例に立ち戻る|마을 사례로 돌아가기']
]};
function renderWorks(){
worksView.replaceChildren(el('p','eyebrow','SELECTED WRITING / 01'));worksView.append(localText(el('h1'),workTranslations.title),localText(el('p','writing-subtitle'),workTranslations.subtitle),localText(el('p','writing-status'),words.draft));
const desc=el('p','writing-intro');localText(desc,workTranslations.description);if(language()==='zh')desc.textContent=publicContent.works.description;worksView.append(desc);
worksView.append(localText(el('p','writing-note'),words.workNote));
(publicContent.works.chapters||[]).forEach((c,i)=>{const card=el('article','chapter');card.append(el('span','chapter-number',String(c.number).padStart(2,'0')));const body=el('div','chapter-body'),title=localText(el('h2'),workTranslations.titles[i]||c.title);if(language()==='zh')title.textContent=c.title;body.append(title);const summary=localText(el('p'),workTranslations.summaries[i]||c.summary);if(language()==='zh')summary.textContent=c.summary;body.append(summary);const details=el('details'),s=localText(el('summary'),words.toc),list=el('ol');(c.sections||[]).forEach((text,j)=>{const translated=workTranslations.sections[i]?.[j]?.split('|');list.append(localText(el('li'),translated?copy(text,...translated):text))});details.append(s,list);body.append(details);card.append(body);worksView.append(card)})
}
const viewControls=el('div','view-modes'),graphButton=el('button'),peopleButton=el('button');viewControls.append(graphButton,peopleButton);$('.map-toolbar').insertBefore(viewControls,$('.zoom'));
const galleryEl=el('div','scholar-gallery');galleryEl.hidden=true;$('.map-panel').insertBefore(galleryEl,$('.map-foot'));
function renderGallery(){galleryEl.replaceChildren();document.querySelectorAll('#graph .node').forEach(node=>{const n=window.ATLAS.nodes.find(n=>n.id===node.dataset.id),card=el('button','scholar-card'),photo=portraits[n.id]?.[0];card.dataset.id=n.id;if(photo){const img=el('img');img.src=photo.src;img.alt=photo.name;img.loading='lazy';card.append(img)}else card.append(el('div','portrait-fallback',n.name.split(' ').map(v=>v[0]).slice(0,2).join('')));card.append(el('span','scholar-year',n.year),el('strong','',n.name),el('span','scholar-topic',n.title));card.onclick=()=>window.ATLAS_APP.selectNode(n.id,true);galleryEl.append(card)})}
function setMode(value){gallery=value;$('#graphScroll').hidden=gallery||!$('#graph').children.length;galleryEl.hidden=!gallery;graphButton.setAttribute('aria-pressed',String(!gallery));peopleButton.setAttribute('aria-pressed',String(gallery));if(gallery)renderGallery()}
graphButton.onclick=()=>setMode(false);peopleButton.onclick=()=>setMode(true);
function enhanceGraph(){document.querySelectorAll('#graph .node').forEach(b=>{if(b.querySelector('.node-photo'))return;const p=portraits[b.dataset.id]?.[0];if(p){const img=el('img','node-photo');img.src=p.src;img.alt=p.name;img.loading='lazy';b.prepend(img);b.classList.add('with-photo')}});if(gallery)setMode(true)}
function enhanceDetail(n){
const box=$('#detail .detail-inner');if(!box||box.querySelector('.reading-guide'))return;
const photos=portraits[n.id]||[];if(photos.length&&!box.querySelector('.scholar-photos')){const panel=el('div','scholar-photos');photos.forEach(p=>{const fig=el('figure'),img=el('img');img.src=p.src;img.alt=p.name;img.loading='lazy';fig.append(img,el('figcaption','',p.name.replace(' (political scientist)','')));panel.append(fig)});box.insertBefore(panel,box.querySelector('.tag'));const credit=el('details','image-credits');credit.append(localText(el('summary'),words.credits));photos.forEach(p=>{const a=el('a','',p.name+(p.credit?' · '+p.credit:''));a.dataset.noTranslate='true';a.href=p.source;a.target='_blank';a.rel='noopener noreferrer';credit.append(a)});panel.after(credit)}
const g=window.READING_GUIDES?.[n.id],edit=publicContent.nodeEdits?.[n.id],guide=el('section','reading-guide');guide.append(localText(el('h3'),words.guide));
if(g){const text=el('p');text.dataset.noTranslate='true';text.textContent=edit?.guide?.[language()]||g[language()]||g.en||g.zh;guide.append(text);const question=window.READING_QUESTIONS?.[n.school];if(question){guide.append(localText(el('h3'),words.focus),localText(el('p','reading-question'),question))}}
box.querySelector('.source').after(guide);
}
const musicButton=el('button','music-toggle','▷');musicButton.setAttribute('aria-expanded','false');const musicPanel=el('section','music-panel');musicPanel.hidden=true;musicPanel.setAttribute('aria-label','1989 · Taylor Swift');
const musicHead=el('div','music-head'),musicClose=el('button','','×');musicHead.append(el('div','',publicContent.music.title+' / '+publicContent.music.artist),musicClose);musicPanel.append(musicHead);
const edition=localText(el('p','music-edition'),words.version),embed=el('div','music-embed'),musicLink=localText(el('a','music-link'),words.listen),musicNote=localText(el('p','music-note'),words.musicNote);musicLink.href='https://open.spotify.com/album/'+publicContent.music.albumId;musicLink.target='_blank';musicLink.rel='noopener noreferrer';musicPanel.append(edition,embed,musicLink,musicNote);document.body.append(musicButton,musicPanel);
let loaded=false;function toggleMusic(open){musicPanel.hidden=!open;musicButton.setAttribute('aria-expanded',String(open));if(open&&!loaded){const f=el('iframe');f.src='https://open.spotify.com/embed/album/'+publicContent.music.albumId+'?utm_source=generator&theme=0';f.title='Taylor Swift — 1989 (Deluxe)';f.allow='encrypted-media; fullscreen; picture-in-picture';f.referrerPolicy='strict-origin-when-cross-origin';f.height='352';embed.append(f);loaded=true}if(!open)musicButton.focus()}
musicButton.onclick=()=>toggleMusic(musicPanel.hidden);musicClose.onclick=()=>toggleMusic(false);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!musicPanel.hidden)toggleMusic(false)});if(!publicContent.music.enabled)musicButton.hidden=true;
if(['127.0.0.1','localhost'].includes(location.hostname)){const a=el('a','owner-link');a.href='/admin';localText(a,words.owner);$('.site-foot').append(a)}
function relocalize(){localText(workTab,words.works);localText(graphButton,words.graph);localText(peopleButton,words.people);musicButton.setAttribute('aria-label',L(words.music));musicClose.setAttribute('aria-label',L(words.close));localText(edition,words.version);localText(musicLink,words.listen);localText(musicNote,words.musicNote);renderWorks();const selected=window.ATLAS.nodes.find(n=>n.id===$('#graph .node.selected')?.dataset.id);if(selected){$('#detail .reading-guide')?.remove();enhanceDetail(selected)}}
window.addEventListener('atlas:graph',enhanceGraph);window.addEventListener('atlas:detail',e=>enhanceDetail(e.detail));
new MutationObserver(relocalize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
relocalize();enhanceGraph();setMode(false);
})();
