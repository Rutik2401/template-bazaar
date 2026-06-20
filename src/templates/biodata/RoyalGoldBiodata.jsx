'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Ornaments ─────────────────────────────────────────────────────────── */

function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="40" r="34" opacity="0.35" />
      <path d="M28 18l4-9 8 7 8-7 4 9" />
      <circle cx="40" cy="9" r="2.4" fill="currentColor" stroke="none" />
      <path d="M24 30c0-9 7-15 16-15s16 6 16 15c0 6-3 10-7 13" fill="currentColor" fillOpacity="0.12" />
      <path d="M24 28c-7 0-11 5-11 11s4 10 10 10" fill="currentColor" fillOpacity="0.1" />
      <path d="M56 28c7 0 11 5 11 11s-4 10-10 10" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 36c0 8-1 14-6 18-4 3-4 9 1 10 4 1 7-2 7-6" />
      <circle cx="33" cy="35" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="47" cy="35" r="1.6" fill="currentColor" stroke="none" />
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
      <circle cx="16" cy="16" r="3.2" fill="currentColor" stroke="none" />
      <path d="M50 20l6-7 6 7-6 7-6-7Z" fill="currentColor" fillOpacity="0.32" />
      <path d="M20 50l-7 6 7 6 6-7-6-5Z" fill="currentColor" fillOpacity="0.32" />
    </svg>
  )
}

function Divider({ className = '' }) {
  return (
    <svg viewBox="0 0 300 18" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M6 9h108M186 9h108" strokeLinecap="round" />
      <path d="M150 0l11 9-11 9-11-9 11-9Z" fill="currentColor" fillOpacity="0.28" />
      <path d="M150 4l6 5-6 5-6-5 6-5Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
      <circle cx="114" cy="9" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="186" cy="9" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="90" cy="84" r="34" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <path d="M38 196c0-32 23-52 52-52s52 20 52 52" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <rect x="10" y="10" width="160" height="200" rx="10" strokeDasharray="5 7" opacity="0.5" />
    </svg>
  )
}

/**
 * Royal Gold Marriage Biodata — REFERENCE design for the detailed biodata set.
 *
 * Maroon & gold, Ganesha header, ornate frame and an uploaded portrait in a
 * gold frame (placeholder silhouette until a photo is added). Every detail row
 * is localised via `t('template.common.*')` and is hidden when its value is
 * empty, so the same form drives a clean card in English, मराठी or हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function RoyalGoldBiodata({ values }) {
  const { t } = useI18n()
  const v = (k) => (values[k] || '').trim()

  const name = v('fullName') || 'Rohan Mehta'
  const photo = v('photo')

  // Personal details, in render order — empty values drop out automatically.
  const personal = [
    ['dateOfBirth', formatDate(values.dateOfBirth, '15 August 1997'), 'Date of Birth'],
    ['timeOfBirth', v('timeOfBirth'), 'Time of Birth'],
    ['birthPlace', v('birthPlace'), 'Birth Place'],
    ['height', v('height'), 'Height'],
    ['complexion', v('complexion'), 'Complexion'],
    ['bloodGroup', v('bloodGroup'), 'Blood Group'],
    ['rashi', v('rashi'), 'Rashi'],
    ['nakshatra', v('nakshatra'), 'Nakshatra'],
    ['gotra', v('gotra'), 'Gotra'],
    ['religionCaste', v('religionCaste'), 'Religion / Caste'],
    ['education', v('education'), 'Education'],
    ['occupation', v('occupation'), 'Occupation'],
    ['annualIncome', v('income'), 'Annual Income'],
  ].filter(([, val]) => val)

  const family = [
    ['fatherName', v('fatherName'), "Father's Name"],
    ['motherName', v('motherName'), "Mother's Name"],
    ['siblings', v('siblings'), 'Siblings'],
  ].filter(([, val]) => val)

  const contact = v('contact')
  const address = v('address')

  const Cell = ({ k, val, fallback }) => (
    <div className="flex flex-col gap-0.5 border-b border-dotted border-gold-400/40 py-[4px]">
      <span className="flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-maroon-500">
        <span className="text-gold-500">&#10022;</span>
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="pl-3 text-[15.5px] leading-snug text-maroon-700/90">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-2 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-maroon-600 to-maroon-500 px-4 py-[5px] text-[12px] font-bold uppercase tracking-[0.2em] text-gold-100 shadow-sm">
      <span className="text-gold-300">&#10070;</span>
      {t(`template.common.${k}`, fallback)}
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fdf6ec] font-serif text-maroon-700"
    >
      {/* parchment wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf3e3] via-[#fdf6ec] to-[#f7ead4]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,134,11,0.12),_transparent_60%)]" />

      {/* ornate triple frame */}
      <div className="absolute inset-6 rounded-sm border-[3px] border-maroon-500/80" />
      <div className="absolute inset-[38px] rounded-sm border border-gold-500/70" />
      <div className="absolute inset-[44px] rounded-sm border-[0.5px] border-gold-500/40" />

      <CornerFloret className="absolute left-8 top-8 h-[64px] w-[64px] text-gold-600" />
      <CornerFloret className="absolute right-8 top-8 h-[64px] w-[64px] text-gold-600 [transform:scaleX(-1)]" />
      <CornerFloret className="absolute bottom-8 left-8 h-[64px] w-[64px] text-gold-600 [transform:scaleY(-1)]" />
      <CornerFloret className="absolute bottom-8 right-8 h-[64px] w-[64px] text-gold-600 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[64px] pb-[32px] pt-[32px]">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <Ganesha className="h-[54px] w-[54px] text-maroon-500" />
          <p className="mt-2 text-[19px] leading-none tracking-wide text-gold-600">॥ श्री गणेशाय नमः ॥</p>
          <h1 className="mt-3 font-display text-[34px] font-semibold leading-tight tracking-wide">
            <span
              data-pdf-color="#7a1f2b"
              className="bg-gradient-to-b from-maroon-400 via-maroon-500 to-maroon-700 bg-clip-text text-transparent"
            >
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <Divider className="mt-2 h-3.5 w-64 text-gold-500" />
        </header>

        {/* Name + portrait */}
        <div className="mt-4 flex items-center gap-7">
          <div className="shrink-0 rounded-xl bg-gradient-to-br from-[#e7c878] via-[#d4ad53] to-[#b98f2e] p-[6px] shadow-[0_14px_34px_-16px_rgba(120,86,18,0.5)]">
            <div className="relative h-[150px] w-[120px] overflow-hidden rounded-lg bg-[#fbf4e3]">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <PortraitPlaceholder className="absolute inset-0 h-full w-full text-gold-500/70" />
              )}
              <div className="pointer-events-none absolute inset-[5px] rounded-md border border-gold-500/40" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-gold-600">
              {t('template.common.name', 'Name')}
            </p>
            <h2 className="mt-1 font-display text-[34px] font-semibold leading-[1.05] text-maroon-600">{name}</h2>
            <span className="mt-3 block h-[3px] w-20 rounded-full bg-gradient-to-r from-maroon-500 to-gold-400" />
            {v('occupation') && <p className="mt-3 text-[16px] text-maroon-700/80">{v('occupation')}</p>}
          </div>
        </div>

        {/* Personal details */}
        <section className="mt-4">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="mt-1 grid grid-cols-2 gap-x-9 rounded-sm border-l-2 border-gold-400/70 bg-white/30 px-6 py-1">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-4">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="mt-1 grid grid-cols-2 gap-x-9 rounded-sm border-l-2 border-gold-400/70 bg-white/30 px-6 py-1">
              {family.map(([k, val, fallback]) => (
                <Cell key={k} k={k} val={val} fallback={fallback} />
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {(contact || address) && (
          <section className="mt-4">
            <SectionHead k="contactDetails" fallback="Contact Details" />
            <div className="mt-1 rounded-sm border-l-2 border-gold-400/70 bg-white/30 px-6 py-2">
              {contact && (
                <p className="text-[17px] font-semibold tracking-wide text-maroon-600">{contact}</p>
              )}
              {address && <p className="mt-1 text-[15px] leading-snug text-maroon-700/80">{address}</p>}
            </div>
          </section>
        )}

        <footer className="mt-auto flex items-center justify-center gap-3 pt-5 text-gold-600">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/60" />
          <span className="text-[15px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/60" />
        </footer>
      </div>
    </div>
  )
}
