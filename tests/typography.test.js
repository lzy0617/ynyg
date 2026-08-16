import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readStyle = (name) => readFileSync(new URL(`../src/styles/${name}`, import.meta.url), "utf8");
const tokens = readStyle("tokens.css");
const base = readStyle("base.css");
const components = readStyle("components.css");
const pages = readStyle("pages.css");

describe("global typography system", () => {
  it("defines the complete semantic type scale", () => {
    const requiredTokens = [
      "--fs-display",
      "--fs-page-title",
      "--fs-section-title",
      "--fs-subsection-title",
      "--fs-card-title",
      "--fs-body-large",
      "--fs-body",
      "--fs-nav",
      "--fs-eyebrow",
      "--fs-caption",
      "--fs-debug"
    ];

    for (const token of requiredTokens) expect(tokens).toContain(token);
  });

  it("maps primary reading levels to semantic tokens", () => {
    expect(pages).toMatch(/\.hero h1\s*\{[^}]*font-size: var\(--fs-display\)/s);
    expect(pages).toMatch(/\.topic-hero h1\s*\{[^}]*font-size: var\(--fs-page-title\)/s);
    expect(pages).toMatch(/\.story-section__copy h2\s*\{[^}]*font-size: var\(--fs-subsection-title\)/s);
    expect(base).toMatch(/\.section-kicker,[^{]*\{[^}]*font-size: var\(--fs-eyebrow\)/s);
    expect(components).toMatch(/\.media figcaption\s*\{[^}]*font-size: var\(--fs-caption\)/s);
    expect(components).toMatch(/\.media__pending code\s*\{[^}]*font-size: var\(--fs-debug\)/s);
  });

  it("keeps component typography free of isolated numeric declarations", () => {
    const declarations = [base, components, pages].flatMap((style) =>
      [...style.matchAll(/(?:font-size|font-weight|line-height|letter-spacing):\s*([^;]+);/g)]
        .map((match) => match[1].trim())
    );

    expect(declarations.length).toBeGreaterThan(20);
    expect(declarations.every((value) => value.startsWith("var("))).toBe(true);
  });
});
