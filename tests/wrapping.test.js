import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { industryContent } from "../content/industry.js";
import { venueContent } from "../content/venue.js";
import { volunteerContent } from "../content/volunteer.js";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const base = read("src/styles/base.css");
const components = read("src/styles/components.css");
const pages = read("src/styles/pages.css");
const pageRenderer = read("src/render/pages.js");

describe("Chinese wrapping system", () => {
  it("does not size Chinese headings with the Latin ch unit", () => {
    expect(`${base}\n${components}\n${pages}`).not.toMatch(/max-width:\s*[^;]*ch/);
  });

  it("balances headings and lets article text flow naturally", () => {
    expect(base).toMatch(/h1,[\s\S]*text-wrap: balance/);
    expect(base).toMatch(/p,[\s\S]*line-break: strict/);
    expect(base).toMatch(/p,[\s\S]*overflow-wrap: break-word/);
    expect(base).toMatch(/p,[\s\S]*white-space: normal/);
    expect(base).toMatch(/p,[\s\S]*word-break: normal/);
  });

  it("uses an equal-column chapter grid and a scrollable mobile fallback", () => {
    expect(pages).toContain("repeat(var(--local-nav-count), minmax(0, 1fr))");
    expect(pages).toMatch(/@media \(max-width: 860px\)[\s\S]*\.local-nav \.container[\s\S]*display: flex/);
    expect(pages).toMatch(/\.local-nav a\s*\{[\s\S]*white-space: normal/);
  });

  it("gives every topic section a concise navigation label", () => {
    const sections = [
      ...venueContent.sections,
      ...industryContent.companies,
      ...volunteerContent.sections
    ];
    expect(sections.every((section) => section.navTitle?.trim())).toBe(true);
  });

  it("uses semantic spans instead of hard-coded line-break elements", () => {
    expect(pageRenderer).toContain("renderSemanticLines");
    expect(pageRenderer).not.toMatch(/<br\b|<wbr\b/);
  });
});
