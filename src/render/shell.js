import { navigationItems } from "../../content/site.js";
import { escapeHtml } from "./components.js";

export function renderHeader(config, activePage) {
  const links = navigationItems().map((item) => {
    const current = item.key === activePage ? ' aria-current="page"' : "";
    return `<a href="${escapeHtml(item.href)}"${current}>${escapeHtml(item.title)}</a>`;
  }).join("");

  return `<div class="site-header__inner container">
    <a class="brand" href="/" aria-label="返回首页">
      <span class="brand__seal" aria-hidden="true">渝</span>
      <span class="brand__text"><strong>渝你有关</strong><small>${escapeHtml(config.project.displayTitle)}</small></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span aria-hidden="true"></span><span class="sr-only">打开菜单</span></button>
    <nav id="primary-nav" class="primary-nav" aria-label="主导航">${links}</nav>
  </div>`;
}

export function renderFooter(config) {
  return `<div class="container footer-inner">
    <div class="footer-brand"><span class="brand__seal" aria-hidden="true">渝</span><div><strong>${escapeHtml(config.project.theme)}</strong><p>${escapeHtml(config.project.teamName)}</p></div></div>
    <div class="footer-meta"><span>${escapeHtml(config.project.dates)}</span><span>${escapeHtml(config.project.location)}</span></div>
  </div>`;
}

export function bindMobileNav(root = document) {
  const button = root.querySelector(".nav-toggle");
  const nav = root.querySelector("#primary-nav");
  if (!button || !nav) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", String(open));
    button.querySelector(".sr-only").textContent = open ? "关闭菜单" : "打开菜单";
    nav.classList.toggle("is-open", open);
  }

  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}
