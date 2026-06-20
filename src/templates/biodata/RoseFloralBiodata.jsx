'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Floral ornaments ──────────────────────────────────────────────────── */

/** Watercolour-style botanical sprig used in the corners. */
function FloralSprig({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* trailing stem */}
      <path d="M14 14c10 16 16 34 16 58" opacity="0.7" />
      <path d="M14 14c16 10 34 16 58 16" opacity="0.7" />
      {/* leaves */}
      <path d="M30 46c-9-2-17-9-19-19 10 2 17 9 19 19Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M46 30c-2-9-9-17-19-19 2 10 9 17 19 19Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M22 64c-7 1-14-2-19-9 7-3 15-1 19 9Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M64 22c1-7-2-14-9-19-3 7-1 15 9 19Z" fill="currentColor" fillOpacity="0.12" />
      {/* rose bloom */}
      <circle cx="78" cy="42" r="13" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <path d="M78 32c5 0 9 4 9 9s-4 10-9 10-9-4-9-9" opacity="0.9" />
      <path d="M78 36c3 0 6 3 6 6s-3 6-6 6-6-2-6-5" opacity="0.85" />
      <circle cx="78" cy="42" r="2.4" fill="currentColor" stroke="none" />
      <path d="M42 78c0 5 4 9 9 9s10-4 10-9-4-9-9-9" opacity="0.85" />
      <circle cx="42" cy="78" r="2.2" fill="currentColor" stroke="none" />
      {/* buds */}
      <circle cx="60" cy="56" r="3.2" fill="currentColor" fillOpacity="0.3" stroke="none" />
      <circle cx="34" cy="34" r="2.6" fill="currentColor" fillOpacity="0.3" stroke="none" />
    </svg>
  )
}

/** Graceful floral divider used under the title and in the footer. */
function FloralDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 320 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M8 12c44 0 72-6 112-6" opacity="0.7" />
      <path d="M312 12c-44 0-72-6-112-6" opacity="0.7" />
      <path d="M128 12c8-1 14 1 20 5 6-4 12-6 20-5" opacity="0.8" />
      <path d="M152 12c8-1 14 1 20 5 6-4 12-6 20-5" opacity="0.8" />
      {/* centre rose */}
      <circle cx="160" cy="12" r="7.5" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M160 6c3.4 0 6 2.6 6 6s-2.6 6-6 6-6-2.6-6-6" />
      <circle cx="160" cy="12" r="1.8" fill="currentColor" stroke="none" />
      {/* leaf tips */}
      <path d="M104 12c-5-3-9-3-14 0 5 3 9 3 14 0Z" fill="currentColor" fillOpacity="0.2" stroke="none" />
      <path d="M216 12c5-3 9-3 14 0-5 3-9 3-14 0Z" fill="currentColor" fillOpacity="0.2" stroke="none" />
    </svg>
  )
}

/** Small accent sprig placed beside section headings. */
function LeafAccent({ className = '' }) {
  return (
    <svg viewBox="0 0 28 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M2 8h16" opacity="0.7" />
      <path d="M22 8c-2-3-2-5 0-8 2 3 2 5 0 8Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M22 8c2 3 2 5 0 8-2-3-2-5 0-8Z" fill="currentColor" fillOpacity="0.25" />
      <circle cx="18" cy="8" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="90" cy="86" r="33" fill="currentColor" fillOpacity="0.14" stroke="none" />
      <path d="M40 198c0-30 22-50 50-50s50 20 50 50" fill="currentColor" fillOpacity="0.14" stroke="none" />
      <path d="M90 18c44 0 80 41 80 92s-36 92-80 92S10 161 10 110 46 18 90 18Z" strokeDasharray="4 8" opacity="0.45" />
    </svg>
  )
}

/**
 * Rose Floral Marriage Biodata — soft, romantic florist/wedding-suite design.
 *
 * Blush & rose with cream/ivory, sage-green leaves and gold hairlines. A delicate
 * watercolour floral frame, an arched/oval portrait in a thin gold ring, refined
 * serif name and small tracked labels. Every detail row is localised via
 * `t('template.common.*')` and is hidden when its value is empty, so the same
 * form drives a clean card in English, मराठी or हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function RoseFloralBiodata({ values }) {
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
    <div className="flex flex-col gap-0.5 border-b border-dotted border-rose-300/50 py-[4px]">
      <span className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-rose-500">
        <span className="text-[#a78b3f]">&#10047;</span>
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="pl-[18px] text-[15px] leading-snug text-stone-700">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-rose-600">
      <LeafAccent className="h-[14px] w-[24px] text-emerald-600/70 [transform:scaleX(-1)]" />
      {t(`template.common.${k}`, fallback)}
      <LeafAccent className="h-[14px] w-[24px] text-emerald-600/70" />
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fdf4f1] font-serif text-stone-700"
    >
      {/* airy blush wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f3] via-[#fdf4f1] to-[#fbeee9]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,113,133,0.1),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.06),_transparent_55%)]" />

      {/* soft double frame with gold hairline */}
      <div className="absolute inset-7 rounded-[18px] border border-rose-300/60" />
      <div className="absolute inset-[34px] rounded-[14px] border-[0.5px] border-[#c9a44a]/50" />

      {/* botanical corners */}
      <FloralSprig className="absolute left-9 top-9 h-[92px] w-[92px] text-rose-400" />
      <FloralSprig className="absolute right-9 top-9 h-[92px] w-[92px] text-rose-400 [transform:scaleX(-1)]" />
      <FloralSprig className="absolute bottom-9 left-9 h-[92px] w-[92px] text-emerald-600/60 [transform:scaleY(-1)]" />
      <FloralSprig className="absolute bottom-9 right-9 h-[92px] w-[92px] text-emerald-600/60 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[66px] pb-[40px] pt-[42px]">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <p className="text-[16px] leading-none tracking-[0.16em] text-[#c9a44a]">{t('template.common.om', 'ॐ')}</p>
          <h1 className="mt-3 font-display text-[33px] font-semibold leading-tight tracking-wide">
            <span
              data-pdf-color="#e11d48"
              className="bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent"
            >
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <FloralDivider className="mt-2 h-5 w-72 text-rose-400" />
        </header>

        {/* Name + arched portrait */}
        <div className="mt-3 flex items-center gap-8">
          <div className="shrink-0 rounded-t-full rounded-b-[120px] bg-gradient-to-br from-[#ecd08a] via-[#d8b65f] to-[#c39a3c] p-[5px] shadow-[0_16px_36px_-18px_rgba(193,140,40,0.5)]">
            <div className="relative h-[194px] w-[166px] overflow-hidden rounded-t-full rounded-b-[120px] bg-[#fff7f3]">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <PortraitPlaceholder className="absolute inset-0 h-full w-full text-rose-400/70" />
              )}
              <div className="pointer-events-none absolute inset-[5px] rounded-t-full rounded-b-[110px] border border-[#c9a44a]/50" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-500">
              {t('template.common.name', 'Name')}
            </p>
            <h2 className="mt-1 font-display text-[38px] font-semibold leading-[1.05] text-rose-700">{name}</h2>
            <span className="mt-3 block h-[2.5px] w-20 rounded-full bg-gradient-to-r from-rose-500 via-[#d8b65f] to-emerald-500/70" />
            {v('occupation') && <p className="mt-3 text-[15.5px] italic text-stone-600">{v('occupation')}</p>}
          </div>
        </div>

        {/* Personal details */}
        <section className="mt-4">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="mt-1 grid grid-cols-2 gap-x-10 rounded-2xl border border-rose-200/70 bg-white/55 px-7 py-1.5 shadow-[0_8px_24px_-18px_rgba(225,29,72,0.35)]">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-3">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="mt-1 grid grid-cols-2 gap-x-10 rounded-2xl border border-rose-200/70 bg-white/55 px-7 py-1.5 shadow-[0_8px_24px_-18px_rgba(225,29,72,0.35)]">
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
            <div className="mt-1 rounded-2xl border border-rose-200/70 bg-white/55 px-7 py-2.5 shadow-[0_8px_24px_-18px_rgba(225,29,72,0.35)]">
              {contact && (
                <p className="text-[16.5px] font-semibold tracking-wide text-rose-600">{contact}</p>
              )}
              {address && <p className="mt-1 text-[15px] leading-snug text-stone-600">{address}</p>}
            </div>
          </section>
        )}

        <footer className="mt-auto flex flex-col items-center gap-1.5 pt-3">
          <FloralDivider className="h-5 w-56 text-rose-400/80" />
          <span className="text-[12px] tracking-[0.34em] text-[#c9a44a]">{t('template.common.om', 'ॐ')}</span>
        </footer>
      </div>
    </div>
  )
}
