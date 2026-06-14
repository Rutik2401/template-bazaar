'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Eye-catching sale / offer poster — a giant offer badge, sunburst rays and a
 * vivid orange→pink gradient. Built to grab attention on a feed or shop wall.
 * Natural design size: 720 × 960.
 */
export default function BusinessOffer({ values }) {
  const { t } = useI18n()
  const business = values.businessName?.trim() || 'Mehta Boutique'
  const offerTitle = values.offerTitle?.trim() || '50% OFF'
  const offerDetails = values.offerDetails?.trim() || 'On the entire summer collection. Limited period only — grab your favourites before they are gone!'
  const validTill = formatDate(values.date, '30 June 2026')
  const phone = values.phone?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#1a0b2e] font-sans text-white"
    >
      {/* vivid gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d75] via-[#ff5e3a] to-[#ffb800]" />

      {/* sunburst rays */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.14]" preserveAspectRatio="none">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 360) / 24
          return (
            <path
              key={i}
              d="M360 480 L360 -200 L420 -200 Z"
              fill="#ffffff"
              transform={`rotate(${a} 360 480)`}
            />
          )
        })}
      </svg>

      {/* decorative dotted ring */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border-[16px] border-dashed border-white/20" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full border-[16px] border-dashed border-white/20" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-14 py-16 text-center">
        {/* header pill */}
        <p className="rounded-full bg-black/25 px-7 py-2.5 text-[14px] font-extrabold uppercase tracking-[0.4em] text-white backdrop-blur-sm">
          {t('template.common.specialOffer', 'Special Offer')}
        </p>

        <p className="mt-6 font-display text-[30px] font-bold tracking-wide text-white/95">{business}</p>

        {/* the big offer badge */}
        <div className="relative mt-10 flex h-[340px] w-[340px] items-center justify-center">
          {/* starburst badge */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full drop-shadow-2xl">
            <polygon
              points={Array.from({ length: 40 })
                .map((_, i) => {
                  const ang = (i * Math.PI * 2) / 40
                  const rad = i % 2 === 0 ? 96 : 82
                  return `${100 + rad * Math.cos(ang)},${100 + rad * Math.sin(ang)}`
                })
                .join(' ')}
              fill="#1a0b2e"
            />
            <circle cx="100" cy="100" r="74" fill="none" stroke="#ffb800" strokeWidth="3" strokeDasharray="4 6" />
          </svg>
          <div className="relative flex flex-col items-center">
            <span className="font-display text-[88px] font-black uppercase leading-[0.9] tracking-tighter">
              <span
                data-pdf-color="#ffd24d"
                className="bg-gradient-to-b from-amber-200 via-amber-300 to-orange-400 bg-clip-text text-transparent"
              >
                {offerTitle}
              </span>
            </span>
          </div>
        </div>

        {/* details */}
        <p className="mt-10 max-w-[26rem] text-[19px] font-medium leading-snug text-white/95">
          {offerDetails}
        </p>

        {/* footer: valid till + phone */}
        <div className="mt-auto w-full">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-black/30 px-7 py-3 text-[15px] font-bold backdrop-blur-sm">
            <span className="uppercase tracking-[0.18em] text-amber-200">
              {t('template.common.validTill', 'Valid till')}
            </span>
            <span className="text-white">{validTill}</span>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-[20px] font-extrabold">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {phone}
          </div>
        </div>
      </div>
    </div>
  )
}
