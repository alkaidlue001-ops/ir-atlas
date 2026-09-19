(() => {
const rows=[
['qin','Qin Yaqing','秦亚青 · 关系理论',2018,'A Relational Theory of World Politics','关系理论把关系本身而非孤立的行为体作为理解世界政治的起点。它讨论过程、关系理性与关系治理，考察国家身份和利益如何在互动中形成。','身份、利益与行动不能脱离持续变化的关系网络来理解。','https://www.cambridge.org/core/books/abs/relational-theory-of-world-politics/relational-theory-of-world-politics/15549B787D7EB5AB23F461F37E8D9A48','Relational theory','Relations and ongoing processes help constitute actors, identities and interests.','関係理論','関係と継続的な過程が、行為者・アイデンティティ・利益を構成する。','관계이론','관계와 지속적인 과정이 행위자, 정체성, 이익을 구성한다.'],
['yan','Yan Xuetong','阎学通 · 道义现实主义',2019,'Leadership and the Rise of Great Powers','这部著作讨论政治领导如何把物质资源转化为国家实力，以及战略信誉和道义行为怎样影响外部支持。它在现实主义的权力问题内引入领导力，而不是把道义等同于善意宣言。','大国实力变化既涉及资源，也涉及政治领导与战略信誉。','https://www.tsinghua.edu.cn/info/1182/49908.htm','Moral realism','Political leadership and strategic credibility affect how resources become power and external support.','道義的リアリズム','政治指導力と戦略的信用は、資源の権力への転換や外部支持に影響する。','도덕적 현실주의','정치적 리더십과 전략적 신뢰는 자원의 권력 전환과 외부 지지에 영향을 준다.'],
['tang','Shiping Tang','唐世平 · 国际政治的社会演化',2013,'The Social Evolution of International Politics','本书以长时段社会演化解释国际政治规则与实践的变化，提出进攻性与防御性现实主义可能适用于不同历史条件。它要求把理论的适用范围放进历史，而不是把一种逻辑投射到所有时代。','国际政治的行为逻辑可能随社会环境演化而变化。','https://news.fudan.edu.cn/2013/0628/c5a65819/page.htm','Social evolution','International politics can evolve historically; rival realist theories may fit different social conditions.','国際政治の社会的進化','国際政治は歴史的に変化し、異なるリアリズム理論は異なる社会条件に適合しうる。','국제정치의 사회적 진화','국제정치는 역사적으로 진화하며 서로 다른 현실주의 이론은 다른 사회적 조건에 적합할 수 있다.'],
['zhao','Zhao Tingyang','赵汀阳 · 天下与世界秩序',2021,'All under Heaven: The Tianxia System for a Possible World Order','此处年份为所列英文版出版年。著作以天下概念展开世界秩序的哲学讨论，追问如何把世界作为政治整体理解。它是一种规范性和哲学性构想，不能直接当成既有国家政策的经验模型。','世界秩序的正当性需要考虑包容性及整体共存条件。','https://www.ucpress.edu/books/all-under-heaven/hardcover','Tianxia and world order','A philosophical account of inclusive world order, rather than a direct empirical model of state policy.','天下と世界秩序','包摂的な世界秩序の哲学的構想であり、国家政策の直接的な実証モデルではない。','천하와 세계질서','포용적 세계질서에 관한 철학적 구상이며 국가정책의 직접적인 경험적 모형은 아니다.'],
['wang','Wang Yizhou','王逸舟 · 创造性介入',2013,'创造性介入：中国之全球角色的生成','通过中国外交实践讨论一个成长中的大国怎样更加主动而有选择地参与国际事务。关注外交能力、国际公共产品及全球角色的形成，并不把参与简单等同于军事干预。','国际参与方式需要在能力、责任、具体情境和政策工具之间作出选择。','https://www.sis.pku.edu.cn/teachers/wangyizhou/','Creative involvement','Global participation requires choices among capabilities, responsibilities, contexts and diplomatic tools.','創造的関与','国際的関与には能力・責任・状況・外交手段を踏まえた選択が必要である。','창조적 관여','국제적 참여에는 역량, 책임, 상황, 외교 수단을 고려한 선택이 필요하다.']
];
window.ATLAS.schools.push(['chinese','中国国际关系思想','#526b8e']);
rows.forEach(([id,name,title,year,book,intro,claim,url,...translations])=>{
window.ATLAS.nodes.push({id,name,title,year,book,intro,claim,url,sourceType:'文献 / 书目来源',school:'chinese',level:'体系',disciplines:['ir'],notes:[]});
window.ACADEMIC_I18N[id]=translations;
});
window.ATLAS.edges.push(
{from:'wendt',to:'qin',type:'dialogue',note:'都重视社会关系对身份的构成，但关系理论更突出过程与关系本体。'},
{from:'morgenthau',to:'yan',type:'dialogue',note:'都讨论权力与政治判断，道义现实主义进一步突出领导力与战略信誉。'},
{from:'mearsheimer',to:'tang',type:'critique',note:'将现实主义逻辑放到历史演化中，质疑把同一机制视为跨时代不变。'},
{from:'bull',to:'zhao',type:'dialogue',note:'比较国际社会秩序与天下构想的包容性、成员资格和规范基础。'},
{from:'rosenau',to:'wang',type:'dialogue',note:'全球治理提供共同议题，创造性介入关注中国参与国际事务的方式。'}
);
})();
