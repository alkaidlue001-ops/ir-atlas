(() => {
const dict=window.UI_I18N={
'知识谱系':['Knowledge atlas','知識の系譜','지식 계보'],
'个人经历':['Biography','プロフィール','소개'],
'思想与学习':['Ideas & learning','思想と学び','사상과 배움'],
'沿着思想的来路，读懂彼此的世界。':['Follow ideas across disciplines.','思想の歩みから、世界を読み解く。','사상의 흐름을 따라 세계를 읽다.'],
'国际关系、马克思主义与经济学，在同一张地图上相遇。':['International relations, Marxism and economics meet on one map.','国際関係・マルクス主義・経済学が、一つの地図で出会う。','국제관계·마르크스주의·경제학이 하나의 지도에서 만납니다.'],
'精选思想节点':['selected nodes','選定されたノード','선정된 노드'],
'三个学科 · 互相关联':['three connected disciplines','つながる三つの学問','서로 연결된 세 학문'],
'三科总览':['All disciplines','全分野','전체 분야'],
'国际关系':['International relations','国際関係','국제관계'],
'马克思主义 · 全球治理':['Marxism & global governance','マルクス主義・グローバル統治','마르크스주의·글로벌 거버넌스'],
'经济学':['Economics','経済学','경제학'],
'马克思主义':['Marxism','マルクス主義','마르크스주의'],
'搜索学者、理论或著作…':['Search scholars, ideas or books…','学者・理論・著作を検索…','학자·이론·저작 검색…'],
'搜索学者、理论或著作':['Search scholars, ideas or books','学者・理論・著作を検索','학자·이론·저작 검색'],
'年代':['Period','年代','시기'],
'全部年代':['All periods','すべての年代','전체 시기'],
'1900 年以前':['Before 1900','1900年以前','1900년 이전'],
'1900—1949':['1900–1949','1900〜1949年','1900~1949년'],
'1950—1979':['1950–1979','1950〜1979年','1950~1979년'],
'1980—1999':['1980–1999','1980〜1999年','1980~1999년'],
'2000 年至今':['Since 2000','2000年以降','2000년 이후'],
'分析层次':['Level','分析レベル','분석 수준'],
'全部层次':['All levels','全レベル','전체 수준'],
'个体':['Individual','個人','개인'],
'国家':['State','国家','국가'],
'体系':['System','国際システム','체제'],
'跨国网络':['Transnational networks','越境ネットワーク','초국적 네트워크'],
'阶级与社会':['Class & society','階級と社会','계급과 사회'],
'微观':['Micro','ミクロ','미시'],
'宏观':['Macro','マクロ','거시'],
'制度':['Institutions','制度','제도'],
'重置筛选 ↺':['Reset filters ↺','絞り込みをリセット ↺','필터 초기화 ↺'],
'思想分支':['Traditions','思想の分岐','사상의 갈래'],
'全部分支':['All traditions','すべての分岐','전체 갈래'],
'现实主义':['Realism','リアリズム','현실주의'],
'自由主义':['Liberalism','リベラリズム','자유주의'],
'建构主义':['Constructivism','構成主義','구성주의'],
'英国学派':['English School','英国学派','영국학파'],
'马克思主义 / 批判理论':['Marxism / critical theory','マルクス主義／批判理論','마르크스주의 / 비판이론'],
'国际政治经济学':['International political economy','国際政治経済学','국제정치경제학'],
'安全研究':['Security studies','安全保障研究','안보연구'],
'马克思主义经典':['Marxist foundations','マルクス主義の古典','마르크스주의 고전'],
'霸权与批判理论':['Hegemony & critical theory','ヘゲモニーと批判理論','헤게모니와 비판이론'],
'全球治理与资本主义':['Global governance & capitalism','グローバル統治と資本主義','글로벌 거버넌스와 자본주의'],
'古典经济学':['Classical economics','古典派経済学','고전경제학'],
'边际革命与微观经济学':['Marginalism & microeconomics','限界革命とミクロ経済学','한계혁명과 미시경제학'],
'宏观经济学':['Macroeconomics','マクロ経済学','거시경제학'],
'制度与公共治理':['Institutions & public governance','制度と公共ガバナンス','제도와 공공 거버넌스'],
'发展与国际经济学':['Development & trade','開発と国際経済学','발전과 국제경제학'],
'如何阅读图谱':['Reading the map','地図の読み方','지도 읽기'],
'节点按各分支中的代表作年份排序，间距不代表时间长度。点击节点查看来源与相关思想。':['Nodes are ordered within traditions by the selected work’s year; spacing is not a time scale. Select a node for sources and connections.','ノードは各分岐内で代表作の年順に並びます。間隔は時間の長さを示しません。ノードを選ぶと出典と関連思想が表示されます。','노드는 각 갈래에서 대표작 연도순으로 배열됩니다. 간격은 시간의 길이가 아닙니다. 노드를 선택하면 출처와 관련 사상을 볼 수 있습니다.'],
'“对话”表示可比较的问题，不必然意味着直接继承。跨学科关系可从详情继续追踪。':['Dialogue marks a comparison, not necessarily direct influence. Follow cross-disciplinary links in the details.','「対話」は比較可能な問いを示し、直接の継承とは限りません。詳細から分野間の関係をたどれます。','‘대화’는 비교 가능한 문제를 뜻하며 직접 계승을 의미하지 않을 수 있습니다. 상세 화면에서 분야 간 관계를 따라갈 수 있습니다.'],
'继承 / 发展':['Development','継承・展開','계승·발전'],
'批判':['Critique','批判','비판'],
'分化':['Divergence','分岐','분화'],
'跨科对话':['Dialogue','分野間の対話','분야 간 대화'],
'没有匹配的节点。试试其他关键词，或重置筛选。':['No matching nodes. Try another term or reset filters.','一致するノードがありません。検索語を変えるか、絞り込みをリセットしてください。','일치하는 노드가 없습니다. 검색어를 바꾸거나 필터를 초기화하세요.'],
'没有匹配的节点。重置筛选后继续探索。':['No matching nodes. Reset filters to continue.','一致するノードがありません。絞り込みをリセットしてください。','일치하는 노드가 없습니다. 필터를 초기화하세요.'],
'滚动探索 · 点击节点查看详情 ↗':['Scroll to explore · select a node ↗','スクロールして探索・ノードで詳細へ ↗','스크롤하여 탐색 · 노드 선택 ↗'],
'核心命题':['Core argument','中心的主張','핵심 명제'],
'代表作':['Selected work','代表作','대표작'],
'文献 / 书目来源 ↗':['Publication / bibliographic source ↗','文献・書誌情報 ↗','문헌 / 서지 출처 ↗'],
'WorldCat 书目检索 ↗':['WorldCat catalogue search ↗','WorldCat 書誌検索 ↗','WorldCat 서지 검색 ↗'],
'尚未编入关系，后续继续补充。':['No links recorded yet.','関連は今後追加します。','관계는 추후 추가됩니다.'],
'我的阅读笔记':['My reading notes','読書ノート','내 독서 노트'],
'记录疑问、引文页码与下一步阅读…':['Questions, page references and next readings…','問い、引用ページ、次に読む本…','질문, 인용 쪽수, 다음 읽을거리…'],
'仅保存在当前浏览器':['Stored in this browser only','このブラウザーにのみ保存','현재 브라우저에만 저장'],
'已自动保存到本机':['Saved automatically on this device','この端末に自動保存しました','이 기기에 자동 저장됨'],
'浏览器存储不可用，请导出笔记':['Storage unavailable; export your notes','保存できません。ノートを書き出してください','저장할 수 없습니다. 노트를 내보내세요'],
'已保存到本机':['Saved on this device','この端末に保存しました','이 기기에 저장됨'],
'无法保存，请导出笔记':['Could not save; export your notes','保存できません。書き出してください','저장 실패. 노트를 내보내세요'],
'保存笔记':['Save note','ノートを保存','노트 저장'],
'导出笔记 ↓':['Export note ↓','ノートを書き出す ↓','노트 내보내기 ↓'],
'教育背景':['Education','教育背景','교육 배경'],
'学习与经历':['Learning & experience','学びと経験','학습과 경험'],
'我如何连接这三个学科':['Connecting three disciplines','三つの学問をつなぐ','세 학문을 연결하는 방법'],
'我的学习横跨国际关系、马克思主义与经济学。我在这里整理经典文献与思想脉络，记录跨学科的阅读与理解。':['My learning spans international relations, Marxism and economics. This site brings together classic texts, intellectual traditions and my understanding across disciplines.','国際関係、マルクス主義、経済学を横断して学んでいます。このサイトでは古典的著作と思想の流れを整理し、分野を越えた読書と理解を記録しています。','국제관계, 마르크스주의, 경제학을 넘나들며 공부하고 있습니다. 이곳에서 고전 문헌과 사상의 흐름을 정리하고 학문 간 독서와 이해를 기록합니다.'],
'学习经济学，让我关注资源配置与制度选择；阅读马克思主义，让我把这些问题放回历史与社会关系；国际关系则把视野扩展到国家、秩序与全球层面的互动。我希望沿着经典著作与争论，理解这些视角怎样补充彼此。':['Economics draws my attention to allocation and institutional choices. Marxism places these questions in history and social relations. International relations extends the discussion to states, order and global interaction. Through classic texts and debates, I explore how these perspectives complement one another.','経済学からは資源配分と制度の選択を、マルクス主義からはその歴史と社会関係を学びます。国際関係は視野を国家・秩序・世界的な相互作用へ広げてくれます。古典と論争をたどり、これらの視角がどう補い合うかを考えています。','경제학은 자원배분과 제도 선택에 주목하게 하고, 마르크스주의는 이를 역사와 사회관계 속에서 바라보게 합니다. 국제관계는 시야를 국가, 질서, 세계적 상호작용으로 넓혀 줍니다. 고전과 논쟁을 통해 이 관점들이 어떻게 서로를 보완하는지 살펴봅니다.'],
'某985高校':['A Project 985 university','中国の某985重点大学','중국의 한 985 중점대학'],
'香港浸会大学':['Hong Kong Baptist University','香港浸会大学','홍콩침례대학교'],
'昆山杜克大学':['Duke Kunshan University','昆山デューク大学','듀크쿤산대학교'],
'厦门大学':['Xiamen University','厦門大学','샤먼대학교'],
'就读':['Studies','就学','수학'],
'暑期课程交流':['Summer coursework / exchange','サマーコース・交流','여름학기 수업·교류'],
'照片待补充':['Portrait forthcoming','写真は後日追加','사진 추후 추가'],
'内容整理中。':['Details forthcoming.','詳細は準備中です。','세부 내용 준비 중입니다.'],
'一张持续生长的学习地图。':['A learning map, always growing.','学びとともに育つ地図。','배움과 함께 자라는 지도.'],
'Alkaid’s Atlas 是我的个人学习网站，记录国际关系、马克思主义与经济学的阅读脉络，让不同学科中的问题和思想彼此连接。':['Alkaid’s Atlas is my personal learning website. It traces readings in international relations, Marxism and economics, connecting ideas and questions across disciplines.','Alkaid’s Atlas は個人の学習サイトです。国際関係、マルクス主義、経済学の読書の流れを記録し、異なる分野の問いと思想をつなぎます。','Alkaid’s Atlas는 개인 학습 웹사이트입니다. 국제관계, 마르크스주의, 경제학의 독서 흐름을 기록하며 서로 다른 학문의 질문과 사상을 연결합니다.'],
'为什么从谱系开始':['Why intellectual genealogies?','なぜ系譜から始めるのか','왜 계보에서 시작할까'],
'理论从具体历史和争论中生长。理解一个观点，也需要知道它回应了谁、改变了什么，以及哪些问题仍然开放。':['Theories grow out of history and debate. Understanding an idea means asking whom it addresses, what it changes and which questions remain open.','理論は具体的な歴史と論争から生まれます。思想を理解するには、誰に応答し、何を変え、どの問いを残したのかを知ることも必要です。','이론은 구체적인 역사와 논쟁 속에서 자랍니다. 어떤 견해를 이해하려면 누구에게 답하고, 무엇을 바꾸며, 어떤 질문을 남겼는지도 알아야 합니다.'],
'在学科之间阅读':['Read across disciplines','分野を越えて読む','학문 사이에서 읽기'],
'从权力与秩序，到资本与社会，再到市场与制度。三个入口共享节点与关系；跨科连接是继续阅读的线索。':['From power and order to capital and society, markets and institutions: the three entrances share nodes and links, offering paths for further reading.','権力と秩序から、資本と社会、市場と制度へ。三つの入口はノードと関係を共有し、次の読書への手がかりを示します。','권력과 질서에서 자본과 사회, 시장과 제도까지. 세 입구는 노드와 관계를 공유하며 다음 독서를 위한 단서를 제공합니다.'],
'让来源可以追溯':['Keep sources traceable','出典をたどれるように','출처를 따라갈 수 있도록'],
'每个节点列出代表作与来源入口，关系附有解释。年份采用所列版本或首版年份，文集的出版时间不等于思想形成时间。':['Nodes list selected works and sources; links include explanations. Dates refer to the listed edition or first publication, not necessarily the formation of the idea.','各ノードに代表作と出典を、関係には説明を付しています。年は掲載版または初版の出版年であり、思想の成立年とは限りません。','각 노드에는 대표작과 출처를, 관계에는 설명을 붙였습니다. 연도는 해당 판본이나 초판의 출판연도이며 사상의 형성 시점과 같지는 않습니다.'],
'关于我':['About me','私について','나에 대하여'],
'查看教育背景与个人经历 ↗':['View education and experience ↗','教育背景と経験を見る ↗','교육 배경과 경험 보기 ↗'],
'编选说明与来源 ↗':['Editorial note & sources ↗','編集方針と出典 ↗','편집 안내와 출처 ↗'],
'一张入口地图，而非学科全史':['An entry point into intellectual history','思想史への入口として','사상사로 들어가는 입구'],
'人物可能跨越多种传统；分组、关系标签与简介是教学性概括。箭头由被继承、被批判或发生分化的参照指向后来的论述。“跨科对话”是编辑性比较，不证明直接影响；不表示所有思想线性演进。':['Scholars can span several traditions. Groups and summaries are teaching aids. Arrows run from a reference point to a later development, critique or divergence. Dialogue links are editorial comparisons, not proof of direct influence or linear progress.','学者は複数の伝統に属しえます。分類と要約は学習の補助です。矢印は参照点から後の展開・批判・分岐へ向かいます。対話の線は編集上の比較であり、直接の影響や直線的な進歩を証明しません。','학자는 여러 전통에 걸칠 수 있습니다. 분류와 요약은 학습을 돕습니다. 화살표는 참조점에서 이후의 발전·비판·분화로 향합니다. 대화 연결은 편집상 비교이며 직접 영향이나 선형적 발전의 증거가 아닙니다.'],
'马克思主义延伸至全球治理的路线呈现若干有影响力的学术路径，而非唯一解释。IPE 与安全研究是跨流派领域；分析层次仅用于导航。':['The Marxism–global governance links show selected influential approaches, not a single authoritative interpretation. IPE and security studies cross traditions; analytical levels support navigation.','マルクス主義からグローバル統治への線は、影響力ある諸アプローチの一部です。IPEと安全保障研究は学派を横断し、分析レベルは閲覧の補助です。','마르크스주의에서 글로벌 거버넌스로의 연결은 여러 영향력 있는 접근의 일부입니다. IPE와 안보연구는 학파를 넘나들며, 분석 수준은 탐색을 돕습니다.'],
'来源链接包括 DOI、出版社、图书馆记录与书目检索。检索入口不等于逐页引证。参考':['Sources include DOI links, publishers and library searches; search links are not page-level citations. The genealogy concept is inspired by ','出典にはDOI、出版社、図書館検索を含みます。検索リンクはページ単位の引用ではありません。系譜の構想は次のサイトを参考にしました：','출처에는 DOI, 출판사, 도서관 검색이 포함됩니다. 검색 링크는 쪽별 인용이 아닙니다. 계보 구상은 다음 사이트에서 영감을 얻었습니다: '],
'的知识谱系理念；代码、版式与视觉设计独立创作。':['. Code, layout and visual design are original.','。コード、レイアウト、視覚デザインは独自に制作しています。','. 코드, 레이아웃, 시각 디자인은 독자적으로 제작했습니다.'],
'阅读笔记只保存在当前浏览器，可导出为 Markdown。清除浏览器数据可能丢失笔记，网站不上传笔记。':['Notes stay in this browser and can be exported as Markdown. Clearing browser data may delete them. Notes are not uploaded.','ノートはこのブラウザーに保存され、Markdown形式で書き出せます。ブラウザーのデータを削除すると失われる場合があります。ノートは送信されません。','노트는 현재 브라우저에 저장되며 Markdown으로 내보낼 수 있습니다. 브라우저 데이터를 삭제하면 사라질 수 있습니다. 노트는 업로드되지 않습니다.'],
'缩小图谱':['Zoom out','縮小','축소'],
'放大图谱':['Zoom in','拡大','확대'],
'恢复图谱比例':['Reset zoom','倍率を戻す','배율 초기화'],
'关闭说明':['Close note','説明を閉じる','설명 닫기'],
'主导航':['Main navigation','メインナビゲーション','주 탐색'],
'学科筛选':['Discipline filter','分野で絞り込む','분야 필터'],
'交互知识谱系':['Interactive knowledge atlas','インタラクティブな知識地図','상호작용 지식지도'],
'可横向和纵向滚动的图谱':['Scrollable knowledge graph','縦横にスクロールできる図','가로세로 스크롤 가능한 지도'],
'节点详情':['Node details','ノードの詳細','노드 상세']
};
let lang='zh';try{lang=localStorage.getItem('alkaid:language')||'zh'}catch{}
if(!['zh','en','ja','ko'].includes(lang))lang='zh';
const originalText=new WeakMap(),originalAttrs=new WeakMap();
const index=()=>({en:0,ja:1,ko:2})[lang];
const t=source=>{
 if(lang==='zh')return source;
 const s=source.trim(),i=index();
 if(dict[s])return dict[s][i];
 if(s.startsWith('/ '))return '/ '+t(s.slice(2));
 const nodeLabel=s.match(/^(.*?)，(.*?)，(\d{4})$/);
 if(nodeLabel&&dict[nodeLabel[2]])return nodeLabel[1]+', '+t(nodeLabel[2])+', '+nodeLabel[3];
 const schoolSuffix=s.match(/^(.*?)  \/  (\d+)$/);
 if(schoolSuffix&&dict[schoolSuffix[1]])return dict[schoolSuffix[1]][i]+' / '+schoolSuffix[2];
 if(s.includes(' / SELECTED NODE'))return t(s.split(' / SELECTED NODE')[0])+' / SELECTED NODE';
 if(/^思想关系 · /.test(s))return ['Connections','思想のつながり','사상의 연결'][i]+' · '+s.split(' · ')[1];
 if(/^\d+ · 代表作$/.test(s))return s.slice(0,4)+' · '+t('代表作');
 for(const type of ['继承 / 发展','批判','分化','跨科对话'])if(s.endsWith(' · '+type))return s.slice(0,-type.length)+t(type);
 if(s.endsWith('校徽'))return t(s.slice(0,-2))+' '+['emblem','校章','교표'][i];
 return source;
};
// Academic summaries are independently condensed in each language.
window.ATLAS.nodes.forEach(n=>{const row=window.ACADEMIC_I18N[n.id];if(!row)return;dict[n.title]=[row[0],row[2],row[4]];const short=n.title.split(' · ').pop();if(!dict[short])dict[short]=[row[0],row[2],row[4]];dict[n.claim]=[row[1],row[3],row[5]];dict[n.intro]=[row[1],row[3],row[5]]});
function apply(){const htmlLang=lang==='zh'?'zh-CN':lang;if(document.documentElement.lang!==htmlLang)document.documentElement.lang=htmlLang;document.title='Alkaid’s Atlas · '+t('思想与学习');const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);while(walker.nextNode()){const n=walker.currentNode;if(n.parentElement.closest('script,style,textarea,[data-no-translate]'))continue;if(!originalText.has(n))originalText.set(n,n.textContent);const next=t(originalText.get(n));if(n.textContent!==next)n.textContent=next}document.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(e=>{let attrs=originalAttrs.get(e);if(!attrs){attrs={};['placeholder','aria-label','alt'].forEach(k=>{if(e.hasAttribute(k))attrs[k]=e.getAttribute(k)});originalAttrs.set(e,attrs)}Object.entries(attrs).forEach(([k,v])=>{e.setAttribute(k,t(v))})});document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)))}
document.querySelectorAll('select option').forEach(o=>{if(!o.hasAttribute('value'))o.value=o.textContent});
const controls=document.createElement('div');controls.className='language-switch';controls.setAttribute('aria-label','Language');
[['zh','中'],['en','EN'],['ja','日本語'],['ko','한국어']].forEach(([id,label])=>{const b=document.createElement('button');b.textContent=label;b.dataset.lang=id;b.lang=id;b.onclick=()=>{lang=id;try{localStorage.setItem('alkaid:language',id)}catch{}apply()};controls.append(b)});
document.querySelector('header').append(controls);
let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;apply()})}).observe(document.body,{childList:true,subtree:true,characterData:true});
window.applyAtlasLanguage=apply;
apply();
})();