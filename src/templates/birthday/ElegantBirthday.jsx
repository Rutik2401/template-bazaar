'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* A subtle gold corner flourish, mirrored at each corner. */
function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <path d="M4 4h60" stroke="#d4a437" strokeWidth="1.5" />
      <path d="M4 4v60" stroke="#d4a437" strokeWidth="1.5" />
      <path d="M14 14c34 2 50 18 52 52" stroke="#e2bd66" strokeWidth="1.25" />
      <circle cx="14" cy="14" r="3" fill="#d4a437" />
    </svg>
  )
}

/**
 * Elegant adult birthday — sophisticated black + gold, classic serif, luxury restraint.
 * Natural design size: 640 × 900.
 */
export default function ElegantBirthday({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'Aarav'
  const age = values.age?.toString().trim() || '7'
  const date = formatDate(values.date, 'Saturday')
  const time = formatTime(values.time, '4:00 PM')
  const venue = values.venue?.trim() || 'Funland Play Cafe, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#0c0c0e] px-16 py-16 text-center font-display text-amber-50"
    >
      {/* Soft gold vignette */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-amber-700/10 blur-[120px]" />

      {/* Double thin gold frame */}
      <div className="pointer-events-none absolute inset-7 border border-amber-400/40" />
      <div className="pointer-events-none absolute inset-[34px] border border-amber-400/20" />

      {/* Corner flourishes */}
      <CornerFlourish className="absolute left-10 top-10 h-14 w-14" />
      <CornerFlourish className="absolute right-10 top-10 h-14 w-14 -scale-x-100" />
      <CornerFlourish className="absolute bottom-10 left-10 h-14 w-14 -scale-y-100" />
      <CornerFlourish className="absolute bottom-10 right-10 h-14 w-14 -scale-100" />

      <header className="relative mt-12">
        <p className="text-[12px] uppercase tracking-[0.55em] text-amber-300">
          {t('template.common.youAreInvited', 'You Are Cordially Invited')}
        </p>
        <div className="mx-auto mt-5 flex items-center justify-center gap-4 text-amber-400/70">
          <span className="h-px w-16 bg-amber-400/50" />
          <span className="text-sm tracking-[0.4em]">✦</span>
          <span className="h-px w-16 bg-amber-400/50" />
        </div>
      </header>

      <main className="relative flex flex-col items-center gap-5">
        <p className="font-serif text-2xl italic text-amber-200/80">
          {t('template.common.celebrating', 'In celebration of')}
        </p>
        <h1 className="font-serif text-[68px] font-medium leading-none tracking-wide">
          <span data-pdf-color="#e2bd66" className="bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        {/* Age — large gold numeral over a serif label */}
        <div className="mt-2 flex flex-col items-center">
          <span className="text-sm uppercase tracking-[0.45em] text-amber-300/80">
            {t('template.common.turns', 'turning')}
          </span>
          <span data-pdf-color="#d4a437" className="bg-gradient-to-b from-amber-300 to-amber-600 bg-clip-text font-display text-[120px] font-semibold leading-none text-transparent">
            {age}
          </span>
        </div>
      </main>

      <footer className="relative mb-12 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-amber-400/60">
          <span className="h-px w-10 bg-amber-400/40" />
          <span className="text-xs">✦</span>
          <span className="h-px w-10 bg-amber-400/40" />
        </div>
        <p className="font-serif text-2xl text-amber-100">{date}</p>
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300/90">{time}</p>
        <p className="mt-1 max-w-[20rem] font-serif text-[15px] italic text-amber-200/70">{venue}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-amber-300/80">
          {t('template.common.joinUs', 'An Evening of Fine Celebration')}
        </p>
      </footer>
    </div>
  )
}
