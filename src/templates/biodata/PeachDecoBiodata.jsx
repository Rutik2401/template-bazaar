'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Art-Deco ornaments (inline SVG, no external images) ─────────────────── */

/** Symmetric gold sunburst / fan rays for the header. */
function Sunburst({ className = '' }) {
  const rays = []
  for (let i = 0; i <= 12; i++) {
    const a = (Math.PI * i) / 12 // 0 → π across the top half
    const x = 100 - Math.cos(a) * 96
    const y = 60 - Math.sin(a) * 56
    rays.push(<path key={i} d={`M100 60 L${x.toFixed(1)} ${y.toFixed(1)}`} />)
  }
  return (
    <svg viewBox="0 0 200 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <g opacity="0.9">{rays}</g>
      <path d="M52 60a48 30 0 0 1 96 0" opacity="0.5" />
      <path d="M70 60a30 19 0 0 1 60 0" opacity="0.7" />
      <circle cx="100" cy="60" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Stepped art-deco corner bracket. */
function DecoBracket({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
      <path d="M8 72V40h10V22h14V8" />
      <path d="M16 72V48h10V30h14V16" opacity="0.55" />
      <path d="M8 8h12v12H8z" fill="currentColor" fillOpacity="0.3" stroke="none" />
      <path d="M30 8l6 6-6 6-6-6 6-6Z" fill="currentColor" fillOpacity="0.45" stroke="none" />
    </svg>
  )
}

/** Slim double gold rule with a central deco lozenge. */
function DecoRule({ className = '' }) {
  return (
    <svg viewBox="0 0 320 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M8 5h120M192 5h120M8 11h120M192 11h120" strokeLinecap="round" />
      <path d="M160 0l14 8-14 8-14-8 14-8Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M160 4l7 4-7 4-7-4 7-4Z" fill="currentColor" fillOpacity="0.55" stroke="none" />
      <circle cx="128" cy="8" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="192" cy="8" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Small deco section marker (stepped chevron). */
function DecoMark({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
      <path d="M10 3l6 7-6 7-6-7 6-7Z" />
      <path d="M10 7l3 3-3 3-3-3 3-3Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  )
}

/** Footer deco fan flourish. */
function DecoFan({ className = '' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <path d="M60 36V8M60 36L40 12M60 36L80 12M60 36L48 10M60 36L72 10" opacity="0.85" />
      <path d="M34 16a40 24 0 0 1 52 0" opacity="0.55" />
      <circle cx="60" cy="36" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Portrait silhouette shown when no photo is uploaded. */
function PortraitPlaceholder({ className = '' }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="90" cy="84" r="34" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <path d="M38 196c0-32 23-52 52-52s52 20 52 52" fill="currentColor" fillOpacity="0.16" stroke="none" />
      <path d="M14 14h152v192H14z" strokeDasharray="5 7" opacity="0.5" />
    </svg>
  )
}

/**
 * Peach Art-Deco Marriage Biodata — 1920s Gatsby wedding suite.
 *
 * Warm peach / blush / terracotta with gold on cream, geometric art-deco
 * motifs (sunburst rays, stepped corner brackets, double gold rules and a
 * stepped-arch portrait frame). Every detail row is localised via
 * `t('template.common.*')` and hidden when its value is empty, so the same
 * form renders cleanly in English, मराठी or हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function PeachDecoBiodata({ values }) {
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
    <div className="flex flex-col gap-0.5 border-b border-[#e08a6e]/30 py-[4px]">
      <span className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#b9603f]">
        <span className="text-[#c79a2f]">&#9670;</span>
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="pl-[18px] text-[14.5px] leading-snug text-[#5e3a2c]">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <div className="mb-2 flex items-center gap-2.5">
      <DecoMark className="h-4 w-4 text-[#c79a2f]" />
      <h2 className="font-serif text-[13px] font-bold uppercase tracking-[0.24em] text-[#b9603f]">
        {t(`template.common.${k}`, fallback)}
      </h2>
      <span className="h-[2px] flex-1 bg-gradient-to-r from-[#c79a2f]/70 via-[#e08a6e]/50 to-transparent" />
    </div>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fdf3ea] font-serif text-[#5e3a2c]"
    >
      {/* cream wash with a soft peach glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fde4d6] via-[#fdf3ea] to-[#fbe7d8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(199,154,47,0.16),_transparent_58%)]" />

      {/* deco double frame */}
      <div className="absolute inset-7 border-[2px] border-[#c79a2f]/75" />
      <div className="absolute inset-[38px] border border-[#e08a6e]/55" />

      <DecoBracket className="absolute left-9 top-9 h-[58px] w-[58px] text-[#c79a2f]" />
      <DecoBracket className="absolute right-9 top-9 h-[58px] w-[58px] text-[#c79a2f] [transform:scaleX(-1)]" />
      <DecoBracket className="absolute bottom-9 left-9 h-[58px] w-[58px] text-[#c79a2f] [transform:scaleY(-1)]" />
      <DecoBracket className="absolute bottom-9 right-9 h-[58px] w-[58px] text-[#c79a2f] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[62px] pb-[34px] pt-[32px]">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <Sunburst className="h-[40px] w-[150px] text-[#c79a2f]" />
          <h1 className="mt-2 font-display text-[30px] font-semibold uppercase leading-none tracking-[0.18em]">
            <span
              data-pdf-color="#b9603f"
              className="bg-gradient-to-b from-[#f2a08a] via-[#e08a6e] to-[#b9603f] bg-clip-text text-transparent"
            >
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <DecoRule className="mt-2 h-3.5 w-72 text-[#c79a2f]" />
        </header>

        {/* Name + portrait */}
        <div className="mt-4 flex items-center gap-7">
          {/* stepped-arch deco portrait frame */}
          <div className="shrink-0 bg-gradient-to-br from-[#e7c878] via-[#d4ad53] to-[#b98f2e] p-[5px] shadow-[0_14px_34px_-16px_rgba(150,90,40,0.5)] [clip-path:polygon(0_18%,18%_0,82%_0,100%_18%,100%_100%,0_100%)]">
            <div className="relative h-[178px] w-[157px] overflow-hidden bg-[#fdeee2] [clip-path:polygon(0_18%,18%_0,82%_0,100%_18%,100%_100%,0_100%)]">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <PortraitPlaceholder className="absolute inset-0 h-full w-full text-[#e08a6e]/70" />
              )}
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c79a2f]">
              {t('template.common.name', 'Name')}
            </p>
            <h2 className="mt-1 font-display text-[38px] font-semibold uppercase leading-[1.05] tracking-[0.06em] text-[#b9603f]">
              {name}
            </h2>
            <span className="mt-3 flex items-center gap-2">
              <span className="h-[3px] w-16 bg-gradient-to-r from-[#e08a6e] to-[#c79a2f]" />
              <span className="h-2 w-2 rotate-45 bg-[#c79a2f]" />
            </span>
            {v('occupation') && <p className="mt-3 text-[15px] text-[#5e3a2c]/85">{v('occupation')}</p>}
          </div>
        </div>

        {/* Personal details */}
        <section className="mt-5">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="grid grid-cols-2 gap-x-9 border-l-2 border-[#c79a2f]/55 bg-white/35 px-6 py-1">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-4">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="grid grid-cols-2 gap-x-9 border-l-2 border-[#c79a2f]/55 bg-white/35 px-6 py-1">
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
            <div className="border-l-2 border-[#c79a2f]/55 bg-white/35 px-6 py-2">
              {contact && <p className="text-[16px] font-semibold tracking-wide text-[#b9603f]">{contact}</p>}
              {address && <p className="mt-1 text-[14.5px] leading-snug text-[#5e3a2c]/85">{address}</p>}
            </div>
          </section>
        )}

        <footer className="mt-auto flex flex-col items-center gap-1.5 pt-3 text-[#c79a2f]">
          <DecoFan className="h-7 w-28" />
          <span className="text-[14px] tracking-[0.3em]">{t('template.common.om', 'ॐ')}</span>
        </footer>
      </div>
    </div>
  )
}
