'use client'

import { useI18n } from '@/i18n/I18nProvider'

/**
 * Bold sale-style food poster — a vivid red→orange wall, a giant starburst
 * badge wrapping the offer and urgent "limited time" energy. Loud and direct,
 * dressed up with a fork-and-spoon crest and appetizing gold accents.
 * Natural design size: 720 × 960.
 */
export default function OfferPromotionPoster({ values }) {
  const { t } = useI18n()
  const restaurantName = values.restaurantName?.trim() || 'Spice Garden'
  const offer = values.offer?.trim() || 'Buy 1 Get 1 Free'
  const contactNumber = values.contactNumber?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#b00d12] font-sans text-white"
    >
      {/* vivid base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8a00] via-[#e11d2a] to-[#7a080d]" />

      {/* sunburst rays */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.16]" preserveAspectRatio="none">
        {Array.from({ length: 28 }).map((_, i) => {
          const a = (i * 360) / 28
          return (
            <path
              key={i}
              d="M360 480 L350 -260 L370 -260 Z"
              fill="#fff2cc"
              transform={`rotate(${a} 360 480)`}
            />
          )
        })}
      </svg>

      {/* soft top/bottom vignette for legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/30 to-transparent" />

      {/* checker corners */}
      {['right-8 top-8', 'left-8 bottom-8'].map((pos, c) => (
        <div key={c} className={`absolute ${pos} grid grid-cols-3 gap-1.5 opacity-80`}>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className={`h-3 w-3 ${i % 2 === 0 ? 'bg-[#ffd24d]' : 'bg-transparent'}`} />
          ))}
        </div>
      ))}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-12 py-[60px] text-center">
        {/* restaurant name pill with fork & spoon crest */}
        <p className="inline-flex items-center gap-3 rounded-full bg-black/30 px-7 py-2.5 font-display text-[22px] font-bold tracking-wide text-[#ffe9a8] ring-1 ring-white/15 backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ffd24d]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v7a2.5 2.5 0 0 1-5 0V3M5.5 3v18M19 3c-2 0-3.5 2.5-3.5 6.5S17 16 19 16M19 3v18" />
          </svg>
          {restaurantName}
        </p>

        <p className="mt-7 text-[16px] font-extrabold uppercase tracking-[0.45em] text-white/90 drop-shadow-sm">
          {t('template.common.megaDeal', 'Mega Deal')}
        </p>

        {/* giant starburst badge */}
        <div className="relative mt-7 flex h-[420px] w-[420px] items-center justify-center">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full drop-shadow-2xl">
            <polygon
              points={Array.from({ length: 48 })
                .map((_, i) => {
                  const ang = (i * Math.PI * 2) / 48
                  const rad = i % 2 === 0 ? 98 : 80
                  return `${100 + rad * Math.cos(ang)},${100 + rad * Math.sin(ang)}`
                })
                .join(' ')}
              fill="#7a080d"
            />
            <circle cx="100" cy="100" r="76" fill="#fff6e0" />
            <circle cx="100" cy="100" r="76" fill="none" stroke="#ffd24d" strokeWidth="3" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#e11d2a" strokeWidth="2.5" strokeDasharray="3 5" />
          </svg>
          <div className="relative flex max-w-[15rem] flex-col items-center px-4">
            <span className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.34em] text-[#c40b11]/80">
              {t('template.common.specialOffer', 'Special Offer')}
            </span>
            <span className="font-display text-[40px] font-black uppercase leading-[0.95] tracking-tight">
              <span
                data-pdf-color="#c40b11"
                className="bg-gradient-to-b from-[#e11d2a] to-[#8a0a0f] bg-clip-text text-transparent"
              >
                {offer}
              </span>
            </span>
          </div>
        </div>

        {/* urgency strip */}
        <div className="mt-9 -rotate-2 bg-[#ffd24d] px-8 py-2.5 shadow-[0_6px_0_rgba(0,0,0,0.25)]">
          <span className="font-display text-[22px] font-black uppercase tracking-[0.18em] text-[#8a0a0f]">
            {t('template.common.limitedTime', 'Limited Time Only')}
          </span>
        </div>

        {/* footer: order now + phone */}
        <div className="mt-auto inline-flex items-center gap-3 rounded-full bg-black/35 px-8 py-3.5 text-[21px] font-extrabold ring-1 ring-white/15 backdrop-blur-sm">
          <span className="uppercase tracking-[0.16em] text-[#ffd24d]">
            {t('template.common.orderNow', 'Order Now')}
          </span>
          <span className="h-5 w-px bg-white/40" />
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className="text-white">{contactNumber}</span>
        </div>
      </div>
    </div>
  )
}
