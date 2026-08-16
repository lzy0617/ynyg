import { describe, expect, it } from "vitest";
import { validateMediaEntries } from "../src/lib/content-validation.js";

describe("validateMediaEntries", () => {
  it("rejects duplicate media ids", () => {
    const result = validateMediaEntries([
      { id: "x-01", src: "", alt: "", caption: "", visibility: "public" },
      { id: "x-01", src: "", alt: "", caption: "", visibility: "public" }
    ]);
    expect(result.errors).toContain("duplicate media id: x-01");
  });

  it("requires alt and caption when a public image has a src", () => {
    const result = validateMediaEntries([
      { id: "x-01", src: "/x.webp", alt: "", caption: "", visibility: "public" }
    ]);
    expect(result.errors).toContain("x-01: alt is required when src is set");
    expect(result.errors).toContain("x-01: caption is required when src is set");
  });
});
