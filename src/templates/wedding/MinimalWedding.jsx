'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Fine line motif (single restrained ornament) ──────────────────────── */

/** A slender diamond bud on a hairline — the one quiet flourish. */
function FineMark({ className = '' }) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M14 4l5 10-5 10-5-10 5-10Z" />
      <path d="M14 9l2.4 5-2.4 5-2.4-5L14 9Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
    </svg>
  )
}

/**
 * Minimal modern wedding invitation — airy white space, hairline rules and a
 * single terracotta accent, with a fine serif/sans pairing. Quietly luxurious.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function MinimalWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.weddingDate, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col overflow-hidden bg-[#fcfbf9] px-20 py-[72px] text-ink"
    >
      {/* faint warm wash for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,_rgba(194,85,47,0.045),_transparent_62%)]" />

      {/* hairline inner frame + corner ticks */}
      <div className="pointer-events-none absolute inset-8 border border-[#e7e3dc]" />
      <div className="pointer-events-none absolute inset-8">
        <span className="absolute left-0 top-0 h-4 w-px bg-[#c2552f]/70" />
        <span className="absolute left-0 top-0 h-px w-4 bg-[#c2552f]/70" />
        <span className="absolute right-0 top-0 h-4 w-px bg-[#c2552f]/70" />
        <span className="absolute right-0 top-0 h-px w-4 bg-[#c2552f]/70" />
        <span className="absolute bottom-0 left-0 h-4 w-px bg-[#c2552f]/70" />
        <span className="absolute bottom-0 left-0 h-px w-4 bg-[#c2552f]/70" />
        <span className="absolute bottom-0 right-0 h-4 w-px bg-[#c2552f]/70" />
        <span className="absolute bottom-0 right-0 h-px w-4 bg-[#c2552f]/70" />
      </div>

      {/* Header */}
      <header className="relative flex flex-col items-center pt-6 text-center">
        <FineMark className="h-6 w-6 text-[#c2552f]" />
        <p className="mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.58em] text-[#c2552f]">
          {t('template.common.saveTheDate', 'Save the Date')}
        </p>
        <p className="mt-6 max-w-[20rem] font-sans text-[13px] leading-relaxed tracking-wide text-ink-muted">
          {t('template.common.requestPresence', 'request the pleasure of your company')}
        </p>
      </header>

      {/* Names — centred, generous space */}
      <main className="relative flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-display text-[70px] font-normal leading-[0.92] tracking-tight text-ink">{bride}</h1>

        <div className="my-8 flex items-center gap-5">
          <span className="h-px w-20 bg-[#d8d2c8]" />
          <span className="font-script text-[34px] leading-none text-[#c2552f]">{t('template.common.and', '&')}</span>
          <span className="h-px w-20 bg-[#d8d2c8]" />
        </div>

        <h1 className="font-display text-[70px] font-normal leading-[0.92] tracking-tight text-ink">{groom}</h1>
      </main>

      {/* Footer details row */}
      <footer className="relative flex flex-col items-center gap-6 text-center">
        <div className="h-px w-full bg-[#e7e3dc]" />
        <div className="grid w-full grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-2 border-r border-[#e7e3dc] pr-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-[#c2552f]">
              {t('template.common.date', 'Date')}
            </p>
            <p className="font-serif text-[19px] leading-snug text-ink">{date}{time && ` · ${time}`}</p>
          </div>
          <div className="flex flex-col items-center gap-2 pl-0">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-[#c2552f]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="max-w-[12rem] font-serif text-[19px] leading-snug text-ink">{venue}</p>
          </div>
        </div>
        <div className="h-px w-full bg-[#e7e3dc]" />
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ink-muted">
          {t('template.common.withBestCompliments', 'With best compliments from')}
          <span className="mt-1.5 block font-serif text-base normal-case tracking-normal text-ink">{family}</span>
        </p>
      </footer>
    </div>
  )
}
