/**
 * Build a filesystem-friendly slug from arbitrary text.
 * Used to name exported PDF files (e.g. "priya-weds-arjun").
 *
 * @param {string} text
 * @param {string} [fallback='laksh']
 * @returns {string}
 */
export function slugify(text, fallback = 'laksh') {
  const slug = String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60)

  return slug || fallback
}
