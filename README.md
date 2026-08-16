# “渝你有关”重庆社会实践成果展示

浙江大学竺可桢学院赴重庆社会实践团的静态多页面成果网站。站点包含首页，以及“红岩寻踪”“精工报国”“青年行动”三个专题页面。

## 本地开发

```bash
npm install
npm run dev
```

开发服务器包含以下路由：

- `/`
- `/venue/`
- `/industry/`
- `/volunteer/`

开发模式会显示尚未补充图片的槽位 ID；生产构建会自动隐藏空槽位。

## 内容维护

所有可编辑内容位于 `content/*.js`，页面 HTML 只保存共用外壳。

### 修改专题名称

只编辑 `content/site.js` 中的 `siteConfig.topics`。导航、首页专题卡与专题页标题都会读取这份配置。

### 添加或替换照片

1. 将压缩后的网页图片放入对应的 `assets/images/...` 目录。
2. 打开对应的 `content/*.js` 文件。
3. 找到稳定槽位 ID，例如 `volunteer-performance-02`。
4. 只修改 `src`、`alt` 与 `caption`，保留 `id` 不变。

示例：

```js
{
  id: "volunteer-performance-02",
  src: "/assets/images/volunteer/performance/chorus-02.webp",
  alt: "团队成员在慰问活动中合唱",
  caption: "团队成员以合唱向老兵致敬。",
  layout: "pair",
  featured: false,
  order: 2,
  visibility: "public"
}
```

不应公开的照片必须设置 `visibility: "private"`，不要只依赖 CSS 隐藏敏感图片。建议使用 WebP/JPEG，长边约 1600–2000 px，单张约 150–400 KB。

### 添加第三篇红岩场馆报道

编辑 `content/venue.js`：

- 将 `article.status` 改为 `published`；
- 将 `article.url` 改为正式微信文章链接；
- 使用报道导语填写 `intro`；
- 使用报道原文节选填写五个场馆章节的 `paragraphs`。

### 发布视频

编辑 `content/home.js` 中对应的视频记录：

- 将 `status` 改为 `published`；
- 将 `cover` 指向压缩后的本地封面图；
- 将 `url` 改为 B 站链接。

### 批量补图

推荐使用包含 `id`、`file`、`alt`、`caption` 和可选 `visibility` 列的表格或 CSV。槽位 ID 不应因换图或调整文件名而重新编号，图注只填写团队提供、可核实的事实。

## 检查与构建

```bash
npm test
npm run validate
npm run build
```

正式发布前，在所有首图补齐后运行：

```bash
npm run validate:release
```

`validate:release` 会检查公开图片的文件、替代文字、图注，以及各组首图槽位是否已经填写。

## Cloudflare Pages

- Build command：`npm run build`
- Output directory：`dist`
- Production branch：`main`
