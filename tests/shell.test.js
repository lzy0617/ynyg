import { describe, expect, it } from "vitest";
import { siteConfig } from "../content/site.js";
import { renderHeader } from "../src/render/shell.js";

describe("renderHeader", () => {
  it("uses centralized topic labels and marks the active page", () => {
    const html = renderHeader(siteConfig, "venue");
    expect(html).toContain('aria-current="page"');
    expect(html).toContain(siteConfig.topics[0].title);
    expect(html).toContain(siteConfig.topics[1].title);
    expect(html).toContain(siteConfig.topics[2].title);
  });
});
