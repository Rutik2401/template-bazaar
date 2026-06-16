'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Facebook cover banner — wide 1200×630 split layout: brand & tagline on a
 * deep indigo panel at the left, the offer headline & contact on a bright
 * gradient panel at the right. Clean, balanced cover-photo style.
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
      <div className="relative flex w-[46%] flex-col justify-center bg-gradient-to-br from-[#1e1b4b] to-[#0b1030] px-16">
        {/* dot grid accent */}
        <div className="absolute right-8 top-8 grid grid-cols-5 gap-2 opacity-40">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-[#818cf8]" />
          ))}
        </div>

        <span className="mb-7 block h-2 w-24 bg-gradient-to-r from-[#a78bfa] to-[#f472b6]" />
        <h2 className="font-display text-[58px] font-black uppercase leading-[0.92] tracking-tight">
          <span
            data-pdf-color="#c4b5fd"
            className="bg-gradient-to-r from-[#c4b5fd] to-[#f9a8d4] bg-clip-text text-transparent"
          >
            {brand}
          </span>
        </h2>
        <p className="mt-5 text-[20px] font-medium tracking-wide text-indigo-200/90">
          {t('template.common.tagline', 'Style that speaks for you')}
        </p>
      </div>

      {/* ── Right: offer panel ──────────────────────────────────────────── */}
      <div className="relative flex w-[54%] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#7c3aed] via-[#db2777] to-[#f97316] px-16">
        {/* glow */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

        <p className="text-[22px] font-bold uppercase tracking-[0.4em] text-[#ffe27a]">
          {t('template.common.specialOffer', 'Special Offer')}
        </p>

        <h1 className="mt-5 font-display text-[64px] font-black uppercase leading-[0.92] tracking-tight">
          <span
            data-pdf-color="#fff3cf"
            className="bg-gradient-to-b from-white to-amber-200 bg-clip-text text-transparent"
          >
            {offer}
          </span>
        </h1>

        <div className="mt-9 inline-flex w-fit items-center gap-4 rounded-full bg-black/30 px-8 py-3.5 text-[24px] font-extrabold backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          {contact}
        </div>
      </div>
    </div>
  )
}
