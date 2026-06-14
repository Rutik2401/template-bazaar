'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Tenth Day Ceremony (Dashkriya Vidhi) — extremely restrained.
 * White-grey ground, a single thin rule, an elegant serif name. No motif noise.
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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#fafafa] px-16 py-24 text-center font-serif text-[#494949]"
    >
      {/* single hairline frame, generous margin */}
      <div className="pointer-events-none absolute inset-10 border border-[#e4e4e4]" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[22px] leading-none text-[#8a8a8a]">
          {t('template.common.omShanti', 'ॐ शान्ति')}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.5em] text-[#a0a0a0]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
      </header>

      {/* Main */}
      <main className="relative flex flex-col items-center">
        {/* the numeral, set quietly as a watermark-weight figure */}
        <span className="font-display text-[64px] font-light leading-none text-[#cdb98a]">10</span>
        <span className="my-7 h-px w-16 bg-[#d8d8d8]" />
        <h1 className="font-display text-[44px] leading-tight text-[#2b2b2b]">{person}</h1>
        <p className="mt-5 max-w-[24rem] text-[14px] italic text-[#7e7e7e]">
          {t('template.common.sadDemise', 'We deeply mourn the sad demise of')}
        </p>
      </main>

      {/* Footer — the ceremony details */}
      <footer className="relative flex flex-col items-center gap-2 text-[#5a5a5a]">
        <span className="mb-3 h-px w-16 bg-[#d8d8d8]" />
        <p className="text-[12px] uppercase tracking-[0.4em] text-[#a0a0a0]">
          {t('template.funeral.tenthDay', 'Tenth Day Ceremony')}
        </p>
        <p className="font-display text-xl text-[#2b2b2b]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px]">{venue}</p>
        <p className="mt-3 text-[13px] italic text-[#7e7e7e]">— {family}</p>
      </footer>
    </div>
  )
}
