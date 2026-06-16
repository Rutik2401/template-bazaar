'use client'

import { useI18n } from '@/i18n/I18nProvider'
import { formatDate, formatTime, toList } from '@/utils/format'

/* A slender rule that fades at both ends. */
function FadedRule({ className = '' }) {
  return (
    <svg viewBox="0 0 200 12" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="rc-rule" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#bcc8d6" stopOpacity="0" />
          <stop offset="0.5" stopColor="#8aa0b8" />
          <stop offset="1" stopColor="#bcc8d6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M6 6h188" stroke="url(#rc-rule)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="100" cy="6" r="1.5" fill="#8aa0b8" />
    </svg>
  )
}

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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#f4f7fb] via-[#eef2f6] to-[#e4ebf2] px-16 py-20 text-center font-serif text-[#46505c]"
    >
      {/* gentle light from above */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,_rgba(138,160,184,0.16),_transparent_60%)]" />

      {/* soft inner panel */}
      <div className="pointer-events-none absolute inset-7 rounded-2xl border border-[#cdd7e2]" />
      <div className="pointer-events-none absolute inset-[34px] rounded-2xl border border-[#dde5ee]" />

      {/* Header — dove + remembrance line */}
      <header className="relative flex flex-col items-center">
        {/* dove in flight, with a small trailing sprig of leaves */}
        <svg width="84" height="44" viewBox="0 0 84 44" fill="none" aria-hidden="true">
          <path
            d="M10 30c11 0 19-3 26-12 4-5 10-10 18-10 5 0 10 3 12 8-4-1-8 0-11 3 7 0 11 2 14 7-8-2-14-1-21 3-8 5-16 8-26 6-6-1-10-4-12-10 3 2 7 4 11 4-4-2-8-5-11-10 4 2 9 3 14 3-6-2-10-5-14-10 4 3 9 4 14 4"
            stroke="#7d96b0"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* eye */}
          <circle cx="66" cy="14" r="1.3" fill="#7d96b0" />
          {/* leaf sprig in the beak */}
          <path d="M72 16c4-1 7-3 9-6-3 0-6 1-9 3" stroke="#9aaabb" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="mt-6 text-[12px] uppercase tracking-[0.45em] text-[#8694a4]">
          {t('template.common.inRemembrance', 'In Remembrance')}
        </p>
        <FadedRule className="mt-5 h-3 w-40" />
      </header>

      {/* Main — single candle + name */}
      <main className="relative flex flex-col items-center gap-7">
        {/* single lit candle with a soft radial glow */}
        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="rc-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#eaf1f8" />
              <stop offset="1" stopColor="#eaf1f8" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* glow */}
          <ellipse cx="24" cy="15" rx="13" ry="17" fill="url(#rc-glow)" />
          {/* flame */}
          <path
            d="M24 7c5 6 6 10 6 13a6 6 0 0 1-12 0c0-3 1-5 2.5-7-.4 2.4.3 4 1.7 4.7C24 15 24 11 24 7Z"
            fill="#8aa0b8"
          />
          {/* inner flame */}
          <path d="M24 13c2 2.6 2.6 4.4 2.6 6a2.6 2.6 0 0 1-5.2 0c0-1.4.5-2.6 1.3-3.6Z" fill="#cdd7e2" />
          {/* wick */}
          <path d="M24 25v4" stroke="#6f8294" strokeWidth="1.2" strokeLinecap="round" />
          {/* candle body */}
          <rect x="15" y="29" width="18" height="40" rx="2.5" fill="none" stroke="#8aa0b8" strokeWidth="1.3" />
          <path d="M19 33v32" stroke="#cdd7e2" strokeWidth="0.9" strokeLinecap="round" />
          {/* base */}
          <path d="M9 69h30" stroke="#bcc8d6" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M14 73h20" stroke="#bcc8d6" strokeWidth="1.3" strokeLinecap="round" />
        </svg>

        {/* round photo placeholder */}
        <div className="flex h-44 w-44 items-center justify-center rounded-full border-2 border-[#bcc8d6] bg-gradient-to-b from-white to-[#eef3f8] shadow-[0_2px_12px_rgba(138,160,184,0.18)]">
          <div className="flex h-[86%] w-[86%] items-center justify-center rounded-full border border-[#dbe4ee]">
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#9aaabb]">
              {t('template.common.photo', 'Photo')}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="font-display text-[38px] leading-[1.15] text-[#2f3741]">{person}</h1>
          <p className="font-script text-[26px] leading-tight text-[#7587a0]">
            {t('template.common.foreverInOurHearts', 'Forever in our hearts')}
          </p>
        </div>
      </main>

      {/* Footer — date + family */}
      <footer className="relative flex flex-col items-center gap-2 text-[#5a6573]">
        <FadedRule className="mb-3 h-3 w-40" />
        <p className="font-display text-xl tracking-wide text-[#2f3741]">{date}</p>
        <p className="mt-2 text-[13px] italic text-[#8694a4]">— {family}</p>
      </footer>
    </div>
  )
}
