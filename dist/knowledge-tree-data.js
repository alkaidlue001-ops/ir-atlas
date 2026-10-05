/* Chinese study notes with English terminology. Examples are hypothetical
 * teaching scenarios unless expressly identified as an author's historical study.
 */
window.ATLAS_KNOWLEDGE_TREE={
 title:'政治学：从问题到理论',
 origin:'根据 Alkaid 的两页手写笔记整理；新增说明为编辑性学习辅助。正文中文，术语中英对照。',
 groups:[
 {id:'politics',title:'01 · 政治是什么？',question:'你是在问共同生活、分配结果，还是权力关系？',items:[
  {term:'政治共同体',en:'Political community / polis',definition:'共同体不仅协调生存，也讨论共同的正义和良好生活。亚里士多德的城邦具有特定古希腊背景。',distinction:'polis 不是现代国家；“善好生活”也不是消费水平更高。',example:'假设一座城市讨论公共空间：既问预算多少，也问什么生活值得共同支持。',prompt:'用一句话区分政治共同体的目的与管理效率。',refs:['aristotle']},
  {term:'分配',en:'Who gets what, when, how',definition:'拉斯韦尔把观察入口放在价值与影响力的分配：谁得益、何时得益、通过什么手段。',distinction:'解释分配过程，不等于证明分配公正；“何时”也可能改变实际利益。',example:'假设两项补助额度一样，但到账时间不同：名义金额相同，实际可支配资源并不相同。',prompt:'为一项公共政策列出受益者、时间和分配程序。',refs:['lasswell']},
  {term:'权威性分配',en:'Authoritative allocation',definition:'伊斯顿关注政治系统如何作出被当作有约束力的决定，并接受环境中的需求、支持和反馈。',distinction:'权威性不等于道德正确；一次决定还不能解释整个系统。',example:'假设政府出台规则，执行后出现投诉，再修订规则：观察输入、输出和反馈。',prompt:'把一项政策画成需求—决定—执行—反馈，并指出断点。',refs:['easton']},
  {term:'政治的边界',en:'The scope of politics',definition:'国家是政治的重要场域，但组织、市场与日常规范也可能涉及资源支配和主体形成。',distinction:'权力无处不在的研究视角，不意味着所有互动都具有同样的政治性质。',example:'假设平台更改排序规则：先辨认规则制定权，再问用户是否能申诉或退出。',prompt:'这个问题发生在国家、组织还是关系网络？选择一个观察层次。',refs:['foucault','lasswell','ostrom']}
 ]},
 {id:'state',title:'02 · 国家为何存在？',question:'安全、权利、共同利益与伦理生活，是不同的论证路线。',items:[
  {term:'自然状态',en:'State of nature',definition:'在契约论中，自然状态用来思考没有共同政治权威的处境；各作者对其性质有不同设定。',distinction:'它通常是论证工具，不能当成已被考古证明的统一历史阶段。',example:'假设所有人都想遵守协议，但没人能保证他人会履约：安全与执行问题如何出现？',prompt:'分别用霍布斯与洛克解释“没有政府”的主要问题。',refs:['hobbes','locke','rousseau']},
  {term:'契约与授权',en:'Social contract / authorization',definition:'霍布斯以相互授权建立共同权威；洛克强调同意与信托；卢梭强调形成自我立法的人民。',distinction:'相同术语不代表相同结论；契约对象、保留权利和主权位置都要分开。',example:'假设同样写着“大家同意”：有人授权一个主权者，有人约束受托政府，有人共同制定法律。',prompt:'分别填入三位作者的政府目的、主权归属和权力边界。',refs:['hobbes','locke','rousseau']},
  {term:'国家与政府',en:'State / government',definition:'国家指持续的政治与制度秩序；政府是行使治理职能的人员和机构安排。具体用法仍取决于理论。',distinction:'政府换届不必然意味着国家消失；国家也不能仅等于某个领导人。',example:'假设内阁更替，但法律、领土及行政体系继续运行：哪些发生变化，哪些保持？',prompt:'解释为什么研究国家能力不能只看领导人的个人能力。',refs:['weber','tilly','locke']},
  {term:'伦理生活',en:'Ethical life / Sittlichkeit',definition:'黑格尔区分家庭、市民社会与国家，讨论自由如何通过制度与社会关系实现。',distinction:'市民社会不等于今天所有非政府组织；国家也不是私人利益的机械相加。',example:'假设市场允许自由交易，却产生贫困与利益冲突：普遍性如何获得制度表达？',prompt:'用家庭—市民社会—国家说明个人自由与共同规则的关系。',refs:['hegel','polanyi']}
 ]},
 {id:'legitimacy',title:'03 · 为什么服从？',question:'事实上的支配、法律上的有效与道德上的正当，要分开。',items:[
  {term:'权力、权威与支配',en:'Power / authority / domination',definition:'权力可以讨论影响他人的能力；权威涉及被认可的统治资格；支配关注命令获得服从的关系。',distinction:'不同理论有不同定义。论文应先声明采用哪位作者的用法。',example:'假设一人能强迫他人行动，却没有被承认的统治资格：影响力与权威未必一致。',prompt:'给出你的操作性定义，再说明如何观察。',refs:['weber','dahl-power']},
  {term:'正当性与合法性',en:'Legitimacy / legality',definition:'合法性问是否符合现行法律；正当性可能问统治是否被接受，也可能问它是否有充分道德理由。',distinction:'社会学上的正当性信念与规范性的正当化不是同一个问题。',example:'假设一项合法规则引发强烈不满：不能仅凭合法便推断它受到支持。',prompt:'你要测量公众接受度，还是论证规则应否被接受？',refs:['weber','rawls']},
  {term:'国家与暴力',en:'Legitimate physical force',definition:'韦伯以领土内对正当物理暴力使用的垄断要求界定现代国家，关注其特有手段。',distinction:'不是所有暴力都正当；垄断要求也不意味着国家在现实中从无竞争者。',example:'假设私人安保依法获准使用一定强制手段：追问其授权从哪里来。',prompt:'国家自己使用暴力，与国家授权使用暴力有什么关系？',refs:['weber']},
  {term:'常态与例外',en:'Norm / exception',definition:'施米特追问谁有权决定例外状态，揭示一般规则与政治决断之间的紧张关系。',distinction:'解释紧急权力不等于赞成无限紧急权力；还需讨论审查、期限和责任。',example:'假设政府启动紧急措施：核对启动依据、适用范围与退出条件。',prompt:'把“谁决定”与“谁监督决定”写成两个问题。',refs:['schmitt','montesquieu','securitization']}
 ]},
 {id:'freedom',title:'04 · 如何限制权力？',question:'权利、分权、人民立法与正义评价分别解决什么问题？',items:[
  {term:'自然权利与有限政府',en:'Natural rights / limited government',definition:'洛克把生命、自由和财产保护放在政府论证中心，并用同意与信托限制政治权力。',distinction:'洛克的“财产”在不同段落可能有宽、窄用法；有限政府不是政府毫无能力。',example:'假设政府以公共目的征收财产：追问授权、程序与保护边界。',prompt:'为何政府获得权力后，仍须接受限制？',refs:['locke']},
  {term:'分权与制约',en:'Separation of powers / checks',definition:'孟德斯鸠从制度配置讨论自由与权力制约：避免某一主体同时掌握过度集中的权力。',distinction:'不能靠机构名称或数量直接判断是否存在有效制约。',example:'假设形式上有三个机构，却都不能独立审查：名称分开不等于权力受约束。',prompt:'谁能阻止、修改或审查谁的决定？',refs:['montesquieu','locke']},
  {term:'公意与众意',en:'General will / will of all',definition:'公意指向共同利益；众意是私人意愿的汇集。卢梭还区分人民作为主权者与执行职能的政府。',distinction:'公意不自动等于每次多数表决的结果，也不是领袖自称代表人民就能成立。',example:'假设多数人赞成只给自己减税：多数支持与共同利益之间仍需论证。',prompt:'提出一个多数意愿与共同利益可能分离的情况。',refs:['rousseau','habermas']},
  {term:'功利与正义',en:'Utility / justice as fairness',definition:'功利论重视后果与幸福；罗尔斯用原初状态讨论公平，并赋予基本自由优先地位。',distinction:'效率最高不自动等于公正；差别原则也不是要求一切结果完全相等。',example:'假设总收益增加，却由少数弱势者承担全部代价：如何评价？',prompt:'分别用边沁与罗尔斯提出一个支持理由和一个反对理由。',refs:['bentham','rawls','sen']}
 ]},
 {id:'rule',title:'05 · 谁在统治？',question:'阶级、政治精英、组织领导与竞争性群体的解释不能混成一句话。',items:[
  {term:'阶级与社会结构',en:'Class / relations of production',definition:'马克思主义把政治放回生产、阶级和历史关系中；国家形态还需具体历史分析。',distinction:'“经济影响政治”不是经济变量单向决定全部政治结果。',example:'假设一项劳动政策产生冲突：同时观察生产关系、组织力量和制度通道。',prompt:'写出一个机制，说明经济位置如何转化为政治影响。',refs:['marx-ideology','marx','engels','cox']},
  {term:'有组织的少数',en:'Political class / organized minority',definition:'莫斯卡重视统治少数在组织、协调和政治资源上的优势。',distinction:'少数统治不是关于某个家族永远控制一切的证明；要寻找具体组织与制度证据。',example:'假设人数少的行业协会更容易协调，而受影响的大量消费者难以组织。',prompt:'哪些资源和协调机制使少数人获得优势？',refs:['mosca','lasswell']},
  {term:'寡头化',en:'Oligarchical tendencies',definition:'米歇尔斯从组织规模、技术需求、信息和领导专业化解释权力集中的倾向。',distinction:'组织内领导固化与整个社会由同一集团控制，不是同一个命题。',example:'假设组织只有少数人掌握名单、资金与议程：成员如何监督？',prompt:'列出能降低领导固化的制度，并检验它是否有效。',refs:['michels','dahl-polyarchy']},
  {term:'多元主义与多头政体',en:'Pluralism / polyarchy',definition:'多元主义关注影响力是否随议题分散；多头政体比较公共竞争与参与包容。',distinction:'多个团体存在不等于资源均等；多头政体也不等于民主理想已经完全实现。',example:'假设商业团体影响税收，居民团体影响社区建设：检验影响是否跨议题集中。',prompt:'把参与范围与竞争强度作为两个轴比较制度。',refs:['dahl-power','dahl-polyarchy','mosca']}
 ]},
 {id:'power',title:'06 · 权力如何运作？',question:'只看最后一次表决，可能只看见了权力的“前台”。',items:[
  {term:'关系性权力',en:'Relational power',definition:'达尔式观察追问A能否使B采取原本不会采取的行动，需要议题范围和反事实。',distinction:'结果与A的偏好一致，不足以单独证明A造成了结果。',example:'假设B与A投了同一票：可能是压力，也可能本来就赞成。',prompt:'如果A没有介入，B会怎样？寻找能区分解释的证据。',refs:['dahl-power']},
  {term:'议程与偏好',en:'Agenda-setting / preference shaping',definition:'卢克斯区分公开决策、议程排除和偏好形成等权力维度。',distinction:'没有公开反对不等于自愿；也不能未经证据就认定他人有虚假意识。',example:'假设某议题永远进不了会议：研究入场规则与被排除的替代方案。',prompt:'记录谁提出议题、谁能否决，以及谁的意见未被记录。',refs:['lukes','dahl-power']},
  {term:'霸权与同意',en:'Hegemony / consent',definition:'葛兰西关注强制之外，同意如何由组织、观念和社会关系维系；考克斯把相关问题引入世界秩序研究。',distinction:'霸权不只是宣传成功，也不只是军事实力更强。',example:'假设某项规则被描述为所有人的共同利益：检验受益结构与同意的组织方式。',prompt:'同时寻找物质资源、制度安排和观念的证据。',refs:['gramsci','cox','gill']},
  {term:'规训与结构性权力',en:'Discipline / structural power',definition:'福柯研究日常规范如何塑造行为；斯特兰奇研究谁塑造他人的选择环境。二者可以比较，但机制不同。',distinction:'有监控不自动证明规训成功；网络中心性也不自动等于结构性权力。',example:'假设一套技术标准改变企业能采用的生产路径：区别规则约束、日常考核与关键资源控制。',prompt:'权力改变的是一次行动、选择集合，还是主体认知？',refs:['foucault','strange','wi']}
 ]},
 {id:'formation',title:'07 · 国家如何形成与建构？',question:'先区分研究对象，再讨论战争、征税、认同与制度。',items:[
  {term:'国家形成',en:'State formation',definition:'关注国家组织、权威和制度如何在历史过程中出现与变迁，未必是统一设计的结果。',distinction:'形成不等于某一天宣布独立或成立政府。',example:'蒂利的欧洲历史研究追踪战争、保护与资源汲取；不能照搬成所有地区的统一剧本。',prompt:'选择时期与地区，列出竞争性形成机制。',refs:['tilly','weber']},
  {term:'国家建构',en:'State-building',definition:'研究建设或重组行政、财政、司法及执行能力的过程，常涉及有意的政策和组织行动。',distinction:'state formation 与 state-building 的用法有重叠；论文须声明采用的文献界定。',example:'假设新政府建立税务系统：关注组织、人员、覆盖范围和执行效果。',prompt:'你研究的是国家出现，还是国家能力的改变？',refs:['tilly','north','weber']},
  {term:'民族建构',en:'Nation-building',definition:'关注共同政治身份、归属与成员边界的塑造；与行政能力建设有关，但并不相同。',distinction:'nation 不必然等于单一族群；身份整合不等于征税能力增强。',example:'假设推行共同公民教育，同时行政覆盖仍弱：分别测量认同与能力。',prompt:'找一项认同指标和一项行政能力指标，说明它们为何不同。',refs:['tilly','wendt']},
  {term:'能力、主权与正当性',en:'Capacity / sovereignty / legitimacy',definition:'能力问能否执行；主权问最高权威及外部独立的安排；正当性问统治为何被接受或应被接受。',distinction:'有国际承认不等于内部执行强；执行强也不等于获得广泛支持。',example:'假设国家依法作出决定却无法落实：不要把能力不足直接写成没有主权。',prompt:'把同一案例分别放在能力、主权与正当性三个维度判断。',refs:['weber','hobbes','tilly','bull']}
 ]},
 {id:'global',title:'08 · 如何接到国际关系与全球治理？',question:'从国内政治进入国际政治，要检验类比能走多远。',items:[
  {term:'无政府与国际社会',en:'Anarchy / international society',definition:'国际无政府指缺少凌驾国家之上的中央权威；布尔研究共同规则与制度如何支持国际社会。',distinction:'无政府不是毫无秩序；国内契约模型不能自动移植到国际体系。',example:'假设国家没有共同政府，却有外交、条约与规则：观察哪些规则获得遵守。',prompt:'同一现象分别用华尔兹与布尔解释。',refs:['hobbes','waltz','bull']},
  {term:'治理与政府',en:'Governance / government',definition:'政府是正式组织；治理是形成协调和规则执行的过程，可以包含国家与非国家主体。',distinction:'“没有政府的治理”不意味着没有国家，也不意味着没有权力关系。',example:'假设多个城市、企业与组织共同执行一套环境标准：追问谁制定与监督。',prompt:'画出参与者、规则、资源与问责关系。',refs:['rosenau','ostrom','gill-governance']},
  {term:'依赖与节点控制',en:'Dependence / network control',definition:'不对称依赖可提供权力资源；网络位置是否变成控制力，还取决于管辖、可替代性和实际运用。',distinction:'技术进口比例下降不自动证明结构性权力下降；贸易联系也不是同一种技术依赖。',example:'假设某关键技术被限制：区分短期替代成本、长期国产替代与网络结构变化。',prompt:'分别提出依赖、管制暴露度和节点控制力的可观察指标。',refs:['keohane-nye','network','wi','strange']},
  {term:'全球治理的分配后果',en:'Distribution in global governance',definition:'制度可能解决协调问题，也可能分配利益、成本和发言权；效率与公平可以同时研究。',distinction:'制度存在不自动证明有效、公平或中立；不能只用机构数量衡量治理进步。',example:'假设全球规则统一后总交易成本下降：仍须检验谁承担合规成本。',prompt:'把合作效率、权力分配与代表权写成三个可检验问题。',refs:['keohane','cox','fraser','lasswell']}
 ]},
 {id:'research',title:'09 · 如何变成笔试答案与研究问题？',question:'定义—命题—机制—证据—边界，少一步就容易飘。',items:[
  {term:'规范与经验问题',en:'Normative / empirical questions',definition:'规范问题问应当如何；经验问题问实际如何以及为何发生。好的研究先明确自己回答哪一种。',distinction:'政策不公平不能单独证明它无效；政策有效也不能单独证明它正当。',example:'假设规则提高效率，却扩大不平等：分别讨论效果与评价。',prompt:'把一个大问题改写成一个经验问题和一个规范问题。',refs:['rawls','easton','lasswell']},
  {term:'概念与指标',en:'Concept / indicator',definition:'概念界定研究对象，指标提供观察方式；两者之间须说明为什么这个测量能代表该概念。',distinction:'一个数字不是理论本身；中心性、进口占比和执法次数各自只能覆盖部分含义。',example:'假设用进口份额测依赖：补充不可替代性、库存与转换成本。',prompt:'给每个指标写一句效度说明，再写一个可能失真的情况。',refs:['dahl-power','network','wi']},
  {term:'因果机制与反事实',en:'Mechanism / counterfactual',definition:'解释要写出原因如何经由中间环节影响结果，并比较没有该原因时可能发生什么。',distinction:'先后发生不是充分的因果证据；机制叙事也不能替代对竞争性解释的检验。',example:'假设限制后出现替代技术：检验研发是否早已启动，以及需求、补贴等因素。',prompt:'写出X—中间环节—Y，并列出一种能推翻解释的证据。',refs:['dahl-power','tilly','wi']},
  {term:'比较与理论边界',en:'Comparison / scope conditions',definition:'用同一问题比较理论的对象、机制、预期和限制，再选择能够区分解释的证据。',distinction:'共享关键词不是思想继承证明；某理论有用也不等于适用于所有国家与时期。',example:'同一技术管制案例可比较相互依赖、结构性权力与历史结构，而非只列作者名字。',prompt:'用120字完成定义，用三点写机制，再给一个反例或边界。',refs:['waltz','keohane-nye','strange','cox']}
 ]}
 ],
 comparisons:[
 {title:'三种契约论：不要只背“大家签了合同”',headers:['作者','主要问题','权威安排','边界与提醒'],rows:[
  ['霍布斯','缺乏共同权威下的安全与履约','相互授权产生主权者','主权者不是作为臣民契约的一方；自我保存不能简单抹去'],
  ['洛克','权利保护缺乏公正、稳定的执行','人民同意，政府受托','违背信托涉及反抗；不能只背财产权而漏掉同意'],
  ['卢梭','共同生活如何仍保持自由','人民主权与共同立法','公意不同于众意；政府不同于主权者']
 ],refs:['hobbes','locke','rousseau']},
 {title:'国家相关概念：先确定研究对象',headers:['概念','研究重点','可以观察什么','容易混淆什么'],rows:[
  ['State formation','历史中权威与国家组织的出现','竞争、征税、战争、组织变迁','建国日期不能概括长期过程'],
  ['State-building','行政与执行能力的建设或重组','财政、司法、人员和地域覆盖','机构增加不自动意味着能力提高'],
  ['Nation-building','共同身份与政治成员边界','教育、象征、认同和政治归属','民族不等于单一族群'],
  ['Legitimacy','接受度或正当化理由','信任、服从理由或规范论证','合法、有效、被接受要分开']
 ],refs:['tilly','weber','wendt','rawls']},
 {title:'同一个问题，四种国际关系视角',headers:['视角','优先观察','可能机制','检验提醒'],rows:[
  ['结构现实主义','能力分布与安全压力','竞争、制衡与结构约束','体系解释不自动预测每项外交政策'],
  ['制度主义','信息、规则与合作安排','减少不确定性和交易成本','有制度不等于制度一定有效'],
  ['建构主义','身份、规范与共有意义','互动、社会化与利益形成','观念影响要有过程证据'],
  ['批判政治经济学','生产、社会力量与历史结构','物质能力、观念与制度的组合','不能把国家写成机械执行经济利益']
 ],refs:['waltz','keohane','wendt','cox']}
 ],
 route:[
  {title:'第1轮 · 建立坐标',text:'先读政治定义与国家概念，再比较三种契约论。产出一页：定义、区别、原典位置。',groups:['politics','state','legitimacy']},
  {title:'第2轮 · 进入争论',text:'比较权利、公意、精英与多元主义，再练权力三个维度。每题写一个例子和一个反例。',groups:['freedom','rule','power']},
  {title:'第3轮 · 接回研究',text:'区分国家形成与建构，连接全球治理与技术依赖。产出一题：机制、指标、竞争性解释。',groups:['formation','global','research']}
 ]
};
