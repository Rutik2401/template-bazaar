'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* Deterministic confetti layout (no randomness so the preview never jumps). */
const CONFETTI = [
  { x: 8, y: 10, c: '#fde047', r: -18, k: 'rect' },
  { x: 22, y: 5, c: '#f472b6', r: 24, k: 'rect' },
  { x: 40, y: 9, c: '#38bdf8', r: -8, k: 'dot' },
  { x: 58, y: 4, c: '#a78bfa', r: 30, k: 'rect' },
  { x: 76, y: 8, c: '#34d399', r: -22, k: 'dot' },
  { x: 90, y: 13, c: '#fb923c', r: 12, k: 'rect' },
  { x: 5, y: 30, c: '#38bdf8', r: 16, k: 'rect' },
  { x: 94, y: 34, c: '#fde047', r: -26, k: 'dot' },
  { x: 12, y: 52, c: '#f472b6', r: 10, k: 'rect' },
  { x: 88, y: 56, c: '#a78bfa', r: -14, k: 'dot' },
  { x: 7, y: 74, c: '#34d399', r: 28, k: 'rect' },
  { x: 93, y: 78, c: '#fb923c', r: -10, k: 'dot' },
  { x: 20, y: 90, c: '#fde047', r: 18, k: 'rect' },
  { x: 50, y: 94, c: '#38bdf8', r: -20, k: 'rect' },
  { x: 80, y: 91, c: '#f472b6', r: 22, k: 'dot' },
]

/* Curled paper streamers floating behind the content. */
const STREAMERS = [
  { d: 'M-10 60C60 20 90 110 170 70', c: '#fde047', o: 0.5 },
  { d: 'M520 30C580 80 540 150 620 130', c: '#f472b6', o: 0.5 },
  { d: 'M30 760C100 720 120 820 200 780', c: '#34d399', o: 0.45 },
]

function Balloon({ className = '', color = '#f472b6', highlight = '#fbcfe8' }) {
  return (
    <svg viewBox="0 0 80 120" className={className} fill="none">
      <defs>
        <radialGradient id={`bg-${color}`} cx="36%" cy="30%" r="72%">
          <stop offset="0" stopColor={highlight} />
          <stop offset="0.55" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0.92" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="42" rx="34" ry="40" fill={`url(#bg-${color})`} />
      <path d="M40 82l-6 8h12l-6-8Z" fill={color} />
      <path d="M40 90c7 9-7 14 0 22s-7 12 0 20" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="29" cy="28" rx="6.5" ry="10" fill="#ffffff" fillOpacity="0.5" />
      <ellipse cx="50" cy="58" rx="3" ry="5" fill="#ffffff" fillOpacity="0.22" />
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
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-600 to-fuchsia-600 font-party text-white"
    >
      {/* Glow blobs */}
      <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-sky-400/35 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-pink-400/35 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/20 blur-[120px]" />

      {/* Bokeh sparkle dots */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.5)_0,transparent_2px),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.4)_0,transparent_2.5px),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.35)_0,transparent_2px),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.4)_0,transparent_2px)]" />

      {/* Streamers */}
      <svg viewBox="0 0 640 900" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none">
        {STREAMERS.map((s, i) => (
          <path key={i} d={s.d} stroke={s.c} strokeOpacity={s.o} strokeWidth="4" strokeLinecap="round" strokeDasharray="2 9" />
        ))}
      </svg>

      {/* Confetti */}
      {CONFETTI.map((p, i) =>
        p.k === 'dot' ? (
          <span
            key={i}
            className="absolute block h-2.5 w-2.5 rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, backgroundColor: p.c, opacity: 0.95 }}
          />
        ) : (
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
        )
      )}

      {/* Balloons */}
      <Balloon className="absolute left-9 top-24 h-40 w-[104px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]" color="#f472b6" highlight="#fbcfe8" />
      <Balloon className="absolute right-7 top-14 h-48 w-[120px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]" color="#38bdf8" highlight="#bae6fd" />
      <Balloon className="absolute -right-2 top-44 h-28 w-20 opacity-90 drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)]" color="#fde047" highlight="#fef9c3" />

      <div className="relative flex h-full flex-col items-center justify-between px-12 py-16 text-center">
        <header className="mt-6 flex flex-col items-center">
          <p className="rounded-full bg-white/10 px-5 py-1.5 text-sm font-semibold uppercase tracking-[0.5em] text-white/90 ring-1 ring-inset ring-white/25 backdrop-blur-sm">
            {t('template.birthday.invited')}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            <span aria-hidden>🎉</span> {t('template.birthday.partyTitle')} <span aria-hidden>🎈</span>
          </h2>
        </header>

        {/* Hero age badge */}
        <main className="flex flex-col items-center">
          <p className="text-lg font-medium tracking-wide text-white/85">{t('template.birthday.celebrating')}</p>
          <h1 className="mt-2 text-[64px] font-extrabold leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
            <span
              data-pdf-color="#fde047"
              className="bg-gradient-to-br from-white via-amber-100 to-yellow-300 bg-clip-text text-transparent"
            >
              {personName}
            </span>
          </h1>

          <div className="relative mt-9 flex h-56 w-56 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-white/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/40" />
            <div className="absolute inset-3.5 rounded-full border-2 border-dashed border-white/55" />
            <div className="relative flex flex-col items-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">{t('template.birthday.turns')}</span>
              <span className="bg-gradient-to-b from-white to-amber-100 bg-clip-text text-[92px] font-extrabold leading-none text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.25)]">
                {age}
              </span>
            </div>
          </div>
        </main>

        {/* Detail chips */}
        <footer className="w-full">
          <div className="mx-auto grid max-w-sm gap-3">
            <DetailChip icon="📅" label={t('template.birthday.when')} value={`${date} · ${time}`} />
            <DetailChip icon="📍" label={t('template.birthday.where')} value={venue} />
          </div>
          <p className="mt-7 text-base font-medium tracking-wide text-white/85">
            {t('template.birthday.funLine')}
          </p>
        </footer>
      </div>
    </div>
  )
}

function DetailChip({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/15 px-5 py-4 text-left shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/20 backdrop-blur-md">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20 text-2xl ring-1 ring-inset ring-white/25" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">{label}</p>
        <p className="text-lg font-semibold leading-snug">{value}</p>
      </div>
    </div>
  )
}
