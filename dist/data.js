/* Append nodes and relations here; the interface derives counts and filters automatically. */
window.ATLAS = {
 schools:[['realism','现实主义','#b56840'],['liberalism','自由主义','#4778a5'],['constructivism','建构主义','#8a65a8'],['english','英国学派','#658058'],['critical','马克思主义 / 批判理论','#ac596e'],['ipe','国际政治经济学','#19877f'],['security','安全研究','#977826']],
 nodes:[
 ['carr','realism',1939,'E. H. Carr','卡尔 · 现实主义的批判起点','国家','The Twenty Years’ Crisis, 1919–1939','批判战间期理想主义，同时讨论权力与道德的张力。','国际秩序中的普遍利益主张，可能遮蔽既得利益者的权力。'],
 ['morgenthau','realism',1948,'Hans Morgenthau','摩根索 · 古典现实主义','个体','Politics Among Nations','从政治权力与审慎判断理解国家间政治。','以权力界定的利益为分析起点，但不能把政治判断化约为机械法则。'],
 ['waltz','realism',1979,'Kenneth Waltz','华尔兹 · 结构现实主义','体系','Theory of International Politics','将解释重点转向无政府结构与能力分布。','体系结构限制国家选择；均势可在国家并不共同追求它时形成。'],
 ['mearsheimer','realism',2001,'John Mearsheimer','米尔斯海默 · 进攻性现实主义','体系','The Tragedy of Great Power Politics','强调意图不确定性与大国寻求相对权力的动力。','缺乏最终安全保障的大国具有追求地区霸权的结构性激励。'],
 ['rose','realism',1998,'Gideon Rose','罗斯 · 新古典现实主义','国家','Neoclassical Realism and Theories of Foreign Policy','归纳连接体系压力与国内中介变量的外交政策研究。','相对实力通过领导人认知和国家结构影响外交政策。','https://doi.org/10.1017/S0043887100007814'],
 ['kant','liberalism',1795,'Immanuel Kant','康德 · 永久和平','国家','Perpetual Peace: A Philosophical Sketch','以共和政体、自由国家联盟与世界公民权构想和平条件。','国内政治安排与国际法律秩序共同构成和平的制度条件。'],
 ['keohane-nye','liberalism',1977,'Robert Keohane · Joseph Nye','基欧汉 / 奈 · 复合相互依赖','跨国网络','Power and Interdependence','区分相互依赖的敏感性与脆弱性，讨论多重联系渠道。','相互依赖不等于对称；退出关系的成本差异可以成为权力资源。'],
 ['keohane','liberalism',1984,'Robert Keohane','基欧汉 · 新自由制度主义','体系','After Hegemony','研究缺乏霸权领导时合作为何仍能持续。','制度可提供信息、降低交易成本并支持互惠，使自利国家维持合作。'],
 ['doyle','liberalism',1983,'Michael Doyle','多伊尔 · 自由主义和平','国家','Kant, Liberal Legacies, and Foreign Affairs','讨论自由主义国家之间的和平与对外干涉之间的张力。','自由主义和平具有关系性，不能推论为自由国家在所有关系中都和平。','https://doi.org/10.1111/j.1083-1932.1983.tb02771.x'],
 ['onuf','constructivism',1989,'Nicholas Onuf','奥努夫 · 规则与建构','体系','World of Our Making','从语言、规则与实践考察行动者和社会世界的共同形成。','规则不仅约束行动，也构成行动者与社会关系。'],
 ['wendt','constructivism',1999,'Alexander Wendt','温特 · 社会建构主义','体系','Social Theory of International Politics','以社会互动、身份与利益的建构解释国际政治。','无政府状态的意义取决于国家之间的共有观念与互动关系。','https://www.cambridge.org/core/books/social-theory-of-international-politics/0346E6FDC74FECEF6D2CDD7EFB003CF2'],
 ['finnemore','constructivism',1996,'Martha Finnemore','芬尼莫尔 · 国家利益的形成','国家','National Interests in International Society','研究国际规范与组织如何塑造国家对利益的理解。','利益并非总是预先给定；社会环境能改变国家追求的目标。','https://www.jstor.org/stable/10.7591/j.ctt1rv61rh'],
 ['norms','constructivism',1998,'M. Finnemore · K. Sikkink','规范的产生、扩散与内化','跨国网络','International Norm Dynamics and Political Change','提出规范生命周期框架，讨论规范倡导者与扩散机制。','规范扩散涉及倡导、社会化和内化，并非自动或不可逆的过程。','https://doi.org/10.1162/002081898550789'],
 ['bull','english',1977,'Hedley Bull','布尔 · 国际社会','体系','The Anarchical Society','考察无政府条件下维持国际秩序的共同规则与制度。','国家不仅构成相互作用的体系，也可能构成拥有共同规范的社会。'],
 ['wight','english',1991,'Martin Wight','怀特 · 三种传统','体系','International Theory: The Three Traditions','该书根据讲稿于身后出版；讨论现实主义、理性主义与革命主义传统。','国际思想包含多种相互竞争又相互交织的传统。'],
 ['buzan-english','english',2004,'Barry Buzan','布赞 · 国际社会与世界社会','体系','From International to World Society?','重构英国学派概念，讨论国家与非国家行动者。','国际社会的制度结构与世界社会之间存在需要系统分析的关系。','https://doi.org/10.1017/CBO9780511616617'],
 ['lenin','critical',1917,'V. I. Lenin','列宁 · 帝国主义','体系','Imperialism, the Highest Stage of Capitalism','1916 年写成，1917 年出版；从资本集中与金融资本分析帝国主义。','资本主义的发展及其不平衡性与帝国主义竞争存在结构联系。'],
 ['frank','critical',1967,'Andre Gunder Frank','弗兰克 · 依附理论','体系','Capitalism and Underdevelopment in Latin America','从历史性的中心—边缘关系考察拉丁美洲的不发达。','不发达可能由资本主义世界体系中的关系生产，而非只是现代化不足。'],
 ['wallerstein','critical',1974,'Immanuel Wallerstein','沃勒斯坦 · 世界体系','体系','The Modern World-System, Vol. I','以资本主义世界经济和长时段分工为分析单位。','核心、半边缘与边缘的分工关系有助于解释不平等的再生产。'],
 ['cox','critical',1981,'Robert W. Cox','考克斯 · 批判理论','体系','Social Forces, States and World Orders','把社会力量、国家形式与世界秩序放入历史结构中研究。','理论有其立场与用途；批判理论追问现存秩序如何产生及如何改变。','https://doi.org/10.1177/03058298810100020501'],
 ['gilpin','ipe',1987,'Robert Gilpin','吉尔平 · 国家与市场','体系','The Political Economy of International Relations','从国家权力与市场的互动理解国际政治经济。','市场运行嵌入政治秩序，国家间权力关系塑造全球经济安排。'],
 ['strange','ipe',1988,'Susan Strange','斯特兰奇 · 结构性权力','跨国网络','States and Markets','将分析重点置于塑造行为条件的权力，而非仅限直接讨价还价。','安全、生产、金融和知识四种结构塑造行动者可选择的范围。','https://books.google.com/books/about/States_and_markets.html?id=gPe7AAAAIAAJ'],
 ['network','ipe',2009,'Emilie M. Hafner-Burton et al.','网络分析与国际关系','跨国网络','Network Analysis for International Relations','与 Miles Kahler、Alexander H. Montgomery 合著；引入关系结构与网络位置的分析。','行动者的影响力取决于联系结构与网络位置，而不只是自身资源。','https://doi.org/10.1017/S0020818309090195'],
 ['wi','ipe',2019,'Henry Farrell · Abraham Newman','武器化相互依赖','跨国网络','Weaponized Interdependence','研究经济网络中的中心节点如何为国家胁迫提供条件。','网络不对称结合管辖权与国内制度能力，可产生全景监视和卡点效应。','https://doi.org/10.1162/isec_a_00351'],
 ['schelling','security',1966,'Thomas Schelling','谢林 · 威慑与强制','国家','Arms and Influence','研究军事能力、讨价还价与可信威胁之间的关系。','运用潜在伤害影响对手选择，与直接使用武力夺取目标不同。'],
 ['jervis','security',1978,'Robert Jervis','杰维斯 · 安全困境','体系','Cooperation Under the Security Dilemma','分析攻防平衡与攻防可区分性如何影响合作。','为增强自身安全而采取的措施可能降低他国安全，形成螺旋。','https://doi.org/10.2307/2009958'],
 ['walt','security',1987,'Stephen Walt','沃尔特 · 威胁平衡与联盟','体系','The Origins of Alliances','比较联盟形成的解释，强调威胁而非实力本身。','威胁评估结合总体实力、地理邻近、进攻能力与意图。'],
 ['securitization','security',1998,'Buzan · Wæver · de Wilde','哥本哈根学派 · 安全化','国家','Security: A New Framework for Analysis','研究议题如何通过安全话语与受众接受进入例外政治。','安全并非只由客观威胁定义，也涉及把议题建构为生存性威胁的过程。']
 ].map(([id,school,year,name,title,level,book,intro,claim,url])=>({id,school,year,name,title,level,book,intro,claim,url:url||'https://search.worldcat.org/search?q='+encodeURIComponent(book),sourceType:url?'文献 / 书目来源':'WorldCat 书目检索',notes:[]})),
 edges:[
 ['carr','morgenthau','inherit','同属古典现实主义的问题脉络；并非直接师承。'],['morgenthau','waltz','fork','从人性与政治审慎转向体系结构的解释。'],['waltz','mearsheimer','fork','在结构现实主义内发展进攻性论证。'],['waltz','rose','fork','将体系压力与国内中介变量连接起来。'],['kant','doyle','inherit','重新解释康德的自由主义和平论。'],['keohane-nye','keohane','inherit','从相互依赖研究推进国际制度与合作分析。'],['waltz','keohane','critique','接受无政府前提，但论证制度对合作的独立作用。'],['waltz','wendt','critique','质疑把身份与利益视为给定的物质主义解释。'],['onuf','wendt','inherit','属于建构主义共同问题脉络；不表示单向理论来源。'],['finnemore','norms','inherit','从国家利益的社会形成延伸到规范动态。'],['bull','buzan-english','inherit','重构国际社会概念并拓展至世界社会。'],['wight','buzan-english','inherit','延续并系统化英国学派理论议题。'],['lenin','frank','inherit','共享资本主义与不平等发展的批判问题；解释路径不同。'],['frank','wallerstein','inherit','与依附论对话，并发展世界体系分析。'],['waltz','cox','critique','以历史结构批判将秩序视为给定的问题解决理论。'],['waltz','walt','fork','从实力平衡修正为威胁平衡。'],['waltz','jervis','inherit','在无政府合作问题中引入攻防条件。'],['keohane-nye','wi','inherit','将不对称相互依赖推进至全球网络与国家胁迫。'],['network','wi','inherit','网络结构与中心性为节点控制分析提供基础。'],['bull','securitization','fork','布赞的研究跨越国际社会与安全研究，此线仅标记议题分化。']
 ].map(([from,to,type,note])=>({from,to,type,note}))
};
