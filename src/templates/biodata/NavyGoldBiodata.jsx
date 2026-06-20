'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Ornaments (inline SVG only) ───────────────────────────────────────── */

/** Art-deco crest for the top of the card. */
function DecoCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 120 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 6l9 14h-18l9-14Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M60 2v8" />
      <circle cx="60" cy="2" r="2.2" fill="currentColor" stroke="none" />
      <path d="M30 30c10-8 50-8 60 0" opacity="0.8" />
      <path d="M22 40c14-12 62-12 76 0" opacity="0.55" />
      <path d="M60 24l5 8-5 8-5-8 5-8Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M14 46h28M78 46h28" opacity="0.7" />
      <circle cx="46" cy="46" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="74" cy="46" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Symmetric corner flourish. */
function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M8 8h40M8 8v40" />
      <path d="M14 14c0 18 8 30 26 34M14 14c18 0 30 8 34 26" opacity="0.7" />
      <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" />
      <path d="M48 18l6-7 6 7-6 6-6-6Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

/** Thin rule with a centered lozenge. */
function GoldRule({ className = '' }) {
  return (
    <svg viewBox="0 0 280 14" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 7h114M162 7h114" strokeLinecap="round" />
      <path d="M140 1l8 6-8 6-8-6 8-6Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
      <circle cx="118" cy="7" r="2" fill="currentColor" stroke="none" />
      <circle cx="162" cy="7" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="90" cy="82" r="34" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M36 198c0-32 24-52 54-52s54 20 54 52" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <circle cx="90" cy="110" r="84" strokeDasharray="4 8" opacity="0.5" />
    </svg>
  )
}

/**
 * Navy & Gold Luxury Marriage Biodata — dark premium design.
 *
 * Deep navy card with fine gold hairline borders, art-deco crest and corner
 * flourishes, a portrait in a circular gold ring, and ivory/gold type. Every
 * detail row is localised via `t('template.common.*')` and is hidden when its
 * value is empty, so the same form drives a clean card in English, मराठी or
 * हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function NavyGoldBiodata({ values }) {
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
    <div className="flex flex-col gap-0.5 border-b border-[#d4a437]/25 py-[3px]">
      <span className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#e2bd66]">
        <span className="text-[#d4a437]">&#10022;</span>
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="pl-3 text-[14px] leading-snug text-[#f5ecd6]">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-2 inline-flex items-center gap-2 border-y border-[#d4a437]/60 px-1 py-[3px] text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2bd66]">
      <span className="text-[#d4a437]">&#10070;</span>
      {t(`template.common.${k}`, fallback)}
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#0f172a] font-serif text-[#f5ecd6]"
    >
      {/* navy wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111c3a] via-[#0f172a] to-[#0c1426]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,164,55,0.14),_transparent_62%)]" />

      {/* gold hairline frame */}
      <div className="absolute inset-6 rounded-sm border-[2px] border-[#d4a437]/70" />
      <div className="absolute inset-[36px] rounded-sm border border-[#e2bd66]/45" />
      <div className="absolute inset-[42px] rounded-sm border-[0.5px] border-[#d4a437]/25" />

      <CornerFlourish className="absolute left-8 top-8 h-[58px] w-[58px] text-[#d4a437]" />
      <CornerFlourish className="absolute right-8 top-8 h-[58px] w-[58px] text-[#d4a437] [transform:scaleX(-1)]" />
      <CornerFlourish className="absolute bottom-8 left-8 h-[58px] w-[58px] text-[#d4a437] [transform:scaleY(-1)]" />
      <CornerFlourish className="absolute bottom-8 right-8 h-[58px] w-[58px] text-[#d4a437] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[62px] pb-[34px] pt-[34px]">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <DecoCrest className="h-[42px] w-[78px] text-[#e2bd66]" />
          <h1 className="mt-1.5 font-display text-[13px] font-semibold uppercase leading-none tracking-[0.4em] text-[#e2bd66]">
            {t('template.common.biodataTitle', 'Marriage Biodata')}
          </h1>
          <GoldRule className="mt-1.5 h-3 w-60 text-[#d4a437]" />
        </header>

        {/* Photo + name */}
        <div className="mt-4 flex flex-col items-center text-center">
          <div className="rounded-full bg-gradient-to-br from-[#e2bd66] via-[#d4a437] to-[#a87f22] p-[5px] shadow-[0_16px_40px_-18px_rgba(212,164,55,0.55)]">
            <div className="relative h-[166px] w-[133px] overflow-hidden rounded-[80px] bg-[#0c1426]">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <PortraitPlaceholder className="absolute inset-0 h-full w-full text-[#e2bd66]/55" />
              )}
              <div className="pointer-events-none absolute inset-[4px] rounded-[76px] border border-[#e2bd66]/40" />
            </div>
          </div>
          <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4a437]">
            {t('template.common.name', 'Name')}
          </p>
          <h2 className="mt-1 font-display text-[30px] font-semibold leading-[1.05] text-[#e2bd66]">{name}</h2>
          <span className="mt-1.5 block h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#d4a437] to-transparent" />
          {v('occupation') && <p className="mt-1.5 text-[14px] text-[#f5ecd6]/80">{v('occupation')}</p>}
        </div>

        {/* Personal details */}
        <section className="mt-4">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="mt-1 grid grid-cols-2 gap-x-8 rounded-sm border border-[#d4a437]/30 bg-white/[0.03] px-5 py-1">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-3">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="mt-1 grid grid-cols-2 gap-x-8 rounded-sm border border-[#d4a437]/30 bg-white/[0.03] px-5 py-1">
              {family.map(([k, val, fallback]) => (
                <Cell key={k} k={k} val={val} fallback={fallback} />
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {(contact || address) && (
          <section className="mt-3">
            <SectionHead k="contactDetails" fallback="Contact Details" />
            <div className="mt-1 flex flex-col gap-1 rounded-sm border border-[#d4a437]/50 bg-[#d4a437]/[0.06] px-5 py-2">
              {contact && (
                <p className="text-[16px] font-semibold tracking-wide text-[#e2bd66]">{contact}</p>
              )}
              {address && <p className="text-[13.5px] leading-snug text-[#f5ecd6]/85">{address}</p>}
            </div>
          </section>
        )}

        <footer className="mt-auto flex items-center justify-center gap-3 pt-3 text-[#d4a437]">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4a437]/70" />
          <span className="text-[15px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4a437]/70" />
        </footer>
      </div>
    </div>
  )
}
