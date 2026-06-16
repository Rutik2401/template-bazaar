'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* Festive confetti scatter */
const CONFETTI = [
  { x: '6%', y: '10%', c: '#fde68a', r: 13, rot: 20 },
  { x: '90%', y: '8%', c: '#f87171', r: 10, rot: -28 },
  { x: '16%', y: '24%', c: '#fcd34d', r: 8, rot: 44 },
  { x: '82%', y: '22%', c: '#fbbf24', r: 12, rot: 14 },
  { x: '10%', y: '46%', c: '#f43f5e', r: 9, rot: -12 },
  { x: '92%', y: '44%', c: '#fde68a', r: 11, rot: 34 },
  { x: '22%', y: '64%', c: '#fbbf24', r: 9, rot: -36 },
  { x: '86%', y: '62%', c: '#f87171', r: 8, rot: 24 },
  { x: '46%', y: '6%', c: '#fcd34d', r: 9, rot: 0 },
  { x: '70%', y: '14%', c: '#fde68a', r: 7, rot: -18 },
  { x: '32%', y: '14%', c: '#f43f5e', r: 7, rot: 30 },
]

/**
 * Grand Opening Poster — festive red & gold, a ribbon stretched across the
 * poster with scissors mid-cut, confetti rain and a towering "GRAND OPENING".
 * Natural design size: 720 × 960.
 */
export default function GrandOpeningPoster({ values }) {
  const { t } = useI18n()
  const shop = values.shopName?.trim() || 'Mehta Boutique'
  const owner = values.ownerName?.trim() || 'Rohan Mehta'
  const date = formatDate(values.date, '20 June 2026')
  const address = values.address?.trim() || 'Shop 14, MG Road, Pune'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#7e0f1d] font-display text-amber-50"
    >
      {/* deep crimson backdrop + golden glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a51427] via-[#7e0f1d] to-[#480610]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,_rgba(252,211,77,0.28),_transparent_62%)]" />

      {/* radiating gold rays behind the headline */}
      <div className="absolute left-1/2 top-[340px] h-[640px] w-[640px] -translate-x-1/2 opacity-25">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d="M100 100 L96 0 L104 0 Z"
              fill="#fcd34d"
              transform={`rotate(${(360 / 24) * i} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* confetti */}
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className="absolute block rounded-[2px]"
          style={{
            left: c.x,
            top: c.y,
            width: c.r,
            height: c.r * 1.7,
            background: c.c,
            transform: `rotate(${c.rot}deg)`,
            opacity: 0.92,
          }}
        />
      ))}

      {/* double gold frame */}
      <div className="absolute inset-6 rounded-[30px] border-2 border-amber-300/70" />
      <div className="absolute inset-[34px] rounded-[22px] border border-amber-300/30" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-14 pt-16 pb-14 text-center">
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.55em] text-amber-200">
          {t('template.common.youAreInvited', 'You are invited to the')}
        </p>

        {/* GRAND OPENING — gold foil */}
        <h1 className="mt-5 font-display text-[78px] font-extrabold uppercase leading-[0.86] tracking-tight">
          <span
            data-pdf-color="#fcd34d"
            className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent"
          >
            {t('template.common.grand', 'Grand')}
            <br />
            {t('template.common.opening', 'Opening')}
          </span>
        </h1>

        {/* ribbon + scissors cutting it */}
        <div className="relative mt-10 flex h-24 w-full items-center justify-center">
          {/* the ribbon band */}
          <div className="absolute left-0 right-0 top-1/2 h-7 -translate-y-1/2 bg-gradient-to-r from-rose-700 via-rose-500 to-rose-700 shadow-[0_4px_18px_rgba(0,0,0,0.35)]" />
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-amber-200/50" />
          {/* the cut gap */}
          <div className="absolute left-1/2 top-1/2 h-9 w-2 -translate-x-1/2 -translate-y-1/2 rotate-6 bg-[#7e0f1d]" />
          {/* scissors */}
          <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-amber-300 text-[#7e0f1d] shadow-[0_0_36px_rgba(252,211,77,0.55)]">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
            </svg>
          </div>
        </div>

        {/* shop name */}
        <p className="mt-10 font-sans text-[14px] font-medium uppercase tracking-[0.35em] text-amber-200/80">
          {t('template.common.greetingsFrom', 'of')}
        </p>
        <h2 className="mt-3 font-display text-[46px] font-bold leading-tight text-amber-50">{shop}</h2>
        <p className="mt-2 font-sans text-[18px] italic text-amber-200/90">{owner}</p>

        {/* details card */}
        <div className="mt-auto w-full rounded-2xl border border-amber-300/40 bg-black/20 px-8 py-7 backdrop-blur-sm">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-amber-300">
            {t('template.common.date', 'Date')}
          </p>
          <p className="mt-1 font-display text-[28px] font-semibold text-amber-50">{date}</p>
          <div className="mt-5 border-t border-amber-300/25 pt-4">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-amber-300">
              {t('template.common.venue', 'Address')}
            </p>
            <p className="mt-1 font-sans text-[17px] font-medium text-amber-50">{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
