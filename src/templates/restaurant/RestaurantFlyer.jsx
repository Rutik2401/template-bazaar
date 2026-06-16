'use client'

import { useI18n } from '@/i18n/I18nProvider'

/**
 * Mouth-watering promo flyer — warm reds & deep charcoal, a big hand-drawn
 * dish-with-steam motif and the offer called out on a bold ribbon. Built to
 * make a hungry passer-by stop and read.
 * Natural design size: 720 × 960.
 */
export default function RestaurantFlyer({ values }) {
  const { t } = useI18n()
  const restaurantName = values.restaurantName?.trim() || 'Spice Garden'
  const offer = values.offer?.trim() || 'Buy 1 Get 1 Free'
  const contactNumber = values.contactNumber?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#2a0d0a] font-sans text-[#fff4e6]"
    >
      {/* warm radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a160f] via-[#52100c] to-[#2a0d0a]" />
      <div className="absolute left-1/2 top-[360px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ff6a3d]/25 blur-[80px]" />

      {/* faint scattered spice dots */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i * 137) % 720
          const y = (i * 219) % 960
          return <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 1.6} fill="#ffd9a8" />
        })}
      </svg>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-14 py-16 text-center">
        {/* eyebrow */}
        <p className="rounded-full border border-[#ffb27a]/50 px-6 py-2 text-[12px] font-bold uppercase tracking-[0.45em] text-[#ffcfa3]">
          {t('template.common.nowServing', 'Now Serving')}
        </p>

        {/* restaurant name */}
        <h1 className="mt-7 font-display text-[58px] font-black leading-[0.95] tracking-tight">
          <span
            data-pdf-color="#ffb84d"
            className="bg-gradient-to-b from-[#ffe1a8] via-[#ffb84d] to-[#ff7a2f] bg-clip-text text-transparent"
          >
            {restaurantName}
          </span>
        </h1>

        {/* big plated-dish motif with rising steam */}
        <div className="relative mt-10 h-[300px] w-[300px]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]">
            {/* steam */}
            <g fill="none" stroke="#ffd9a8" strokeWidth="3.5" strokeLinecap="round" opacity="0.85">
              <path d="M78 60c-8-10 8-16 0-28" />
              <path d="M100 56c-8-12 8-18 0-30" />
              <path d="M122 60c-8-10 8-16 0-28" />
            </g>
            {/* plate */}
            <ellipse cx="100" cy="132" rx="78" ry="30" fill="#3a120d" />
            <ellipse cx="100" cy="126" rx="78" ry="30" fill="#fff4e6" />
            <ellipse cx="100" cy="126" rx="60" ry="22" fill="#f0e2cc" />
            {/* food mound */}
            <path d="M58 124c6-26 30-40 42-40s36 14 42 40Z" fill="#d4451f" />
            <path d="M70 122c5-16 20-26 30-26s25 10 30 26Z" fill="#ff7a2f" />
            <circle cx="86" cy="110" r="6" fill="#7bb661" />
            <circle cx="112" cy="106" r="5" fill="#ffd24d" />
            <circle cx="100" cy="116" r="4.5" fill="#8a1f12" />
          </svg>
        </div>

        {/* offer ribbon */}
        <div className="relative mt-10 w-full">
          <div className="mx-auto inline-flex max-w-[30rem] items-center justify-center rounded-md bg-gradient-to-r from-[#ff7a2f] to-[#e11d2a] px-10 py-5 shadow-[0_10px_0_#7a160f]">
            <span className="font-display text-[34px] font-black uppercase leading-tight tracking-wide text-white">
              {offer}
            </span>
          </div>
        </div>

        <p className="mt-7 max-w-[24rem] text-[17px] font-medium leading-snug text-[#ffe6cc]">
          {t('template.common.dineInTakeaway', 'Dine-in & takeaway — freshly cooked, served hot.')}
        </p>

        {/* footer */}
        <div className="mt-auto flex items-center gap-3 rounded-full bg-black/30 px-7 py-3 text-[20px] font-extrabold text-[#ffcfa3] backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          {contactNumber}
        </div>
      </div>
    </div>
  )
}
