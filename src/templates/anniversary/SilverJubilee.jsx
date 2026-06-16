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
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i} opacity={0.85}>
          <ellipse cx={26 + i * 12} cy={92 - i * 12} rx="7" ry="3.4" fill="currentColor" fillOpacity="0.3" transform={`rotate(${-40 - i * 6} ${26 + i * 12} ${92 - i * 12})`} />
          <ellipse cx={174 - i * 12} cy={92 - i * 12} rx="7" ry="3.4" fill="currentColor" fillOpacity="0.3" transform={`rotate(${40 + i * 6} ${174 - i * 12} ${92 - i * 12})`} />
        </g>
      ))}
      <circle cx="100" cy="114" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

function CornerFiligree({ className = '' }) {
  // fine platinum corner scroll
  return (
    <svg viewBox="0 0 110 110" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M8 8h40M8 8v40" opacity="0.9" />
      <path d="M8 26c30 0 48 18 48 48" opacity="0.7" />
      <path d="M26 8c0 30 18 48 48 48" opacity="0.45" />
      <circle cx="14" cy="14" r="2.6" fill="currentColor" stroke="none" />
      <path d="M52 70c10 0 18-8 18-18" opacity="0.5" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#222936] via-[#14181f] to-[#0a0d12]" />
      <div className="absolute inset-x-0 top-0 h-[58%] bg-[radial-gradient(ellipse_at_top,rgba(226,232,240,0.2),transparent_62%)]" />
      <div className="absolute left-1/2 top-[40%] h-72 w-[28rem] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(203,213,225,0.12),transparent_70%)]" />

      {/* Platinum top & bottom bands */}
      <div className="absolute inset-x-0 top-0 h-7 bg-gradient-to-r from-[#5b626d] via-[#f1f5f9] to-[#5b626d]" />
      <div className="absolute inset-x-0 top-7 h-px bg-slate-100/40" />
      <div className="absolute inset-x-0 bottom-0 h-7 bg-gradient-to-r from-[#5b626d] via-[#f1f5f9] to-[#5b626d]" />
      <div className="absolute inset-x-0 bottom-7 h-px bg-slate-100/40" />

      {/* Thin silver double frame */}
      <div className="absolute inset-x-7 inset-y-12 rounded-lg border border-slate-300/55" />
      <div className="absolute inset-x-[38px] inset-y-[58px] rounded-md border border-slate-400/25" />

      {/* Corner filigree */}
      <CornerFiligree className="absolute left-9 top-[58px] h-12 w-12 text-slate-300/70" />
      <CornerFiligree className="absolute right-9 top-[58px] h-12 w-12 text-slate-300/70 [transform:scaleX(-1)]" />
      <CornerFiligree className="absolute bottom-[58px] left-9 h-12 w-12 text-slate-300/70 [transform:scaleY(-1)]" />
      <CornerFiligree className="absolute bottom-[58px] right-9 h-12 w-12 text-slate-300/70 [transform:scale(-1)]" />

      {/* Scattered sparkles */}
      <Sparkle className="absolute left-14 top-32 h-5 w-5 text-slate-200/70" />
      <Sparkle className="absolute right-16 top-44 h-3 w-3 text-slate-300/60" />
      <Sparkle className="absolute right-24 top-28 h-2 w-2 text-slate-200/50" />
      <Sparkle className="absolute left-20 bottom-48 h-4 w-4 text-slate-300/50" />
      <Sparkle className="absolute right-20 bottom-36 h-5 w-5 text-slate-200/60" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-[76px] text-center">
        <header className="flex flex-col items-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.52em] text-slate-300/90">Silver Jubilee</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-slate-400/70" />
            <Sparkle className="h-4 w-4 text-slate-100" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-slate-400/70" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          {/* Grand metallic numeral */}
          <div className="relative flex flex-col items-center">
            <span className="pointer-events-none absolute -top-4 h-48 w-72 bg-[radial-gradient(ellipse,rgba(226,232,240,0.22),transparent_70%)]" />
            <span
              data-pdf-color="#e2e8f0"
              className="bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text font-display text-[212px] font-semibold leading-[0.8] tracking-tight text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]"
            >
              {years}
            </span>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-400/60" />
              <p className="text-[15px] font-medium uppercase tracking-[0.44em] text-slate-200">
                Years of Togetherness
              </p>
              <span className="h-px w-8 bg-slate-400/60" />
            </div>
          </div>

          <div className="mt-10 h-px w-44 bg-gradient-to-r from-transparent via-slate-200/75 to-transparent" />

          <h1 className="mt-7 text-[46px] font-medium leading-tight tracking-wide">
            <span
              data-pdf-color="#eef2f7"
              className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <Wreath className="h-12 w-44 text-slate-300/75" />
          <div className="rounded-lg border border-slate-400/40 bg-white/5 px-9 py-3.5 shadow-[0_10px_30px_-15px_rgba(226,232,240,0.4)] backdrop-blur-sm">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-slate-400">Celebrated On</p>
            <p className="mt-1 text-2xl tracking-wide text-slate-50">{date}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-slate-400">Venue</p>
            <p className="max-w-[20rem] font-serif text-[16px] leading-snug text-slate-200">{venue}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
