'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* A single quiet diya flame — set above the numeral as a soft accent. */
function DiyaFlame({ className = '' }) {
  return (
    <svg viewBox="0 0 40 46" className={className} fill="none" aria-hidden="true">
      {/* flame */}
      <path
        d="M20 3c3.4 4.4 4.4 7 4.4 9.5a4.4 4.4 0 0 1-8.8 0c0-1.7.7-3.5 1.9-5.2-.4 1.7.1 2.9 1.2 3.5 1.2-1.9 1.5-4.6 1.3-7.8Z"
        fill="#cdb98a"
      />
      {/* lamp bowl */}
      <path d="M6 28c2.8 6 8 9.4 14 9.4S31.2 34 34 28Z" fill="none" stroke="#d8d8d8" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5 28h30" stroke="#cdb98a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Tenth Day Ceremony (Dashkriya Vidhi) — extremely restrained.
 * White-grey ground, a single thin rule, an elegant serif name and a quiet lamp.
 * Natural size 640 × 900.
 */
export default function TenthDayCeremony({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Shri Ramesh Kulkarni'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Vaikunth Hall, Pune'
  const family = values.familyName?.trim() || 'The Kulkarni Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#fcfcfc] via-[#fafafa] to-[#f4f4f3] px-16 py-24 text-center font-serif text-[#494949]"
    >
      {/* faint light from above */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_22%,_rgba(255,255,255,0.9),_transparent_58%)]" />

      {/* single hairline frame, generous margin */}
      <div className="pointer-events-none absolute inset-10 border border-[#e4e4e4]" />
      <div className="pointer-events-none absolute inset-[46px] border border-[#f0f0f0]" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[24px] leading-none text-[#8a8a8a]">
          {t('template.common.omShanti', 'ॐ शान्ति')}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.5em] text-[#a0a0a0]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
      </header>

      {/* Main */}
      <main className="relative flex flex-col items-center">
        <DiyaFlame className="mb-3 h-[46px] w-[40px]" />
        {/* the numeral, set quietly as a watermark-weight figure */}
        <span
          data-pdf-color="#cdb98a"
          className="bg-gradient-to-b from-[#ddcba0] to-[#bda673] bg-clip-text font-display text-[68px] font-light leading-none text-transparent"
        >
          10
        </span>
        <span className="my-7 h-px w-16 bg-gradient-to-r from-transparent via-[#cdb98a] to-transparent" />
        <h1 className="font-display text-[44px] leading-tight text-[#2b2b2b]">{person}</h1>
        <p className="mt-5 max-w-[24rem] text-[14px] italic leading-relaxed text-[#7e7e7e]">
          {t('template.common.sadDemise', 'We deeply mourn the sad demise of')}
        </p>
      </main>

      {/* Footer — the ceremony details */}
      <footer className="relative flex flex-col items-center gap-2 text-[#5a5a5a]">
        <span className="mb-3 h-px w-16 bg-gradient-to-r from-transparent via-[#d8d8d8] to-transparent" />
        <p className="text-[12px] uppercase tracking-[0.4em] text-[#a0a0a0]">
          {t('template.funeral.tenthDay', 'Tenth Day Ceremony')}
        </p>
        <p className="font-display text-xl text-[#2b2b2b]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px] leading-snug">{venue}</p>
        <p className="mt-3 text-[13px] italic text-[#7e7e7e]">— {family}</p>
      </footer>
    </div>
  )
}
