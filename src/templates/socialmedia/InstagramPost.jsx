'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Instagram promotion post — bold centred promo on a vivid purple→pink→orange
 * gradient, oversized offer headline, brand handle and a swipe/CTA hint.
 * Natural design size: 1080 × 1080 (square).
 */
export default function InstagramPost({ values }) {
  const { t } = useI18n()
  const brand = values.brandName?.trim() || 'Mehta Boutique'
  const offer = values.offerText?.trim() || 'Flat 50% OFF on the entire collection!'
  const contact = values.contact?.trim() || '+91 98765 43210'
  const handle = '@' + brand.toLowerCase().replace(/[^a-z0-9]+/g, '')

  return (
    <div
      data-export-root
      className="relative h-[1080px] w-[1080px] overflow-hidden bg-[#1a0033] font-sans text-white"
    >
      {/* vivid gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c1fff] via-[#ff2d9b] to-[#ff8a00]" />

      {/* glowing blobs */}
      <div className="absolute -left-40 -top-40 h-[460px] w-[460px] rounded-full bg-white/15 blur-3xl" />
      <div className="absolute -bottom-48 -right-32 h-[520px] w-[520px] rounded-full bg-[#ffd24d]/20 blur-3xl" />

      {/* concentric ring accent */}
      <svg viewBox="0 0 1080 1080" className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="none">
        {[520, 410, 300].map((r) => (
          <circle key={r} cx="540" cy="540" r={r} fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 14" />
        ))}
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-20 py-20 text-center">
        {/* brand pill */}
        <p className="rounded-full bg-black/30 px-9 py-3 font-display text-[26px] font-extrabold uppercase tracking-[0.35em] text-white backdrop-blur-sm">
          {brand}
        </p>

        {/* eyebrow */}
        <p className="mt-auto text-[30px] font-bold uppercase tracking-[0.55em] text-[#ffe27a]">
          {t('template.common.specialOffer', 'Special Offer')}
        </p>

        {/* mega offer headline */}
        <h1 className="mt-8 max-w-[34rem] font-display text-[80px] font-black uppercase leading-[0.92] tracking-tight">
          <span
            data-pdf-color="#fff1c2"
            className="bg-gradient-to-b from-white via-amber-100 to-amber-300 bg-clip-text text-transparent"
          >
            {offer}
          </span>
        </h1>

        {/* CTA hint */}
        <div className="mt-12 inline-flex items-center gap-4 rounded-full bg-white px-10 py-4 text-[26px] font-black uppercase tracking-[0.18em] text-[#a8005c]">
          {t('template.common.shopNow', 'Shop Now')}
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>

        {/* footer: handle + contact */}
        <div className="mt-auto flex w-full items-center justify-between text-[24px] font-bold">
          <span className="inline-flex items-center gap-3 text-white/95">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            {handle}
          </span>
          <span className="inline-flex items-center gap-3 text-white/95">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {contact}
          </span>
        </div>
      </div>
    </div>
  )
}
