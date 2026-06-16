'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Facebook cover banner — a wide 1200×630 split cover. A deep indigo brand
 * panel on the left (brand mark, tagline, dot-grid + glow) flows through a
 * diagonal seam into a bright purple→pink→orange offer panel on the right with
 * an oversized headline and a contact action pill. Balanced, premium, modern.
 * Natural design size: 1200 × 630 (wide).
 */
export default function FacebookBanner({ values }) {
  const { t } = useI18n()
  const brand = values.brandName?.trim() || 'Mehta Boutique'
  const offer = values.offerText?.trim() || 'Flat 50% OFF on the entire collection!'
  const contact = values.contact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative flex h-[630px] w-[1200px] overflow-hidden bg-[#0b1030] font-sans text-white"
    >
      {/* ── Left: brand panel ───────────────────────────────────────────── */}
      <div className="relative flex w-[46%] flex-col justify-center bg-gradient-to-br from-[#241f63] via-[#1e1b4b] to-[#0b1030] px-16">
        {/* glow + dot grid accents */}
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#6d28d9]/30 blur-3xl" />
        <div className="absolute right-6 top-7 grid grid-cols-5 gap-2.5 opacity-45">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-[#818cf8]" />
          ))}
        </div>
        <div className="absolute bottom-7 left-16 grid grid-cols-6 gap-2.5 opacity-25">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#f472b6]" />
          ))}
        </div>

        <span className="relative mb-7 block h-2.5 w-28 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#f472b6]" />
        <h2 className="relative font-display text-[60px] font-black uppercase leading-[0.9] tracking-tight">
          <span
            data-pdf-color="#c4b5fd"
            className="bg-gradient-to-r from-[#c4b5fd] to-[#f9a8d4] bg-clip-text text-transparent"
          >
            {brand}
          </span>
        </h2>
        <p className="relative mt-5 max-w-[20rem] text-[20px] font-medium leading-snug tracking-wide text-indigo-200/90">
          {t('template.common.tagline', 'Style that speaks for you')}
        </p>
      </div>

      {/* ── Right: offer panel ──────────────────────────────────────────── */}
      <div className="relative flex w-[54%] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#7c3aed] via-[#db2777] to-[#f97316] pl-24 pr-16">
        {/* diagonal seam from the left panel */}
        <div className="absolute -left-px top-0 h-full w-24 -skew-x-[9deg] -translate-x-1/2 bg-[#1e1b4b]" />
        {/* glows */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-28 right-24 h-64 w-64 rounded-full bg-[#ffd24d]/25 blur-3xl" />
        {/* spark dots */}
        <svg viewBox="0 0 600 630" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <g opacity="0.6" fill="#ffffff">
            {[[520, 80], [560, 470], [330, 560], [480, 300]].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 2 ? 5 : 8} />
            ))}
          </g>
        </svg>

        <p className="relative inline-flex items-center gap-3 text-[22px] font-bold uppercase tracking-[0.38em] text-[#ffe27a] drop-shadow">
          <span className="h-px w-9 bg-[#ffe27a]/70" />
          {t('template.common.specialOffer', 'Special Offer')}
        </p>

        <h1 className="relative mt-5 font-display text-[66px] font-black uppercase leading-[0.9] tracking-tight">
          <span
            data-pdf-color="#fff3cf"
            className="bg-gradient-to-b from-white to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          >
            {offer}
          </span>
        </h1>

        <div className="relative mt-9 inline-flex w-fit items-center gap-4 rounded-full bg-black/35 px-8 py-4 text-[24px] font-extrabold shadow-lg ring-1 ring-white/20 backdrop-blur-md">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
          {contact}
        </div>
      </div>
    </div>
  )
}
