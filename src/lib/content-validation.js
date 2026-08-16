export function validateMediaEntries(entries) {
  const errors = [];
  const seen = new Set();

  for (const item of entries) {
    if (seen.has(item.id)) errors.push(`duplicate media id: ${item.id}`);
    seen.add(item.id);

    if (item.visibility === "public" && item.src) {
      if (!item.alt?.trim()) errors.push(`${item.id}: alt is required when src is set`);
      if (!item.caption?.trim()) errors.push(`${item.id}: caption is required when src is set`);
    }
  }

  return { errors };
}
