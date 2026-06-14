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
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a0f1c] via-[#5a0a14] to-[#3a060d]" />

      {/* golden divine halo + rays behind the deity */}
      <SunRays className="pointer-events-none absolute left-1/2 top-[180px] h-[420px] w-[420px] -translate-x-1/2 text-gold-300/60" />
      <div className="pointer-events-none absolute left-1/2 top-[210px] h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,189,102,0.45)_0%,rgba(226,189,102,0)_65%)]" />

      {/* ornate gold frame */}
      <div className="pointer-events-none absolute inset-5 rounded-sm border-2 border-gold-400/80" />
      <div className="pointer-events-none absolute inset-[30px] rounded-sm border border-gold-300/40" />

      {/* flanking trishuls */}
      <Trishul className="absolute left-9 top-1/2 h-44 w-12 -translate-y-1/2 text-gold-300/80" />
      <Trishul className="absolute right-9 top-1/2 h-44 w-12 -translate-y-1/2 text-gold-300/80" />

      <header className="relative flex flex-col items-center">
        <span className="font-display text-4xl leading-none text-gold-200">{t('template.common.om', 'ॐ')}</span>
        <p className="mt-3 font-display text-[22px] tracking-wide text-gold-200">॥ जय माता दी ॥</p>
        <p className="mt-3 text-[12px] uppercase tracking-[0.34em] text-gold-300/85">
          {t('template.common.withDivineBlessings', 'With the divine blessings of the Almighty')}
        </p>
      </header>

      <main className="relative flex flex-col items-center gap-4">
        <p className="text-[13px] uppercase tracking-[0.42em] text-gold-300/80">{t('template.common.joinUs', 'Join us for an evening of devotion')}</p>
        <h1 className="font-display text-[54px] font-semibold leading-[1.04]">
          <span
            data-pdf-color="#e2bd66"
            className="bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 bg-clip-text text-transparent"
          >
            {event}
          </span>
        </h1>
        <p className="text-[15px] italic text-gold-300/85">{t('template.common.cordiallyInvite', 'cordially invite you with family to')}</p>
        <p className="font-display text-2xl text-gold-100">{family}</p>
      </main>

      <footer className="relative flex w-full flex-col items-center gap-3">
        <div className="rounded-md border border-gold-400/60 bg-[#7a0f1c]/50 px-8 py-3">
          <p className="text-[11px] uppercase tracking-[0.36em] text-gold-300">{t('template.common.saveTheDate', 'Save the Date')}</p>
          <p className="mt-1 font-display text-2xl text-gold-100">{date}{time && ` · ${time}`}</p>
        </div>
        <p className="max-w-[22rem] text-[16px] leading-snug text-gold-100">{venue}</p>
        <p className="mt-1 text-[12px] uppercase tracking-[0.3em] text-gold-300/85">
          {t('template.common.mahaprasad', 'Mahaprasad & Bhojan to follow')}
        </p>
      </footer>
    </div>
  )
}
