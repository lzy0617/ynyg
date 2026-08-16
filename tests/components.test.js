import { describe, expect, it } from "vitest";
import { escapeHtml, renderFigure, renderVideoCard } from "../src/render/components.js";

describe("renderFigure", () => {
  it("shows a slot id in development when src is empty", () => {
    const html = renderFigure({ id: "venue-teyuan-01", src: "", alt: "", caption: "", layout: "pair", visibility: "public" }, { showDevelopmentSlots: true });
    expect(html).toContain("venue-teyuan-01");
  });

  it("omits an empty slot in production", () => {
    const html = renderFigure({ id: "venue-teyuan-01", src: "", alt: "", caption: "", layout: "pair", visibility: "public" }, { showDevelopmentSlots: false });
    expect(html).toBe("");
  });

  it("omits private media in every mode", () => {
    const html = renderFigure({ id: "industry-private-01", src: "/assets/private.webp", alt: "private", caption: "private", layout: "pair", visibility: "private" }, { showDevelopmentSlots: true });
    expect(html).toBe("");
  });
});

describe("renderVideoCard", () => {
  it("does not render a playable link for pending videos", () => {
    const html = renderVideoCard({ id: "x", title: "Video", status: "pending", cover: "", url: "" });
    expect(html).not.toContain("href=");
    expect(html).toContain("即将上线");
  });
});

describe("escapeHtml", () => {
  it("escapes content before inserting it into markup", () => {
    expect(escapeHtml('<img src="x">')).toBe("&lt;img src=&quot;x&quot;&gt;");
  });
});
