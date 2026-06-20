'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Maharashtrian ornamental pieces ───────────────────────────────────── */

/** Sacred pot (kalash) with coconut & mango leaves. */
function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 104" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="40" cy="16" rx="11" ry="13" fill="currentColor" fillOpacity="0.2" />
      <path d="M40 30c-10 0-18-4-24-9 8-1 16 1 24 7 8-6 16-8 24-7-6 5-14 9-24 9Z" fill="currentColor" fillOpacity="0.24" />
      <path d="M27 34h26l-4 8c10 4 16 13 16 24 0 13-11 22-25 22S15 79 15 66c0-11 6-20 16-24l-4-8Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M19 56h42" />
      <path d="M24 70h32" opacity="0.7" />
      <path d="M28 84h24" opacity="0.5" />
    </svg>
  )
}

/** Swastik motif. */
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

/** Marigold / mango-leaf swag (toran) spanning the top. */
function MarigoldSwag({ className = '' }) {
  return (
    <svg viewBox="0 0 794 46" preserveAspectRatio="none" className={className} fill="none">
      <path d="M0 4C140 30 250 30 397 18C544 30 654 30 794 4" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
      {Array.from({ length: 23 }).map((_, i) => {
        const x = 14 + i * 35
        // gentle dip toward the centre
        const dy = Math.sin((i / 22) * Math.PI) * 9
        const y = 12 + dy
        return (
          <g key={i}>
            <path d={`M${x} ${y - 6}v6`} stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <circle cx={x} cy={y + 4} r="6.5" fill="currentColor" fillOpacity="0.22" />
            <circle cx={x} cy={y + 4} r="3.4" fill="currentColor" fillOpacity="0.5" />
            <circle cx={x} cy={y + 4} r="1.3" fill="currentColor" />
          </g>
        )
      })}
    </svg>
  )
}

/** Paithani-style geometric repeat border (used as a thin band). */
function PaithaniBorder({ className = '' }) {
  return (
    <svg viewBox="0 0 794 20" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M0 4h794M0 16h794" opacity="0.55" />
      {Array.from({ length: 33 }).map((_, i) => {
        const x = 8 + i * 24
        return (
          <g key={i}>
            <path d={`M${x} 4l6 6-6 6-6-6 6-6Z`} fill="currentColor" fillOpacity="0.22" />
            <circle cx={x} cy="10" r="1.4" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/** Small lotus accent for section heads. */
function LotusMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-6 0-9-4-9-8 3 0 6 1 9 5 3-4 6-5 9-5 0 4-3 8-9 8Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 19c-2-4-2-8 0-12 2 4 2 8 0 12Z" fill="currentColor" fillOpacity="0.3" />
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
 * Saffron Marathi Marriage Biodata — Maharashtrian traditional, richer than the
 * base Marathi style. Marigold swag + paithani band + kalash header on warm
 * cream, with a saffron/green framed portrait and a compact 2-column detail
 * grid. Every row is localised via `t('template.common.*')` and hidden when its
 * value is empty, so one form drives English, मराठी or हिंदी cleanly.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function SaffronMarathiBiodata({ values }) {
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
    <div className="flex flex-col gap-0.5 border-b border-dotted border-[#1b6e3a]/25 py-[3px]">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#1b6e3a]">
        <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#e07b1e]" />
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="pl-3 text-[14.5px] leading-snug text-[#3a2a18]">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-1.5 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#c2641b] via-[#e07b1e] to-[#f59e0b] px-4 py-[4px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#fff8ec] shadow-sm">
      <LotusMark className="h-3.5 w-3.5 text-[#fde9c8]" />
      {t(`template.common.${k}`, fallback)}
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fff8ec] font-serif text-[#3a2a18]"
    >
      {/* warm marigold wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff3e0] via-[#fff8ec] to-[#fdeccf]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(224,123,30,0.1),_transparent_58%)]" />

      {/* saffron & green pallu bands top + bottom */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-r from-[#c2641b] via-[#f59e0b] to-[#c2641b]" />
      <PaithaniBorder className="absolute inset-x-0 top-8 h-5 text-[#1b6e3a]" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r from-[#1b6e3a] via-[#2f9c54] to-[#1b6e3a]" />
      <PaithaniBorder className="absolute inset-x-0 bottom-8 h-5 text-[#c2641b]" />

      {/* marigold swag below the top band */}
      <MarigoldSwag className="absolute inset-x-0 top-[52px] h-[46px] text-[#e07b1e]" />

      {/* saffron / green double frame */}
      <div className="absolute inset-x-7 inset-y-[78px] rounded-sm border-2 border-[#e07b1e]/70" />
      <div className="absolute inset-x-[42px] inset-y-[92px] rounded-sm border border-[#1b6e3a]/40" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[60px] pb-[44px] pt-[92px]">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <Kalash className="h-[48px] w-[38px] text-[#c2641b]" />
          <p className="mt-1 text-[20px] leading-none tracking-wide text-[#c2641b]">॥ श्री गणेशाय नमः ॥</p>
          <h1 className="mt-2 font-display text-[30px] font-semibold leading-tight tracking-wide">
            <span data-pdf-color="#e07b1e" className="text-[#e07b1e]">
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <div className="mt-1.5 flex items-center gap-3 text-[#1b6e3a]">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#1b6e3a]/50" />
            <Swastik className="h-5 w-5" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#1b6e3a]/50" />
          </div>
        </header>

        {/* Name + portrait */}
        <div className="mt-4 flex items-center gap-6">
          <div className="shrink-0 rounded-xl bg-gradient-to-br from-[#f59e0b] via-[#e07b1e] to-[#1b6e3a] p-[5px] shadow-[0_14px_30px_-16px_rgba(120,70,18,0.5)]">
            <div className="relative h-[168px] w-[134px] overflow-hidden rounded-lg bg-[#fbf4e3]">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <PortraitPlaceholder className="absolute inset-0 h-full w-full text-[#e07b1e]/70" />
              )}
              <div className="pointer-events-none absolute inset-[5px] rounded-md border border-[#1b6e3a]/30" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-[#c2641b]">
              {t('template.common.name', 'Name')}
            </p>
            <h2 className="mt-1 font-display text-[32px] font-semibold leading-[1.08] text-[#1b6e3a]">{name}</h2>
            <span className="mt-2 block h-[3px] w-20 rounded-full bg-gradient-to-r from-[#e07b1e] to-[#f59e0b]" />
            {v('occupation') && <p className="mt-2 text-[15px] text-[#3a2a18]/80">{v('occupation')}</p>}
          </div>
        </div>

        {/* Personal details */}
        <section className="mt-4">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="mt-1 grid grid-cols-2 gap-x-8 rounded-sm border-l-2 border-[#e07b1e]/60 bg-white/40 px-5 py-1">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-3">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="mt-1 grid grid-cols-2 gap-x-8 rounded-sm border-l-2 border-[#1b6e3a]/50 bg-[#1b6e3a]/[0.05] px-5 py-1">
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
            <div className="mt-1 rounded-sm border-l-2 border-[#e07b1e]/60 bg-white/40 px-5 py-1.5">
              {contact && (
                <p className="text-[16px] font-semibold tracking-wide text-[#1b6e3a]">{contact}</p>
              )}
              {address && <p className="mt-1 text-[14.5px] leading-snug text-[#3a2a18]/80">{address}</p>}
            </div>
          </section>
        )}

        <footer className="mt-auto flex items-center justify-center gap-3 pt-2 text-[#c2641b]">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c2641b]/50" />
          <span className="text-[15px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c2641b]/50" />
        </footer>
      </div>
    </div>
  )
}
