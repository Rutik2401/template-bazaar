'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* Festive confetti scatter — layered streamers & dots */
const CONFETTI = [
  { x: '6%', y: '9%', c: '#fde68a', r: 13, rot: 20, round: false },
  { x: '90%', y: '7%', c: '#f87171', r: 10, rot: -28, round: false },
  { x: '15%', y: '23%', c: '#fcd34d', r: 8, rot: 44, round: true },
  { x: '83%', y: '20%', c: '#fbbf24', r: 12, rot: 14, round: false },
  { x: '9%', y: '45%', c: '#f43f5e', r: 9, rot: -12, round: true },
  { x: '93%', y: '43%', c: '#fde68a', r: 11, rot: 34, round: false },
  { x: '21%', y: '63%', c: '#fbbf24', r: 9, rot: -36, round: false },
  { x: '87%', y: '61%', c: '#f87171', r: 8, rot: 24, round: true },
  { x: '45%', y: '5%', c: '#fcd34d', r: 9, rot: 0, round: false },
  { x: '71%', y: '13%', c: '#fde68a', r: 7, rot: -18, round: true },
  { x: '31%', y: '13%', c: '#f43f5e', r: 7, rot: 30, round: false },
  { x: '4%', y: '70%', c: '#fcd34d', r: 8, rot: 52, round: true },
  { x: '95%', y: '72%', c: '#f87171', r: 7, rot: -42, round: false },
  { x: '60%', y: '4%', c: '#fbbf24', r: 6, rot: 16, round: true },
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,_rgba(252,211,77,0.32),_transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

      {/* radiating gold rays behind the headline */}
      <div className="absolute left-1/2 top-[330px] h-[660px] w-[660px] -translate-x-1/2 opacity-[0.22]">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <path
              key={i}
              d="M100 100 L97 0 L103 0 Z"
              fill="#fcd34d"
              opacity={i % 2 === 0 ? 1 : 0.45}
              transform={`rotate(${(360 / 36) * i} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* confetti */}
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className={`absolute block ${c.round ? 'rounded-full' : 'rounded-[2px]'}`}
          style={{
            left: c.x,
            top: c.y,
            width: c.r,
            height: c.round ? c.r : c.r * 1.7,
            background: c.c,
            transform: `rotate(${c.rot}deg)`,
            opacity: 0.92,
            boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
          }}
        />
      ))}

      {/* double gold frame + corner studs */}
      <div className="absolute inset-6 rounded-[30px] border-2 border-amber-300/70 shadow-[inset_0_0_42px_rgba(0,0,0,0.32)]" />
      <div className="absolute inset-[34px] rounded-[22px] border border-amber-300/30" />
      {['left-9 top-9', 'right-9 top-9', 'left-9 bottom-9', 'right-9 bottom-9'].map((p, i) => (
        <span key={i} className={`absolute h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.7)] ${p}`} />
      ))}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-14 pt-[68px] pb-14 text-center">
        {/* eyebrow with flanking rules */}
        <div className="flex items-center gap-4 text-amber-200">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-300/70" />
          <p className="font-sans text-[12px] font-bold uppercase tracking-[0.55em] text-amber-200">
            {t('template.common.youAreInvited', 'You are invited to the')}
          </p>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-300/70" />
        </div>

        {/* GRAND OPENING — gold foil */}
        <h1 className="mt-6 font-display text-[80px] font-extrabold uppercase leading-[0.84] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.35)]">
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
        <div className="relative mt-9 flex h-24 w-full items-center justify-center">
          {/* the ribbon band */}
          <div className="absolute left-0 right-0 top-1/2 h-8 -translate-y-1/2 bg-gradient-to-b from-rose-400 via-rose-600 to-rose-800 shadow-[0_5px_20px_rgba(0,0,0,0.4)]" />
          <div className="absolute left-0 right-0 top-[calc(50%-6px)] h-[2px] bg-amber-100/55" />
          <div className="absolute left-0 right-0 top-[calc(50%+5px)] h-[2px] bg-black/20" />
          {/* the cut gap */}
          <div className="absolute left-1/2 top-1/2 h-11 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-6 bg-[#7e0f1d]" />
          {/* scissors */}
          <div className="relative z-10 grid h-[84px] w-[84px] place-items-center rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-[#7e0f1d] shadow-[0_0_38px_rgba(252,211,77,0.6)] ring-2 ring-amber-100/60">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
            </svg>
          </div>
        </div>

        {/* shop name */}
        <p className="mt-9 font-sans text-[13px] font-medium uppercase tracking-[0.4em] text-amber-200/80">
          {t('template.common.greetingsFrom', 'of')}
        </p>
        <h2 className="mt-3 font-display text-[48px] font-bold leading-tight text-amber-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">{shop}</h2>
        <p className="mt-2 font-sans text-[18px] italic text-amber-200/90">{owner}</p>

        {/* details card */}
        <div className="mt-auto w-full overflow-hidden rounded-2xl border border-amber-300/45 bg-gradient-to-b from-black/25 to-black/10 px-8 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 text-amber-300">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M12 2 9 9l-7 .5 5.5 4.5L5.5 21 12 17l6.5 4-1.9-6.9L22 9.5 15 9z" />
            </svg>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.3em]">
              {t('template.common.date', 'Date')}
            </p>
          </div>
          <p className="mt-1.5 font-display text-[30px] font-semibold text-amber-50">{date}</p>
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
