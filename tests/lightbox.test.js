// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from "vitest";
import { bindLightbox } from "../src/lightbox.js";

describe("bindLightbox", () => {
  beforeEach(() => {
    document.body.innerHTML = `<button id="open" data-lightbox-src="/x.webp" data-lightbox-alt="example"><span>open</span></button><div id="lightbox-root"></div>`;
  });

  it("opens from a nested click target and closes on Escape", () => {
    bindLightbox(document);
    document.querySelector("#open span").click();
    expect(document.querySelector(".lightbox")).not.toBeNull();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    expect(document.querySelector(".lightbox")).toBeNull();
  });

  it("closes with the close button and restores focus", () => {
    bindLightbox(document);
    const open = document.querySelector("#open");
    open.click();
    document.querySelector(".lightbox__close").click();
    expect(document.activeElement).toBe(open);
  });
});
