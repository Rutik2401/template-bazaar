'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Traditional ornaments ─────────────────────────────────────────────── */

/** Hanging cradle (palna) — the heart of a Marathi Bārsā. */
function Palna({ className = '' }) {
  return (
    <svg viewBox="0 0 200 184" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* top suspension hook */}
      <path d="M100 2v8" />
      <path d="M88 12h24" opacity="0.85" />
      {/* suspension ropes with gentle curve */}
      <path d="M44 12C50 38 54 54 58 72M156 12C150 38 146 54 142 72" opacity="0.85" />
      <circle cx="44" cy="12" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="156" cy="12" r="3.5" fill="currentColor" stroke="none" />
      {/* tiny rope bows */}
      <path d="M52 40c-5-2-9 1-9 5 4-1 8-2 9-5ZM52 40c5-2 9 1 9 5-4-1-8-2-9-5Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <path d="M148 40c5-2 9 1 9 5-4-1-8-2-9-5ZM148 40c-5-2-9 1-9 5 4-1 8-2 9-5Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
      {/* cradle bowl */}
      <path d="M40 72h120c-2 38-26 64-60 64S42 110 40 72Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M40 72h120" />
      {/* carved scallop frills */}
      <path d="M52 94c10 9 22 13 48 13s38-4 48-13" opacity="0.6" />
      <path d="M66 116c8 7 18 10 34 10s26-3 34-10" opacity="0.5" />
      <path d="M80 134c6 4 13 6 20 6s14-2 20-6" opacity="0.4" />
      {/* little flowers on the rim */}
      <circle cx="40" cy="72" r="5.5" fill="currentColor" stroke="none" />
      <circle cx="160" cy="72" r="5.5" fill="currentColor" stroke="none" />
      <circle cx="100" cy="72" r="4.5" fill="currentColor" stroke="none" />
      {/* sleeping baby tuft */}
      <path d="M96 100c0-5 8-5 8 0" opacity="0.55" />
    </svg>
  )
}

/** Marigold garland strip that hangs across the top. */
function MarigoldToran({ className = '' }) {
  return (
    <svg viewBox="0 0 640 56" preserveAspectRatio="none" className={className} fill="none">
      <path d="M0 8C120 40 200 40 320 18 440 40 520 40 640 8" stroke="#7a1f2b" strokeWidth="2" strokeOpacity="0.5" />
      {Array.from({ length: 21 }).map((_, i) => {
        const x = 8 + i * 30.5
        const dip = Math.sin((i / 20) * Math.PI) * 14
        const y = 14 + dip
        const big = i % 2 === 0
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={y + 12} stroke="#9a6f08" strokeWidth="1.4" />
            {/* layered marigold petals */}
            <circle cx={x} cy={y + 18} r={big ? 7.5 : 6} fill={big ? '#ea580c' : '#f59e0b'} />
            <circle cx={x} cy={y + 18} r={big ? 5 : 4} fill={big ? '#f59e0b' : '#fbbf24'} fillOpacity="0.9" />
            <circle cx={x} cy={y + 18} r="2.4" fill="#fde68a" />
            {/* alternating green leaf accent */}
            {!big && <circle cx={x} cy={y + 8} r="2" fill="#4d7c0f" fillOpacity="0.7" />}
          </g>
        )
      })}
    </svg>
  )
}

/** Stylised Om symbol. */
function OmSymbol({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <text x="32" y="46" textAnchor="middle" fontSize="48" fontFamily="'Noto Serif Devanagari', serif" fontWeight="700">ॐ</text>
    </svg>
  )
}

/** Small paisley / mango (keri) motif for accents. */
function Paisley({ className = '' }) {
  return (
    <svg viewBox="0 0 40 56" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M20 54C8 48 4 36 8 26 11 18 20 16 26 20c8 5 8 18-2 22 8-1 12-9 9-17" fill="currentColor" fillOpacity="0.12" />
      <circle cx="17" cy="34" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Traditional Marathi Bārsā — marigold orange & maroon with a hanging palna.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function TraditionalBaras({ values }) {
  const { t } = useI18n()
  const baby = values.babyName?.trim() || 'Baby Aadya'
  const parents = values.parentName?.trim() || 'Rahul & Sneha'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Our Residence, Nashik'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fff4e0] font-serif text-[#5e1822]"
    >
      {/* Warm radial silk base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,#fff1d4_0%,#ffe1a6_40%,#fbbf66_100%)]" />
      {/* subtle gold vignette to frame the centre */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,transparent_52%,rgba(94,24,34,0.10)_100%)]" />

      {/* Maroon pallu bands top & bottom with gold piping */}
      <div className="absolute inset-x-0 top-0 h-9 bg-gradient-to-r from-[#4a121b] via-[#7a1f2b] to-[#4a121b]" />
      <div className="absolute inset-x-0 top-9 h-[3px] bg-gradient-to-r from-transparent via-[#e8c45a] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-r from-[#4a121b] via-[#7a1f2b] to-[#4a121b]" />
      <div className="absolute inset-x-0 bottom-9 h-[3px] bg-gradient-to-r from-transparent via-[#e8c45a] to-transparent" />

      {/* Marigold toran hanging below the top band */}
      <MarigoldToran className="absolute inset-x-0 top-[39px] h-14" />

      {/* Double gold frame */}
      <div className="absolute inset-x-7 inset-y-[80px] rounded-md border-[3px] border-[#b8860b]/70 shadow-[inset_0_0_30px_rgba(184,134,11,0.18)]" />
      <div className="absolute inset-x-[38px] inset-y-[92px] rounded-sm border border-[#9a6f08]/40" />

      {/* corner marigolds */}
      {[
        'left-9 top-[94px]', 'right-9 top-[94px]',
        'left-9 bottom-[94px]', 'right-9 bottom-[94px]',
      ].map((pos) => (
        <span key={pos} className={`absolute ${pos} h-5 w-5 rounded-full bg-[#ea580c] ring-4 ring-[#f59e0b]/50`}>
          <span className="absolute inset-1.5 rounded-full bg-[#fde68a]" />
        </span>
      ))}

      {/* corner paisley flourishes inside the frame */}
      <Paisley className="absolute left-[58px] top-[118px] h-9 w-7 text-[#b8860b]/55" />
      <Paisley className="absolute right-[58px] top-[118px] h-9 w-7 text-[#b8860b]/55 [transform:scaleX(-1)]" />
      <Paisley className="absolute left-[58px] bottom-[118px] h-9 w-7 text-[#b8860b]/55 [transform:scaleY(-1)]" />
      <Paisley className="absolute right-[58px] bottom-[118px] h-9 w-7 text-[#b8860b]/55 [transform:scale(-1,-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-[110px] text-center">
        <header className="flex flex-col items-center">
          <OmSymbol className="h-12 w-12 text-[#9a6f08] drop-shadow-sm" />
          <p className="mt-2 font-display text-[15px] tracking-[0.45em] text-[#7a1f2b]">|| श्री गणेशाय नमः ||</p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.42em] text-[#9a6f08]">
            {t('template.common.namingCeremony', 'Naming Ceremony')}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8860b]/70" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#ea580c]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8860b]/70" />
          </div>
        </header>

        <main className="flex flex-col items-center">
          <Palna className="h-32 w-48 text-[#7a1f2b] drop-shadow-[0_8px_14px_rgba(94,24,34,0.18)]" />
          <p className="mt-3 font-display text-[16px] tracking-[0.18em] text-[#9a3412]">॥ बारसे समारंभ ॥</p>
          <p className="mt-1 text-[14px] italic text-[#9a3412]/90">
            {t('template.common.blessOurBaby', 'Come bless our little one')}
          </p>
          <h1 className="mt-3 font-display text-[60px] font-semibold leading-[1.04]">
            <span
              data-pdf-color="#9a3412"
              className="bg-gradient-to-br from-[#f97316] via-[#c2410c] to-[#7a1f2b] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]"
            >
              {baby}
            </span>
          </h1>
          <div className="mt-4 flex items-center gap-3 text-[#b8860b]">
            <span className="h-px w-10 bg-[#b8860b]/60" />
            <span className="text-[11px] uppercase tracking-[0.34em] text-[#7a1f2b]">
              {t('template.common.proudParents', 'Proud Parents')}
            </span>
            <span className="h-px w-10 bg-[#b8860b]/60" />
          </div>
          <p className="mt-2 font-display text-[26px] tracking-wide text-[#5e1822]">{parents}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-[#b8860b]/60 bg-gradient-to-b from-[#fffaf0]/85 to-[#fff2da]/80 px-10 py-3 shadow-[0_10px_24px_-16px_rgba(94,24,34,0.5)]">
            <p className="text-[11px] uppercase tracking-[0.36em] text-[#9a6f08]">{t('template.common.saveTheDate', 'Save the Date')}</p>
            <p className="mt-1 font-display text-2xl text-[#7a1f2b]">{date}{time && ` · ${time}`}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#9a6f08]">{t('template.common.venue', 'Venue')}</p>
            <p className="max-w-[22rem] text-[16px] leading-snug text-[#5e1822]">{venue}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
