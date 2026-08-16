import { describe, expect, it } from "vitest";
import { siteConfig } from "../content/site.js";
import { homeContent } from "../content/home.js";
import { venueContent } from "../content/venue.js";
import { industryContent } from "../content/industry.js";
import { volunteerContent } from "../content/volunteer.js";
import {
  industryPageModel,
  renderHomePage,
  renderTopicPage,
  volunteerPageModel
} from "../src/render/pages.js";

describe("renderHomePage", () => {
  it("renders practice dates and topic cards in approved order", () => {
    const html = renderHomePage(siteConfig, homeContent, { showDevelopmentSlots: true });
    expect(html).toContain("2026.7.20–2026.7.27");
    const topicGridStart = html.indexOf('<div class="topic-grid">');
    const positions = siteConfig.topics.map((topic) => html.indexOf(topic.title, topicGridStart));
    expect(positions.every((value) => value >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });

  it("does not expose empty media slot labels in production", () => {
    const html = renderHomePage(siteConfig, homeContent, { showDevelopmentSlots: false });
    expect(html).not.toContain("图片待补");
    expect(html).not.toContain("home-hero-01");
  });

  it("uses a controlled desktop line break for the home title", () => {
    const html = renderHomePage(siteConfig, homeContent, { showDevelopmentSlots: false });
    expect(html).toContain('<span class="semantic-line">红韵山城承使命，</span>');
    expect(html).toContain('<span class="semantic-line">精工报国践初心</span>');
  });
});

describe("topic pages", () => {
  it("renders venue sections in the approved five-stop order", () => {
    const topic = siteConfig.topics.find((item) => item.key === "venue");
    const html = renderTopicPage(topic, venueContent, { showDevelopmentSlots: true });
    const positions = venueContent.sections.map((section) => html.indexOf(section.title));
    expect(positions.every((value) => value >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });

  it("keeps the published industry story as two company sections", () => {
    expect(industryContent.companies.map((company) => company.key)).toEqual(["jianshe", "cssc"]);
    expect(industryContent.sourceUrl).toBe("https://mp.weixin.qq.com/s/rwPwf84M5_x62_a3LPeGVQ");
    expect(industryContent.companies.every((company) => company.paragraphs.length >= 3)).toBe(true);
  });

  it("keeps the volunteer story in the five published activity stages", () => {
    expect(volunteerContent.sections.map((section) => section.key)).toEqual(["homevisit", "interview", "care", "performance", "tribute"]);
    expect(volunteerContent.sections.every((section) => section.media.length === 4)).toBe(true);
    expect(volunteerContent.sourceUrl).toBe("https://mp.weixin.qq.com/s/22Yyg6NfMhzOt7ZVE1cuGg");
  });

  it("adapts industry content into the shared topic-page model", () => {
    const model = industryPageModel(industryContent);
    expect(model.article.status).toBe("published");
    expect(model.sections.map((section) => section.key)).toEqual(["jianshe", "cssc"]);
    expect(model.sections.map((section) => section.navTitle)).toEqual(["建设工业", "中船装备"]);
    expect(model.afterSections.length).toBeGreaterThan(0);
  });

  it("adapts volunteer content into the shared topic-page model", () => {
    const model = volunteerPageModel(volunteerContent);
    expect(model.article.status).toBe("published");
    expect(model.sections).toHaveLength(5);
    expect(model.gallery).toHaveLength(10);
    expect(model.afterSections.length).toBeGreaterThan(0);
  });

  it("omits empty venue media slots from production topic markup", () => {
    const topic = siteConfig.topics.find((item) => item.key === "venue");
    const html = renderTopicPage(topic, venueContent, { showDevelopmentSlots: false });
    expect(html).not.toContain("media--pending");
    expect(html).not.toContain("venue-teyuan-01");
  });

  it("uses short volunteer labels only inside the chapter navigation", () => {
    const topic = siteConfig.topics.find((item) => item.key === "volunteer");
    const html = renderTopicPage(topic, volunteerPageModel(volunteerContent), { showDevelopmentSlots: false });
    const nav = html.slice(html.indexOf('<nav class="local-nav"'), html.indexOf("</nav>") + 6);

    for (const section of volunteerContent.sections) {
      expect(nav).toContain(section.navTitle);
      expect(nav).not.toContain(section.title);
    }
  });

  it("keeps the reflection heading on semantic phrase boundaries", () => {
    const topic = siteConfig.topics.find((item) => item.key === "industry");
    const html = renderTopicPage(topic, industryPageModel(industryContent), { showDevelopmentSlots: false });
    expect(html).toContain('<span class="semantic-line">从现场出发，</span>');
    expect(html).toContain('<span class="semantic-line">向未来作答</span>');
  });
});
