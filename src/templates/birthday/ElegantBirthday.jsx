'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* A refined gold corner flourish, mirrored at each corner. */
function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <path d="M4 4h64" stroke="#d4a437" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 4v64" stroke="#d4a437" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 14c40 2 58 20 60 60" stroke="#e2bd66" strokeWidth="1.25" />
      <path d="M16 38c20 1 30 11 31 31" stroke="#e2bd66" strokeWidth="1" opacity="0.7" />
      <path
        d="M22 22c14 0 22 4 28 10s10 14 10 28c-14 0-22-4-28-10s-10-14-10-28Z"
        fill="#d4a437"
        fillOpacity="0.12"
      />
      <circle cx="14" cy="14" r="3" fill="#d4a437" />
      <circle cx="46" cy="46" r="2" fill="#e2bd66" />
    </svg>
  )
}

/* Slim gold divider with a central diamond. */
function GoldDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 200 16" className={className} fill="none" stroke="#d4a437">
      <path d="M8 8h64" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M128 8h64" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M100 2l6 6-6 6-6-6 6-6Z" fill="#d4a437" stroke="none" />
      <circle cx="78" cy="8" r="2" fill="#d4a437" stroke="none" />
      <circle cx="122" cy="8" r="2" fill="#d4a437" stroke="none" />
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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#0b0b0d] px-16 py-16 text-center font-display text-amber-50"
    >
      {/* Deep radial base so the centre lifts off the black */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_70%_at_50%_42%,#1a160c_0%,#0b0b0d_62%)]" />

      {/* Soft gold vignette */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-amber-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-amber-700/12 blur-[120px]" />

      {/* Double thin gold frame */}
      <div className="pointer-events-none absolute inset-7 border border-amber-400/45" />
      <div className="pointer-events-none absolute inset-[34px] border border-amber-400/20" />

      {/* Corner flourishes */}
      <CornerFlourish className="absolute left-9 top-9 h-16 w-16" />
      <CornerFlourish className="absolute right-9 top-9 h-16 w-16 -scale-x-100" />
      <CornerFlourish className="absolute bottom-9 left-9 h-16 w-16 -scale-y-100" />
      <CornerFlourish className="absolute bottom-9 right-9 h-16 w-16 -scale-100" />

      <header className="relative mt-14 flex flex-col items-center">
        <p className="text-[12px] uppercase tracking-[0.55em] text-amber-300">
          {t('template.common.youAreInvited', 'You Are Cordially Invited')}
        </p>
        <GoldDivider className="mt-5 h-4 w-56" />
      </header>

      <main className="relative flex flex-col items-center gap-5">
        <p className="font-serif text-2xl italic text-amber-200/85">
          {t('template.common.celebrating', 'In celebration of')}
        </p>
        <h1 className="font-serif text-[68px] font-medium leading-none tracking-wide drop-shadow-[0_2px_18px_rgba(212,164,55,0.25)]">
          <span data-pdf-color="#e2bd66" className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        {/* Age — large gold numeral over a serif label, framed by a thin ring */}
        <div className="relative mt-4 flex flex-col items-center">
          <span className="text-sm uppercase tracking-[0.45em] text-amber-300/80">
            {t('template.common.turns', 'turning')}
          </span>
          <div className="relative mt-1 flex items-center justify-center">
            <span className="pointer-events-none absolute h-44 w-44 rounded-full border border-amber-400/25" />
            <span className="pointer-events-none absolute h-44 w-44 rounded-full bg-amber-400/5 blur-md" />
            <span data-pdf-color="#d4a437" className="bg-gradient-to-b from-amber-200 via-amber-300 to-amber-600 bg-clip-text font-display text-[124px] font-semibold leading-none text-transparent">
              {age}
            </span>
          </div>
        </div>
      </main>

      <footer className="relative mb-14 flex flex-col items-center gap-3">
        <GoldDivider className="h-4 w-40 opacity-90" />
        <p className="font-serif text-2xl text-amber-100">{date}</p>
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300/90">{time}</p>
        <p className="mt-1 max-w-[20rem] font-serif text-[15px] italic leading-relaxed text-amber-200/70">{venue}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-amber-300/80">
          {t('template.common.joinUs', 'An Evening of Fine Celebration')}
        </p>
      </footer>
    </div>
  )
}
