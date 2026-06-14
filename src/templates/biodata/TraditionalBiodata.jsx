'use client'

import { toList } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Ornamental pieces ─────────────────────────────────────────────────── */

function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* aura */}
      <circle cx="40" cy="40" r="34" opacity="0.35" />
      {/* crown */}
      <path d="M28 18l4-9 8 7 8-7 4 9" />
      <circle cx="40" cy="9" r="2.4" fill="currentColor" stroke="none" />
      {/* head */}
      <path d="M24 30c0-9 7-15 16-15s16 6 16 15c0 6-3 10-7 13" fill="currentColor" fillOpacity="0.12" />
      {/* big ears */}
      <path d="M24 28c-7 0-11 5-11 11s4 10 10 10" fill="currentColor" fillOpacity="0.1" />
      <path d="M56 28c7 0 11 5 11 11s-4 10-10 10" fill="currentColor" fillOpacity="0.1" />
      {/* trunk */}
      <path d="M40 36c0 8-1 14-6 18-4 3-4 9 1 10 4 1 7-2 7-6" />
      {/* tusks / eyes */}
      <circle cx="33" cy="35" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="47" cy="35" r="1.6" fill="currentColor" stroke="none" />
      {/* tilak */}
      <path d="M40 22v8" opacity="0.8" />
    </svg>
  )
}

function CornerFloret({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M6 6h40M6 6v40" />
      <path d="M12 12h28M12 12v28" opacity="0.6" />
      <path d="M16 16c0 12 5 22 16 28M16 16c12 0 22 5 28 16" opacity="0.85" />
      <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
      <path d="M46 18l6-6 6 6-6 6-6-6Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M18 46l-6 6 6 6 6-6-6-6Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

function Divider({ className = '' }) {
  return (
    <svg viewBox="0 0 300 18" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 9h110M180 9h110" strokeLinecap="round" />
      <path d="M150 1l10 8-10 8-10-8 10-8Z" fill="currentColor" fillOpacity="0.25" />
      <circle cx="128" cy="9" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="172" cy="9" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex gap-5 py-[7px]">
      <span className="w-44 shrink-0 text-[15px] font-semibold text-maroon-500">{label}</span>
      <span className="text-[16px] leading-snug text-maroon-700/90">{value}</span>
    </div>
  )
}

/**
 * Traditional Marriage Biodata — maroon & gold, Ganesha header, ornate border.
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function TraditionalBiodata({ values }) {
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
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fdf6ec] font-serif text-maroon-700"
    >
      {/* warm parchment wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf3e3] via-[#fdf6ec] to-[#f7ead4]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,134,11,0.1),_transparent_60%)]" />

      {/* ornate double frame */}
      <div className="absolute inset-7 rounded-sm border-[3px] border-maroon-500/80" />
      <div className="absolute inset-[42px] rounded-sm border border-gold-500/60" />

      {/* corner florets */}
      <CornerFloret className="absolute left-9 top-9 h-16 w-16 text-gold-600" />
      <CornerFloret className="absolute right-9 top-9 h-16 w-16 text-gold-600 [transform:scaleX(-1)]" />
      <CornerFloret className="absolute bottom-9 left-9 h-16 w-16 text-gold-600 [transform:scaleY(-1)]" />
      <CornerFloret className="absolute bottom-9 right-9 h-16 w-16 text-gold-600 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-20 pb-16 pt-16">
        <header className="flex flex-col items-center text-center">
          <Ganesha className="h-16 w-16 text-maroon-500" />
          <p className="mt-2 text-[22px] tracking-wide text-gold-600">॥ श्री गणेशाय नमः ॥</p>
          <h1 className="mt-3 font-display text-[40px] font-semibold leading-tight">
            <span
              data-pdf-color="#7a1f2b"
              className="bg-gradient-to-b from-maroon-400 via-maroon-500 to-maroon-700 bg-clip-text text-transparent"
            >
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <Divider className="mt-3 h-4 w-64 text-gold-500" />
        </header>

        <section className="mt-9">
          <h2 className="mb-2 inline-block rounded-sm bg-maroon-500 px-4 py-1 text-[13px] font-bold uppercase tracking-[0.22em] text-gold-100">
            {t('template.common.personalDetails', 'Personal Details')}
          </h2>
          <div className="mt-2 border-l-2 border-gold-400/60 pl-5">
            <Row label={t('template.common.name', 'Name')} value={name} />
            <Row label={t('template.common.age', 'Age')} value={age} />
            <Row label={t('template.common.height', 'Height')} value={height} />
            <Row label={t('template.common.education', 'Education')} value={education} />
            <Row label={t('template.common.occupation', 'Occupation')} value={occupation} />
          </div>
        </section>

        <section className="mt-7">
          <h2 className="mb-2 inline-block rounded-sm bg-maroon-500 px-4 py-1 text-[13px] font-bold uppercase tracking-[0.22em] text-gold-100">
            {t('template.common.familyDetails', 'Family Details')}
          </h2>
          <div className="mt-2 border-l-2 border-gold-400/60 pl-5">
            {family.map((f, i) => (
              <p key={i} className="py-[5px] text-[16px] text-maroon-700/90">{f}</p>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="mb-2 inline-block rounded-sm bg-maroon-500 px-4 py-1 text-[13px] font-bold uppercase tracking-[0.22em] text-gold-100">
            {t('template.common.contact', 'Contact')}
          </h2>
          <p className="mt-2 border-l-2 border-gold-400/60 pl-5 text-[17px] font-semibold text-maroon-600">{contact}</p>
        </section>

        <footer className="mt-auto flex items-center justify-center gap-3 pt-6 text-gold-600">
          <span className="h-px w-16 bg-gold-500/50" />
          <span className="text-[14px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
          <span className="h-px w-16 bg-gold-500/50" />
        </footer>
      </div>
    </div>
  )
}
