'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Ornaments ─────────────────────────────────────────────────────────── */

/** Slim crescent moon cradling a five-point star — the header emblem. */
function CrescentStar({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none">
      <path
        d="M58 14a32 32 0 1 0 0 62 26 26 0 1 1 0-62Z"
        fill="currentColor"
        fillOpacity="0.92"
      />
      <path
        d="M64 33l3.6 7.6 8.4 1-6.2 5.8 1.6 8.3L64 59.3l-7.4 3.4 1.6-8.3-6.2-5.8 8.4-1L64 33Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Bismillah-style flourish — a calligraphic gold sweep, text-free. */
function Flourish({ className = '' }) {
  return (
    <svg viewBox="0 0 300 26" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M16 18c30-22 64 16 92-2s48-22 76-4" opacity="0.9" />
      <path d="M40 20c20-10 44 6 64-4" opacity="0.5" />
      <circle cx="150" cy="9" r="2.2" fill="currentColor" stroke="none" />
      <path d="M150 2l1.8 4.4 4.7.5-3.5 3.2.9 4.6-3.9-2.4-3.9 2.4.9-4.6-3.5-3.2 4.7-.5L150 2Z" fill="currentColor" stroke="none" fillOpacity="0.85" />
      <path d="M234 14c14 8 32-2 50 4" opacity="0.5" />
    </svg>
  )
}

/** Eight-point Islamic star + lattice corner. */
function JaliCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 8h44M8 8v44" />
      <path d="M14 14h28M14 14v28" opacity="0.55" />
      {/* eight-point star */}
      <path
        d="M30 14l4.5 11 11-4.5-4.5 11 11 4.5-11 4.5 4.5 11-11-4.5-4.5 11-4.5-11-11 4.5 4.5-11-11-4.5 11-4.5-4.5-11 11 4.5L30 14Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <circle cx="30" cy="41.5" r="3" fill="currentColor" stroke="none" />
      <path d="M20 60c14 0 26 8 32 22M60 20c0 14 8 26 22 32" opacity="0.55" />
    </svg>
  )
}

/** Slim mihrab-style divider with a central pointed-arch motif. */
function ArchDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 300 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M6 13h120M174 13h120" strokeLinecap="round" />
      <path d="M150 1c-10 0-16 7-16 16h32c0-9-6-16-16-16Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M150 5c-6 0-10 4-10 11" fill="none" opacity="0.7" />
      <circle cx="126" cy="13" r="2.3" fill="currentColor" stroke="none" />
      <circle cx="174" cy="13" r="2.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="90" cy="84" r="34" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <path d="M38 200c0-32 23-52 52-52s52 20 52 52" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <path d="M14 92c0-42 34-76 76-76s76 34 76 76v118H14V92Z" strokeDasharray="5 7" opacity="0.5" />
    </svg>
  )
}

/**
 * Emerald Nikah Marriage Biodata — Islamic / Muslim wedding aesthetic.
 *
 * Rich emerald green and gold on ivory, with a crescent-and-star emblem, an
 * eight-point jali lattice frame and a pointed mihrab arch framing the
 * portrait. Astrology rows (rashi / nakshatra / gotra) are intentionally
 * omitted as they are not relevant to this design. Every detail row is
 * localised via `t('template.common.*')` and hidden when its value is empty,
 * so the same form drives a clean card in English, मराठी or हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function EmeraldNikahBiodata({ values }) {
  const { t } = useI18n()
  const v = (k) => (values[k] || '').trim()

  const name = v('fullName') || 'Rohan Mehta'
  const photo = v('photo')

  // Personal details, in render order — no astrology rows. Empty values drop.
  const personal = [
    ['dateOfBirth', formatDate(values.dateOfBirth, '15 August 1997'), 'Date of Birth'],
    ['timeOfBirth', v('timeOfBirth'), 'Time of Birth'],
    ['birthPlace', v('birthPlace'), 'Birth Place'],
    ['height', v('height'), 'Height'],
    ['complexion', v('complexion'), 'Complexion'],
    ['bloodGroup', v('bloodGroup'), 'Blood Group'],
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
    <div className="flex flex-col gap-0.5 border-b border-dotted border-[#d4a437]/45 py-[5px]">
      <span className="flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#0f766e]">
        <span className="text-[#d4a437]">&#10022;</span>
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="pl-3 text-[15.5px] leading-snug text-[#064e3b]/90">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-2 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#064e3b] to-[#0f766e] px-4 py-[5px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#f6e8c4] shadow-sm">
      <span className="text-[#e2bd66]">&#10070;</span>
      {t(`template.common.${k}`, fallback)}
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fbf7ec] font-serif text-[#064e3b]"
    >
      {/* ivory wash + emerald glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f0] via-[#fbf7ec] to-[#f3ecd8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,118,110,0.12),_transparent_60%)]" />

      {/* layered jali frame */}
      <div className="absolute inset-6 rounded-sm border-[3px] border-[#064e3b]/80" />
      <div className="absolute inset-[38px] rounded-sm border border-[#d4a437]/75" />
      <div className="absolute inset-[44px] rounded-sm border-[0.5px] border-[#d4a437]/40" />

      <JaliCorner className="absolute left-8 top-8 h-[66px] w-[66px] text-[#bf9530]" />
      <JaliCorner className="absolute right-8 top-8 h-[66px] w-[66px] text-[#bf9530] [transform:scaleX(-1)]" />
      <JaliCorner className="absolute bottom-8 left-8 h-[66px] w-[66px] text-[#bf9530] [transform:scaleY(-1)]" />
      <JaliCorner className="absolute bottom-8 right-8 h-[66px] w-[66px] text-[#bf9530] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[64px] pb-[40px] pt-[40px]">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <Flourish className="h-5 w-60 text-[#d4a437]" />
          <CrescentStar className="mt-2 h-[50px] w-[50px] text-[#0f766e]" />
          <h1 className="mt-3 font-display text-[34px] font-semibold leading-tight tracking-wide">
            <span
              data-pdf-color="#064e3b"
              className="bg-gradient-to-b from-[#0f766e] via-[#0b5d52] to-[#064e3b] bg-clip-text text-transparent"
            >
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <ArchDivider className="mt-2 h-3.5 w-64 text-[#d4a437]" />
        </header>

        {/* Name + mihrab-arched portrait */}
        <div className="mt-5 flex items-center gap-7">
          <div className="shrink-0">
            {/* gold mihrab arch frame: pointed top via rounded-t-full + border */}
            <div className="rounded-t-[80px] rounded-b-lg bg-gradient-to-br from-[#e7cd85] via-[#d4a437] to-[#b98f2e] p-[6px] shadow-[0_14px_34px_-16px_rgba(60,90,70,0.55)]">
              <div className="relative h-[188px] w-[160px] overflow-hidden rounded-t-[74px] rounded-b-md bg-[#fbf6e6]">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <PortraitPlaceholder className="absolute inset-0 h-full w-full text-[#d4a437]/70" />
                )}
                <div className="pointer-events-none absolute inset-[5px] rounded-t-[70px] rounded-b border border-[#d4a437]/45" />
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#d4a437]">
              {t('template.common.name', 'Name')}
            </p>
            <h2 className="mt-1 font-display text-[40px] font-semibold leading-[1.05] text-[#0f766e]">{name}</h2>
            <span className="mt-3 block h-[3px] w-20 rounded-full bg-gradient-to-r from-[#0f766e] to-[#d4a437]" />
            {v('occupation') && <p className="mt-3 text-[16px] text-[#064e3b]/80">{v('occupation')}</p>}
          </div>
        </div>

        {/* Personal details */}
        <section className="mt-5">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="mt-1 grid grid-cols-2 gap-x-9 rounded-sm border-l-2 border-[#d4a437]/70 bg-white/35 px-6 py-1">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-6">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="mt-1 grid grid-cols-2 gap-x-9 rounded-sm border-l-2 border-[#d4a437]/70 bg-white/35 px-6 py-1">
              {family.map(([k, val, fallback]) => (
                <Cell key={k} k={k} val={val} fallback={fallback} />
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {(contact || address) && (
          <section className="mt-6">
            <SectionHead k="contactDetails" fallback="Contact Details" />
            <div className="mt-1 rounded-sm border-l-2 border-[#d4a437]/70 bg-white/35 px-6 py-2">
              {contact && (
                <p className="text-[17px] font-semibold tracking-wide text-[#0f766e]">{contact}</p>
              )}
              {address && <p className="mt-1 text-[15px] leading-snug text-[#064e3b]/80">{address}</p>}
            </div>
          </section>
        )}

        <footer className="mt-auto flex items-center justify-center gap-3 pt-3 text-[#d4a437]">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4a437]/60" />
          <CrescentStar className="h-5 w-5 text-[#0f766e]" />
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4a437]/60" />
        </footer>
      </div>
    </div>
  )
}
