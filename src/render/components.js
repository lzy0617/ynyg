export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderFigure(item, { showDevelopmentSlots = false } = {}) {
  if (item.visibility !== "public") return "";

  if (!item.src) {
    if (!showDevelopmentSlots) return "";
    return `<figure class="media media--pending media--${escapeHtml(item.layout || "pair")}" data-media-id="${escapeHtml(item.id)}">
      <div class="media__pending">
        <span class="media__pending-mark" aria-hidden="true"></span>
        <span>图片待补</span>
        <code>${escapeHtml(item.id)}</code>
      </div>
    </figure>`;
  }

  return `<figure class="media media--${escapeHtml(item.layout || "pair")}" data-media-id="${escapeHtml(item.id)}">
    <button class="media__open" type="button" data-lightbox-src="${escapeHtml(item.src)}" data-lightbox-alt="${escapeHtml(item.alt)}" aria-label="查看大图：${escapeHtml(item.alt)}">
      <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy" />
    </button>
    ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
  </figure>`;
}

export function renderMediaGrid(items, options = {}) {
  const figures = items.map((item) => renderFigure(item, options)).filter(Boolean).join("");
  return figures ? `<div class="media-grid">${figures}</div>` : "";
}

export function renderVideoCard(video) {
  const published = video.status === "published" && Boolean(video.url);
  const cover = video.cover
    ? `<img src="${escapeHtml(video.cover)}" alt="${escapeHtml(video.title)}封面" loading="lazy" />`
    : `<div class="video-card__pending" aria-hidden="true"><span class="video-card__symbol">▶</span><span>VIDEO</span></div>`;
  const status = published ? "观看视频" : "即将上线";
  const inner = `<div class="video-card__visual">${cover}</div><div class="video-card__body"><p class="eyebrow">专题影像</p><h3>${escapeHtml(video.title)}</h3><p>${escapeHtml(video.description || "")}</p><span class="video-card__action">${status}<span aria-hidden="true"> →</span></span></div>`;

  if (!published) return `<article class="video-card video-card--pending">${inner}</article>`;
  return `<a class="video-card" href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer" aria-label="观看${escapeHtml(video.title)}（在新窗口打开）">${inner}</a>`;
}

export function renderParagraphs(paragraphs = []) {
  return paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
}

export function renderArticleLink(article, label = "阅读完整专题报道") {
  if (!article?.url || article.status !== "published") return "";
  return `<a class="button-link" href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}<span aria-hidden="true"> ↗</span></a>`;
}
