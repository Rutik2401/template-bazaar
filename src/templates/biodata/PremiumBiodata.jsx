'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Refined ornaments ─────────────────────────────────────────────────── */

function ThinFloral({ className = '' }) {
  return (
    <svg viewBox="0 0 200 24" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <path d="M14 12h60M126 12h60" />
      <path d="M100 4c-5 3-8 5-8 8s3 5 8 8c5-3 8-5 8-8s-3-5-8-8Z" fill="currentColor" fillOpacity="0.18" />
      <circle cx="100" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M80 12c4-3 8-3 12 0M120 12c-4-3-8-3-12 0" opacity="0.7" />
      <circle cx="74" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="126" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Monogram({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <circle cx="32" cy="32" r="28" />
      <circle cx="32" cy="32" r="22" opacity="0.5" />
      <path d="M32 14l4.6 9.4L47 25l-7.5 7.3L41.2 43 32 38l-9.2 5 1.7-10.7L17 25l10.4-1.6L32 14Z" fill="currentColor" fillOpacity="0.14" />
    </svg>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline gap-6 py-[9px]">
      <span className="w-40 shrink-0 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-600">{label}</span>
      <span className="flex-1 border-b border-dotted border-stone-300 pb-1 text-[16px] text-stone-700">{value}</span>
    </div>
  )
}

/**
 * Premium Marriage Biodata — cream, thin gold double border, refined serif.
 * Minimal-luxury / sophisticated. Natural design size: 794 × 1123 (A4).
 */
export default function PremiumBiodata({ values }) {
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
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#faf6ee] font-serif text-stone-700"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f2] to-[#f4ecdc]" />

      {/* thin gold double border */}
      <div className="pointer-events-none absolute inset-8 border border-gold-400/70" />
      <div className="pointer-events-none absolute inset-[38px] border border-gold-300/45" />

      <div className="relative flex h-full flex-col px-[88px] pb-[72px] pt-[72px]">
        <header className="flex flex-col items-center text-center">
          <Monogram className="h-16 w-16 text-gold-500" />
          <p className="mt-5 text-[11px] uppercase tracking-[0.5em] text-gold-600">
            {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
          </p>
          <h1 className="mt-2 font-display text-[42px] font-medium leading-tight tracking-wide text-stone-800">
            {t('template.common.biodataTitle', 'Marriage Biodata')}
          </h1>
          <ThinFloral className="mt-3 h-5 w-72 text-gold-500" />
          <p className="mt-5 font-display text-[28px] italic text-gold-700">{name}</p>
        </header>

        <section className="mt-12">
          <h2 className="mb-3 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.4em] text-stone-500">
            <span className="h-px flex-1 bg-gold-400/50" />
            {t('template.common.personalDetails', 'Personal Details')}
            <span className="h-px flex-1 bg-gold-400/50" />
          </h2>
          <div>
            <Row label={t('template.common.name', 'Name')} value={name} />
            <Row label={t('template.common.age', 'Age')} value={age} />
            <Row label={t('template.common.height', 'Height')} value={height} />
            <Row label={t('template.common.education', 'Education')} value={education} />
            <Row label={t('template.common.occupation', 'Occupation')} value={occupation} />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.4em] text-stone-500">
            <span className="h-px flex-1 bg-gold-400/50" />
            {t('template.common.familyDetails', 'Family Details')}
            <span className="h-px flex-1 bg-gold-400/50" />
          </h2>
          <div className="space-y-1.5">
            {family.map((f, i) => (
              <p key={i} className="text-[16px] text-stone-700">{f}</p>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.4em] text-stone-500">
            <span className="h-px flex-1 bg-gold-400/50" />
            {t('template.common.contact', 'Contact')}
            <span className="h-px flex-1 bg-gold-400/50" />
          </h2>
          <p className="text-center text-[18px] tracking-wide text-stone-800">{contact}</p>
        </section>

        <footer className="mt-auto flex justify-center pt-8">
          <ThinFloral className="h-5 w-48 text-gold-500/70 [transform:scaleX(-1)]" />
        </footer>
      </div>
    </div>
  )
}
