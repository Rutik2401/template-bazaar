'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Elegant à-la-carte menu card — warm cream paper, charcoal type and a gold
 * accent. Each line "Dish | ₹Price" is laid out with a classic dotted leader
 * between the dish name and its price. Topped with a hand-drawn fork & knife
 * crest and bordered by a fine gold frame for a fine-dining feel.
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
      {/* warm paper gradient + faint grain dots */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcf8ee] via-[#f7f1e3] to-[#ece1cc]" />
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#c9a14a]/10 blur-[90px]" />
      <div className="absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full bg-[#9a3b1b]/10 blur-[90px]" />
      <svg viewBox="0 0 720 960" className="absolute inset-0 h-full w-full opacity-[0.05]" preserveAspectRatio="none">
        {Array.from({ length: 90 }).map((_, i) => {
          const x = (i * 173) % 720
          const y = (i * 271) % 960
          return <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 2.2 : 1.1} fill="#2b2522" />
        })}
      </svg>

      {/* twin gold inner frame */}
      <div className="absolute inset-6 rounded-[8px] border-[1.5px] border-[#c9a14a]/65" />
      <div className="absolute inset-[28px] rounded-[5px] border border-[#c9a14a]/30" />

      {/* corner flourishes */}
      {[
        'left-9 top-9',
        'right-9 top-9 scale-x-[-1]',
        'left-9 bottom-9 scale-y-[-1]',
        'right-9 bottom-9 -scale-100',
      ].map((pos, i) => (
        <svg key={i} viewBox="0 0 60 60" className={`absolute ${pos} h-14 w-14 text-[#c9a14a]`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M5 5c22 0 40 1 50 9M5 5c0 22 1 40 9 50" />
          <path d="M5 5c11 1 18 4 22 11M5 5c1 11 4 18 11 22" opacity="0.55" />
          <circle cx="5" cy="5" r="2.6" fill="currentColor" stroke="none" />
        </svg>
      ))}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col px-16 py-[68px]">
        {/* crest: fork, plate & knife */}
        <div className="flex justify-center">
          <svg viewBox="0 0 96 64" className="h-16 w-24 text-[#c9a14a]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* fork */}
            <path d="M16 6v13a4.5 4.5 0 0 1-9 0V6M11.5 6v17M11.5 23v33" />
            {/* centre plate motif */}
            <circle cx="48" cy="30" r="15" opacity="0.85" />
            <circle cx="48" cy="30" r="9" opacity="0.5" />
            {/* knife */}
            <path d="M82 6c-3.4 0-6 4.4-6 11.5S78.6 28 82 28M82 6v50" />
          </svg>
        </div>

        {/* header */}
        <p className="mt-3 text-center text-[12px] font-semibold uppercase tracking-[0.6em] text-[#c9a14a]">
          {t('template.common.menu', 'Menu')}
        </p>
        <h1 className="mt-3 text-center font-display text-[48px] font-bold leading-[1.04] tracking-wide text-[#2b2522]">
          {restaurantName}
        </h1>

        {/* divider with leaf glyph */}
        <div className="mt-6 flex items-center justify-center gap-3 text-[#c9a14a]">
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#c9a14a]/70" />
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11Z" opacity="0.9" />
          </svg>
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#c9a14a]/70" />
        </div>

        {/* menu list with dotted leaders */}
        <ul className="mt-9 flex-1 space-y-[26px]">
          {items.slice(0, 8).map((it, i) => (
            <li key={i} className="flex items-baseline gap-2.5">
              <span className="font-display text-[24px] font-medium leading-tight tracking-wide text-[#2b2522]">
                {it.name}
              </span>
              <span className="mb-1.5 flex-1 translate-y-0.5 border-b-[2px] border-dotted border-[#2b2522]/30" />
              <span className="font-display text-[23px] font-semibold tracking-wide text-[#9a3b1b]">
                {it.price}
              </span>
            </li>
          ))}
        </ul>

        {/* footer */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-[#c9a14a]/40 pt-6">
          <div className="flex items-center gap-2.5 text-[#c9a14a]">
            <span className="h-px w-8 bg-[#c9a14a]/50" />
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 rotate-45" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="1.5" />
            </svg>
            <span className="h-px w-8 bg-[#c9a14a]/50" />
          </div>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#c9a14a]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.91 11.1a16 16 0 0 0 6 6l1.46-1.34a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span className="text-[18px] font-medium tracking-[0.06em] text-[#2b2522]">{contactNumber}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
