import { escapeHtml } from "./render/components.js";

export function bindLightbox(root = document) {
  const host = root.querySelector("#lightbox-root");
  if (!host) return;

  let previousFocus = null;

  function close() {
    if (!host.firstElementChild) return;
    host.innerHTML = "";
    document.body.classList.remove("lightbox-open");
    previousFocus?.focus?.();
    previousFocus = null;
  }

  root.addEventListener("click", (event) => {
    const trigger = event.target.closest?.("[data-lightbox-src]");
    if (!trigger) return;
    previousFocus = trigger;
    host.innerHTML = `<div class="lightbox" role="dialog" aria-modal="true" aria-label="图片大图预览">
      <button class="lightbox__close" type="button" aria-label="关闭大图预览">×</button>
      <img src="${escapeHtml(trigger.dataset.lightboxSrc)}" alt="${escapeHtml(trigger.dataset.lightboxAlt || "")}" />
    </div>`;
    document.body.classList.add("lightbox-open");
    host.querySelector(".lightbox__close").focus();
  });

  host.addEventListener("click", (event) => {
    if (event.target.matches(".lightbox, .lightbox__close")) close();
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && host.firstElementChild) close();
  });
}
