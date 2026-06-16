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
      <path d="M6 6h44M6 6v44" />
      <path d="M12 12h30M12 12v30" opacity="0.55" />
      <path d="M16 16c0 14 6 25 19 31M16 16c14 0 25 6 31 19" opacity="0.85" />
      <path d="M16 16c8 2 13 8 15 16M16 16c2 8 8 13 16 15" opacity="0.5" />
      <circle cx="16" cy="16" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="6" opacity="0.4" />
      <path d="M50 20l6-7 6 7-6 7-6-7Z" fill="currentColor" fillOpacity="0.32" />
      <path d="M20 50l-7 6 7 6 6-7-6-5Z" fill="currentColor" fillOpacity="0.32" />
      <circle cx="58" cy="13" r="2" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="13" cy="58" r="2" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  )
}

function Divider({ className = '' }) {
  return (
    <svg viewBox="0 0 300 18" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M6 9h108M186 9h108" strokeLinecap="round" />
      <path d="M150 0l11 9-11 9-11-9 11-9Z" fill="currentColor" fillOpacity="0.28" />
      <path d="M150 4l6 5-6 5-6-5 6-5Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <path d="M114 9c8-5 16-5 24 0M186 9c-8-5-16-5-24 0" opacity="0.55" />
      <circle cx="114" cy="9" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="186" cy="9" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="6" cy="9" r="1.8" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="294" cy="9" r="1.8" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline gap-5 border-b border-dotted border-gold-400/40 py-[8px] last:border-b-0">
      <span className="flex w-44 shrink-0 items-baseline gap-2 text-[14.5px] font-semibold uppercase tracking-[0.06em] text-maroon-500">
        <span className="text-gold-500">&#10022;</span>
        {label}
      </span>
      <span className="text-[16.5px] leading-snug text-maroon-700/90">{value}</span>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,134,11,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(122,31,43,0.06),_transparent_55%)]" />

      {/* ornate triple frame */}
      <div className="absolute inset-6 rounded-sm border-[3px] border-maroon-500/80" />
      <div className="absolute inset-[38px] rounded-sm border border-gold-500/70" />
      <div className="absolute inset-[44px] rounded-sm border-[0.5px] border-gold-500/40" />

      {/* corner florets */}
      <CornerFloret className="absolute left-8 top-8 h-[68px] w-[68px] text-gold-600" />
      <CornerFloret className="absolute right-8 top-8 h-[68px] w-[68px] text-gold-600 [transform:scaleX(-1)]" />
      <CornerFloret className="absolute bottom-8 left-8 h-[68px] w-[68px] text-gold-600 [transform:scaleY(-1)]" />
      <CornerFloret className="absolute bottom-8 right-8 h-[68px] w-[68px] text-gold-600 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-20 pb-16 pt-[60px]">
        <header className="flex flex-col items-center text-center">
          <Ganesha className="h-[68px] w-[68px] text-maroon-500" />
          <p className="mt-3 text-[23px] leading-none tracking-wide text-gold-600">॥ श्री गणेशाय नमः ॥</p>
          <h1 className="mt-4 font-display text-[42px] font-semibold leading-tight tracking-wide">
            <span
              data-pdf-color="#7a1f2b"
              className="bg-gradient-to-b from-maroon-400 via-maroon-500 to-maroon-700 bg-clip-text text-transparent"
            >
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <Divider className="mt-3 h-4 w-72 text-gold-500" />
        </header>

        <section className="mt-9">
          <h2 className="mb-3 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-maroon-600 to-maroon-500 px-5 py-[5px] text-[13px] font-bold uppercase tracking-[0.22em] text-gold-100 shadow-sm">
            <span className="text-gold-300">&#10070;</span>
            {t('template.common.personalDetails', 'Personal Details')}
          </h2>
          <div className="mt-1 rounded-sm border-l-2 border-gold-400/70 bg-white/30 pl-6 pr-4">
            <Row label={t('template.common.name', 'Name')} value={name} />
            <Row label={t('template.common.age', 'Age')} value={age} />
            <Row label={t('template.common.height', 'Height')} value={height} />
            <Row label={t('template.common.education', 'Education')} value={education} />
            <Row label={t('template.common.occupation', 'Occupation')} value={occupation} />
          </div>
        </section>

        <section className="mt-7">
          <h2 className="mb-3 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-maroon-600 to-maroon-500 px-5 py-[5px] text-[13px] font-bold uppercase tracking-[0.22em] text-gold-100 shadow-sm">
            <span className="text-gold-300">&#10070;</span>
            {t('template.common.familyDetails', 'Family Details')}
          </h2>
          <div className="mt-1 rounded-sm border-l-2 border-gold-400/70 bg-white/30 py-1 pl-6 pr-4">
            {family.map((f, i) => (
              <p key={i} className="flex items-baseline gap-2.5 py-[6px] text-[16.5px] leading-snug text-maroon-700/90">
                <span className="mt-0.5 text-[12px] text-gold-500">&#10022;</span>
                <span>{f}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="mb-3 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-maroon-600 to-maroon-500 px-5 py-[5px] text-[13px] font-bold uppercase tracking-[0.22em] text-gold-100 shadow-sm">
            <span className="text-gold-300">&#10070;</span>
            {t('template.common.contact', 'Contact')}
          </h2>
          <p className="mt-1 rounded-sm border-l-2 border-gold-400/70 bg-white/30 py-2 pl-6 pr-4 text-[18px] font-semibold tracking-wide text-maroon-600">{contact}</p>
        </section>

        <footer className="mt-auto flex items-center justify-center gap-3 pt-6 text-gold-600">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/60" />
          <span className="text-[16px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/60" />
        </footer>
      </div>
    </div>
  )
}
