'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* Deterministic floating balloons — fixed so the preview never jumps. */
const BALLOONS = [
  { x: 6, y: 14, c: '#ff5d8f', h: '#ffc0d4', s: 1 },
  { x: 84, y: 9, c: '#4cc9f0', h: '#bfeaff', s: 1.15 },
  { x: 20, y: 5, c: '#ffd43b', h: '#fff3bf', s: 0.85 },
  { x: 70, y: 18, c: '#8ce99a', h: '#d3f9d8', s: 0.9 },
  { x: 90, y: 30, c: '#b197fc', h: '#e5dbff', s: 0.8 },
]

/* Polka dots scattered along the top band. */
const DOTS = [
  { x: 12, y: 40, c: '#ffd43b' },
  { x: 32, y: 36, c: '#ff5d8f' },
  { x: 52, y: 41, c: '#4cc9f0' },
  { x: 72, y: 35, c: '#8ce99a' },
  { x: 90, y: 44, c: '#b197fc' },
]

function Balloon({ color, highlight }) {
  return (
    <svg viewBox="0 0 80 120" className="h-full w-full" fill="none">
      <defs>
        <radialGradient id={`kb-${color}`} cx="38%" cy="30%" r="72%">
          <stop offset="0" stopColor={highlight} />
          <stop offset="1" stopColor={color} />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="42" rx="33" ry="40" fill={`url(#kb-${color})`} />
      <path d="M40 80l-7 9h14l-7-9Z" fill={color} />
      <path d="M40 89c7 11-7 16 0 29" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2.5" fill="none" />
      <ellipse cx="29" cy="28" rx="6" ry="9" fill="#ffffff" fillOpacity="0.5" />
    </svg>
  )
}

function Star({ className = '', fill = '#ffd43b' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill}>
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
    </svg>
  )
}

/**
 * Kids Cartoon birthday — bright primary colours, playful shapes, huge age.
 * Natural design size: 640 × 900.
 */
export default function KidsCartoonBirthday({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'Aarav'
  const age = values.age?.toString().trim() || '7'
  const date = formatDate(values.date, 'Saturday')
  const time = formatTime(values.time, '4:00 PM')
  const venue = values.venue?.trim() || 'Funland Play Cafe, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#fff8e7] px-12 py-14 text-center font-party text-[#2b2143]"
    >
      {/* Sky band */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#a0e9ff] to-[#fff8e7]" />
      {/* Grass hill */}
      <svg viewBox="0 0 640 160" className="absolute inset-x-0 bottom-0 h-44 w-full" preserveAspectRatio="none">
        <path d="M0 70C160 10 480 10 640 70V160H0Z" fill="#8ce99a" />
        <path d="M0 100C200 50 440 50 640 100V160H0Z" fill="#69db7c" />
      </svg>

      {/* Sun */}
      <div className="absolute right-10 top-8 h-16 w-16 rounded-full bg-[#ffd43b] shadow-[0_0_40px_12px_rgba(255,212,59,0.55)]" />

      {/* Floating balloons */}
      {BALLOONS.map((b, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${64 * b.s}px`, height: `${96 * b.s}px` }}
        >
          <Balloon color={b.c} highlight={b.h} />
        </div>
      ))}

      {/* Polka dots */}
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{ left: `${d.x}%`, top: `${d.y}%`, backgroundColor: d.c }}
        />
      ))}

      <header className="relative mt-10">
        <div className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-white px-6 py-2.5 shadow-[0_8px_0_#ffd43b]">
          <span aria-hidden>🎈</span>
          <p className="text-base font-extrabold uppercase tracking-wider text-[#ff5d8f]">
            {t('template.common.youAreInvited', "You're Invited!")}
          </p>
          <span aria-hidden>🎈</span>
        </div>
      </header>

      <main className="relative flex flex-col items-center">
        <p className="text-2xl font-bold text-[#4cc9f0]">{t('template.common.celebrating', "It's a Party for")}</p>
        <h1 className="mt-1 text-[58px] font-extrabold leading-none text-[#ff5d8f] drop-shadow-[0_3px_0_#ffffff]">
          {name}
        </h1>

        {/* Huge age number with cake */}
        <div className="relative mt-6 flex items-center justify-center">
          <Star className="absolute -left-6 -top-2 h-9 w-9 rotate-12" fill="#4cc9f0" />
          <Star className="absolute -right-4 bottom-2 h-7 w-7 -rotate-12" fill="#b197fc" />
          <span className="text-[200px] font-black leading-none text-[#ffb703] [text-shadow:6px_6px_0_#ff5d8f]">
            {age}
          </span>
        </div>
        <p className="-mt-2 text-2xl font-extrabold uppercase tracking-wide text-[#69db7c]">
          {t('template.common.turns', 'years old')} <span aria-hidden>🎂</span>
        </p>
      </main>

      <footer className="relative mb-2 w-full">
        <div className="mx-auto flex max-w-sm flex-col gap-3">
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3 text-lg font-bold shadow-[0_6px_0_#a0e9ff]">
            <span aria-hidden>📅</span>
            <span>{date} · {time}</span>
          </div>
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3 text-base font-bold shadow-[0_6px_0_#ffc0d4]">
            <span aria-hidden>📍</span>
            <span>{venue}</span>
          </div>
        </div>
        <p className="mt-5 text-xl font-extrabold text-[#ff5d8f]">
          {t('template.common.joinUs', 'Cake, games & lots of fun!')} <span aria-hidden>🎉</span>
        </p>
      </footer>
    </div>
  )
}
