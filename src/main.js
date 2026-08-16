import { siteConfig, topicByKey } from "../content/site.js";
import { homeContent } from "../content/home.js";
import { venueContent } from "../content/venue.js";
import { industryContent } from "../content/industry.js";
import { volunteerContent } from "../content/volunteer.js";
import { bindLightbox } from "./lightbox.js";
import { renderHeader, renderFooter, bindMobileNav } from "./render/shell.js";
import {
  renderHomePage,
  renderTopicPage,
  industryPageModel,
  volunteerPageModel
} from "./render/pages.js";

const page = document.body.dataset.page || "home";
const options = { showDevelopmentSlots: import.meta.env.DEV };
const header = document.querySelector("#site-header");
const main = document.querySelector("#main");
const footer = document.querySelector("#site-footer");

header.className = "site-header";
footer.className = "site-footer";
header.innerHTML = renderHeader(siteConfig, page);
footer.innerHTML = renderFooter(siteConfig);

const pageRenderers = {
  home: () => renderHomePage(siteConfig, homeContent, options),
  venue: () => renderTopicPage(topicByKey("venue"), venueContent, options),
  industry: () => renderTopicPage(topicByKey("industry"), industryPageModel(industryContent), options),
  volunteer: () => renderTopicPage(topicByKey("volunteer"), volunteerPageModel(volunteerContent), options)
};

if (pageRenderers[page]) {
  main.innerHTML = pageRenderers[page]();
} else {
  main.innerHTML = `<section class="section"><div class="container"><h1>页面不存在</h1><a class="text-link" href="/">返回首页 →</a></div></section>`;
}

bindMobileNav(document);
bindLightbox(document);
