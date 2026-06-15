'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Minimal modern wedding invitation — airy white space, thin rules,
 * a single terracotta accent. Refined sans/serif mix.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function MinimalWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Lokesh'
  const date = formatDate(values.weddingDate, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col overflow-hidden bg-[#fcfbf9] px-20 py-20 text-ink"
    >
      {/* hairline inner frame */}
      <div className="pointer-events-none absolute inset-8 border border-[#e7e3dc]" />
      {/* single accent tick top-centre */}
      <div className="absolute left-1/2 top-8 h-10 w-px -translate-x-1/2 bg-[#c2552f]" />

      {/* Header */}
      <header className="relative flex flex-col items-center pt-4 text-center">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.55em] text-[#c2552f]">
          {t('template.common.saveTheDate', 'Save the Date')}
        </p>
        <p className="mt-6 max-w-[20rem] font-sans text-[13px] leading-relaxed tracking-wide text-ink-muted">
          {t('template.common.requestPresence', 'request the pleasure of your company')}
        </p>
      </header>

      {/* Names — centred, generous space */}
      <main className="relative flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-display text-[68px] font-normal leading-[0.95] tracking-tight text-ink">{bride}</h1>

        <div className="my-8 flex items-center gap-5">
          <span className="h-px w-16 bg-[#d8d2c8]" />
          <span className="font-serif text-2xl italic text-[#c2552f]">{t('template.common.and', '&')}</span>
          <span className="h-px w-16 bg-[#d8d2c8]" />
        </div>

        <h1 className="font-display text-[68px] font-normal leading-[0.95] tracking-tight text-ink">{groom}</h1>
      </main>

      {/* Footer details row */}
      <footer className="relative flex flex-col items-center gap-6 text-center">
        <div className="h-px w-full bg-[#e7e3dc]" />
        <div className="grid w-full grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-2 border-r border-[#e7e3dc] pr-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-[#c2552f]">
              {t('template.common.date', 'Date')}
            </p>
            <p className="font-serif text-[19px] leading-snug text-ink">{date}{time && ` · ${time}`}</p>
          </div>
          <div className="flex flex-col items-center gap-2 pl-0">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-[#c2552f]">
              {t('template.common.venue', 'Venue')}
            </p>
            <p className="max-w-[12rem] font-serif text-[19px] leading-snug text-ink">{venue}</p>
          </div>
        </div>
        <div className="h-px w-full bg-[#e7e3dc]" />
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ink-muted">
          {t('template.common.withBestCompliments', 'With best compliments from')}
          <span className="mt-1 block font-serif text-base normal-case tracking-normal text-ink">{family}</span>
        </p>
      </footer>
    </div>
  )
}
