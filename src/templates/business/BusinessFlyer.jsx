'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Bold marketing flyer — oversized type, hard-edged geometric shapes, a
 * high-energy lime/black palette and a feature list. Strong & modern.
 * Natural design size: 720 × 960.
 */
export default function BusinessFlyer({ values }) {
  const { t } = useI18n()
  const business = values.businessName?.trim() || 'Apex Fitness Studio'
  const tagline = values.tagline?.trim() || 'Train Harder. Live Stronger.'
  const phone = values.phone?.trim() || '+91 98765 43210'
  const address = values.address?.trim() || '2nd Floor, MG Road, Pune'

  const features = toList(values.offerDetails, { separator: /\n/ })
  const points = features.length
    ? features
    : [
        'State-of-the-art equipment',
        'Certified personal trainers',
        'Group classes every day',
        'Free trial for new members',
      ]

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#0b0f17] font-sans text-white"
    >
      {/* geometric shapes */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rotate-12 bg-lime-400" />
      <div className="absolute -left-16 top-44 h-44 w-44 rounded-full border-[18px] border-lime-400/30" />
      <div className="absolute bottom-0 left-0 h-72 w-full skew-y-[-6deg] bg-gradient-to-r from-lime-400 to-emerald-400 origin-bottom-left" />
      <div className="absolute right-10 top-10 grid grid-cols-4 gap-2 opacity-80">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-[#0b0f17]" />
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-14 py-16">
        {/* eyebrow */}
        <p className="text-[13px] font-extrabold uppercase tracking-[0.5em] text-lime-400">
          {business}
        </p>

        {/* mega headline */}
        <h1 className="mt-10 font-display text-[92px] font-black uppercase leading-[0.88] tracking-tighter text-white">
          {tagline.split(' ').slice(0, 2).join(' ')}
          <br />
          <span
            data-pdf-color="#a3e635"
            className="bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent"
          >
            {tagline.split(' ').slice(2).join(' ') || 'Today'}
          </span>
        </h1>

        <span className="mt-8 block h-2 w-28 bg-lime-400" />

        {/* feature list */}
        <ul className="mt-12 space-y-5">
          {points.slice(0, 5).map((p, i) => (
            <li key={i} className="flex items-center gap-4 text-[22px] font-semibold text-slate-100">
              <span className="grid h-9 w-9 shrink-0 place-items-center bg-lime-400 text-[#0b0f17]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* footer over the lime banner */}
        <div className="mt-auto pb-2 text-[#0b0f17]">
          <div className="flex items-center gap-3 text-[24px] font-black">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {phone}
          </div>
          <div className="mt-2 flex items-center gap-3 text-[18px] font-bold">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {address}
          </div>
        </div>
      </div>
    </div>
  )
}
