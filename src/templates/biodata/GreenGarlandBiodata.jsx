'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Ornaments ─────────────────────────────────────────────────────────── */

/** A single marigold bloom (gold) used to build the toran garland. */
function Marigold({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="11" fill="#d4a437" />
      <circle cx="12" cy="12" r="8" fill="#e6b94d" />
      <g fill="#c8941f">
        <circle cx="12" cy="4" r="2.1" />
        <circle cx="18.2" cy="6.4" r="2.1" />
        <circle cx="20.5" cy="12" r="2.1" />
        <circle cx="18.2" cy="17.6" r="2.1" />
        <circle cx="12" cy="20" r="2.1" />
        <circle cx="5.8" cy="17.6" r="2.1" />
        <circle cx="3.5" cy="12" r="2.1" />
        <circle cx="5.8" cy="6.4" r="2.1" />
      </g>
      <circle cx="12" cy="12" r="3.4" fill="#a9760f" />
    </svg>
  )
}

/** A pair of mango leaves hanging down — the green of the toran. */
function MangoLeaf({ className = '' }) {
  return (
    <svg viewBox="0 0 28 40" className={className} fill="none">
      <path d="M14 2c-7 4-11 13-9 24 1 6 6 11 9 12 3-1 8-6 9-12 2-11-2-20-9-24Z" fill="#1b6e3a" />
      <path d="M14 4c-5 4-8 12-6.5 21 1 5 4 9 6.5 10V4Z" fill="#15803d" />
      <path d="M14 6v30" stroke="#0f5a2c" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Mango-leaf + marigold toran swag for the top of the page. A draped string
 * with alternating marigold blooms and hanging leaf pairs.
 */
function Toran({ className = '' }) {
  const cols = Array.from({ length: 11 }, (_, i) => i)
  return (
    <svg viewBox="0 0 660 96" className={className} fill="none" preserveAspectRatio="none">
      {/* draped string */}
      <path d="M6 8C170 64 490 64 654 8" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
      {cols.map((i) => {
        const x = 30 + i * 60
        // parabola-ish drape so the middle hangs lower
        const t = (x - 330) / 330
        const y = 14 + 38 * (1 - t * t)
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            {i % 2 === 0 ? (
              <>
                <line x1="0" y1="-6" x2="0" y2="2" stroke="#0f5a2c" strokeWidth="1.4" />
                <g transform="translate(-9 2)">
                  <use href="#gg-leaf" />
                </g>
              </>
            ) : (
              <>
                <line x1="0" y1="-6" x2="0" y2="0" stroke="#c8941f" strokeWidth="1.4" />
                <g transform="translate(-9 0)">
                  <use href="#gg-marigold" />
                </g>
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/** Small leafy corner sprig. */
function CornerSprig({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M8 8c26 6 44 24 50 50" opacity="0.9" />
      <g fill="currentColor" stroke="none" fillOpacity="0.55">
        <path d="M16 14c8-3 15-2 20 3-7 3-15 2-20-3Z" />
        <path d="M26 30c8-2 15 0 19 6-7 2-15-1-19-6Z" />
        <path d="M38 50c7-1 14 2 17 8-7 1-14-2-17-8Z" />
      </g>
      <circle cx="8" cy="8" r="3" fill="#d4a437" stroke="none" />
    </svg>
  )
}

/** Ganesha mark above the invocation. */
function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="40" r="34" opacity="0.3" />
      <path d="M24 30c0-9 7-15 16-15s16 6 16 15c0 6-3 10-7 13" fill="currentColor" fillOpacity="0.12" />
      <path d="M24 28c-7 0-11 5-11 11s4 10 10 10" fill="currentColor" fillOpacity="0.1" />
      <path d="M56 28c7 0 11 5 11 11s-4 10-10 10" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 36c0 8-1 14-6 18-4 3-4 9 1 10 4 1 7-2 7-6" />
      <circle cx="33" cy="35" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="47" cy="35" r="1.6" fill="currentColor" stroke="none" />
      <path d="M28 18l4-9 8 7 8-7 4 9" />
      <path d="M40 22v8" opacity="0.8" />
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
 * Green Garland Marriage Biodata — fresh traditional design with florals.
 *
 * Emerald/leaf green + marigold gold on ivory, fronted by a mango-leaf &
 * marigold toran swag, Ganesha invocation and a green/gold framed portrait.
 * Every detail row is localised via `t('template.common.*')` and hidden when
 * its value is empty, so the one form drives a clean card in English, मराठी or
 * हिंदी.
 *
 * Natural design size: 794 × 1123 (A4 @ 96dpi, portrait).
 */
export default function GreenGarlandBiodata({ values }) {
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
    <div className="flex flex-col gap-0.5 border-b border-dotted border-[#d4a437]/45 py-[3px]">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#15803d]">
        <span className="text-[#d4a437]">&#10047;</span>
        {t(`template.common.${k}`, fallback)}
      </span>
      <span className="pl-[18px] text-[15px] leading-snug text-[#1f3d2a]/90">{val}</span>
    </div>
  )

  const SectionHead = ({ k, fallback }) => (
    <h2 className="mb-1 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#15803d] to-[#1b6e3a] px-4 py-[4px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#fef6e1] shadow-sm">
      <span className="text-[#e6b94d]">&#10047;</span>
      {t(`template.common.${k}`, fallback)}
    </h2>
  )

  return (
    <div
      data-export-root
      className="relative h-[1123px] w-[794px] overflow-hidden bg-[#fdf8ec] font-serif text-[#1f3d2a]"
    >
      {/* shared SVG defs for the toran */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <g id="gg-marigold">
            <Marigold className="h-[18px] w-[18px]" />
          </g>
          <g id="gg-leaf">
            <MangoLeaf className="h-[24px] w-[18px]" />
          </g>
        </defs>
      </svg>

      {/* ivory wash + soft green glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf0] via-[#fdf8ec] to-[#f1f6ea]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(21,128,61,0.10),_transparent_60%)]" />

      {/* double frame: green outer, gold inner */}
      <div className="absolute inset-6 rounded-sm border-[3px] border-[#15803d]/75" />
      <div className="absolute inset-[40px] rounded-sm border border-[#d4a437]/70" />

      {/* leafy corner sprigs */}
      <CornerSprig className="absolute left-9 top-9 h-[58px] w-[58px] text-[#15803d]" />
      <CornerSprig className="absolute right-9 top-9 h-[58px] w-[58px] text-[#15803d] [transform:scaleX(-1)]" />
      <CornerSprig className="absolute bottom-9 left-9 h-[58px] w-[58px] text-[#15803d] [transform:scaleY(-1)]" />
      <CornerSprig className="absolute bottom-9 right-9 h-[58px] w-[58px] text-[#15803d] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[62px] pb-[30px] pt-[30px]">
        {/* Header — toran swag + invocation + title */}
        <header className="flex flex-col items-center text-center">
          <Toran className="h-[62px] w-[560px]" />
          <Ganesha className="-mt-1 h-[36px] w-[36px] text-[#15803d]" />
          <p className="mt-1 text-[18px] leading-none tracking-wide text-[#15803d]">॥ श्री गणेशाय नमः ॥</p>
          <h1 className="mt-1.5 font-display text-[29px] font-semibold leading-tight tracking-wide">
            <span
              data-pdf-color="#15803d"
              className="bg-gradient-to-b from-[#1b8a44] via-[#15803d] to-[#0f5a2c] bg-clip-text text-transparent"
            >
              {t('template.common.biodataTitle', 'Marriage Biodata')}
            </span>
          </h1>
          <span className="mt-1.5 block h-[3px] w-56 rounded-full bg-gradient-to-r from-transparent via-[#d4a437] to-transparent" />
        </header>

        {/* Name + portrait */}
        <div className="mt-3.5 flex items-center gap-7">
          <div className="shrink-0 rounded-xl bg-gradient-to-br from-[#1b8a44] via-[#15803d] to-[#0f5a2c] p-[5px] shadow-[0_14px_34px_-16px_rgba(15,90,44,0.5)]">
            <div className="rounded-lg bg-gradient-to-br from-[#e6b94d] to-[#c8941f] p-[3px]">
              <div className="relative h-[172px] w-[138px] overflow-hidden rounded-md bg-[#f4f8ee]">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <PortraitPlaceholder className="absolute inset-0 h-full w-full text-[#15803d]/55" />
                )}
                <div className="pointer-events-none absolute inset-[5px] rounded-sm border border-[#d4a437]/45" />
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#d4a437]">
              {t('template.common.name', 'Name')}
            </p>
            <h2 className="mt-1 font-display text-[34px] font-semibold leading-[1.05] text-[#15803d]">{name}</h2>
            <span className="mt-2 block h-[3px] w-20 rounded-full bg-gradient-to-r from-[#15803d] to-[#d4a437]" />
            {v('occupation') && <p className="mt-2 text-[16px] text-[#1f3d2a]/80">{v('occupation')}</p>}
          </div>
        </div>

        {/* Personal details */}
        <section className="mt-3.5">
          <SectionHead k="personalDetails" fallback="Personal Details" />
          <div className="mt-1 grid grid-cols-2 gap-x-9 rounded-sm border-l-2 border-[#d4a437]/70 bg-white/40 px-6 py-0.5">
            {personal.map(([k, val, fallback]) => (
              <Cell key={k} k={k} val={val} fallback={fallback} />
            ))}
          </div>
        </section>

        {/* Family details */}
        {family.length > 0 && (
          <section className="mt-3.5">
            <SectionHead k="familyDetails" fallback="Family Details" />
            <div className="mt-1 grid grid-cols-2 gap-x-9 rounded-sm border-l-2 border-[#d4a437]/70 bg-white/40 px-6 py-0.5">
              {family.map(([k, val, fallback]) => (
                <Cell key={k} k={k} val={val} fallback={fallback} />
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {(contact || address) && (
          <section className="mt-3.5">
            <SectionHead k="contactDetails" fallback="Contact Details" />
            <div className="mt-1 rounded-sm border-l-2 border-[#d4a437]/70 bg-white/40 px-6 py-1.5">
              {contact && (
                <p className="text-[17px] font-semibold tracking-wide text-[#15803d]">{contact}</p>
              )}
              {address && <p className="mt-1 text-[15px] leading-snug text-[#1f3d2a]/80">{address}</p>}
            </div>
          </section>
        )}

        <footer className="mt-auto flex items-center justify-center gap-3 pt-2 text-[#d4a437]">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4a437]/60" />
          <span className="text-[15px] tracking-[0.3em] text-[#15803d]">{t('template.common.om', 'ॐ')}</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4a437]/60" />
        </footer>
      </div>
    </div>
  )
}
