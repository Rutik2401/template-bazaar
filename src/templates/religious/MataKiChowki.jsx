'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Devi motifs ───────────────────────────────────────────────────────── */

function Trishul({ className = '' }) {
  return (
    <svg viewBox="0 0 48 130" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* central prong */}
      <path d="M24 6c-3 6-3 12 0 18 3-6 3-12 0-18Z" fill="currentColor" fillOpacity="0.5" />
      {/* side prongs */}
      <path d="M8 18c2 8 6 14 12 16M40 18c-2 8-6 14-12 16" />
      <path d="M8 18c-2 4-2 9 0 13M40 18c2 4 2 9 0 13" fill="currentColor" fillOpacity="0.3" />
      {/* crossbar + damru knot */}
      <path d="M10 36h28" />
      <path d="M24 30v92" />
      <path d="M18 70c4 3 8 3 12 0M18 76c4-3 8-3 12 0" opacity="0.7" />
    </svg>
  )
}

function SunRays({ className = '' }) {
  const rays = Array.from({ length: 24 })
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      {rays.map((_, i) => (
        <line
          key={i}
          x1="120"
          y1="120"
          x2="120"
          y2="8"
          opacity={i % 2 === 0 ? 0.55 : 0.28}
          transform={`rotate(${(360 / rays.length) * i} 120 120)`}
        />
      ))}
    </svg>
  )
}

/** A lit oil lamp / akhand jyot for the jagran. */
function Diya({ className = '' }) {
  return (
    <svg viewBox="0 0 64 78" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="32" cy="20" rx="11" ry="16" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <path d="M32 4c-4 7-7 11-7 17a7 7 0 0014 0c0-6-3-10-7-17Z" fill="currentColor" fillOpacity="0.7" stroke="none" />
      <path d="M32 16c-2 3-3 5-3 8a3 3 0 006 0c0-3-1-5-3-8Z" fill="currentColor" fillOpacity="0.95" stroke="none" />
      <path d="M8 44c0 9 11 15 24 15s24-6 24-15c0-4-3-5-7-5H15c-4 0-7 1-7 5Z" fill="currentColor" fillOpacity="0.22" />
      <path d="M18 60h28l-4 8H22Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M16 70h32" opacity="0.6" />
    </svg>
  )
}

/** A scallop of temple bells strung beneath the canopy. */
function BellGarland({ className = '' }) {
  return (
    <svg viewBox="0 0 640 54" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M0 6q320 28 640 0" opacity="0.55" />
      {Array.from({ length: 15 }).map((_, i) => {
        const x = 24 + i * 42
        const dip = Math.sin((i / 14) * Math.PI) * 12
        const y = 6 + dip
        return (
          <g key={i}>
            <path d={`M${x} ${y}v7`} opacity="0.5" />
            <path d={`M${x - 5} ${y + 20}c0-7 2-12 5-12s5 5 5 12Z`} fill="currentColor" fillOpacity="0.42" />
            <path d={`M${x - 7} ${y + 20}h14`} />
            <circle cx={x} cy={y + 25} r="1.7" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Mata ki Chowki / Jagran — vibrant crimson & gold devotional night.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function MataKiChowki({ values }) {
  const { t } = useI18n()
  const event = values.eventName?.trim() || 'Mata Ki Chowki'
  const family = values.familyName?.trim() || 'The Verma Family'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Community Hall, Sector 9, Pune'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#5a0a14] px-16 py-16 text-center font-serif text-gold-100"
    >
      {/* deep crimson silk */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8a1220] via-[#5a0a14] to-[#34050b]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_24%,rgba(226,189,102,0.16),transparent_55%)]" />

      {/* golden divine halo + rays behind the deity */}
      <SunRays className="pointer-events-none absolute left-1/2 top-[180px] h-[420px] w-[420px] -translate-x-1/2 text-gold-300/55" />
      <div className="pointer-events-none absolute left-1/2 top-[210px] h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,224,71,0.55)_0%,rgba(226,189,102,0)_65%)]" />

      {/* ornate gold frame */}
      <div className="pointer-events-none absolute inset-5 rounded-sm border-2 border-gold-400/85" />
      <div className="pointer-events-none absolute inset-[30px] rounded-sm border border-gold-300/45" />
      <div className="pointer-events-none absolute inset-[30px] rounded-sm [box-shadow:inset_0_0_30px_rgba(226,189,102,0.14)]" />

      {/* bell garland strung beneath the top border */}
      <BellGarland className="pointer-events-none absolute inset-x-12 top-[40px] h-11 text-gold-300/65" />

      {/* flanking trishuls */}
      <Trishul className="absolute left-9 top-1/2 h-44 w-12 -translate-y-1/2 text-gold-300/80" />
      <Trishul className="absolute right-9 top-1/2 h-44 w-12 -translate-y-1/2 text-gold-300/80" />

      <header className="relative flex flex-col items-center pt-2">
        <span className="font-display text-[42px] leading-none text-gold-200 [text-shadow:0_2px_12px_rgba(253,224,71,0.4)]">{t('template.common.om', 'ॐ')}</span>
        <p className="mt-3 font-display text-[24px] tracking-wide text-gold-200">॥ जय माता दी ॥</p>
        <div className="mt-3 flex items-center gap-2 text-gold-300/80">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-300/70" />
          <span className="text-[11px]">✦</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-300/70" />
        </div>
        <p className="mt-3 text-[12px] uppercase tracking-[0.34em] text-gold-300/85">
          {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
        </p>
      </header>

      <main className="relative flex flex-col items-center gap-4">
        <p className="text-[13px] uppercase tracking-[0.42em] text-gold-300/80">{t('template.common.joinUs', 'Join us for an evening of devotion')}</p>
        <h1 className="font-display text-[54px] font-semibold leading-[1.04]">
          <span
            data-pdf-color="#e2bd66"
            className="bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent [text-shadow:0_2px_14px_rgba(226,189,102,0.3)]"
          >
            {event}
          </span>
        </h1>
        <p className="text-[15px] italic text-gold-300/85">{t('template.common.cordiallyInvite', 'cordially invite you with family to')}</p>
        <p className="font-display text-2xl tracking-wide text-gold-100">{family}</p>
      </main>

      <footer className="relative flex w-full flex-col items-center gap-3">
        <div className="flex items-end gap-6">
          <Diya className="h-12 w-9 text-gold-300" />
          <div className="rounded-md border border-gold-400/65 bg-[#7a0f1c]/55 px-8 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <p className="text-[11px] uppercase tracking-[0.36em] text-gold-300">{t('template.common.saveTheDate', 'Save the Date')}</p>
            <p className="mt-1 font-display text-2xl text-gold-100">{date}{time && ` · ${time}`}</p>
          </div>
          <Diya className="h-12 w-9 -scale-x-100 text-gold-300" />
        </div>
        <p className="max-w-[22rem] text-[16px] leading-snug text-gold-100">{venue}</p>
        <div className="mt-1 flex items-center gap-3 text-gold-300/85">
          <span className="h-px w-8 bg-gold-300/50" />
          <p className="text-[12px] uppercase tracking-[0.3em]">
            {t('template.common.mahaprasad', 'Mahaprasad & Bhojan to follow')}
          </p>
          <span className="h-px w-8 bg-gold-300/50" />
        </div>
      </footer>
    </div>
  )
}
