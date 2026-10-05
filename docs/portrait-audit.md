# 四位缺失人物的头像核查

核查日期：2026-10-05。基于 main 的 `9ba68175c0db33eb069d72e58a1205b7da98874a`。

本次找到四人的可核对候选，但**0/4 可以确认适合直接作为本站头像再发布**。因此保留原来的 `missing`，不向显示用的 `nodes`、`people` 添加未经确认的图片。完整修改稿为 `dist/portraits.js`；候选六字段在 `candidates`，审核状态和证据在 `review`。这些字段向后兼容原有读取方式。

## 候选与权限判断

| 人物／对应节点 | 可核对来源 | 摄影署名与许可 | 本次处理 |
| --- | --- | --- | --- |
| Andre Gunder Frank／`frank` | [Montréal Serai，Maya Khankhoje 的2005年讣告](https://montrealserai.com/_archives/2005_Volume_18/18_1/Article_13.htm)，有独立 [JPG](https://montrealserai.com/_archives/2005_Volume_18/18_1/images/andregunderfrank.jpg) | 讣告可核对人物；未见摄影署名或针对此图的开放许可 | 候选记录；不显示 |
| Ernst-Otto Czempiel／`rosenau` | [PRIF / HSFK《50 Jahre HSFK》2020纪念册第29页](https://www.prif.org/fileadmin/Daten/Downloads/Flyer__Infomaterial_etc/broschuere_50jahre_barrierefrei.pdf#page=29)，1999年与 Hans-Dietrich Genscher 合影；人物介绍在第28页 | [第6页图片说明](https://www.prif.org/fileadmin/Daten/Downloads/Flyer__Infomaterial_etc/broschuere_50jahre_barrierefrei.pdf#page=6)给其他指定页图片列出不同许可，未给第29页照片列明开放许可；不能借用其他页许可 | `src` 留空；不提取合影或裁切头像 |
| Hedley Bull／`bull` | [ANU E Press《Remembering Hedley》2008](https://press.anu.edu.au/publications/series/sdsc/remembering-hedley)，[原版PDF封面](https://press-files.anu.edu.au/downloads/press/p59651/pdf/prelims22.pdf#page=1) | 原版PDF版权页保留所有权利；[ANU使用条件](https://press.anu.edu.au/faqs/conditions-use)要求核对单书许可。[JSTOR](https://www.jstor.org/stable/j.ctt24h81d)显示全书 CC BY-NC-ND 4.0，与原版不同，且未能确认封面照片的独立使用、裁切权限 | 标记 `conflicting-license`；`src`、`licenseUrl` 留空 |
| Robert W. Cox／`cox` | [Progress in Political Economy，Shannon Brincat 的2018年悼文](https://www.ppesydney.net/tributes-to-robert-w-cox/)，有独立 [JPG](https://www.ppesydney.net/content/uploads/2018/10/RobertWCox.jpg) | 悼文的人物经历指向国际关系学者；未见摄影署名或图片开放许可，图片元数据也未给出版权人 | 候选记录；不显示 |

`credit` 只记录发布载体、上下文和未确认的权利状态。文章作者不是自动推定的摄影者，出版社也不是自动推定的照片版权人。

`rosenau` 是 James Rosenau / Ernst-Otto Czempiel 的合编作品节点，已经有 Rosenau 的照片。未另造一个 Czempiel 节点，也没有覆盖 Rosenau 的现有图片。

## 六字段的含义

| 字段 | 本次规则 |
| --- | --- |
| `src` | 仅填写已核对的独立图片URL；只有PDF内嵌照片时留空。候选URL不会由页面加载。 |
| `name` | 人物规范名，与 `missing` 对应。 |
| `page` | 可核对人物和照片上下文的页面。 |
| `source` | 原始发布页或带页码的原版PDF。 |
| `credit` | 已知出处和真实权限状态；不编造摄影署名。 |
| `licenseUrl` | 只填写适用于所选照片的明确许可；本次全部留空。空值不是公有领域。 |

若以后取得开放许可或明确授权：核对版权人、允许的展示／缓存／裁切范围、署名和许可链接；将获准照片保存到 `dist/assets/people/`，以本地路径替换 `src`；复制到对应的 `nodes[id]` 数组及 `people[name]`，从 `missing` 删除该人，并更新审核记录与 ASSETS.md。对 Czempiel 使用 `nodes.rosenau.push(...)`，保留 Rosenau。未获准的候选继续隔离。

## 已排除的误匹配

- Wikimedia Commons 的1885年 Tottenham Hotspur 球队照片中同名 Hedley Bull，不能用于1932年出生的国际关系学者。
- AFNI / NIH 脑成像领域的 Robert W. Cox 是同名人物，不能用来替代1926—2018年的政治学者。
- Herder 的 Czempiel 作者页指向通用默认头像，不是其人物肖像。
- PRIF 2025年 Czempiel 奖新闻的图是奖项／书籍宣传图；新闻稿附带的限定新闻使用说明不能转用为人物头像授权。
- 机构网页可访问、PDF可下载、论文可开放阅读，都不自动授予照片的独立再发布许可。本次未把出版社封面设计者当作肖像摄影者。

检索包括 Wikimedia Commons 的全名与姓名变体、作者／机构主页、出版物与学术悼文。未找到开放许可是本次检索结论，不能证明不存在其他获许可照片。原有64份图片记录不属于此次全面重审范围。
