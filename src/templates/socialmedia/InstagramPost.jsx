'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Instagram promotion post — a scroll-stopping square creative. Vivid
 * purple→pink→orange mesh, layered glow blobs, a confetti spark field and an
 * oversized offer headline framed by a glassy ticket. Strong brand mark up top,
 * a punchy "Shop Now" pill and a footer handle/contact bar.
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
      {/* diagonal sheen for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/15" />

      {/* glowing blobs */}
      <div className="absolute -left-44 -top-44 h-[520px] w-[520px] rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-52 -right-36 h-[560px] w-[560px] rounded-full bg-[#ffd24d]/25 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#ff2d9b]/25 blur-3xl" />

      {/* concentric ring + confetti accents */}
      <svg viewBox="0 0 1080 1080" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <g opacity="0.22">
          {[520, 410, 300].map((r) => (
            <circle key={r} cx="540" cy="540" r={r} fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 16" />
          ))}
        </g>
        <g opacity="0.7">
          {[
            [110, 150, '#ffe27a'], [980, 120, '#ffffff'], [150, 880, '#ffffff'],
            [930, 940, '#ffe27a'], [80, 520, '#ffd24d'], [1010, 560, '#ffd24d'],
          ].map(([cx, cy, fill], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 2 ? 7 : 11} fill={fill} />
          ))}
          {[[210, 250], [880, 300], [240, 760], [860, 800]].map(([x, y], i) => (
            <rect key={`s${i}`} x={x} y={y} width="16" height="16" rx="3" fill="#ffffff" opacity="0.6" transform={`rotate(${i * 25} ${x + 8} ${y + 8})`} />
          ))}
        </g>
      </svg>

      {/* corner frame ticks */}
      <div className="absolute left-12 top-12 h-16 w-16 rounded-tl-[28px] border-l-4 border-t-4 border-white/40" />
      <div className="absolute bottom-12 right-12 h-16 w-16 rounded-br-[28px] border-b-4 border-r-4 border-white/40" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-20 py-[88px] text-center">
        {/* brand pill */}
        <p className="rounded-full bg-black/35 px-10 py-3.5 font-display text-[28px] font-extrabold uppercase tracking-[0.4em] text-white shadow-lg ring-1 ring-white/25 backdrop-blur-md">
          {brand}
        </p>

        {/* eyebrow */}
        <p className="mt-auto inline-flex items-center gap-5 text-[28px] font-bold uppercase tracking-[0.5em] text-[#ffe27a] drop-shadow">
          <span className="h-px w-12 bg-[#ffe27a]/70" />
          {t('template.common.specialOffer', 'Special Offer')}
          <span className="h-px w-12 bg-[#ffe27a]/70" />
        </p>

        {/* mega offer headline on a glassy ticket */}
        <div className="relative mt-9 w-full max-w-[40rem] rounded-[2.25rem] bg-white/10 px-10 py-12 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/25 backdrop-blur-md">
          {/* ticket notches */}
          <span className="absolute -left-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#ff2d9b]" />
          <span className="absolute -right-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-[#ff2d9b]" />
          <h1 className="font-display text-[82px] font-black uppercase leading-[0.9] tracking-tight">
            <span
              data-pdf-color="#fff1c2"
              className="bg-gradient-to-b from-white via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
            >
              {offer}
            </span>
          </h1>
        </div>

        {/* CTA hint */}
        <div className="mt-11 inline-flex items-center gap-4 rounded-full bg-white px-12 py-5 text-[28px] font-black uppercase tracking-[0.18em] text-[#a8005c] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)]">
          {t('template.common.shopNow', 'Shop Now')}
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>

        {/* footer: handle + contact */}
        <div className="mt-auto flex w-full items-center justify-between rounded-2xl bg-black/25 px-8 py-4 text-[24px] font-bold ring-1 ring-white/15 backdrop-blur-sm">
          <span className="inline-flex items-center gap-3 text-white/95">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            {handle}
          </span>
          <span className="h-7 w-px bg-white/25" />
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
