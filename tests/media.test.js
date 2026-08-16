import { describe, expect, it } from "vitest";
import { makeMediaSlots, visibleMedia } from "../src/lib/media.js";

describe("makeMediaSlots", () => {
  it("creates stable zero-padded ids", () => {
    const slots = makeMediaSlots("venue-teyuan", 3);
    expect(slots.map((item) => item.id)).toEqual([
      "venue-teyuan-01",
      "venue-teyuan-02",
      "venue-teyuan-03"
    ]);
  });
});

describe("visibleMedia", () => {
  it("keeps empty slots in development and removes them in production", () => {
    const items = makeMediaSlots("venue-teyuan", 2);
    items[0].src = "/assets/images/venue/teyuan/group.webp";
    expect(visibleMedia(items, true)).toHaveLength(2);
    expect(visibleMedia(items, false)).toHaveLength(1);
  });

  it("omits private media and respects editorial order", () => {
    const items = makeMediaSlots("x", 3);
    items[0].visibility = "private";
    items[1].order = 3;
    items[2].order = 1;
    expect(visibleMedia(items, true).map((item) => item.id)).toEqual(["x-03", "x-02"]);
  });
});
