'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Serene line motifs ─────────────────────────────────────────────────── */

/* Lotus resting on still water, a diya flame rising above — drawn in thin lines. */
function LotusDiya({ className = '' }) {
  return (
    <svg viewBox="0 0 140 78" className={className} fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      {/* diya flame above the lotus */}
      <path
        d="M70 4c2.8 3.6 3.6 5.8 3.6 7.9a3.6 3.6 0 0 1-7.2 0c0-1.4.6-2.9 1.5-4.3-.3 1.4.1 2.4 1 2.9 1-1.6 1.3-3.8 1.1-6.5Z"
        fill="#c2a866"
        stroke="none"
      />
      {/* upright centre petal */}
      <path d="M70 16c-3.4 9.6-3.4 19.2 0 28 3.4-8.6 3.4-18.2 0-28Z" strokeWidth="1.1" stroke="#9a9a9d" />
      {/* inner petals */}
      <path d="M70 22c-8.4 6-12.6 13.4-13.6 22.8 7.2-4 11.6-12.4 13.6-22.8Z" strokeWidth="1.1" stroke="#9a9a9d" />
      <path d="M70 22c8.4 6 12.6 13.4 13.6 22.8-7.2-4-11.6-12.4-13.6-22.8Z" strokeWidth="1.1" stroke="#9a9a9d" />
      {/* outer petals */}
      <path d="M70 27c-13.6 3-21.8 9.2-26.8 16.6 11.4 1 21.6-6.2 26.8-16.6Z" strokeWidth="1" stroke="#bcbcbe" />
      <path d="M70 27c13.6 3 21.8 9.2 26.8 16.6-11.4 1-21.6-6.2-26.8-16.6Z" strokeWidth="1" stroke="#bcbcbe" />
      {/* still-water reflection lines */}
      <path d="M24 54h92" strokeWidth="1" stroke="#cfcfcd" />
      <path d="M40 60h60" strokeWidth="1" stroke="#dedede" />
      <path d="M52 66h36" strokeWidth="1" stroke="#e7e7e5" />
    </svg>
  )
}

/* A delicate centred rule with a small lotus-bud diamond. */
function PetalRule({ className = '' }) {
  return (
    <svg viewBox="0 0 220 16" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M14 8h78M128 8h78" strokeWidth="1.1" strokeLinecap="round" stroke="#c9c9c7" />
      <path d="M110 2c3 3 4.6 4.6 4.6 6S113 13 110 14c-3-1-4.6-4.6-4.6-6S107 5 110 2Z" fill="#c2a866" stroke="none" />
      <circle cx="98" cy="8" r="1.6" fill="#c2a866" stroke="none" />
      <circle cx="122" cy="8" r="1.6" fill="#c2a866" stroke="none" />
    </svg>
  )
}

/**
 * Prayer Meeting — serene grey card with a lotus-and-diya line motif.
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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#f6f6f5] via-[#f1f1f0] to-[#eaeae8] px-16 py-20 text-center font-serif text-[#4a4a4d]"
    >
      {/* soft light vignette from above */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,_rgba(255,255,255,0.85),_transparent_60%)]" />

      {/* hairline double frame */}
      <div className="pointer-events-none absolute inset-7 border border-[#d6d6d4]" />
      <div className="pointer-events-none absolute inset-[34px] border border-[#e6e6e4]" />

      {/* Header */}
      <header className="relative flex flex-col items-center">
        <div className="font-display text-[26px] leading-none text-[#7d7d80]">
          {t('template.common.om', 'ॐ')}
        </div>
        <p className="mt-5 text-[12px] uppercase tracking-[0.5em] text-[#9a9a9c]">
          {t('template.common.prayerMeeting', 'Prayer Meeting')}
        </p>
        <span className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#c9c9c7] to-transparent" />
      </header>

      {/* Main — lotus / diya line drawing + name */}
      <main className="relative flex flex-col items-center gap-7">
        <LotusDiya className="h-[78px] w-[140px] text-[#a9a9ac]" />

        <p className="max-w-[24rem] text-[14px] italic leading-relaxed text-[#7a7a7d]">
          {t('template.common.prayerHeld', 'A prayer meeting will be held to pay homage to')}
        </p>
        <h1 className="font-display text-[44px] leading-tight text-[#2c2c2e]">{person}</h1>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center gap-3 text-[#5a5a5d]">
        <PetalRule className="mb-1 h-4 w-44 text-[#c9c9c7]" />
        <div className="flex items-stretch">
          <div className="flex max-w-[12rem] flex-col items-center gap-1 px-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#9a9a9c]">
              {t('template.common.date', 'Date')}
            </p>
            <p className="font-display text-[18px] leading-snug text-[#2c2c2e]">
              {date}
              {time && ` · ${time}`}
            </p>
          </div>
          <span className="w-px self-stretch bg-[#d6d6d4]" />
          <div className="flex max-w-[12rem] flex-col items-center gap-1 px-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#9a9a9c]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="font-display text-[18px] leading-snug text-[#2c2c2e]">{venue}</p>
          </div>
        </div>
        <p className="mt-3 text-[13px] italic text-[#7a7a7d]">— {family}</p>
      </footer>
    </div>
  )
}
