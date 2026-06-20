'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Inline icons ──────────────────────────────────────────────────────── */

function PhoneIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1Z" />
    </svg>
  )
}

function PinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 225" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="90" cy="86" r="34" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M36 200c0-32 24-52 54-52s54 20 54 52" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <rect x="10" y="10" width="160" height="205" rx="12" strokeDasharray="5 7" opacity="0.45" />
    </svg>
  )
}

/**
 * Teal Sidebar Marriage Biodata — modern matrimonial profile.
 *
 * A contemporary two-column layout: a full-height teal/emerald sidebar carries
 * the photo, name, occupation and a compact contact block; the white right
 * column holds the title plus Personal and Family details in clean grid rows
 * with teal accents. Every label is localised via `t('template.common.*')` and
 * each row is hidden when its value is empty, so one form drives a tidy card in
 * English, मराठी or हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function TealSidebarBiodata({ values }) {
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
    <div className="flex flex-col gap-0.5 py-[6px]">
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-teal-600">
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="text-[14.5px] leading-snug text-slate-700">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-1.5 flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.16em] text-teal-800">
      <span className="h-[14px] w-[3px] rounded-full bg-teal-600" />
      {t(`template.common.${k}`, fallback)}
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative flex h-[1123px] w-[794px] overflow-hidden bg-white font-sans text-slate-700"
    >
      {/* ── Left sidebar ─────────────────────────────────────────────── */}
      <aside className="relative flex w-[270px] shrink-0 flex-col items-center bg-gradient-to-b from-[#0f766e] to-[#134e4a] px-7 pb-9 pt-11 text-white">
        {/* photo */}
        <div className="rounded-2xl bg-white/15 p-[5px] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/40">
          <div className="relative h-[244px] w-[195px] overflow-hidden rounded-xl bg-[#0b5f58]">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <PortraitPlaceholder className="absolute inset-0 h-full w-full text-white/45" />
            )}
          </div>
        </div>

        {/* name + occupation */}
        <div className="mt-7 text-center">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-teal-200">
            {t('template.common.name', 'Name')}
          </p>
          <h2 className="mt-1.5 font-display text-[28px] font-semibold leading-[1.12] text-white">{name}</h2>
          <span className="mx-auto mt-3 block h-[2px] w-12 rounded-full bg-teal-300/80" />
          {v('occupation') && (
            <p className="mt-3 text-[14px] leading-snug text-teal-100/90">{v('occupation')}</p>
          )}
        </div>

        {/* contact block pinned to bottom */}
        {(contact || address) && (
          <div className="mt-auto w-full border-t border-white/20 pt-5">
            <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-teal-200">
              {t('template.common.contactDetails', 'Contact Details')}
            </p>
            {contact && (
              <div className="flex items-start gap-2.5">
                <PhoneIcon className="mt-[2px] h-[16px] w-[16px] shrink-0 text-teal-300" />
                <span className="text-[13.5px] leading-snug text-white/90">{contact}</span>
              </div>
            )}
            {address && (
              <div className="mt-2.5 flex items-start gap-2.5">
                <PinIcon className="mt-[1px] h-[16px] w-[16px] shrink-0 text-teal-300" />
                <span className="text-[13px] leading-snug text-white/80">{address}</span>
              </div>
            )}
          </div>
        )}
      </aside>

      {/* ── Right column ─────────────────────────────────────────────── */}
      <main className="flex min-w-0 flex-1 flex-col px-12 pb-12 pt-12">
        <header>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal-500">
            {t('template.common.om', 'ॐ')}
          </p>
          <h1 className="mt-1.5 font-display text-[38px] font-bold leading-tight text-teal-800">
            {t('template.common.biodataTitle', 'Marriage Biodata')}
          </h1>
          <span className="mt-3 block h-[3px] w-24 rounded-full bg-teal-500" />
        </header>

        {/* Personal details */}
        <section className="mt-10">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="grid grid-cols-2 gap-x-10 divide-y-0">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-9">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="grid grid-cols-2 gap-x-10">
              {family.map(([k, val, fallback]) => (
                <Cell key={k} k={k} val={val} fallback={fallback} />
              ))}
            </div>
          </section>
        )}

        <footer className="mt-auto flex items-center gap-3 pt-8 text-teal-400">
          <span className="h-px flex-1 bg-gradient-to-r from-teal-200 to-transparent" />
          <span className="text-[13px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
        </footer>
      </main>
    </div>
  )
}
