'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Refined ornaments ─────────────────────────────────────────────────── */

function ThinFloral({ className = '' }) {
  return (
    <svg viewBox="0 0 200 24" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <path d="M10 12h62M128 12h62" />
      <path d="M100 3c-5.5 3.4-8.5 5.6-8.5 9s3 5.6 8.5 9c5.5-3.4 8.5-5.6 8.5-9s-3-5.6-8.5-9Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M100 12h0" />
      <circle cx="100" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M80 12c4-3.5 8-3.5 12 0M120 12c-4-3.5-8-3.5-12 0" opacity="0.7" />
      <path d="M62 12c3-2.4 6-2.4 9 0M138 12c-3-2.4-6-2.4-9 0" opacity="0.5" />
      <circle cx="72" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="128" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="10" cy="12" r="1.2" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="190" cy="12" r="1.2" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  )
}

function Monogram({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <circle cx="32" cy="32" r="29" opacity="0.35" />
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="21" opacity="0.5" />
      <path d="M32 13l4.8 9.7L47.6 24.3l-7.8 7.6 1.8 10.9L32 37.6l-9.6 5.2 1.8-10.9-7.8-7.6 10.8-1.6L32 13Z" fill="currentColor" fillOpacity="0.16" />
      <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline gap-6 py-[9px]">
      <span className="w-40 shrink-0 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-600">{label}</span>
      <span className="flex-1 border-b border-dotted border-gold-400/45 pb-1 text-[16px] text-stone-700">{value}</span>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,134,11,0.07),_transparent_55%)]" />

      {/* thin gold triple border */}
      <div className="pointer-events-none absolute inset-8 border border-gold-400/70" />
      <div className="pointer-events-none absolute inset-[34px] border-[0.5px] border-gold-400/30" />
      <div className="pointer-events-none absolute inset-[40px] border border-gold-300/45" />

      <div className="relative flex h-full flex-col px-[88px] pb-[72px] pt-[68px]">
        <header className="flex flex-col items-center text-center">
          <Monogram className="h-[68px] w-[68px] text-gold-500" />
          <p className="mt-5 text-[11px] uppercase leading-relaxed tracking-[0.5em] text-gold-600">
            {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
          </p>
          <h1 className="mt-3 font-display text-[42px] font-medium leading-tight tracking-wide text-stone-800">
            {t('template.common.biodataTitle', 'Marriage Biodata')}
          </h1>
          <ThinFloral className="mt-3 h-5 w-72 text-gold-500" />
          <p className="mt-5 font-display text-[30px] italic text-gold-700">{name}</p>
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
          <div className="space-y-2">
            {family.map((f, i) => (
              <p key={i} className="flex items-baseline justify-center gap-2.5 text-center text-[16px] text-stone-700">
                <span className="text-[10px] text-gold-500">&#10022;</span>
                <span>{f}</span>
              </p>
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
