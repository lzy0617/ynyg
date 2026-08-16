import {
  escapeHtml,
  renderArticleLink,
  renderFigure,
  renderMediaGrid,
  renderParagraphs,
  renderVideoCard
} from "./components.js";

function renderSemanticLines(lines) {
  return lines.map((line) => `<span class="semantic-line">${escapeHtml(line)}</span>`).join("");
}

function topicCards(config, content, options) {
  return config.topics.map((topic, index) => {
    const media = renderFigure(content.topicMedia[topic.key], options);
    return `<article class="topic-card topic-card--${escapeHtml(topic.key)}">
      <div class="topic-card__visual">${media || `<span class="topic-card__monogram" aria-hidden="true">0${index + 1}</span>`}</div>
      <div class="topic-card__body">
        <span class="topic-card__number">专题 0${index + 1}</span>
        <h3>${escapeHtml(topic.title)}</h3>
        <p>${escapeHtml(topic.description)}</p>
        <a class="text-link" href="${escapeHtml(topic.href)}">进入专题<span aria-hidden="true"> →</span></a>
      </div>
    </article>`;
  }).join("");
}

export function renderHomePage(config, content, options = {}) {
  const [practiceFilm, cityFilm] = content.videos;
  const heroMedia = renderFigure(content.heroMedia, options);
  const themeBreak = config.project.theme.indexOf("，") + 1;
  const heroTitle = themeBreak
    ? renderSemanticLines([
        config.project.theme.slice(0, themeBreak),
        config.project.theme.slice(themeBreak)
      ])
    : escapeHtml(config.project.theme);

  return `<section class="hero">
    <div class="hero__backdrop" aria-hidden="true"><span>CHONGQING</span></div>
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="section-kicker">${escapeHtml(config.project.displayTitle)}</p>
        <h1 class="semantic-heading semantic-heading--responsive">${heroTitle}</h1>
        <p class="hero__team">${escapeHtml(config.project.teamName)}</p>
        <a class="hero__scroll" href="#overview">走进实践<span aria-hidden="true"> ↓</span></a>
      </div>
      <div class="hero__visual">${heroMedia || `<div class="hero__graphic" aria-hidden="true"><span>山城</span><strong>重庆</strong><i></i></div>`}</div>
    </div>
  </section>
  <section id="overview" class="overview section">
    <div class="container">
      <div class="section-heading"><div><p class="section-kicker">实践概览</p><h2>从城市现场，读懂使命与担当</h2></div><p>沿着红色文化、现代工业与青年志愿服务三条实践主线，在山城完成一次面向历史、产业与人民的深度学习。</p></div>
      <div class="practice-meta" aria-label="实践基本信息"><div><strong>${escapeHtml(config.project.dates)}</strong><span>实践时间</span></div><div><strong>${escapeHtml(config.project.location)}</strong><span>实践地点</span></div><div><strong>3</strong><span>重点专题</span></div><div><strong>3</strong><span>专题报道</span></div></div>
    </div>
  </section>
  <section class="section section--soft">
    <div class="container"><div class="section-heading"><div><p class="section-kicker">实践主线</p><h2>三个专题，一条完整实践脉络</h2></div><p>从历史深处汲取精神力量，在大国重器中感受工业脉搏，以青春行动回应时代召唤。</p></div><div class="topic-grid">${topicCards(config, content, options)}</div></div>
  </section>
  <section class="section video-section">
    <div class="container"><div class="section-heading"><div><p class="section-kicker">实践影像 · 01</p><h2>${escapeHtml(practiceFilm.title)}</h2></div></div>${renderVideoCard(practiceFilm)}</div>
  </section>
  <section class="section section--soft city-film-section">
    <div class="container"><div class="section-heading"><div><p class="section-kicker">城市观察 · 02</p><h2>${escapeHtml(cityFilm.title)}</h2></div><p>循着两江交汇的脉络，阅读山城的空间、文化与精神。</p></div>${renderVideoCard(cityFilm)}</div>
  </section>
  <section id="about" class="section about-section">
    <div class="container about-grid"><div><p class="section-kicker">关于实践</p><h2>在重庆，把课堂延伸到真实世界</h2></div><div class="about-copy"><p>${escapeHtml(config.project.teamName)}于 ${escapeHtml(config.project.dates)} 走进${escapeHtml(config.project.location)}，围绕红色文化传承、重点企业参访与退伍老兵慰问开展实践。</p><dl><div><dt>红岩寻踪</dt><dd>走访五处红色场馆，重温山城红色记忆</dd></div><div><dt>精工报国</dt><dd>走进国家重点单位，理解制造强国根基</dd></div><div><dt>青年行动</dt><dd>陪伴、倾听与服务，让青春回应历史</dd></div></dl></div></div>
  </section>`;
}

export function industryPageModel(industryContent) {
  return {
    intro: industryContent.intro,
    article: { status: "published", url: industryContent.sourceUrl },
    sections: industryContent.companies.map((company) => ({
      key: company.key,
      navTitle: company.navTitle,
      title: company.name,
      paragraphs: company.paragraphs,
      media: company.media
    })),
    gallery: [],
    afterSections: industryContent.summary
  };
}

export function volunteerPageModel(volunteerContent) {
  return {
    intro: volunteerContent.intro,
    article: { status: "published", url: volunteerContent.sourceUrl },
    sections: volunteerContent.sections,
    gallery: volunteerContent.gallery,
    afterSections: volunteerContent.summary
  };
}

const topicSubtitles = {
  venue: "循着山城红色地标，走近历史现场",
  industry: "探访大国重器，赓续军工薪火",
  volunteer: "厚植拥军初心，传递青年暖意"
};

export function renderTopicPage(topic, content, options = {}) {
  const sections = content.sections.map((section, index) => {
    const media = renderMediaGrid(section.media, options);
    const hasCopy = section.paragraphs?.length > 0;
    return `<section id="${escapeHtml(section.key)}" class="story-section section ${index % 2 ? "section--soft" : ""}">
      <div class="container story-section__grid">
        <div class="story-section__copy">
          <p class="section-kicker">${String(index + 1).padStart(2, "0")} · ${escapeHtml(topic.title)}</p>
          <h2>${escapeHtml(section.title || section.name)}</h2>
          ${hasCopy ? renderParagraphs(section.paragraphs) : `<p class="editorial-pending">专题文字将在报道发布后补充，当前已预留影像叙事槽位。</p>`}
        </div>
        ${media ? `<div class="story-section__media">${media}</div>` : ""}
      </div>
    </section>`;
  }).join("");

  const localNav = content.sections.map((section, index) => `<a href="#${escapeHtml(section.key)}"><span class="local-nav__number">${String(index + 1).padStart(2, "0")}</span><span class="local-nav__label">${escapeHtml(section.navTitle || section.title || section.name)}</span></a>`).join("");
  const galleryMedia = content.gallery?.length ? renderMediaGrid(content.gallery, options) : "";
  const gallery = galleryMedia
    ? `<section class="section gallery-section"><div class="container"><div class="section-heading"><div><p class="section-kicker">更多影像</p><h2>现场记录</h2></div><p>更多值得留存的实践瞬间。</p></div>${galleryMedia}</div></section>`
    : "";
  const summary = content.afterSections?.length
    ? `<section class="section reflection-section"><div class="container reading"><p class="section-kicker">实践感悟</p><h2 class="semantic-heading">${renderSemanticLines(["从现场出发，", "向未来作答"])}</h2>${renderParagraphs(content.afterSections)}</div></section>`
    : "";
  const articleLink = renderArticleLink(content.article, "阅读完整专题推文");

  return `<section class="topic-hero topic-hero--${escapeHtml(topic.key)}">
    <div class="container topic-hero__inner"><p class="section-kicker">重庆社会实践 · 专题</p><h1>${escapeHtml(topic.title)}</h1><p class="topic-hero__subtitle">${escapeHtml(topicSubtitles[topic.key] || topic.description)}</p>${content.intro ? `<div class="reading topic-hero__intro">${renderParagraphs([content.intro])}</div>` : ""}</div>
  </section>
  <nav class="local-nav" aria-label="专题目录" style="--local-nav-count: ${content.sections.length}"><div class="container">${localNav}</div></nav>
  ${sections}
  ${gallery}
  ${summary}
  ${articleLink ? `<section class="article-cta section section--soft"><div class="container"><div><p class="section-kicker">延伸阅读</p><h2>继续阅读完整报道</h2></div>${articleLink}</div></section>` : ""}`;
}
