/* Political foundations, edited from Alkaid's two handwritten study sheets.
 * Short summaries are teaching aids, not quotations or a claim of linear influence.
 */
(() => {
'use strict';
const a=window.ATLAS;
a.disciplines[0][1]='四科总览';
a.disciplines.splice(2,0,['politics','政治学基础']);
a.schools.push(
 ['political-classics','政治哲学与契约','#876744'],
 ['state-theory','国家与历史形成','#527e77'],
 ['democracy-theory','统治、民主与制度','#587ea4'],
 ['power-theory','权力、分配与治理','#92657e']
);
const rows=[
 ['aristotle','political-classics',-350,'Aristotle','亚里士多德 · 城邦与善好生活','制度','Politics','把城邦理解为以善好生活为目的的政治共同体；不能把 polis 直接等同于现代主权国家。','政治不只涉及生存和资源，还涉及共同判断何为正义与良好生活。','https://classics.mit.edu/Aristotle/politics.html'],
 ['machiavelli','political-classics',1532,'Niccolò Machiavelli','马基雅维利 · 权力与政治判断','个体','The Prince','写于1513年、1532年首次出版；考察统治者在冲突与变动中的判断和行动。','政治行动受局势与力量约束；《君主论》不能代表其全部共和思想。','https://www.gutenberg.org/ebooks/1232'],
 ['hobbes','political-classics',1651,'Thomas Hobbes','霍布斯 · 契约与安全','国家','Leviathan','从缺乏共同权威时的不安全，论证建立能够执行规则的主权者。','相互授权产生共同权威；建立主权不能概括成把所有权利无条件交出。','https://www.gutenberg.org/ebooks/3207'],
 ['locke','political-classics',1689,'John Locke','洛克 · 权利与有限政府','国家','Two Treatises of Government','《政府论》1689年发行、标题页标1690；第二篇讨论自然权利、同意、政治信托与反抗。','政府是保护生命、自由和财产的受托权力；违背信托可以丧失正当性。','https://www.gutenberg.org/ebooks/7370'],
 ['montesquieu','political-classics',1748,'Montesquieu','孟德斯鸠 · 权力制约','制度','The Spirit of the Laws','比较法律、政体与社会条件；第十一卷讨论政治自由与权力安排。','自由需要避免权力集中；分权的重点是制约关系，而非机构数量。','https://oll.libertyfund.org/titles/montesquieu-complete-works-vol-1-the-spirit-of-laws'],
 ['rousseau','political-classics',1762,'Jean-Jacques Rousseau','卢梭 · 公意与人民主权','国家','The Social Contract','追问人在加入政治共同体后如何仍作为自由的共同立法者。','主权属于人民；公意指向共同利益，不能直接等于多数意见之和。','https://www.gutenberg.org/ebooks/46333'],
 ['bentham','political-classics',1789,'Jeremy Bentham','边沁 · 功利与立法评价','个体','An Introduction to the Principles of Morals and Legislation','以行为和制度对幸福与痛苦的影响评价立法；本书1780年印成、1789年公开出版。','制度要按其后果评价；总效用计算还必须面对权利与分配的质疑。','https://www.econlib.org/library/Bentham/bnthPML.html'],
 ['hegel','state-theory',1821,'G. W. F. Hegel','黑格尔 · 伦理生活与国家','制度','Elements of the Philosophy of Right','区分家庭、市民社会与国家，讨论个人自由如何取得制度形式。','国家不是私人契约的简单加总；伦理生活把个人自由与普遍性联系起来。','https://www.marxists.org/reference/archive/hegel/prindex.htm'],
 ['marx-ideology','state-theory',1932,'Karl Marx · Friedrich Engels','马克思 / 恩格斯 · 社会关系与意识','阶级与社会','The German Ideology','手稿主要写于1845—1846年，完整版本1932年出版；应把思想形成与版本年份区分。','从现实个人、生产和交往关系理解意识与政治，不能化约为经济单向决定一切。','https://www.marxists.org/archive/marx/works/1845/german-ideology/'],
 ['mosca','democracy-theory',1896,'Gaetano Mosca','莫斯卡 · 有组织的少数','阶级与社会','Elementi di scienza politica / The Ruling Class','意大利原著1896年出版，英语扩充版1939年出版；研究政治阶级及其组织优势。','少数人的组织能力可能支持其统治多数；这是一种解释，不能代替正当性判断。','https://archive.org/details/rulingclass00mosc'],
 ['michels','democracy-theory',1911,'Robert Michels','米歇尔斯 · 寡头化倾向','制度','Political Parties','德文原著1911年、英文版1915年；从政党组织研究专业化与领导集中。','信息、技术和组织资源可能使领导层固化；寡头铁律仍须接受经验检验。','https://archive.org/details/politicalparties00michuoft'],
 ['weber','state-theory',1919,'Max Weber','韦伯 · 国家、支配与正当性','国家','Politics as a Vocation','用领土内对正当物理暴力使用的垄断要求界定现代国家，并讨论政治责任。','国家提出暴力垄断的正当性要求；社会学上的正当性信念不等于道德上正确。','https://www.mohrsiebeck.com/en/book/max-weber-gesamtausgabe-9783161581373/'],
 ['schmitt','state-theory',1922,'Carl Schmitt','施米特 · 主权与例外','国家','Political Theology','从谁能决定例外状态讨论主权；敌友区分另见《政治的概念》。','常态规范与例外决断之间存在张力；决断主义不构成无限权力的正当化。','https://press.uchicago.edu/ucp/books/book/chicago/P/bo3649910.html'],
 ['lasswell','power-theory',1936,'Harold D. Lasswell','拉斯韦尔 · 分配与政治','阶级与社会','Politics: Who Gets What, When, How','用谁得到什么、何时得到、如何得到来组织对影响力与价值分配的研究。','分配结果、分配时间和分配手段共同构成政治分析的观察入口。','https://archive.org/details/politicswhogetsw00lass'],
 ['dahl-power','power-theory',1957,'Robert A. Dahl','达尔 · 关系性权力','个体','The Concept of Power','从行动者之间的影响关系讨论权力的范围、手段与测量。','权力分析要说明谁影响谁、在哪个议题上，以及没有该影响时会如何。','https://doi.org/10.1002/bs.3830020303'],
 ['easton','power-theory',1957,'David Easton','伊斯顿 · 政治系统','制度','An Approach to the Analysis of Political Systems','把政治看作开放系统，追踪需求与支持、决定与行动，以及反馈。','政治涉及社会价值的权威性分配；输入、输出与反馈帮助解释系统如何维持。','https://www.cambridge.org/core/journals/world-politics/article/abs/an-approach-to-the-analysis-of-political-systems/97D386ED2B2B15A826C6808C7EC9ED5A'],
 ['dahl-polyarchy','democracy-theory',1971,'Robert A. Dahl','达尔 · 多头政体','制度','Polyarchy: Participation and Opposition','把现实民主化放在公共竞争与参与包容两个维度上研究。','现实制度可与民主理想有距离；竞争程度与参与范围应分别考察。','https://yalebooks.yale.edu/book/9780300015652/polyarchy/'],
 ['rawls','political-classics',1971,'John Rawls','罗尔斯 · 公平与正义','制度','A Theory of Justice','以原初状态和无知之幕作为思想实验，论证社会基本结构的正义原则。','基本自由具有优先性；机会公平与差别原则不能化约成总效用最大化。','https://www.jstor.org/stable/j.ctvjf9z6v'],
 ['lukes','power-theory',1974,'Steven Lukes','卢克斯 · 权力的三个维度','阶级与社会','Power: A Radical View','在可见决策之外，考察议程排除与偏好形成；首版1974年，后续版本修订。','没有公开冲突不等于没有权力；也要研究什么没被讨论及愿望如何形成。','https://www.bloomsbury.com/us/power-9781350544741/'],
 ['foucault','power-theory',1975,'Michel Foucault','福柯 · 规训与权力关系','个体','Discipline and Punish','通过惩罚制度的历史考察监视、规范化和检查；法文原著1975年、英文版1977年。','权力不仅禁止，也通过日常实践生产行为、分类和主体；不能理解为无人负责。','https://www.penguinrandomhouse.com/books/55026/discipline-and-punish-by-michel-foucault-and-alan-sheridan/'],
 ['tilly','state-theory',1985,'Charles Tilly','蒂利 · 战争与国家形成','国家','War Making and State Making as Organized Crime','以欧洲历史分析战争、保护、资源汲取与国家形成的关联。','战争压力可能改变征税与行政组织；欧洲经验不能自动推广为普遍历史规律。','https://www.cambridge.org/core/books/abs/bringing-the-state-back-in/war-making-and-state-making-as-organized-crime/7A7B3B6577A060D76224F54A4DD0DA4C']
];
a.nodes.push(...rows.map(([id,school,year,name,title,level,book,intro,claim,url])=>({id,school,year,name,title,level,book,intro,claim,url,sourceType:'原典 / 出版社 / 书目',disciplines:['politics',...(id==='marx-ideology'?['marx']:[])],notes:[]})));
// Existing nodes remain single entries, now discoverable from the foundations filter.
for(const id of ['marx','marx-engels','engels','gramsci','habermas','polanyi','ostrom','kant']){
 const n=a.nodes.find(n=>n.id===id);if(n&&!n.disciplines.includes('politics'))n.disciplines.push('politics');
}
const links=[
 ['aristotle','hegel','dialogue','比较政治共同体、伦理生活与个人自由；古代城邦不是现代国家的前一阶段模型。'],
 ['machiavelli','morgenthau','dialogue','比较政治判断、力量和审慎；此处不主张直接思想继承。'],
 ['hobbes','locke','dialogue','同样运用自然状态与契约，但政府目的、授权边界及反抗权的论证不同。'],
 ['hobbes','rousseau','dialogue','共同权威与人民自我立法提供不同的契约论回答。'],
 ['locke','rousseau','dialogue','比较个人权利与公意；不能将公意直接解释为多数人的私人愿望。'],
 ['locke','montesquieu','dialogue','比较有限政府、政治信托与权力制约的不同制度论证。'],
 ['rousseau','kant','dialogue','比较自由、共同立法及国内与国际正当秩序；具体影响应另作文本考证。'],
 ['bentham','rawls','critique','罗尔斯批判功利主义不能充分保障个人及基本自由的独立地位。'],
 ['hegel','marx-ideology','critique','马克思与恩格斯转向现实生活和社会关系，批判从观念出发的历史说明。'],
 ['marx-ideology','marx','inherit','生产与社会关系的问题推进到资本主义生产方式的系统批判。'],
 ['hegel','polanyi','dialogue','比较市民社会、市场与社会整合；共同问题不是直接继承证据。'],
 ['mosca','michels','dialogue','比较少数组织优势与组织内部寡头化的机制。'],
 ['mosca','dahl-polyarchy','dialogue','比较政治阶级解释与分散竞争、参与包容的研究框架。'],
 ['michels','dahl-polyarchy','dialogue','组织内部权力集中与公共竞争制度处于不同分析层次。'],
 ['weber','schmitt','dialogue','比较现代国家的社会学界定与例外决断的法政理论。'],
 ['weber','tilly','dialogue','国家的定义与国家的形成机制回答不同问题。'],
 ['hobbes','waltz','dialogue','自然状态与国际无政府的类比有启发，也有国内契约不能直接复制的边界。'],
 ['weber','bull','dialogue','国家权威与没有中央政府的国际社会可以并存；不能把无政府等同混乱。'],
 ['schmitt','securitization','dialogue','比较例外决断与安全化过程；受众接受使二者不能直接等同。'],
 ['tilly','rose','dialogue','比较国家能力的历史形成与国内中介变量对外交政策的影响。'],
 ['lasswell','easton','dialogue','分配问题分别进入影响力分析与政治系统的输入—输出—反馈框架。'],
 ['dahl-power','lukes','critique','卢克斯拓展仅从公开决策观察权力的视角，加入议程与偏好形成。'],
 ['dahl-power','strange','dialogue','关系性权力与塑造选择环境的结构性权力应区分。'],
 ['dahl-power','dahl-polyarchy','dialogue','权力概念的测量与现实民主制度的比较是同一作者的不同研究问题。'],
 ['gramsci','lukes','dialogue','同意的组织与偏好形成提供可比较的问题，不能直接化约为同一理论。'],
 ['foucault','securitization','dialogue','比较分类、话语和实践的作用；安全化仍需考察具体受众与制度条件。'],
 ['foucault','cox','dialogue','比较权力—知识与理论的社会位置，不把福柯归入新葛兰西主义。'],
 ['easton','rosenau','dialogue','国家政治系统与跨国治理在权威和协调上共享问题，但边界不同。'],
 ['rousseau','habermas','dialogue','比较人民自我立法与公共讨论的正当性，避免把公意等同一致意见。'],
 ['rawls','fraser','dialogue','从社会基本结构的正义比较跨国正义中的代表权与边界问题。'],
 ['ostrom','easton','dialogue','比较使用者自组织与权威性分配，不预设治理只能依赖中央国家。'],
 ['lukes','wi','dialogue','网络节点控制与议程、偏好权力可作为不同机制比较；网络中心性本身不是权力结论。']
];
a.edges.push(...links.map(([from,to,type,note])=>({from,to,type,note})));
const summaries={
 aristotle:['Polis and the good life','Political community concerns justice and living well; a polis is not a modern sovereign state.','ポリスと善い生','政治共同体は正義と善い生に関わる。ポリスは近代主権国家ではない。','폴리스와 좋은 삶','정치공동체는 정의와 좋은 삶에 관한 것이다. 폴리스는 근대 주권국가와 다르다.'],
 machiavelli:['Power and political judgment','Political judgment attends to circumstances and force. The Prince does not exhaust his republican thought.','権力と政治判断','政治判断には状況と力への注意が必要である。『君主論』だけで共和思想全体は表せない。','권력과 정치적 판단','정치적 판단은 상황과 힘을 고려한다. 군주론만으로 그의 공화주의 전체를 설명할 수 없다.'],
 hobbes:['Contract and security','Mutual authorization establishes a common authority, while self-preservation still matters.','契約と安全','相互の授権が共通の権威を成立させる。自己保存も依然重要である。','계약과 안전','상호 수권이 공통 권위를 성립시키며 자기보존 역시 중요하다.'],
 locke:['Rights and limited government','Government holds power in trust to protect life, liberty and property; violating that trust can undermine legitimacy.','権利と有限政府','政府は生命・自由・財産を守る受託権力であり、信託への違反は正当性を損ないうる。','권리와 제한정부','정부는 생명, 자유, 재산을 보호하는 수탁 권력이며 신탁 위반은 정당성을 훼손할 수 있다.'],
 montesquieu:['Checks on power','Liberty depends on arrangements that restrain concentrated power, not merely counting branches of government.','権力の抑制','自由には権力集中を抑える制度配置が必要であり、機関の数だけでは説明できない。','권력의 견제','자유에는 권력 집중을 억제하는 제도적 배치가 필요하다. 기관의 수만으로는 부족하다.'],
 rousseau:['General will and popular sovereignty','The people are sovereign. The general will concerns the common interest, not a sum of private preferences.','一般意志と人民主権','主権は人民に属する。一般意志は共通利益に関わり、私的選好の総和ではない。','일반의지와 인민주권','주권은 인민에게 있다. 일반의지는 공동 이익을 지향하며 사적 선호의 합이 아니다.'],
 bentham:['Utility and legislation','Evaluate institutions by consequences for happiness and suffering, while confronting rights and distribution objections.','功利と立法','幸福と苦痛への帰結から制度を評価し、権利と分配の反論も検討する。','공리와 입법','행복과 고통에 대한 결과로 제도를 평가하되 권리와 분배에 관한 반론도 검토한다.'],
 hegel:['Ethical life and the state','Family, civil society and the state are distinct institutions of freedom; the state is not a sum of private contracts.','倫理的生活と国家','家族・市民社会・国家は自由の異なる制度であり、国家は私的契約の総和ではない。','인륜적 삶과 국가','가족, 시민사회, 국가는 자유의 서로 다른 제도이며 국가는 사적 계약의 합이 아니다.'],
 'marx-ideology':['Social relations and consciousness','Begin from actual individuals, production and social relations rather than treating ideas as the independent cause of history.','社会関係と意識','現実の個人・生産・社会関係から出発し、観念を歴史の独立した原因とはしない。','사회관계와 의식','현실의 개인, 생산, 사회관계에서 출발하며 관념을 역사의 독립적 원인으로 보지 않는다.'],
 mosca:['The organized minority','Organizational advantages may enable a political minority to rule; explanation is distinct from justification.','組織された少数者','組織上の優位が少数者の統治を支えうる。説明と正当化は異なる。','조직된 소수','조직적 우위는 소수의 지배를 뒷받침할 수 있다. 설명과 정당화는 다르다.'],
 michels:['Oligarchical tendencies','Professionalization and control of organizational resources can entrench leaders; the claim requires empirical scrutiny.','寡頭化の傾向','専門化と組織資源の管理は指導層を固定しうる。命題には経験的検証が必要である。','과두화 경향','전문화와 조직 자원 통제는 지도층을 고착시킬 수 있다. 경험적 검증이 필요하다.'],
 weber:['State and legitimacy','The modern state claims a monopoly of legitimate physical force within a territory. Belief in legitimacy is not moral approval.','国家と正当性','近代国家は領土内の正当な物理的暴力の独占を要求する。正当性への信念は道徳的承認とは異なる。','국가와 정당성','근대국가는 영토 내 정당한 물리력의 독점을 주장한다. 정당성에 대한 믿음은 도덕적 승인과 다르다.'],
 schmitt:['Sovereignty and exception','Who decides the exception reveals tensions between ordinary rules and political decision.','主権と例外','誰が例外を決めるかは、通常の規範と政治的決断の緊張を示す。','주권과 예외','누가 예외를 결정하는지는 통상적 규범과 정치적 결단의 긴장을 보여준다.'],
 lasswell:['Distribution and politics','Ask who receives what, when and how; study both outcomes and the means of allocation.','分配と政治','誰が何を、いつ、どう得るかを問い、結果と分配手段を調べる。','분배와 정치','누가 무엇을 언제 어떻게 얻는지 묻고 결과와 분배 수단을 함께 살핀다.'],
 'dahl-power':['Relational power','Specify who affects whose actions, on which issue, and what would happen without that influence.','関係的権力','誰が誰の行動に、どの争点で影響するか、その影響がなければどうなるかを明示する。','관계적 권력','누가 누구의 행동에 어떤 의제에서 영향을 주며 그 영향이 없으면 어떻게 될지를 명시한다.'],
 easton:['The political system','Trace demands and support, authoritative decisions and actions, and feedback in an open political system.','政治システム','開かれた政治システムにおける要求・支持、権威的決定と行動、フィードバックを追う。','정치체계','열린 정치체계의 요구와 지지, 권위적 결정과 행동, 환류를 추적한다.'],
 'dahl-polyarchy':['Polyarchy','Public contestation and inclusive participation are separate dimensions for comparing actual political institutions.','ポリアーキー','公共的競争と参加の包摂性は、現実の政治制度を比較する別々の次元である。','다두정','공적 경쟁과 포용적 참여는 실제 정치제도를 비교하는 별개의 차원이다.'],
 rawls:['Justice as fairness','Equal basic liberties have priority; fair opportunity and the difference principle do not maximize aggregate utility.','公正としての正義','平等な基本的自由が優先する。公正な機会と格差原理は総効用の最大化ではない。','공정으로서의 정의','평등한 기본 자유가 우선한다. 공정한 기회와 차등원칙은 총효용 극대화와 다르다.'],
 lukes:['Three dimensions of power','Examine observable decisions, exclusion from the agenda and the shaping of preferences.','権力の三次元','可視的な決定、議題からの排除、選好の形成を検討する。','권력의 세 차원','관찰 가능한 결정, 의제에서의 배제, 선호 형성을 살핀다.'],
 foucault:['Discipline and power relations','Surveillance, normalization and examination shape conduct and subjects, beyond direct prohibition.','規律と権力関係','監視・規範化・試験は、直接的禁止を超えて行動と主体を形成する。','규율과 권력관계','감시, 규범화, 검사는 직접적 금지를 넘어 행동과 주체를 형성한다.'],
 tilly:['War and state formation','War, extraction and administration interacted in European state formation; this is not an automatic universal law.','戦争と国家形成','ヨーロッパの国家形成では戦争・資源徴収・行政が相互作用した。普遍法則とは限らない。','전쟁과 국가 형성','유럽 국가 형성에서 전쟁, 자원 추출, 행정은 상호작용했다. 보편 법칙으로 단정할 수 없다.']
};
Object.assign(window.ACADEMIC_I18N,summaries);
window.READING_GUIDES=window.READING_GUIDES||{};
for(const n of a.nodes.filter(n=>summaries[n.id])){
 const s=summaries[n.id];window.READING_GUIDES[n.id]={zh:n.intro+' '+n.claim,en:s[1],ja:s[3],ko:s[5]};
}
Object.assign(window.READING_QUESTIONS,{
 'political-classics':{zh:'作者要解决什么问题？谁授权、谁立法、哪些权利仍需保护？比较规范理由与制度后果。',en:'What problem is being addressed? Who authorizes and legislates, and which rights remain protected? Compare justification and institutional consequences.',ja:'何が問題なのか。誰が授権し立法し、どの権利が守られるか。正当化と制度的帰結を比較する。',ko:'어떤 문제를 해결하는가? 누가 수권하고 입법하며 어떤 권리가 보호되는가? 정당화와 제도적 결과를 비교한다.'},
 'state-theory':{zh:'是在定义国家，解释国家形成，还是论证国家正当性？分别寻找概念、机制与评价标准。',en:'Is the author defining the state, explaining its formation, or justifying its authority? Separate concepts, mechanisms and evaluative standards.',ja:'国家の定義、形成の説明、権威の正当化のどれか。概念・機構・評価基準を分ける。',ko:'국가를 정의하는가, 형성을 설명하는가, 권위를 정당화하는가? 개념, 기제, 평가 기준을 구분한다.'},
 'democracy-theory':{zh:'影响力在哪些议题和组织中集中？怎样观察参与、竞争与监督？寻找一个能挑战作者结论的案例。',en:'On which issues and in which organizations is influence concentrated? How can participation, competition and oversight be observed? Seek a challenging case.',ja:'どの争点・組織で影響力が集中するか。参加・競争・監督をどう観察するか。結論を問い直す事例を探す。',ko:'어떤 의제와 조직에 영향력이 집중되는가? 참여, 경쟁, 감독을 어떻게 관찰하는가? 결론에 도전하는 사례를 찾는다.'},
 'power-theory':{zh:'谁改变了谁的行动、议程或偏好？哪些反事实和过程证据能区分权力作用与本来的意见一致？',en:'Who changes whose action, agenda or preferences? Which counterfactual and process evidence distinguishes influence from prior agreement?',ja:'誰が誰の行動・議題・選好を変えるか。影響と元々の一致を区別する反実仮想と過程の証拠は何か。',ko:'누가 누구의 행동, 의제, 선호를 바꾸는가? 영향과 원래의 의견 일치를 구분하는 반사실과 과정 증거는 무엇인가?'}
});
window.POLITICS_UI_I18N={
 '约公元前350年':['c. 350 BCE','紀元前350年頃','기원전 약 350년'],
 '约公元前350年 · 代表作':['c. 350 BCE · selected work','紀元前350年頃・代表作','기원전 약 350년 · 대표작'],
 'SELECTED WORKS · 约公元前350年—2021':['SELECTED WORKS · c. 350 BCE—2021','SELECTED WORKS · 紀元前350年頃—2021','SELECTED WORKS · 기원전 약 350년—2021'],
 '国际关系、政治学、马克思主义与经济学，在同一张地图上相遇。':['International relations, politics, Marxism and economics meet on one map.','国際関係・政治学・マルクス主義・経済学が一枚の地図で出会う。','국제관계, 정치학, 마르크스주의, 경제학이 하나의 지도에서 만납니다.'],
 '四个学科 · 互相关联':['Four disciplines · connected','四つの分野・相互に関連','네 학문 · 상호 연결'],
 '从权力与秩序，到资本与社会，再到市场与制度。四个入口共享节点与关系；跨科连接是继续阅读的线索。':['From power and order, through capital and society, to markets and institutions. Four entry points share nodes and relationships; connections guide further reading.','権力と秩序、資本と社会、市場と制度へ。四つの入口がノードと関係を共有し、分野間のつながりが読書の道筋になる。','권력과 질서에서 자본과 사회, 시장과 제도로 이어집니다. 네 입구가 노드와 관계를 공유하며 학문 간 연결이 후속 읽기를 안내합니다.'],
 'Alkaid’s Atlas 是我的个人学习网站，记录国际关系、政治学、马克思主义与经济学的阅读脉络，让不同学科中的问题和思想彼此连接。':['Alkaid’s Atlas is my personal study website, connecting reading in international relations, politics, Marxism and economics.','Alkaid’s Atlas は国際関係・政治学・マルクス主義・経済学の読書をつなぐ個人学習サイトです。','Alkaid’s Atlas는 국제관계, 정치학, 마르크스주의, 경제학의 읽기를 연결하는 개인 학습 사이트입니다.'],
 '四科总览':['All disciplines','全分野','전체 분야'],
 '政治学基础':['Political foundations','政治学の基礎','정치학 기초'],
 '政治哲学与契约':['Political philosophy and contract','政治哲学と契約','정치철학과 계약'],
 '国家与历史形成':['State and historical formation','国家と歴史的形成','국가와 역사적 형성'],
 '统治、民主与制度':['Rule, democracy and institutions','統治・民主主義・制度','지배, 민주주의, 제도'],
 '权力、分配与治理':['Power, distribution and governance','権力・分配・統治','권력, 분배, 거버넌스'],
 '原典 / 出版社 / 书目':['Primary text / publisher / catalogue','原典・出版社・書誌','원전 / 출판사 / 서지']
};
})();
