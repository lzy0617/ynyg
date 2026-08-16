export function makeMediaSlots(prefix, count, layout = "pair") {
  return Array.from({ length: count }, (_, index) => ({
    id: `${prefix}-${String(index + 1).padStart(2, "0")}`,
    src: "",
    alt: "",
    caption: "",
    layout,
    featured: index === 0,
    order: index + 1,
    visibility: "public"
  }));
}

export function visibleMedia(items, showDevelopmentSlots = false) {
  return [...items]
    .filter((item) => item.visibility === "public")
    .filter((item) => showDevelopmentSlots || Boolean(item.src))
    .sort((a, b) => a.order - b.order);
}
