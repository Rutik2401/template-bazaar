/**
 * Single source of truth for the FAQ Q&A — consumed by BOTH the visible
 * accordion (src/components/Faq.jsx, client) and the FAQPage JSON-LD emitted on
 * the home page (server). Keeping one list means the rich-result structured data
 * can never drift out of sync with what the user actually sees.
 *
 * Entries are i18n KEY pairs (resolved through the dictionaries), so the copy
 * stays translatable.
 */
export const FAQ_ITEMS = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
]

/** Resolve a dotted i18n path ("faq.q1") against a dictionary object. */
function resolve(dict, path) {
  return path
    .split('.')
    .reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), dict)
}

/**
 * Resolve the FAQ to plain {question, answer} strings against a dictionary.
 * Used server-side to build the FAQPage JSON-LD (defaults to English copy).
 * @param {object} dict
 * @returns {{question: string, answer: string}[]}
 */
export function resolvedFaq(dict) {
  return FAQ_ITEMS.map(({ q, a }) => ({
    question: resolve(dict, q) || '',
    answer: resolve(dict, a) || '',
  })).filter((item) => item.question && item.answer)
}
