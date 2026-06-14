'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Thirteenth Day Ceremony (Terahvin / Shraddh) — minimal and dignified.
 * Near-white ground with a muted-gold corner accent and thin double rule.
 * Natural size 640 × 900.
 */
export default function ThirteenthDayCeremony({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Shri Ramesh Kulkarni'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Vaikunth Hall, Pune'
  const family = values.familyName?.trim() || 'The Kulkarni Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#fbfaf8] px-16 py-24 text-center font-serif text-[#46443f]"
    >
      {/* thin double frame */}
      <div className="pointer-events-none absolute inset-8 border border-[#d8d2c6]" />
      <div className="pointer-events-none absolute inset-[38px] border border-[#ebe6db]" />

      {/* muted-gold corner ticks */}
      <span className="pointer-events-none absolute left-8 top-8 h-6 w-px bg-[#b59b5e]" />
      <span className="pointer-events-none absolute left-8 top-8 h-px w-6 bg-[#b59b5e]" />
      <span className="pointer-events-none absolute right-8 top-8 h-6 w-px bg-[#b59b5e]" />
      <span className="pointer-events-none absolute right-8 top-8 h-px w-6 bg-[#b59b5e]" />
      <span className="pointer-events-none absolute bottom-8 left-8 h-6 w-px bg-[#b59b5e]" />
      <span className="pointer-events-none absolute bottom-8 left-8 h-px w-6 bg-[#b59b5e]" />
      <span className="pointer-events-none absolute bottom-8 right-8 h-6 w-px bg-[#b59b5e]" />
      <span className="pointer-events-none absolute bottom-8 right-8 h-px w-6 bg-[#b59b5e]" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[24px] leading-none text-[#b59b5e]">
          {t('template.common.om', 'ॐ')}
        </div>
        <p className="mt-6 text-[12px] uppercase tracking-[0.45em] text-[#9c9384]">
          {t('template.common.inLovingMemory', 'In Loving Memory')}
        </p>
      </header>

      {/* Main */}
      <main className="relative flex flex-col items-center">
        <h1 className="font-display text-[44px] leading-tight text-[#2c2a25]">{person}</h1>
        <div className="my-7 flex items-center gap-4">
          <span className="h-px w-12 bg-[#d8d2c6]" />
          <span className="font-display text-[15px] tracking-[0.2em] text-[#b59b5e]">XIII</span>
          <span className="h-px w-12 bg-[#d8d2c6]" />
        </div>
        <p className="max-w-[24rem] text-[14px] italic text-[#7d7667]">
          {t('template.common.prayerHeld', 'A prayer meeting will be held to pay homage to')}
        </p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center gap-2 text-[#58523f]">
        <p className="text-[12px] uppercase tracking-[0.4em] text-[#9c9384]">
          {t('template.funeral.thirteenthDay', 'Thirteenth Day Ceremony')}
        </p>
        <p className="font-display text-xl text-[#2c2a25]">
          {date}
          {time && ` · ${time}`}
        </p>
        <p className="max-w-[22rem] text-[15px] text-[#5c5648]">{venue}</p>
        <p className="mt-3 text-[13px] italic text-[#7d7667]">— {family}</p>
      </footer>
    </div>
  )
}
