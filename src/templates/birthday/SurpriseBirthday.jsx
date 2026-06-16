'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* Deterministic neon confetti streamers. */
const CONFETTI = [
  { x: 6, y: 8, c: '#f0f', r: -20, w: 10, h: 4 },
  { x: 18, y: 4, c: '#0ff', r: 30, w: 4, h: 12 },
  { x: 34, y: 10, c: '#ff0', r: -10, w: 8, h: 8 },
  { x: 50, y: 5, c: '#39ff14', r: 24, w: 5, h: 12 },
  { x: 66, y: 9, c: '#ff006e', r: -28, w: 10, h: 4 },
  { x: 80, y: 4, c: '#00e5ff', r: 14, w: 6, h: 10 },
  { x: 92, y: 11, c: '#fbff00', r: -16, w: 8, h: 8 },
  { x: 4, y: 26, c: '#39ff14', r: 18, w: 5, h: 11 },
  { x: 95, y: 30, c: '#f0f', r: -24, w: 9, h: 4 },
  { x: 8, y: 70, c: '#0ff', r: 12, w: 7, h: 9 },
  { x: 90, y: 66, c: '#ff006e', r: -14, w: 6, h: 11 },
  { x: 14, y: 88, c: '#fbff00', r: 26, w: 9, h: 5 },
  { x: 38, y: 93, c: '#39ff14', r: -18, w: 5, h: 12 },
  { x: 62, y: 92, c: '#00e5ff', r: 20, w: 9, h: 5 },
  { x: 86, y: 90, c: '#f0f', r: -22, w: 6, h: 10 },
]

/* Curled neon streamers behind the content. */
const STREAMERS = [
  { d: 'M-20 90C70 30 120 150 220 100', c: '#d946ef', o: 0.55 },
  { d: 'M660 70C560 130 600 230 480 200', c: '#22d3ee', o: 0.5 },
  { d: 'M40 800C140 740 160 860 260 820', c: '#facc15', o: 0.45 },
]

/* Tiny twinkles for extra glow. */
const TWINKLES = [
  { x: 28, y: 22, s: 3, c: '#f0abfc' },
  { x: 74, y: 28, s: 2.5, c: '#67e8f9' },
  { x: 20, y: 58, s: 2.5, c: '#fde047' },
  { x: 82, y: 60, s: 3, c: '#f0abfc' },
]

/**
 * Surprise party — dark backdrop, neon glow, confetti, loud "SURPRISE!" energy.
 * Natural design size: 640 × 900.
 */
export default function SurpriseBirthday({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'Aarav'
  const age = values.age?.toString().trim() || '7'
  const date = formatDate(values.date, 'Saturday')
  const time = formatTime(values.time, '4:00 PM')
  const venue = values.venue?.trim() || 'Funland Play Cafe, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#08010f] px-12 py-16 text-center font-party text-white"
    >
      {/* Radial spotlight from centre */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.32),transparent_64%)]" />
      {/* Neon glow blobs */}
      <div className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-fuchsia-600/35 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-cyan-500/35 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-400/15 blur-[90px]" />

      {/* Streamers */}
      <svg viewBox="0 0 640 900" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none">
        {STREAMERS.map((s, i) => (
          <path key={i} d={s.d} stroke={s.c} strokeOpacity={s.o} strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />
        ))}
      </svg>

      {/* Confetti streamers */}
      {CONFETTI.map((p, i) => (
        <span
          key={i}
          className="absolute block rounded-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.w}px`,
            height: `${p.h}px`,
            backgroundColor: p.c,
            transform: `rotate(${p.r}deg)`,
            boxShadow: `0 0 8px ${p.c}`,
          }}
        />
      ))}

      {/* Twinkles */}
      {TWINKLES.map((tw, i) => (
        <span
          key={`tw-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${tw.x}%`,
            top: `${tw.y}%`,
            width: `${tw.s}px`,
            height: `${tw.s}px`,
            backgroundColor: tw.c,
            boxShadow: `0 0 10px 2px ${tw.c}`,
          }}
        />
      ))}

      <header className="relative mt-8 flex flex-col items-center gap-3">
        <p className="text-sm font-bold uppercase tracking-[0.5em] text-cyan-300 [text-shadow:0_0_12px_rgba(34,211,238,0.8)]">
          {t('template.common.youAreInvited', 'Shhh… You Are Invited')}
        </p>
        {/* SURPRISE! headline — neon outline */}
        <h2 className="text-[64px] font-black uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_#f0abfc] [text-shadow:0_0_18px_rgba(240,171,252,0.9),0_0_44px_rgba(217,70,239,0.6)]">
          {t('template.common.birthdayParty', 'Surprise!')}
        </h2>
      </header>

      <main className="relative flex flex-col items-center gap-5">
        <p className="text-lg font-semibold uppercase tracking-[0.3em] text-fuchsia-300/90">
          {t('template.common.celebrating', "It's a secret party for")}
        </p>
        <h1 className="text-[60px] font-extrabold leading-none">
          <span
            data-pdf-color="#22d3ee"
            className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(217,70,239,0.45)]"
          >
            {name}
          </span>
        </h1>

        {/* Age in a glowing neon ring */}
        <div className="relative mt-4 flex h-48 w-48 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.18),transparent_70%)]" />
          <div className="absolute inset-0 rounded-full border-2 border-fuchsia-400/70 [box-shadow:0_0_26px_rgba(217,70,239,0.7),inset_0_0_26px_rgba(217,70,239,0.5)]" />
          <div className="absolute inset-3 rounded-full border border-cyan-300/55 [box-shadow:0_0_14px_rgba(34,211,238,0.4)]" />
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-200">
              {t('template.common.turns', 'turning')}
            </span>
            <span className="text-[88px] font-black leading-none text-yellow-300 [text-shadow:0_0_20px_rgba(253,224,71,0.9)]">
              {age}
            </span>
          </div>
        </div>
      </main>

      <footer className="relative mb-4 flex w-full flex-col items-center gap-3">
        <div className="flex w-full max-w-sm flex-col gap-3">
          <div className="rounded-xl border border-fuchsia-400/45 bg-white/[0.06] px-5 py-3 text-lg font-bold shadow-[0_0_22px_-6px_rgba(217,70,239,0.6)] backdrop-blur-sm">
            <span aria-hidden>🕒</span> {date} · {time}
          </div>
          <div className="rounded-xl border border-cyan-400/45 bg-white/[0.06] px-5 py-3 text-base font-bold shadow-[0_0_22px_-6px_rgba(34,211,238,0.6)] backdrop-blur-sm">
            <span aria-hidden>📍</span> {venue}
          </div>
        </div>
        <p className="mt-3 text-base font-bold uppercase tracking-[0.25em] text-yellow-300 [text-shadow:0_0_12px_rgba(253,224,71,0.7)]">
          {t('template.common.joinUs', "Don't spoil the surprise!")}
        </p>
      </footer>
    </div>
  )
}
