'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="90" cy="82" r="32" fill="currentColor" fillOpacity="0.1" stroke="none" />
      <path d="M40 198c0-30 22-50 50-50s50 20 50 50" fill="currentColor" fillOpacity="0.1" stroke="none" />
    </svg>
  )
}

/**
 * Minimal Mono Marriage Biodata — clean editorial minimalism.
 *
 * Almost monochrome: near-black ink on white with a single restrained charcoal
 * rule for accent. A neat square portrait sits top-left beside a large refined
 * serif name, with a tiny uppercase kicker above. Personal & family details are
 * laid out as elegant two-column rows separated by hairline rules. Every label
 * is localised via `t('template.common.*')` and each row hides when its value is
 * empty, so the same form drives a clean card in English, मराठी or हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function MinimalMonoBiodata({ values }) {
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

  const Row = ({ k, val, fallback }) => (
    <div className="flex flex-col gap-[3px] border-b border-[#e5e7eb] py-[9px]">
      <span className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#9ca3af]">
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="text-[14.5px] font-medium leading-snug text-[#111827]">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-1.5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#111827]">
      <span>{t(`template.common.${k}`, fallback)}</span>
      <span className="h-px flex-1 bg-[#d1d5db]" />
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-white font-sans text-[#111827]"
    >
      <div className="relative flex h-full flex-col px-[68px] pb-[60px] pt-[64px]">
        {/* Header — square portrait + name */}
        <header className="flex items-center gap-7">
          <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden border border-[#111827] bg-[#f9fafb]">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <PortraitPlaceholder className="absolute inset-0 h-full w-full text-[#d1d5db]" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9ca3af]">
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </p>
            <h1 className="mt-2 font-serif text-[42px] font-medium leading-[1.05] tracking-tight text-[#111827]">
              {name}
            </h1>
            {v('occupation') && (
              <p className="mt-3 text-[15px] font-normal text-[#4b5563]">{v('occupation')}</p>
            )}
          </div>
        </header>

        {/* thin accent rule */}
        <div className="mt-9 h-px w-full bg-[#111827]" />

        {/* Personal details */}
        <section className="mt-9">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="grid grid-cols-2 gap-x-12">
            {personal.map(([k, val, fallback]) => (
              <Row key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-10">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="grid grid-cols-2 gap-x-12">
              {family.map(([k, val, fallback]) => (
                <Row key={k} k={k} val={val} fallback={fallback} />
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {(contact || address) && (
          <section className="mt-10">
            <SectionHead k="contactDetails" fallback="Contact Details" />
            <div className="flex flex-col gap-[3px] pt-[2px]">
              {contact && (
                <p className="text-[14.5px] font-medium tracking-wide text-[#111827]">{contact}</p>
              )}
              {address && <p className="text-[13.5px] leading-snug text-[#4b5563]">{address}</p>}
            </div>
          </section>
        )}

        {/* Footer — minimal contact line */}
        <footer className="mt-auto flex items-center gap-4 pt-6">
          <span className="h-px flex-1 bg-[#d1d5db]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#9ca3af]">
            {t('template.common.biodataTitle', 'Marriage Biodata')}
          </span>
          <span className="h-px flex-1 bg-[#d1d5db]" />
        </footer>
      </div>
    </div>
  )
}
