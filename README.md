# Alkaid’s Atlas

国际关系、马克思主义与全球治理、经济学的个人学习网站。67个思想节点、65条关系，支持中文、英文、日文、韩文。包含已确认的个人经历、About Us，以及《国家为什么这样行动》第1至第4章的简介和目录。

## 本地预览和管理

运行 `node server.cjs`，打开 http://127.0.0.1:4173 。管理入口为 http://127.0.0.1:4173/admin 。

首次打开管理入口，由本人设置至少12个字符的密码。后台只监听本机，不部署到 GitHub Pages。密码以加盐哈希保存在 `.local/owner.json`，该目录不提交、不打包。忘记密码时，停止服务后自行移走本机的该文件，再启动设置新密码。任何能直接修改本机项目文件的人也能修改网站；此后台不用于多人共享主机。

管理页可修改个人简介、照片路径、文献简介与核心命题、四语导读、前四章目录和音乐专辑。保存写入 `dist/content.js`，刷新预览生效；远程发布需将改动同步到仓库。公开站没有管理接口或评论。浏览器阅读笔记仅保存在本浏览器，可导出 Markdown，不随网站上传。

## 维护内容

- `dist/data.js`：国际关系基础节点和关系。
- `dist/fields.js`：马克思主义、经济学及跨学科关系。
- `dist/chinese-ir.js`：秦亚青、阎学通、唐世平、赵汀阳、王逸舟。
- `dist/reading-guides.js`：扩充中文导读、四语核心概括及阅读问题。英日韩导读目前为较短概括，可在后台继续扩展。
- `dist/profile.js`：本人确认的学校与暑期课程交流经历。未确认的学位、年份不填写。
- `dist/content.js`：后台管理产生的公开内容覆盖与前四章目录；不包含原始文稿。
- `dist/portraits.js`：人物照片、来源及版权署名。64位人物配图，4位资料暂缺时使用文字占位，详见其中 missing 列表。
- `dist/i18n.js`、`academic-i18n.js`、`relations-i18n.js`：四语界面、理论概括及关系说明。
- `dist/app.js`、`enhancements.js`：图谱、筛选、详情、人物索引、写作页与音乐。
- `dist/style.css`、`editorial.css`：基础布局及简约白色学术视觉。
- `owner/`、`admin-server.cjs`：本机密码保护的管理界面及接口。
- `node check.cjs`：检查全部脚本语法。

节点字段包括 id、分支、代表作年份、学者、理论标题、分析层次、书名、简介、核心命题、来源链接与 disciplines。关系类型为继承、批判、分化、跨科对话；对话不意味着直接思想继承。分支内部按代表作年份排列，横向不是等比例时间轴。

个人照片仍待本人提供。可放入 `dist/assets/my-photo.jpg`，在管理页照片栏填 `assets/my-photo.jpg`。音乐为 Taylor Swift《1989 (Deluxe)》2014版的 Spotify 官方嵌入，点击后加载，无自动播放，不提供音频文件；播放范围由 Spotify、地区和账号决定。

## GitHub Pages

仓库：https://github.com/alkaidlue001-ops/ir-atlas

仓库 Settings → Pages → Source 选择 GitHub Actions。推送 main 后工作流发布 dist；后台、密码、原始文稿不在发布目录。资源使用相对路径，支持 /ir-atlas/ 子路径。

个人公开内容只采用本人确认的信息，不添加邮箱或私人联系方式。学校标识用于经历说明，不表示学校认可本站。图片署名与来源见节点详情和 ASSETS.md。
