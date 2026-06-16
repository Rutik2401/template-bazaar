'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Elegant à-la-carte menu card — cream paper, charcoal type and a gold accent.
 * Each line "Dish | ₹Price" is laid out with a classic dotted leader between the
 * dish name and its price. Topped with a hand-drawn fork & spoon crest.
 * Natural design size: 720 × 960.
 */
export default function FoodMenuCard({ values }) {
  const { t } = useI18n()
  const restaurantName = values.restaurantName?.trim() || 'Spice Garden'
  const contactNumber = values.contactNumber?.trim() || '+91 98765 43210'

  const raw = toList(values.menuItems, { separator: /\n/ })
  const lines = raw.length
    ? raw
    : [
        'Paneer Tikka | ₹ 220',
        'Butter Chicken | ₹ 340',
        'Veg Biryani | ₹ 260',
        'Gulab Jamun | ₹ 120',
        'Masala Chai | ₹ 40',
      ]
  const items = lines.map((l) => {
    const [name, price] = l.split('|')
    return { name: (name || '').trim(), price: (price || '').trim() }
  })

  return (
    <div
      data-export-root
      className="relative h-[960px] w-[720px] overflow-hidden bg-[#f7f1e3] font-serif text-[#2b2522]"
    >
      {/* subtle paper vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf6ea] via-[#f7f1e3] to-[#efe6d2]" />

      {/* thin gold inner frame */}
      <div className="absolute inset-6 rounded-[6px] border border-[#c9a14a]/60" />
      <div className="absolute inset-[26px] rounded-[4px] border border-[#c9a14a]/30" />

      {/* corner flourishes */}
      {[
        'left-8 top-8',
        'right-8 top-8 scale-x-[-1]',
        'left-8 bottom-8 scale-y-[-1]',
        'right-8 bottom-8 -scale-100',
      ].map((pos, i) => (
        <svg key={i} viewBox="0 0 60 60" className={`absolute ${pos} h-14 w-14 text-[#c9a14a]`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M6 6c20 0 38 0 48 8M6 6c0 20 0 38 8 48" />
          <circle cx="6" cy="6" r="2.4" fill="currentColor" stroke="none" />
        </svg>
      ))}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-16 py-16">
        {/* crest: fork & spoon */}
        <div className="flex justify-center">
          <svg viewBox="0 0 64 64" className="h-16 w-16 text-[#c9a14a]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 8v14a5 5 0 0 1-10 0V8M19 8v18M19 26v30" />
            <path d="M45 8c-4 0-7 5-7 13s3 11 7 11M45 8c4 0 7 5 7 13s-3 11-7 11M45 32v24" />
          </svg>
        </div>

        {/* header */}
        <p className="mt-4 text-center text-[12px] font-semibold uppercase tracking-[0.55em] text-[#c9a14a]">
          {t('template.common.menu', 'Menu')}
        </p>
        <h1 className="mt-3 text-center font-display text-[46px] font-bold leading-[1.05] tracking-wide text-[#2b2522]">
          {restaurantName}
        </h1>

        {/* divider */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-[#c9a14a]/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#c9a14a]" />
          <span className="h-px w-20 bg-[#c9a14a]/60" />
        </div>

        {/* menu list with dotted leaders */}
        <ul className="mt-10 flex-1 space-y-6">
          {items.slice(0, 8).map((it, i) => (
            <li key={i} className="flex items-baseline gap-3">
              <span className="font-display text-[24px] font-medium tracking-wide text-[#2b2522]">
                {it.name}
              </span>
              <span className="mb-1.5 flex-1 border-b border-dotted border-[#2b2522]/35" />
              <span className="font-display text-[23px] font-semibold tracking-wide text-[#9a3b1b]">
                {it.price}
              </span>
            </li>
          ))}
        </ul>

        {/* footer */}
        <div className="mt-8 flex items-center justify-center gap-3 border-t border-[#c9a14a]/40 pt-6">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#c9a14a]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
          <span className="text-[18px] font-medium tracking-wide text-[#2b2522]">{contactNumber}</span>
        </div>
      </div>
    </div>
  )
}
