'use client'

import {
  FONT_OPTIONS,
  COLOR_SWATCHES,
  NO_BOLD_ITALIC,
  clampSize,
  SIZE_MIN,
  SIZE_MAX,
} from '@/templates/_shared/textStyles'

/**
 * Compact, form-friendly text-style toolbar for one styleable slot (Option A).
 * Sits under its form field — no canvas selection. Emits partial patches via
 * `onChange`, e.g. onChange({ bold: true }).
 *
 * @param {object} props
 * @param {object} props.value   Current slot style { font, size, color, bold, italic, align }.
 * @param {(patch: object) => void} props.onChange
 */
export default function TextStyleControls({ value = {}, onChange }) {
  const v = value
  const lockBI = NO_BOLD_ITALIC.has(v.font)

  const set = (patch) => onChange?.(patch)
  const size = v.size || 32

  const iconBtn = (active) =>
    `grid h-8 w-8 place-items-center rounded-md border text-ink transition-colors ${
      active
        ? 'border-gold-400 bg-gold-100 text-maroon-600'
        : 'border-slate-200 bg-white hover:border-slate-300'
    }`

  return (
    <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50/70 p-2.5">
      <div className="flex flex-wrap items-center gap-2">
        {/* Font family */}
        <select
          aria-label="Font"
          value={v.font || ''}
          onChange={(e) => set({ font: e.target.value })}
          className="h-8 rounded-md border border-slate-200 bg-white px-2 text-sm text-ink outline-none hover:border-slate-300 focus:border-gold-400"
        >
          {FONT_OPTIONS.map((f) => (
            <option key={f.id} value={f.id} style={{ fontFamily: f.family }}>
              {f.label}
            </option>
          ))}
        </select>

        {/* Size stepper */}
        <div className="flex items-center rounded-md border border-slate-200 bg-white">
          <button
            type="button"
            aria-label="Smaller"
            onClick={() => set({ size: clampSize(size - 2, size) })}
            className="grid h-8 w-8 place-items-center text-lg text-ink-soft hover:text-ink"
          >
            −
          </button>
          <input
            aria-label="Font size"
            type="number"
            min={SIZE_MIN}
            max={SIZE_MAX}
            value={size}
            onChange={(e) => set({ size: clampSize(e.target.value, size) })}
            className="w-10 border-x border-slate-200 py-1 text-center text-sm text-ink outline-none"
          />
          <button
            type="button"
            aria-label="Larger"
            onClick={() => set({ size: clampSize(size + 2, size) })}
            className="grid h-8 w-8 place-items-center text-lg text-ink-soft hover:text-ink"
          >
            +
          </button>
        </div>

        {/* Bold / Italic */}
        <button
          type="button"
          aria-label="Bold"
          disabled={lockBI}
          onClick={() => set({ bold: !v.bold })}
          className={`${iconBtn(v.bold)} font-bold ${lockBI ? 'cursor-not-allowed opacity-40' : ''}`}
        >
          B
        </button>
        <button
          type="button"
          aria-label="Italic"
          disabled={lockBI}
          onClick={() => set({ italic: !v.italic })}
          className={`${iconBtn(v.italic)} italic ${lockBI ? 'cursor-not-allowed opacity-40' : ''}`}
        >
          I
        </button>

        {/* Align */}
        <div className="flex items-center gap-1">
          {['left', 'center', 'right'].map((a) => (
            <button
              key={a}
              type="button"
              aria-label={`Align ${a}`}
              onClick={() => set({ align: a })}
              className={iconBtn(v.align === a)}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {a === 'left' && <path d="M4 6h16M4 12h10M4 18h13" />}
                {a === 'center' && <path d="M4 6h16M7 12h10M6 18h12" />}
                {a === 'right' && <path d="M4 6h16M10 12h10M7 18h13" />}
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Colour swatches */}
      <div className="mt-2 flex items-center gap-1.5">
        {COLOR_SWATCHES.map((c) => (
          <button
            key={c}
            type="button"
            aria-label={`Colour ${c}`}
            onClick={() => set({ color: c })}
            className={`h-6 w-6 rounded-full border transition-transform hover:scale-110 ${
              v.color === c ? 'border-ink ring-2 ring-gold-300' : 'border-black/10'
            }`}
            style={{ backgroundColor: c }}
          />
        ))}
        <label className="ml-1 grid h-6 w-6 cursor-pointer place-items-center rounded-full border border-dashed border-slate-300 text-[10px] text-ink-muted" title="Custom colour">
          +
          <input
            type="color"
            value={v.color || '#8B5A2B'}
            onChange={(e) => set({ color: e.target.value })}
            className="absolute h-0 w-0 opacity-0"
          />
        </label>
      </div>
    </div>
  )
}
