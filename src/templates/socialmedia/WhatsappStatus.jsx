'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * WhatsApp status — a tall 9:16 vertical story built for the phone. A vibrant
 * teal→emerald gradient with flowing waves and glow, a "Mega Sale" hero, the
 * offer in a crisp white card, a dashed coupon divider and the contact pinned
 * to the bottom in a bright action pill. High-contrast and thumb-stopping.
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
      {/* depth sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/10" />

      {/* soft glows */}
      <div className="absolute -right-44 top-32 h-[600px] w-[600px] rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -left-48 bottom-24 h-[620px] w-[620px] rounded-full bg-[#aef9d6]/20 blur-3xl" />

      {/* flowing waves + spark dots */}
      <svg viewBox="0 0 1080 1920" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <g opacity="0.16" stroke="#ffffff" fill="none" strokeWidth="3">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${360 + i * 280} C 300 ${260 + i * 280}, 780 ${460 + i * 280}, 1080 ${320 + i * 280}`}
            />
          ))}
        </g>
        <g opacity="0.55" fill="#ffffff">
          {[[120, 220], [960, 260], [180, 1480], [920, 1560], [90, 980], [1000, 900]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 2 ? 8 : 13} />
          ))}
        </g>
      </svg>

      {/* large faux percent watermark */}
      <span className="pointer-events-none absolute -right-10 top-[640px] select-none font-display text-[420px] font-black leading-none text-white/10">%</span>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-24 py-32 text-center">
        {/* brand + status dot */}
        <div className="inline-flex items-center gap-4 rounded-full bg-black/30 px-12 py-5 shadow-lg ring-1 ring-white/20 backdrop-blur-md">
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#aef9d6] opacity-60" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#aef9d6]" />
          </span>
          <span className="font-display text-[36px] font-extrabold uppercase tracking-[0.3em]">{brand}</span>
        </div>

        {/* hero block */}
        <div className="mt-auto flex flex-col items-center">
          {/* eyebrow */}
          <p className="inline-flex items-center gap-6 text-[34px] font-bold uppercase tracking-[0.45em] text-[#d4ffe9] drop-shadow">
            <span className="h-px w-14 bg-[#d4ffe9]/70" />
            {t('template.common.specialOffer', 'Special Offer')}
            <span className="h-px w-14 bg-[#d4ffe9]/70" />
          </p>

          {/* mega headline */}
          <h1 className="mt-12 font-display text-[124px] font-black uppercase leading-[0.84] tracking-tighter drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]">
            {t('template.common.mega', 'Mega')}
            <br />
            <span
              data-pdf-color="#fff1b8"
              className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 bg-clip-text text-transparent"
            >
              {t('template.common.sale', 'Sale')}
            </span>
          </h1>

          {/* offer card */}
          <div className="relative mt-14 w-full overflow-hidden rounded-[2.5rem] bg-white px-14 py-16 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)]">
            <span className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-[#00d97e] to-[#075e54]" />
            <p className="text-[54px] font-black leading-[1.04] text-[#075e54]">{offer}</p>
            {/* dashed coupon divider */}
            <div className="mt-10 flex items-center gap-4">
              <span className="h-3 w-3 rounded-full bg-[#019875]" />
              <span className="h-0.5 flex-1 bg-[repeating-linear-gradient(to_right,#019875_0,#019875_14px,transparent_14px,transparent_26px)]" />
              <span className="h-3 w-3 rounded-full bg-[#019875]" />
            </div>
          </div>
        </div>

        {/* contact pinned bottom */}
        <div className="mt-auto flex w-full flex-col items-center gap-7">
          <span className="text-[32px] font-semibold uppercase tracking-[0.32em] text-[#d4ffe9]">
            {t('template.common.orderNow', 'Order Now')}
          </span>
          <div className="inline-flex items-center gap-5 rounded-full bg-black/35 px-14 py-7 text-[46px] font-extrabold shadow-xl ring-1 ring-white/20 backdrop-blur-md">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-[#04231d]">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            {contact}
          </div>
        </div>
      </div>
    </div>
  )
}
