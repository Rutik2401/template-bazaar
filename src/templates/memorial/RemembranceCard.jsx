'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/**
 * Remembrance Card — soft grey-blue "Forever in our hearts" card.
 * A single lit candle with a dove in flight above it, calm and gentle.
 * Natural size 640 × 900.
 */
export default function RemembranceCard({ values }) {
  const { t } = useI18n()
  const person = values.personName?.trim() || 'Late Shri Madhav Rao'
  const date = formatDate(values.date, 'Date to be announced')
  const family = values.familyName?.trim() || 'The Rao Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#eef2f6] px-16 py-20 text-center font-serif text-[#46505c]"
    >
      {/* soft inner panel */}
      <div className="pointer-events-none absolute inset-7 rounded-2xl border border-[#cdd7e2]" />

      {/* Header — dove + remembrance line */}
      <header className="relative flex flex-col items-center">
        {/* dove in flight */}
        <svg width="74" height="40" viewBox="0 0 74 40" fill="none" aria-hidden="true">
          <path
            d="M8 28c10 0 17-3 24-11 4-5 9-9 16-9 5 0 9 3 11 7-4-1-7 0-10 3 6 0 10 2 13 6-7-2-13-1-19 3-7 5-15 7-24 6-5-1-9-4-11-9 3 2 6 3 10 3-4-2-7-5-10-9 4 2 8 3 13 3-5-2-9-5-13-9 4 2 8 3 13 3"
            stroke="#8aa0b8"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="60" cy="13" r="1.3" fill="#8aa0b8" />
        </svg>
        <p className="mt-6 text-[12px] uppercase tracking-[0.45em] text-[#8694a4]">
          {t('template.common.inRemembrance', 'In Remembrance')}
        </p>
        <span className="mt-5 h-px w-16 bg-[#bcc8d6]" />
      </header>

      {/* Main — single candle + name */}
      <main className="relative flex flex-col items-center gap-7">
        {/* single lit candle */}
        <svg width="44" height="74" viewBox="0 0 44 74" fill="none" aria-hidden="true">
          {/* glow */}
          <ellipse cx="22" cy="14" rx="9" ry="13" fill="#dbe4ee" />
          {/* flame */}
          <path
            d="M22 6c5 6 6 10 6 13a6 6 0 0 1-12 0c0-3 1-5 2.5-7-.4 2.4.3 4 1.7 4.7C22 14 22 10 22 6Z"
            fill="#8aa0b8"
          />
          {/* wick */}
          <path d="M22 24v4" stroke="#6f8294" strokeWidth="1.2" strokeLinecap="round" />
          {/* candle body */}
          <rect x="14" y="28" width="16" height="38" rx="2" fill="none" stroke="#8aa0b8" strokeWidth="1.3" />
          {/* base */}
          <path d="M8 66h28" stroke="#bcc8d6" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M13 70h18" stroke="#bcc8d6" strokeWidth="1.3" strokeLinecap="round" />
        </svg>

        {/* round photo placeholder */}
        <div className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-[#bcc8d6] bg-white shadow-[0_1px_0_#dbe4ee]">
          <div className="flex h-[86%] w-[86%] items-center justify-center rounded-full border border-[#dbe4ee]">
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#9aaabb]">
              {t('template.common.photo', 'Photo')}
            </span>
          </div>
        </div>

        <h1 className="font-display text-[38px] leading-tight text-[#2f3741]">{person}</h1>
        <p className="font-script text-[26px] leading-tight text-[#7587a0]">
          {t('template.common.foreverInOurHearts', 'Forever in our hearts')}
        </p>
      </main>

      {/* Footer — date + family */}
      <footer className="relative flex flex-col items-center gap-2 text-[#5a6573]">
        <span className="mb-2 h-px w-16 bg-[#bcc8d6]" />
        <p className="font-display text-xl text-[#2f3741]">{date}</p>
        <p className="mt-2 text-[13px] italic text-[#8694a4]">— {family}</p>
      </footer>
    </div>
  )
}
