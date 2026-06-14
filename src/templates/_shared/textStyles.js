/**
 * Shared text-style vocabulary for the "style controls" pilot (Option A).
 *
 * A styleable template text slot carries a small style object:
 *   { font, size, color, bold, italic, align }
 *
 * Only curated fonts are offered — every one is already loaded by the app AND
 * available to the headless-Chrome export, so the PDF/PNG always matches the
 * live preview. (Arbitrary/uploaded fonts would need server-side install +
 * embedding — that's the larger Option B.)
 */

export const FONT_OPTIONS = [
  { id: 'script', label: 'Calligraphy', family: 'var(--font-script)' },
  { id: 'display', label: 'Playfair', family: 'var(--font-playfair), Georgia, serif' },
  { id: 'serif', label: 'Cormorant', family: 'var(--font-cormorant), Georgia, serif' },
  { id: 'sans', label: 'Inter', family: 'var(--font-inter), system-ui, sans-serif' },
  { id: 'party', label: 'Poppins', family: 'var(--font-poppins), Inter, sans-serif' },
]

export const FONT_BY_ID = Object.fromEntries(FONT_OPTIONS.map((f) => [f.id, f]))

/** Fonts where faux bold/italic looks wrong (script faces). */
export const NO_BOLD_ITALIC = new Set(['script'])

/** Brand-safe colour palette shown as swatches (custom picker also available). */
export const COLOR_SWATCHES = [
  '#8B5A2B', // golden brown
  '#7a1f2b', // maroon
  '#b8860b', // gold
  '#0f172a', // ink
  '#1f7a3d', // green
  '#b03a5b', // rose
  '#5e1822', // deep maroon
  '#9a6f08', // dark gold
]

export const SIZE_MIN = 14
export const SIZE_MAX = 110

/** Clamp a numeric font size into the allowed range. */
export function clampSize(n, fallback = 32) {
  const v = Number(n)
  if (Number.isNaN(v)) return fallback
  return Math.min(SIZE_MAX, Math.max(SIZE_MIN, Math.round(v)))
}

/**
 * Turn a slot style object into an inline `style` for a text element. Only
 * defined keys are emitted, so an unset slot inherits the template's own design.
 * @param {object|undefined} s
 * @returns {React.CSSProperties}
 */
export function slotInlineStyle(s) {
  if (!s) return {}
  const font = FONT_BY_ID[s.font]
  return {
    fontFamily: font?.family,
    fontSize: s.size ? `${s.size}px` : undefined,
    color: s.color || undefined,
    fontWeight: s.bold ? 700 : undefined,
    fontStyle: s.italic ? 'italic' : undefined,
    textAlign: s.align || undefined,
  }
}
