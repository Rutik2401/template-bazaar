'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Traditional ornaments ─────────────────────────────────────────────── */

/** Hanging cradle (palna) — the heart of a Marathi Bārsā. */
function Palna({ className = '' }) {
  return (
    <svg viewBox="0 0 200 180" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* suspension ropes */}
      <path d="M40 6 58 70M160 6 142 70" opacity="0.85" />
      <circle cx="40" cy="6" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="160" cy="6" r="3.5" fill="currentColor" stroke="none" />
      {/* cradle bowl */}
      <path d="M44 70h112c-2 34-24 58-56 58S46 104 44 70Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M44 70h112" />
      {/* carved frills */}
      <path d="M58 92c8 8 18 12 42 12s34-4 42-12" opacity="0.6" />
      <path d="M70 112c6 6 16 9 30 9s24-3 30-9" opacity="0.5" />
      {/* little flowers on the rim */}
      <circle cx="44" cy="70" r="5" fill="currentColor" stroke="none" />
      <circle cx="156" cy="70" r="5" fill="currentColor" stroke="none" />
      <circle cx="100" cy="70" r="4" fill="currentColor" stroke="none" />
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
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={y + 12} stroke="#9a6f08" strokeWidth="1.4" />
            <circle cx={x} cy={y + 18} r="7" fill={i % 2 ? '#f59e0b' : '#ea580c'} />
            <circle cx={x} cy={y + 18} r="3" fill="#fde68a" />
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
      <text x="32" y="46" textAnchor="middle" fontSize="48" fontFamily="serif" fontWeight="700">ॐ</text>
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,#ffe6b8_0%,#ffd28a_38%,#fbbf66_100%)]" />

      {/* Maroon pallu bands top & bottom with gold piping */}
      <div className="absolute inset-x-0 top-0 h-9 bg-gradient-to-r from-[#5e1822] via-[#7a1f2b] to-[#5e1822]" />
      <div className="absolute inset-x-0 top-9 h-[3px] bg-[#d4a437]" />
      <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-r from-[#5e1822] via-[#7a1f2b] to-[#5e1822]" />
      <div className="absolute inset-x-0 bottom-9 h-[3px] bg-[#d4a437]" />

      {/* Marigold toran hanging below the top band */}
      <MarigoldToran className="absolute inset-x-0 top-[39px] h-14" />

      {/* Double gold frame */}
      <div className="absolute inset-x-7 inset-y-[80px] rounded-md border-[3px] border-[#b8860b]/70" />
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

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-[110px] text-center">
        <header className="flex flex-col items-center">
          <OmSymbol className="h-12 w-12 text-[#9a6f08]" />
          <p className="mt-2 font-display text-[15px] tracking-[0.45em] text-[#7a1f2b]">|| श्री ||</p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.42em] text-[#9a6f08]">
            {t('template.common.namingCeremony', 'Naming Ceremony')}
          </p>
          <div className="mt-2 h-px w-24 bg-[#b8860b]/60" />
        </header>

        <main className="flex flex-col items-center">
          <Palna className="h-28 w-44 text-[#7a1f2b]" />
          <p className="mt-2 text-[14px] italic text-[#9a3412]">
            {t('template.common.blessOurBaby', 'Come bless our little one')}
          </p>
          <h1 className="mt-3 font-display text-[58px] font-semibold leading-[1.05]">
            <span
              data-pdf-color="#9a3412"
              className="bg-gradient-to-br from-[#ea580c] via-[#c2410c] to-[#7a1f2b] bg-clip-text text-transparent"
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
          <p className="mt-2 font-display text-2xl text-[#5e1822]">{parents}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-4">
          <div className="rounded-md border border-[#b8860b]/60 bg-[#fff7ea]/70 px-9 py-3 shadow-sm">
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
