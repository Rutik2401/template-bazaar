'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Dreamy sky motifs ─────────────────────────────────────────────────── */

/** Crescent moon with a sleeping smile. */
function Moon({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <path
        d="M86 18c-26-8-54 9-58 36s14 52 41 56c14 2 28-3 38-13-30 6-56-14-58-42-1-18 9-32 37-37Z"
        fill="#fde68a"
      />
      <path d="M58 60c4 4 11 4 15 0" stroke="#caa23a" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="56" cy="52" r="2.6" fill="#caa23a" />
      <circle cx="46" cy="64" r="4" fill="#fcd9a0" />
    </svg>
  )
}

/** Twinkle star. */
function Star({ className = '', fill = '#fcd34d', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill} style={style}>
      <path d="M12 2l2.6 6.4L21 9.3l-4.9 4.3L17.6 21 12 17.3 6.4 21l1.5-7.4L3 9.3l6.4-.9L12 2Z" />
    </svg>
  )
}

/** Soft cloud. */
function Cloud({ className = '', fill = '#ffffff' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill={fill}>
      <path d="M30 48c-13 0-22-9-22-19 0-9 7-16 16-17 3-9 11-15 21-15 11 0 20 8 22 19 8 1 15 8 15 16 0 9-8 16-18 16H30Z" />
    </svg>
  )
}

/** Hot-air balloon for a little dreamer. */
function HotAirBalloon({ className = '' }) {
  return (
    <svg viewBox="0 0 90 130" className={className} fill="none">
      <defs>
        <linearGradient id="boyballoon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfdbfe" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path d="M45 6C24 6 10 22 10 44c0 24 22 40 35 52 13-12 35-28 35-52C80 22 66 6 45 6Z" fill="url(#boyballoon)" />
      <path d="M45 6v90" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="2" />
      <path d="M27 10c-6 18-6 56 0 84M63 10c6 18 6 56 0 84" stroke="#3b82f6" strokeOpacity="0.35" strokeWidth="2" fill="none" />
      <path d="M34 96h22l-3 10H37l-3-10Z" fill="#fcd34d" />
      <path d="M36 96l4 10M54 96l-4 10" stroke="#9ca3af" strokeWidth="1.4" />
    </svg>
  )
}

/**
 * Dreamy baby-boy Bārsā — soft blues with moon, stars & clouds, "It's a Boy".
 * Natural design size: 640 × 900 (portrait card).
 */
export default function BoyBaras({ values }) {
  const { t } = useI18n()
  const baby = values.babyName?.trim() || 'Baby Aadya'
  const parents = values.parentName?.trim() || 'Rahul & Sneha'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Our Residence, Nashik'

  /* deterministic twinkle field */
  const stars = [
    { x: 12, y: 14, s: 5 }, { x: 30, y: 9, s: 3.5 }, { x: 72, y: 12, s: 4 },
    { x: 88, y: 22, s: 5 }, { x: 18, y: 30, s: 3 }, { x: 82, y: 40, s: 3.5 },
    { x: 8, y: 52, s: 4 }, { x: 92, y: 58, s: 3 }, { x: 22, y: 66, s: 3.5 },
  ]

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#eef5ff] via-[#dceafe] to-[#eaf3ff] font-serif text-[#3b5a86]"
    >
      {/* sky glow */}
      <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-[#bfdbfe]/55 blur-3xl" />
      <div className="absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-[#93c5fd]/45 blur-3xl" />

      {/* star field */}
      {stars.map((p, i) => (
        <Star key={i} className="absolute" fill={i % 3 === 0 ? '#fcd34d' : '#a9cdfb'}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s * 4, height: p.s * 4 }} />
      ))}

      {/* clouds */}
      <Cloud className="absolute left-8 top-24 h-12 w-24 opacity-90 drop-shadow-sm" />
      <Cloud className="absolute right-10 top-44 h-9 w-20 opacity-80" fill="#eef5ff" />
      <Cloud className="absolute left-16 bottom-36 h-9 w-20 opacity-80" fill="#f4f9ff" />

      {/* moon top-right */}
      <Moon className="absolute right-10 top-14 h-20 w-20 drop-shadow-md" />
      {/* drifting balloon */}
      <HotAirBalloon className="absolute left-10 top-40 h-32 w-24 drop-shadow-md" />

      {/* soft inner frame */}
      <div className="pointer-events-none absolute inset-7 rounded-[2rem] border border-[#93c5fd]/70" />
      <div className="pointer-events-none absolute inset-[34px] rounded-[1.6rem] border border-dashed border-[#bfdbfe]/90" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 pb-20 pt-20 text-center">
        <header className="flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#5b8bd0]">
            {t('template.common.namingCeremony', 'Naming Ceremony')}
          </p>
          {/* It's a Boy ribbon */}
          <div className="mt-5 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#2563eb] px-7 py-2 shadow-[0_12px_30px_-14px_rgba(37,99,235,0.8)]">
            <p className="font-display text-lg font-semibold tracking-wide text-white">
              {t('template.common.itsABoy', "It's a Boy")}
            </p>
          </div>
        </header>

        <main className="flex flex-col items-center">
          <Star className="h-10 w-10 drop-shadow-sm" fill="#fcd34d" />
          <p className="mt-3 text-[15px] italic text-[#5b8bd0]">
            {t('template.common.blessOurBaby', 'Come bless our little one')}
          </p>
          <h1 className="mt-2 font-display text-[60px] font-semibold leading-tight">
            <span
              data-pdf-color="#2563eb"
              className="bg-gradient-to-br from-[#60a5fa] via-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent"
            >
              {baby}
            </span>
          </h1>
          <div className="mt-4 flex items-center gap-2 text-[#5b8bd0]">
            <Star className="h-3 w-3" fill="#3b82f6" />
            <span className="text-[11px] uppercase tracking-[0.32em]">
              {t('template.common.proudParents', 'Proud Parents')}
            </span>
            <Star className="h-3 w-3" fill="#3b82f6" />
          </div>
          <p className="mt-2 font-display text-2xl text-[#3b5a86]">{parents}</p>
        </main>

        <footer className="flex w-full flex-col items-center gap-3">
          <div className="rounded-2xl border border-[#93c5fd]/70 bg-white/70 px-9 py-3 shadow-sm backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#5b8bd0]">{t('template.common.saveTheDate', 'Save the Date')}</p>
            <p className="mt-1 font-display text-2xl text-[#1d4ed8]">{date}{time && ` · ${time}`}</p>
          </div>
          <p className="max-w-[22rem] text-[16px] leading-snug text-[#3b5a86]">{venue}</p>
        </footer>
      </div>
    </div>
  )
}
