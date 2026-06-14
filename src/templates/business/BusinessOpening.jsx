'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Decorative confetti scatter ───────────────────────────────────────── */
const CONFETTI = [
  { x: '8%', y: '14%', c: '#fbbf24', r: 12, rot: 18 },
  { x: '88%', y: '10%', c: '#f43f5e', r: 9, rot: -24 },
  { x: '18%', y: '32%', c: '#34d399', r: 7, rot: 40 },
  { x: '80%', y: '30%', c: '#fbbf24', r: 11, rot: 12 },
  { x: '12%', y: '58%', c: '#f43f5e', r: 8, rot: -10 },
  { x: '90%', y: '52%', c: '#34d399', r: 10, rot: 30 },
  { x: '24%', y: '78%', c: '#fbbf24', r: 9, rot: -32 },
  { x: '84%', y: '76%', c: '#f43f5e', r: 7, rot: 22 },
  { x: '50%', y: '8%', c: '#34d399', r: 8, rot: 0 },
]

export default function BusinessOpening({ values }) {
  const { t } = useI18n()
  const business = values.businessName?.trim() || 'Mehta Boutique'
  const owner = values.ownerName?.trim() || 'Rohan & Anita Mehta'
  const date = formatDate(values.date, '20 June 2026')
  const time = formatTime(values.time, '11:00 AM')
  const venue = values.venue?.trim() || 'Shop 14, MG Road, Pune'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#7a0e1f] font-sans text-amber-50"
    >
      {/* rich maroon → crimson backdrop + golden glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9b1124] via-[#7a0e1f] to-[#4a0712]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.22),_transparent_60%)]" />

      {/* confetti */}
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className="absolute block rounded-[2px]"
          style={{
            left: c.x,
            top: c.y,
            width: c.r,
            height: c.r * 1.6,
            background: c.c,
            transform: `rotate(${c.rot}deg)`,
            opacity: 0.9,
          }}
        />
      ))}

      {/* double gold frame */}
      <div className="absolute inset-7 rounded-[28px] border-2 border-amber-300/70" />
      <div className="absolute inset-[38px] rounded-[20px] border border-amber-300/30" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-16 py-20 text-center">
        {/* scissor + ribbon emblem */}
        <div className="relative grid h-24 w-24 place-items-center rounded-full bg-amber-300 text-[#7a0e1f] shadow-[0_0_40px_rgba(251,191,36,0.5)]">
          <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
          </svg>
        </div>

        <p className="mt-8 font-sans text-[13px] font-bold uppercase tracking-[0.5em] text-amber-200">
          {t('template.common.youAreInvited', 'You are cordially invited')}
        </p>

        {/* GRAND OPENING — gold foil */}
        <h1 className="mt-6 font-display text-[68px] font-extrabold uppercase leading-[0.95] tracking-tight">
          <span
            data-pdf-color="#fcd34d"
            className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent"
          >
            {t('template.common.grandOpening', 'Grand Opening')}
          </span>
        </h1>

        {/* ribbon divider */}
        <div className="mt-8 flex items-center gap-3 text-amber-300">
          <span className="h-px w-16 bg-amber-300/60" />
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M12 2 9 9l-7 .5 5.5 4.5L5.5 21 12 17l6.5 4-1.9-6.9L22 9.5 15 9z" />
          </svg>
          <span className="h-px w-16 bg-amber-300/60" />
        </div>

        {/* business name */}
        <p className="mt-8 text-[15px] font-medium uppercase tracking-[0.35em] text-amber-200/80">
          {t('template.common.greetingsFrom', 'with best wishes from')}
        </p>
        <h2 className="mt-3 font-display text-[44px] font-bold leading-tight text-amber-50">{business}</h2>
        <p className="mt-2 text-[18px] italic text-amber-200/90">{owner}</p>

        {/* details card */}
        <div className="mt-auto w-full rounded-2xl border border-amber-300/40 bg-black/20 px-8 py-7 backdrop-blur-sm">
          <div className="flex items-stretch justify-between gap-4 text-left">
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
                {t('template.common.date', 'Date')}
              </p>
              <p className="mt-1 font-display text-[22px] font-semibold text-amber-50">{date}</p>
            </div>
            <span className="w-px self-stretch bg-amber-300/30" />
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
                {t('template.common.time', 'Time')}
              </p>
              <p className="mt-1 font-display text-[22px] font-semibold text-amber-50">{time}</p>
            </div>
          </div>
          <div className="mt-5 border-t border-amber-300/25 pt-4 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="mt-1 text-[17px] font-medium text-amber-50">{venue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
