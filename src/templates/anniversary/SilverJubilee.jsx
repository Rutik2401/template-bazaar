'use client'

import { formatDate } from '@/utils/format'

/* ── Refined sparkle / shine ornaments ───────────────────────────────────── */

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c.7 6.4 4.9 10.6 11.3 11.3C16.9 12 12.7 16.2 12 23.6 11.3 16.2 7.1 12 0.7 11.3 7.1 10.6 11.3 6.4 12 0Z" />
    </svg>
  )
}

function Wreath({ className = '' }) {
  // symmetric laurel half-wreath
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M100 116C58 116 28 92 24 54" />
      <path d="M100 116c42 0 72-24 76-62" />
      {Array.from({ length: 7 }).map((_, i) => {
        const t = i / 6
        const lx = 24 + (76 - 24) * t * 0.0 // anchor reference (unused offset)
        return (
          <g key={i} opacity={0.85}>
            <ellipse cx={26 + i * 12} cy={92 - i * 12} rx="7" ry="3.4" fill="currentColor" fillOpacity="0.3" transform={`rotate(${-40 - i * 6} ${26 + i * 12} ${92 - i * 12})`} />
            <ellipse cx={174 - i * 12} cy={92 - i * 12} rx="7" ry="3.4" fill="currentColor" fillOpacity="0.3" transform={`rotate(${40 + i * 6} ${174 - i * 12} ${92 - i * 12})`} />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Silver jubilee anniversary — elegant platinum/silver on charcoal,
 * a large metallic numeral, refined serif and subtle sparkle.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function SilverJubilee({ values }) {
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const years = values.years?.trim() || '25'
  const date = formatDate(values.date, '10 December 2026')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#14181f] font-display text-slate-200"
    >
      {/* Charcoal gradient base with a cool silver sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c222c] via-[#14181f] to-[#0c0f14]" />
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_top,rgba(226,232,240,0.16),transparent_60%)]" />

      {/* Platinum top & bottom bands */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-r from-[#6b7280] via-[#e5e7eb] to-[#6b7280]" />
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-r from-[#6b7280] via-[#e5e7eb] to-[#6b7280]" />

      {/* Thin silver double frame */}
      <div className="absolute inset-x-7 inset-y-12 rounded-lg border border-slate-300/60" />
      <div className="absolute inset-x-[38px] inset-y-[58px] rounded-md border border-slate-400/30" />

      {/* Scattered sparkles */}
      <Sparkle className="absolute left-14 top-28 h-5 w-5 text-slate-200/70" />
      <Sparkle className="absolute right-16 top-40 h-3 w-3 text-slate-300/60" />
      <Sparkle className="absolute left-20 bottom-44 h-4 w-4 text-slate-300/50" />
      <Sparkle className="absolute right-20 bottom-32 h-5 w-5 text-slate-200/60" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-20 text-center">
        <header className="flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.5em] text-slate-400">Silver Jubilee</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-12 bg-slate-400/60" />
            <Sparkle className="h-4 w-4 text-slate-200" />
            <span className="h-px w-12 bg-slate-400/60" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          {/* Grand metallic numeral */}
          <div className="relative flex flex-col items-center">
            <span
              data-pdf-color="#d7dce3"
              className="bg-gradient-to-b from-white via-slate-300 to-slate-500 bg-clip-text font-display text-[200px] font-semibold leading-[0.82] text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            >
              {years}
            </span>
            <p className="mt-2 text-[15px] uppercase tracking-[0.42em] text-slate-300">
              Years of Togetherness
            </p>
          </div>

          <div className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />

          <h1 className="mt-7 text-[44px] font-medium leading-tight tracking-wide text-slate-100">
            {couple}
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <Wreath className="h-12 w-44 text-slate-300/70" />
          <div className="rounded-lg border border-slate-400/40 bg-white/5 px-8 py-3">
            <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">Celebrated On</p>
            <p className="mt-1 text-2xl text-slate-100">{date}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.36em] text-slate-400">Venue</p>
            <p className="max-w-[20rem] text-[16px] font-serif leading-snug text-slate-200">{venue}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
