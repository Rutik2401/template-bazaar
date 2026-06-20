'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Inline art ────────────────────────────────────────────────────────── */

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 225" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="90" cy="86" r="33" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <path d="M40 200c0-31 22-50 50-50s50 19 50 50" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <rect x="12" y="12" width="156" height="201" rx="14" strokeDasharray="5 7" opacity="0.4" />
    </svg>
  )
}

/** Tiny line icons for section title chips. */
function IconUser({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  )
}

function IconHome({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  )
}

function IconPhone({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

/**
 * Pastel Blue Modern Marriage Biodata — soft, friendly, app-like.
 *
 * Sky / periwinkle blue with white cards, soft shadows and a hint of warm gold.
 * A rounded portrait sits in a gentle top header band beside the name and a
 * "Marriage Biodata" pill. Each section (Personal / Family / Contact) is a
 * rounded white card with a soft blue title chip and a clean 2-column grid.
 * Every label is localised via `t('template.common.*')` and rows hide when
 * empty, so the same form drives a clean card in English, मराठी or हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function PastelBlueBiodata({ values }) {
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
    <div className="flex min-w-0 flex-col gap-0.5 py-[5px]">
      <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-blue-400">
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="break-words text-[15px] font-medium leading-snug text-slate-700">{val}</span>
    </div>
  )

  const SectionCard = ({ icon, k, fallback, children }) => (
    <section className="rounded-2xl bg-white px-6 py-3.5 shadow-[0_10px_30px_-18px_rgba(59,130,246,0.45)] ring-1 ring-blue-100/80">
      <h2 className="mb-1 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-blue-500">
        <span className="text-blue-400">{icon}</span>
        {t(`template.common.${k}`, fallback)}
      </h2>
      {children}
    </section>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#f5f9ff] font-sans text-slate-700"
    >
      {/* airy wash — decorative blobs wrapped so they never extend past the card */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3ff] via-[#f5f9ff] to-[#f0f6ff]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-72 rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col px-[48px] pb-[28px] pt-[40px]">
        {/* Header band: photo + name + pill */}
        <header className="flex items-center gap-6 rounded-3xl bg-gradient-to-br from-[#e8f1ff] to-[#dbeafe] px-6 py-5 shadow-[0_18px_40px_-24px_rgba(59,130,246,0.6)] ring-1 ring-white/70">
          <div className="shrink-0 rounded-2xl bg-white p-[5px] shadow-[0_12px_28px_-16px_rgba(59,130,246,0.55)]">
            <div className="relative h-[185px] w-[148px] overflow-hidden rounded-xl bg-blue-50">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <PortraitPlaceholder className="absolute inset-0 h-full w-full text-blue-300" />
              )}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-500 shadow-sm ring-1 ring-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
              {t('template.common.name', 'Name')}
            </p>
            <h1 className="mt-1 break-words font-display text-[38px] font-bold leading-[1.06] text-slate-800">{name}</h1>
            <span className="mt-3 block h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-400 to-amber-300" />
            {v('occupation') && <p className="mt-3 text-[15px] font-medium text-slate-500">{v('occupation')}</p>}
          </div>
        </header>

        {/* Cards */}
        <div className="mt-5 flex flex-col gap-4">
          {/* Personal */}
          <SectionCard icon={<IconUser className="h-3.5 w-3.5" />} k="personalDetails" fallback="Personal Details">
            <div className="mt-1 grid grid-cols-2 gap-x-8">
              {personal.map(([k, val, fallback]) => (
                <Cell key={k} k={k} val={val} fallback={fallback} />
              ))}
            </div>
          </SectionCard>

          {/* Family */}
          {family.length > 0 && (
            <SectionCard icon={<IconHome className="h-3.5 w-3.5" />} k="familyDetails" fallback="Family Details">
              <div className="mt-1 grid grid-cols-2 gap-x-8">
                {family.map(([k, val, fallback]) => (
                  <Cell key={k} k={k} val={val} fallback={fallback} />
                ))}
              </div>
            </SectionCard>
          )}

          {/* Contact */}
          {(contact || address) && (
            <SectionCard icon={<IconPhone className="h-3.5 w-3.5" />} k="contactDetails" fallback="Contact Details">
              <div className="mt-1">
                {contact && (
                  <p className="text-[16px] font-semibold tracking-wide text-slate-700">{contact}</p>
                )}
                {address && <p className="mt-1 text-[14px] leading-snug text-slate-500">{address}</p>}
              </div>
            </SectionCard>
          )}
        </div>

        <footer className="mt-auto flex items-center justify-center gap-3 pt-6 text-blue-400">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-blue-300/70" />
          <span className="text-[15px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-blue-300/70" />
        </footer>
      </div>
    </div>
  )
}
