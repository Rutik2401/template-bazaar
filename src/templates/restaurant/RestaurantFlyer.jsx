'use client'

import { useI18n } from '@/i18n/I18nProvider'

/**
 * Mouth-watering promo flyer — warm reds & deep charcoal, a big hand-drawn
 * plated-dish-with-steam motif and the offer called out on a bold ribbon. Built
 * to make a hungry passer-by stop and read.
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a160f] via-[#52100c] to-[#240b08]" />
      <div className="absolute left-1/2 top-[340px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#ff6a3d]/30 blur-[90px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,180,77,0.16),transparent_55%)]" />

      {/* faint scattered spice dots */}
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.13]" preserveAspectRatio="none">
        {Array.from({ length: 44 }).map((_, i) => {
          const x = (i * 137) % 720
          const y = (i * 219) % 960
          return <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 1.6} fill="#ffd9a8" />
        })}
      </svg>

      {/* hairline gold frame */}
      <div className="absolute inset-7 rounded-[10px] border border-[#ffb27a]/25" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-14 py-[60px] text-center">
        {/* eyebrow */}
        <p className="inline-flex items-center gap-3 rounded-full border border-[#ffb27a]/50 bg-black/15 px-6 py-2 text-[12px] font-bold uppercase tracking-[0.45em] text-[#ffcfa3]">
          <span className="h-1 w-1 rounded-full bg-[#ff7a2f]" />
          {t('template.common.nowServing', 'Now Serving')}
          <span className="h-1 w-1 rounded-full bg-[#ff7a2f]" />
        </p>

        {/* restaurant name */}
        <h1 className="mt-6 font-display text-[58px] font-black leading-[0.95] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          <span
            data-pdf-color="#ffb84d"
            className="bg-gradient-to-b from-[#ffe1a8] via-[#ffb84d] to-[#ff7a2f] bg-clip-text text-transparent"
          >
            {restaurantName}
          </span>
        </h1>

        {/* small flourish under name */}
        <div className="mt-4 flex items-center gap-2.5 text-[#ffb27a]">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#ffb27a]/70" />
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
            <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11Z" />
          </svg>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#ffb27a]/70" />
        </div>

        {/* big plated-dish motif with rising steam */}
        <div className="relative mt-6 h-[300px] w-[300px]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full drop-shadow-[0_22px_34px_rgba(0,0,0,0.5)]">
            {/* steam */}
            <g fill="none" stroke="#ffe7c4" strokeWidth="3.5" strokeLinecap="round" opacity="0.85">
              <path d="M76 58c-9-10 9-16 0-29" />
              <path d="M100 53c-9-12 9-18 0-31" />
              <path d="M124 58c-9-10 9-16 0-29" />
            </g>
            {/* plate */}
            <ellipse cx="100" cy="136" rx="82" ry="32" fill="#2a0d0a" opacity="0.55" />
            <ellipse cx="100" cy="130" rx="82" ry="32" fill="#fff4e6" />
            <ellipse cx="100" cy="130" rx="78" ry="29" fill="none" stroke="#e8d4b3" strokeWidth="1.5" />
            <ellipse cx="100" cy="129" rx="62" ry="23" fill="#f2e5cf" />
            {/* food mound */}
            <path d="M56 127c6-28 32-43 44-43s38 15 44 43Z" fill="#c43c1a" />
            <path d="M68 125c5-18 22-28 32-28s27 10 32 28Z" fill="#ff7a2f" />
            <path d="M80 122c3-11 13-18 20-18s17 7 20 18Z" fill="#ffa24d" />
            {/* garnish */}
            <circle cx="84" cy="112" r="6.5" fill="#7bb661" />
            <circle cx="84" cy="112" r="2.5" fill="#5e9447" />
            <circle cx="114" cy="108" r="5.5" fill="#ffd24d" />
            <circle cx="100" cy="118" r="4.5" fill="#8a1f12" />
            <path d="M96 104c4-3 9-3 13 0" fill="none" stroke="#5e9447" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </div>

        {/* offer ribbon */}
        <div className="relative mt-8 w-full">
          <div className="mx-auto inline-flex max-w-[30rem] flex-col items-center rounded-lg bg-gradient-to-r from-[#ff7a2f] via-[#f23a22] to-[#e11d2a] px-10 py-5 shadow-[0_10px_0_#7a160f] ring-1 ring-white/15">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.4em] text-white/80">
              {t('template.common.specialOffer', 'Special Offer')}
            </span>
            <span className="font-display text-[34px] font-black uppercase leading-[1.02] tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {offer}
            </span>
          </div>
        </div>

        <p className="mt-7 max-w-[24rem] text-[17px] font-medium leading-snug text-[#ffe6cc]">
          {t('template.common.dineInTakeaway', 'Dine-in & takeaway — freshly cooked, served hot.')}
        </p>

        {/* footer */}
        <div className="mt-auto inline-flex items-center gap-3 rounded-full bg-black/35 px-7 py-3 text-[20px] font-extrabold text-[#ffcfa3] ring-1 ring-[#ffb27a]/25 backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          {contactNumber}
        </div>
      </div>
    </div>
  )
}
