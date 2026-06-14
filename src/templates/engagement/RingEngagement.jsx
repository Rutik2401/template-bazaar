'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Diamond ring motif (inline SVG, rose-gold) ─────────────────────────── */
function DiamondRing({ className = '' }) {
  return (
    <svg viewBox="0 0 120 130" className={className} fill="none">
      {/* band */}
      <ellipse cx="60" cy="92" rx="30" ry="32" stroke="currentColor" strokeWidth="4" />
      <ellipse cx="60" cy="92" rx="30" ry="32" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.2" />
      {/* prongs */}
      <path d="M48 60 L60 70 L72 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* diamond */}
      <path
        d="M60 8 L84 34 L60 70 L36 34 Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M36 34 H84 M60 8 V70 M48 21 L72 21 M48 21 L36 34 M72 21 L84 34" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.7" />
      <path d="M52 16 L56 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c1.2 6 4.8 9.6 12 12-7.2 2.4-10.8 6-12 12-1.2-6-4.8-9.6-12-12C7.2 9.6 10.8 6 12 0Z" />
    </svg>
  )
}

/**
 * Ring Ceremony engagement card — rose-gold + cream, romantic & elegant.
 * Natural design size: 640 × 900.
 */
export default function RingEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Priya & Arjun'
  const date = formatDate(values.date, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff8f4] via-[#fdeee7] to-[#f7ddd2] font-serif text-rose-900"
    >
      {/* soft radial glow */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f6c9b5]/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#e8b48f]/40 blur-3xl" />

      {/* rose-gold double frame */}
      <div className="absolute inset-[20px] rounded-[28px] border-2 border-[#c98a6b]/60" />
      <div className="absolute inset-[28px] rounded-[22px] border border-[#d9a98c]/50" />

      {/* scattered sparkles */}
      <Sparkle className="absolute left-14 top-28 h-4 w-4 text-[#caa07f]/70" />
      <Sparkle className="absolute right-16 top-44 h-3 w-3 text-[#caa07f]/60" />
      <Sparkle className="absolute right-20 bottom-40 h-4 w-4 text-[#caa07f]/60" />
      <Sparkle className="absolute left-20 bottom-52 h-3 w-3 text-[#caa07f]/50" />

      <div className="relative flex h-full flex-col items-center justify-between px-16 py-16 text-center">
        <header className="flex flex-col items-center gap-4">
          <DiamondRing className="h-24 w-24 text-[#b87a59]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.5em] text-[#b07a5b]">
            {t('template.common.ringCeremony', 'Ring Ceremony')}
          </p>
          <div className="flex items-center gap-3 text-[#caa07f]">
            <span className="h-px w-12 bg-[#caa07f]/70" />
            <Sparkle className="h-3 w-3" />
            <span className="h-px w-12 bg-[#caa07f]/70" />
          </div>
        </header>

        <main className="flex flex-col items-center gap-4">
          <p className="text-[16px] italic text-rose-500/80">
            {t('template.common.engagementOf', 'at the engagement of')}
          </p>
          <h1 className="font-display text-[56px] leading-[1.08]">
            <span
              data-pdf-color="#b03a5b"
              className="bg-gradient-to-r from-[#d4607c] via-[#c97a52] to-[#d99a4e] bg-clip-text text-transparent"
            >
              {couple}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#b07a5b]">
              {t('template.common.saveTheDate', 'Save the Date')}
            </span>
            <p className="font-display text-[26px] text-rose-800">
              {date}
              {time && <span className="text-rose-500/80"> · {time}</span>}
            </p>
          </div>

          <span className="h-px w-24 bg-[#caa07f]/60" />

          <div className="flex max-w-[22rem] flex-col items-center gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#b07a5b]">
              {t('template.common.venue', 'Venue')}
            </span>
            <p className="text-[17px] leading-snug text-rose-800">{venue}</p>
          </div>

          <p className="mt-1 text-[14px] italic text-rose-400">
            {t('template.common.withBestCompliments', 'With best compliments from')}
            <br />
            <span className="font-display text-xl not-italic text-rose-800">{family}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
