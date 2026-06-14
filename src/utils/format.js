/**
 * Lightweight, locale-safe formatting helpers used by template previews.
 * These never throw — if the input is empty/invalid they return a sensible
 * fallback so the live preview always renders something.
 */

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/**
 * Format an ISO date string ("2025-12-15") into "15 December 2025".
 * @param {string} value
 * @param {string} [fallback='']
 */
export function formatDate(value, fallback = '') {
  if (!value) return fallback
  const [y, m, d] = String(value).split('-').map(Number)
  if (!y || !m || !d) return value || fallback
  return `${d} ${MONTHS[m - 1] ?? ''} ${y}`.trim()
}

/**
 * Format a 24h time string ("18:30") into "6:30 PM".
 * @param {string} value
 * @param {string} [fallback='']
 */
export function formatTime(value, fallback = '') {
  if (!value) return fallback
  const [hRaw, min] = String(value).split(':')
  let h = Number(hRaw)
  if (Number.isNaN(h)) return value || fallback
  const period = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return `${h}:${(min ?? '00').padStart(2, '0')} ${period}`
}

/**
 * Split a multi-line / comma separated string into clean items.
 * @param {string} value
 * @param {{ separator?: RegExp }} [opts]
 * @returns {string[]}
 */
export function toList(value, { separator = /[\n,]/ } = {}) {
  return String(value || '')
    .split(separator)
    .map((s) => s.trim())
    .filter(Boolean)
}
