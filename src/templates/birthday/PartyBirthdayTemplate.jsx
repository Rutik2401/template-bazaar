'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* Deterministic confetti layout (no randomness so the preview never jumps). */
const CONFETTI = [
  { x: 8, y: 10, c: '#fde047', r: -18 },
  { x: 22, y: 5, c: '#f472b6', r: 24 },
  { x: 40, y: 9, c: '#38bdf8', r: -8 },
  { x: 58, y: 4, c: '#a78bfa', r: 30 },
  { x: 76, y: 8, c: '#34d399', r: -22 },
  { x: 90, y: 13, c: '#fb923c', r: 12 },
  { x: 5, y: 30, c: '#38bdf8', r: 16 },
  { x: 94, y: 34, c: '#fde047', r: -26 },
  { x: 12, y: 52, c: '#f472b6', r: 10 },
  { x: 88, y: 56, c: '#a78bfa', r: -14 },
  { x: 7, y: 74, c: '#34d399', r: 28 },
  { x: 93, y: 78, c: '#fb923c', r: -10 },
  { x: 20, y: 90, c: '#fde047', r: 18 },
  { x: 50, y: 94, c: '#38bdf8', r: -20 },
  { x: 80, y: 91, c: '#f472b6', r: 22 },
]

function Balloon({ className = '', color = '#f472b6', highlight = '#fbcfe8' }) {
  return (
    <svg viewBox="0 0 80 120" className={className} fill="none">
      <defs>
        <radialGradient id={`bg-${color}`} cx="38%" cy="32%" r="70%">
          <stop offset="0" stopColor={highlight} />
          <stop offset="1" stopColor={color} />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="42" rx="34" ry="40" fill={`url(#bg-${color})`} />
      <path d="M40 82l-6 8h12l-6-8Z" fill={color} />
      <path d="M40 90c6 10-6 16 0 28" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" fill="none" />
      <ellipse cx="30" cy="30" rx="6" ry="9" fill="#ffffff" fillOpacity="0.45" />
    </svg>
  )
}

/**
 * Modern colourful birthday invitation.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function PartyBirthdayTemplate({ values }) {
  const { t } = useI18n()
  const personName = values.personName?.trim() || 'Aarav'
  const age = values.age?.toString().trim() || '7'
  const date = formatDate(values.date, 'Saturday')
  const time = formatTime(values.time, '4:00 PM')
  const venue = values.venue?.trim() || 'Funland Play Cafe, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 font-party text-white"
    >
      {/* Glow blobs */}
      <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl" />

      {/* Confetti */}
      {CONFETTI.map((p, i) => (
        <span
          key={i}
          className="absolute block h-3.5 w-2.5 rounded-[2px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.c,
            transform: `rotate(${p.r}deg)`,
            opacity: 0.95,
          }}
        />
      ))}

      {/* Balloons */}
      <Balloon className="absolute left-10 top-24 h-36 w-24 drop-shadow-xl" color="#f472b6" highlight="#fbcfe8" />
      <Balloon className="absolute right-8 top-16 h-44 w-28 drop-shadow-xl" color="#38bdf8" highlight="#bae6fd" />

      <div className="relative flex h-full flex-col items-center justify-between px-12 py-16 text-center">
        <header className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/80">{t('template.birthday.invited')}</p>
          <h2 className="mt-3 text-4xl font-extrabold drop-shadow-sm">
            <span aria-hidden>🎉</span> {t('template.birthday.partyTitle')} <span aria-hidden>🎈</span>
          </h2>
        </header>

        {/* Hero age badge */}
        <main className="flex flex-col items-center">
          <p className="text-lg font-medium text-white/85">{t('template.birthday.celebrating')}</p>
          <h1 className="mt-1 text-[64px] font-extrabold leading-none drop-shadow-md">{personName}</h1>

          <div className="relative mt-8 flex h-52 w-52 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm" />
            <div className="absolute inset-3 rounded-full border-2 border-dashed border-white/60" />
            <div className="relative flex flex-col items-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/85">{t('template.birthday.turns')}</span>
              <span className="text-[88px] font-extrabold leading-none">{age}</span>
            </div>
          </div>
        </main>

        {/* Detail chips */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-sm gap-3">
            <DetailChip icon="📅" label={t('template.birthday.when')} value={`${date} · ${time}`} />
            <DetailChip icon="📍" label={t('template.birthday.where')} value={venue} />
          </div>
          <p className="mt-7 text-base font-medium text-white/85">
            {t('template.birthday.funLine')}
          </p>
        </footer>
      </div>
    </div>
  )
}

function DetailChip({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/15 px-5 py-4 text-left backdrop-blur-md">
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">{label}</p>
        <p className="text-lg font-semibold leading-snug">{value}</p>
      </div>
    </div>
  )
}
