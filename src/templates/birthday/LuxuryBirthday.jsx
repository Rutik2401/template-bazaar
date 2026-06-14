'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* Deterministic gold sparkle accents on the marble. */
const SPARKLES = [
  { x: 16, y: 18, s: 10 },
  { x: 82, y: 22, s: 7 },
  { x: 24, y: 70, s: 8 },
  { x: 78, y: 76, s: 11 },
  { x: 50, y: 12, s: 6 },
  { x: 88, y: 50, s: 6 },
  { x: 10, y: 46, s: 7 },
]

function Sparkle({ size = 8, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
      <path d="M12 0c1 6.5 5.5 11 12 12-6.5 1-11 5.5-12 12-1-6.5-5.5-11-12-12C6.5 11 11 6.5 12 0Z" fill="#c9a227" />
    </svg>
  )
}

/* A drawn laurel wreath half (mirrored for the other side). */
function LaurelHalf({ className = '' }) {
  return (
    <svg viewBox="0 0 60 160" className={className} fill="none" stroke="#c9a227" strokeWidth="1.5">
      <path d="M48 8C20 40 20 120 48 152" />
      <path d="M44 28c-12 2-18 8-18 8M40 50c-12 2-18 8-18 8M38 74c-12 2-18 8-18 8M38 98c-12 2-18 8-18 8M42 122c-12 2-18 8-18 8" />
    </svg>
  )
}

/**
 * Luxury birthday invite — gold foil over marble/cream, premium and refined.
 * Natural design size: 640 × 900.
 */
export default function LuxuryBirthday({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'Aarav'
  const age = values.age?.toString().trim() || '7'
  const date = formatDate(values.date, 'Saturday')
  const time = formatTime(values.time, '4:00 PM')
  const venue = values.venue?.trim() || 'Funland Play Cafe, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#f6f1e7] px-14 py-16 text-center font-display text-[#3a3327]"
    >
      {/* Marble veining */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background:radial-gradient(120%_80%_at_15%_10%,#ffffff_0%,transparent_45%),radial-gradient(130%_90%_at_85%_90%,#ece3d2_0%,transparent_50%),linear-gradient(135deg,#faf6ec,#efe6d4)]" />
      <svg viewBox="0 0 640 900" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
        <path d="M-20 180C140 120 220 320 400 260S620 360 700 300" stroke="#9c8c66" strokeWidth="1.2" fill="none" />
        <path d="M-20 540C120 480 260 640 420 600S600 700 700 660" stroke="#9c8c66" strokeWidth="1" fill="none" />
        <path d="M40 0C80 160 -20 300 120 420S60 720 180 900" stroke="#b3a583" strokeWidth="1" fill="none" />
      </svg>

      {/* Gold foil border */}
      <div className="pointer-events-none absolute inset-6 rounded-[2px] border-2 border-[#c9a227]" />
      <div className="pointer-events-none absolute inset-[34px] rounded-[2px] border border-[#c9a227]/50" />

      {/* Sparkle accents */}
      {SPARKLES.map((sp, i) => (
        <span key={i} className="absolute" style={{ left: `${sp.x}%`, top: `${sp.y}%` }}>
          <Sparkle size={sp.s} />
        </span>
      ))}

      <header className="relative mt-12 flex flex-col items-center">
        <span data-pdf-color="#b8860b" className="bg-gradient-to-r from-[#9a6f08] via-[#e2bd66] to-[#9a6f08] bg-clip-text text-[12px] font-semibold uppercase tracking-[0.55em] text-transparent">
          {t('template.common.youAreInvited', 'Request the Pleasure of Your Company')}
        </span>
        <div className="mt-5 flex items-center gap-3 text-[#c9a227]">
          <span className="h-px w-14 bg-[#c9a227]" />
          <span className="text-sm">❖</span>
          <span className="h-px w-14 bg-[#c9a227]" />
        </div>
      </header>

      <main className="relative flex flex-col items-center gap-4">
        <p className="font-serif text-2xl italic text-[#7a6a45]">{t('template.common.celebrating', 'to celebrate the birthday of')}</p>

        {/* Name with laurel wreath */}
        <div className="relative flex items-center justify-center px-10">
          <LaurelHalf className="absolute -left-2 h-32 w-12" />
          <LaurelHalf className="absolute -right-2 h-32 w-12 -scale-x-100" />
          <h1 className="font-serif text-[64px] font-medium leading-none">
            <span data-pdf-color="#b8860b" className="bg-gradient-to-b from-[#e2bd66] via-[#b8860b] to-[#7a5606] bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
        </div>

        {/* Foil age numeral */}
        <div className="mt-2 flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#9c8c66]">{t('template.common.turns', 'turning')}</span>
          <span data-pdf-color="#b8860b" className="bg-gradient-to-b from-[#f0d98a] via-[#c9a227] to-[#8a6a12] bg-clip-text font-display text-[110px] font-semibold leading-none text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
            {age}
          </span>
        </div>
      </main>

      <footer className="relative mb-12 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-[#c9a227]">
          <span className="h-px w-10 bg-[#c9a227]/70" />
          <span className="text-xs">❖</span>
          <span className="h-px w-10 bg-[#c9a227]/70" />
        </div>
        <p className="font-serif text-2xl text-[#3a3327]">{date}</p>
        <p className="text-[12px] uppercase tracking-[0.4em] text-[#9a7d2e]">{time}</p>
        <p className="mt-1 max-w-[20rem] font-serif text-[15px] italic text-[#7a6a45]">{venue}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-[#9a7d2e]">
          {t('template.common.joinUs', 'Cordially Yours · Black Tie Optional')}
        </p>
      </footer>
    </div>
  )
}
