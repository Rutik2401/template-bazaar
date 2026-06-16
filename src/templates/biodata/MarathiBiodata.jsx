'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Maharashtrian ornamental pieces ───────────────────────────────────── */

function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 70 96" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="35" cy="16" rx="10" ry="12" fill="currentColor" fillOpacity="0.18" />
      <path d="M35 28c-9 0-16-3-21-8 7-1 14 1 21 6 7-5 14-7 21-6-5 5-12 8-21 8Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M24 32h22l-3 7c9 4 14 12 14 22 0 12-10 21-22 21s-22-9-22-21c0-10 5-18 14-22l-3-7Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M18 52h34" />
      <path d="M22 64h26" opacity="0.7" />
    </svg>
  )
}

function ToranBorder({ className = '' }) {
  return (
    <svg viewBox="0 0 794 40" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 3h794" opacity="0.7" />
      <path d="M0 7h794" opacity="0.35" />
      {Array.from({ length: 22 }).map((_, i) => {
        const x = 18 + i * 36
        return (
          <g key={i}>
            <path d={`M${x} 5c-7 8-7 20 0 28c7-8 7-20 0-28Z`} fill="currentColor" fillOpacity="0.2" />
            <path d={`M${x} 11c-3 4-3 11 0 15c3-4 3-11 0-15Z`} fill="currentColor" fillOpacity="0.4" stroke="none" />
            <circle cx={x} cy="35" r="2.8" fill="currentColor" stroke="none" />
            <circle cx={x + 18} cy="6" r="1.6" fill="currentColor" stroke="none" opacity="0.6" />
          </g>
        )
      })}
    </svg>
  )
}

function Swastik({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square">
      <path d="M20 8v24M8 20h24" />
      <path d="M20 8h8M8 20v8M20 32h-8M32 20v-8" />
      <circle cx="13" cy="13" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="27" cy="13" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="13" cy="27" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="27" cy="27" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-dashed border-[#1b6e3a]/25 py-[9px] last:border-b-0">
      <span className="flex w-44 shrink-0 items-baseline gap-2 text-[15px] font-semibold text-[#1b6e3a]">
        <span className="h-1.5 w-1.5 shrink-0 translate-y-[-1px] rotate-45 bg-[#e07b1e]" />
        {label}
      </span>
      <span className="text-[16.5px] leading-snug text-[#3a2a18]">{value}</span>
    </div>
  )
}

/**
 * Marathi Marriage Biodata — Maharashtrian traditional, saffron & green accents.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function MarathiBiodata({ values }) {
  const { t } = useI18n()
  const name = values.fullName?.trim() || 'Rohan Mehta'
  const age = values.age?.trim() || '27 years'
  const height = values.height?.trim() || `5' 10" (178 cm)`
  const education = values.education?.trim() || 'B.E. Computer Science'
  const occupation = values.occupation?.trim() || 'Software Engineer at Infosys'
  const family = toList(values.familyDetails, { separator: /\n/ })
  const contact = values.contact?.trim() || '+91 98765 43210'

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fff8ec] font-serif text-[#3a2a18]"
    >
      {/* warm wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(224,123,30,0.07),_transparent_55%)]" />

      {/* saffron & green pallu bands */}
      <div className="absolute inset-x-0 top-0 h-9 bg-gradient-to-r from-[#c2641b] via-[#f59e0b] to-[#c2641b]" />
      <div className="absolute inset-x-0 top-9 h-[2px] bg-[#1b6e3a]/30" />
      <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-r from-[#1b6e3a] via-[#2f9c54] to-[#1b6e3a]" />
      <div className="absolute inset-x-0 bottom-9 h-[2px] bg-[#e07b1e]/30" />
      <ToranBorder className="absolute inset-x-0 top-9 h-9 text-[#c2641b]" />

      {/* saffron / green double frame */}
      <div className="absolute inset-x-7 inset-y-[80px] rounded-sm border-2 border-[#e07b1e]/70" />
      <div className="absolute inset-x-[42px] inset-y-[94px] rounded-sm border border-[#1b6e3a]/40" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[72px] pb-20 pt-[96px]">
        <header className="flex flex-col items-center text-center">
          <Kalash className="h-[68px] w-[60px] text-[#c2641b]" />
          <p className="mt-2 text-[23px] leading-none tracking-wide text-[#c2641b]">॥ श्री गणेशाय नमः ॥</p>
          <p className="mt-2 font-display text-[21px] text-[#1b6e3a]">{t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}</p>
          <h1 className="mt-3 font-display text-[38px] font-semibold tracking-wide text-[#e07b1e]">
            <span data-pdf-color="#e07b1e">विवाह परिचय</span>
          </h1>
          <div className="mt-3 flex items-center gap-3 text-[#1b6e3a]">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#1b6e3a]/50" />
            <Swastik className="h-5 w-5" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#1b6e3a]/50" />
          </div>
        </header>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 border-b-2 border-[#e07b1e]/30 pb-1.5 text-[14px] font-bold uppercase tracking-[0.2em] text-[#e07b1e]">
            <span className="h-2.5 w-2.5 rotate-45 bg-[#e07b1e]" />
            {t('template.common.personalDetails', 'Personal Details')}
          </h2>
          <div className="mt-3">
            <Row label={t('template.common.name', 'Name')} value={name} />
            <Row label={t('template.common.age', 'Age')} value={age} />
            <Row label={t('template.common.height', 'Height')} value={height} />
            <Row label={t('template.common.education', 'Education')} value={education} />
            <Row label={t('template.common.occupation', 'Occupation')} value={occupation} />
          </div>
        </section>

        <section className="mt-7">
          <h2 className="flex items-center gap-2 border-b-2 border-[#1b6e3a]/30 pb-1.5 text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b6e3a]">
            <span className="h-2.5 w-2.5 rotate-45 bg-[#1b6e3a]" />
            {t('template.common.familyDetails', 'Family Details')}
          </h2>
          <div className="mt-3 rounded-md border border-[#1b6e3a]/15 bg-[#1b6e3a]/[0.06] px-5 py-3">
            {family.map((f, i) => (
              <p key={i} className="flex items-baseline gap-2.5 py-[5px] text-[16.5px] text-[#3a2a18]">
                <span className="h-1.5 w-1.5 shrink-0 translate-y-[-1px] rotate-45 bg-[#1b6e3a]/60" />
                <span>{f}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="flex items-center gap-2 border-b-2 border-[#e07b1e]/30 pb-1.5 text-[14px] font-bold uppercase tracking-[0.2em] text-[#e07b1e]">
            <span className="h-2.5 w-2.5 rotate-45 bg-[#e07b1e]" />
            {t('template.common.contact', 'Contact')}
          </h2>
          <p className="mt-3 text-[18px] font-semibold tracking-wide text-[#1b6e3a]">{contact}</p>
        </section>

        <footer className="mt-auto flex items-center justify-center gap-3 text-[#c2641b]">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c2641b]/40" />
          <span className="text-[14px] italic tracking-wide">॥ शुभं भवतु ॥</span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c2641b]/40" />
        </footer>
      </div>
    </div>
  )
}
