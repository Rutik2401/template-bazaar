'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * WhatsApp status template — tall 9:16 vertical story with a large headline,
 * the offer in a bright card and contact pinned to the bottom. Vibrant teal→
 * emerald palette, high-contrast and readable on a phone.
 * Natural design size: 1080 × 1920 (9:16).
 */
export default function WhatsappStatus({ values }) {
  const { t } = useI18n()
  const brand = values.brandName?.trim() || 'Mehta Boutique'
  const offer = values.offerText?.trim() || 'Flat 50% OFF on the entire collection!'
  const contact = values.contact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[1920px] w-[1080px] overflow-hidden bg-[#04231d] font-sans text-white"
    >
      {/* vibrant vertical gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00d97e] via-[#019875] to-[#075e54]" />

      {/* soft glow + wave */}
      <div className="absolute -right-40 top-40 h-[560px] w-[560px] rounded-full bg-white/15 blur-3xl" />
      <svg viewBox="0 0 1080 1920" className="absolute inset-0 h-full w-full opacity-15" preserveAspectRatio="none">
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${360 + i * 280} C 300 ${260 + i * 280}, 780 ${460 + i * 280}, 1080 ${320 + i * 280}`}
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
        ))}
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-24 py-28 text-center">
        {/* brand + status dot */}
        <div className="inline-flex items-center gap-4 rounded-full bg-black/25 px-10 py-4 backdrop-blur-sm">
          <span className="h-4 w-4 rounded-full bg-[#aef9d6]" />
          <span className="font-display text-[34px] font-extrabold uppercase tracking-[0.28em]">{brand}</span>
        </div>

        {/* eyebrow */}
        <p className="mt-auto text-[36px] font-bold uppercase tracking-[0.5em] text-[#d4ffe9]">
          {t('template.common.specialOffer', 'Special Offer')}
        </p>

        {/* mega headline */}
        <h1 className="mt-10 font-display text-[120px] font-black uppercase leading-[0.86] tracking-tighter">
          {t('template.common.mega', 'Mega')}
          <br />
          <span
            data-pdf-color="#fff1b8"
            className="bg-gradient-to-r from-amber-100 to-amber-300 bg-clip-text text-transparent"
          >
            {t('template.common.sale', 'Sale')}
          </span>
        </h1>

        {/* offer card */}
        <div className="mt-12 w-full rounded-[2.5rem] bg-white px-12 py-14 shadow-2xl">
          <p className="text-[52px] font-black leading-[1.05] text-[#075e54]">{offer}</p>
        </div>

        {/* contact pinned bottom */}
        <div className="mt-auto flex w-full flex-col items-center gap-6">
          <span className="text-[30px] font-semibold uppercase tracking-[0.3em] text-[#d4ffe9]">
            {t('template.common.orderNow', 'Order Now')}
          </span>
          <div className="inline-flex items-center gap-5 rounded-full bg-black/30 px-12 py-6 text-[44px] font-extrabold backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {contact}
          </div>
        </div>
      </div>
    </div>
  )
}
