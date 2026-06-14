'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Prayer Meeting — serene grey card with a simple diya / lotus line drawing.
 * Soft grey ground, thin rules, elegant serif. Natural size 640 × 900.
 */
export default function PrayerMeeting({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Shri Ramesh Kulkarni'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Vaikunth Hall, Pune'
  const family = values.familyName?.trim() || 'The Kulkarni Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#f1f1f0] px-16 py-20 text-center font-serif text-[#4a4a4d]"
    >
      {/* hairline inner frame */}
      <div className="pointer-events-none absolute inset-7 border border-[#d6d6d4]" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[24px] leading-none text-[#7d7d80]">
          {t('template.common.om', 'ॐ')}
        </div>
        <p className="mt-5 text-[12px] uppercase tracking-[0.45em] text-[#9a9a9c]">
          {t('template.common.prayerMeeting', 'Prayer Meeting')}
        </p>
        <span className="mt-5 h-px w-24 bg-[#d6d6d4]" />
      </header>

      {/* Main — lotus / diya line drawing + name */}
      <main className="relative flex flex-col items-center gap-7">
        {/* lotus + diya line drawing */}
        <svg width="120" height="64" viewBox="0 0 120 64" fill="none" aria-hidden="true">
          {/* lotus petals */}
          <path d="M60 6c-3 9-3 18 0 26 3-8 3-17 0-26Z" stroke="#a9a9ac" strokeWidth="1.1" />
          <path d="M60 12c-8 6-12 13-13 22 7-4 11-12 13-22Z" stroke="#a9a9ac" strokeWidth="1.1" />
          <path d="M60 12c8 6 12 13 13 22-7-4-11-12-13-22Z" stroke="#a9a9ac" strokeWidth="1.1" />
          <path d="M60 16c-13 3-21 9-26 16 11 1 21-6 26-16Z" stroke="#bcbcbe" strokeWidth="1.1" />
          <path d="M60 16c13 3 21 9 26 16-11 1-21-6-26-16Z" stroke="#bcbcbe" strokeWidth="1.1" />
          {/* diya flame above the lotus */}
          <path
            d="M60 2c2.4 3 3 4.8 3 6.6a3 3 0 0 1-6 0c0-1.2.5-2.4 1.2-3.6-.2 1.2.1 2 .8 2.4.9-1.3 1.1-3.2 1-5.4Z"
            fill="#b59b5e"
          />
          {/* still-water reflection lines */}
          <path d="M22 44h76" stroke="#d6d6d4" strokeWidth="1" strokeLinecap="round" />
          <path d="M34 50h52" stroke="#e0e0de" strokeWidth="1" strokeLinecap="round" />
        </svg>

        <p className="max-w-[24rem] text-[14px] italic text-[#7a7a7d]">
          {t('template.common.prayerHeld', 'A prayer meeting will be held to pay homage to')}
        </p>
        <h1 className="font-display text-[42px] leading-tight text-[#2f2f31]">{person}</h1>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center gap-2 text-[#5a5a5d]">
        <span className="mb-2 h-px w-24 bg-[#d6d6d4]" />
        <div className="grid grid-cols-2 gap-px overflow-hidden">
          <div className="flex flex-col items-center gap-1 pr-7">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a9a9c]">
              {t('template.common.date', 'Date')}
            </p>
            <p className="font-display text-[17px] text-[#2f2f31]">
              {date}
              {time && ` · ${time}`}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 border-l border-[#d6d6d4] pl-7">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a9a9c]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="max-w-[11rem] font-display text-[17px] leading-snug text-[#2f2f31]">{venue}</p>
          </div>
        </div>
        <p className="mt-4 text-[13px] italic text-[#7a7a7d]">— {family}</p>
      </footer>
    </div>
  )
}
