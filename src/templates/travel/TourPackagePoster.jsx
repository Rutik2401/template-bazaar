'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Scenic tour-package poster — a glowing sunset sky, layered SVG mountain
 * ranges, a rising sun, a checklist of trip highlights and a bold price badge.
 * Natural design size: 720 × 960.
 */
export default function TourPackagePoster({ values }) {
  const { t } = useI18n()
  const packageName = values.packageName?.trim() || 'Magical Kerala 5N/6D'
  const price = values.price?.trim() || '₹ 18,999'
  const contact = values.contact?.trim() || '+91 98765 43210'
  const highlights = toList(values.highlights, { separator: /\n/ })
  const list = highlights.length
    ? highlights
    : ['Alleppey houseboat stay', 'Munnar tea gardens', 'Kochi heritage walk', 'All meals & transfers']

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#0b1f3a] font-sans text-white"
    >
      {/* sunset sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2b1055] via-[#7b2d8e] to-[#ff8a4c]" />

      {/* rising sun glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_64%,rgba(255,214,140,0.55),transparent_42%)]" />

      {/* the sun disc */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="tourSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff4cc" />
            <stop offset="55%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#ff9a3c" />
          </radialGradient>
          <linearGradient id="tourMtnFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5b2d6b" />
            <stop offset="100%" stopColor="#3a1c52" />
          </linearGradient>
          <linearGradient id="tourMtnMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a1c52" />
            <stop offset="100%" stopColor="#241038" />
          </linearGradient>
          <linearGradient id="tourMtnNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#180b28" />
            <stop offset="100%" stopColor="#0b0518" />
          </linearGradient>
        </defs>
        <circle cx="360" cy="612" r="150" fill="url(#tourSun)" />
      </svg>

      {/* layered mountains */}
      <svg viewBox="0 0 720 960" className="absolute inset-x-0 bottom-0 h-[460px] w-full" preserveAspectRatio="none">
        <path d="M0 760 L120 600 L250 720 L380 540 L520 700 L640 590 L720 660 L720 960 L0 960 Z" fill="url(#tourMtnFar)" opacity="0.9" />
        <path d="M0 830 L150 690 L300 800 L430 660 L560 790 L720 700 L720 960 L0 960 Z" fill="url(#tourMtnMid)" />
        <path d="M0 900 L130 800 L280 880 L420 790 L580 880 L720 810 L720 960 L0 960 Z" fill="url(#tourMtnNear)" />
        {/* snow caps */}
        <path d="M380 540 L405 575 L355 575 Z" fill="#ffffff" opacity="0.85" />
        <path d="M120 600 L140 628 L100 628 Z" fill="#ffffff" opacity="0.7" />
      </svg>

      {/* drifting birds */}
      <svg viewBox="0 0 80 24" className="absolute right-16 top-20 h-6 w-20 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 12c6-8 12-8 18 0c6-8 12-8 18 0" />
        <path d="M44 18c5-6 10-6 15 0" opacity="0.7" />
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 py-14">
        {/* header */}
        <header className="text-center">
          <p className="inline-block rounded-full bg-white/15 px-6 py-2 text-[13px] font-bold uppercase tracking-[0.4em] text-amber-100 backdrop-blur-sm">
            {t('template.common.tourPackage', 'Tour Package')}
          </p>
          <h1 className="mt-6 font-display text-[52px] font-extrabold leading-[1.02] drop-shadow-lg">
            <span
              data-pdf-color="#ffe39a"
              className="bg-gradient-to-b from-amber-100 via-amber-200 to-orange-300 bg-clip-text text-transparent"
            >
              {packageName}
            </span>
          </h1>
        </header>

        {/* highlights checklist */}
        <div className="mt-auto rounded-3xl bg-white/12 p-7 backdrop-blur-md ring-1 ring-white/25">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.3em] text-amber-100/90">
            {t('template.common.tripHighlights', 'Trip Highlights')}
          </p>
          <ul className="space-y-3.5">
            {list.map((item, i) => (
              <li key={i} className="flex items-center gap-3.5 text-[19px] font-medium leading-snug">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[#0b1f3a]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-white/95">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* price + contact */}
        <div className="mt-7 flex items-end justify-between gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 px-7 py-4 shadow-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7a2e0a]">
              {t('template.common.startingFrom', 'Starting from')}
            </p>
            <p className="font-display text-[42px] font-black leading-none text-[#3a1404]">{price}</p>
          </div>
          <div className="flex items-center gap-2.5 pb-1 text-[18px] font-bold">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-200" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className="text-white/95">{contact}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
