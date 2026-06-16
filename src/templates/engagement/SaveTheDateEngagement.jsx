'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Save-the-Date engagement card — the DATE is the hero.
 * Bold oversized "SAVE THE DATE" headline above a stylized mini-calendar block
 * that frames the event date, a soft rounded photo placeholder, with the couple
 * name and venue in supporting roles. Contemporary editorial layout in warm
 * terracotta / cream. Structurally driven by the giant date.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function SaveTheDateEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.eventDate, 'November 20, 2025')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const caption = values.photoCaption?.trim() || 'Save our date'

  // Break the formatted date into stacked calendar parts when possible:
  // "November 20, 2025" → month "NOVEMBER", day "20", year "2025".
  const parts = date.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s*(\d{4})$/)
  const month = parts ? parts[1].toUpperCase() : null
  const day = parts ? parts[2] : null
  const year = parts ? parts[3] : null

  const ACCENT = '#c2552f'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#f6efe6] font-party text-[#33271f]"
    >
      {/* warm cream wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf6ee] via-[#f6efe6] to-[#efe4d6]" />

      {/* editorial terracotta side band */}
      <div className="absolute left-0 top-0 h-full w-[14px] bg-gradient-to-b from-[#d9703f] to-[#b8481f]" />
      <div className="absolute right-0 top-0 h-full w-[6px] bg-[#e2b48f]/60" />

      {/* faint oversized ghost numeral for editorial depth */}
      {day && (
        <span
          className="pointer-events-none absolute -right-6 top-[300px] select-none font-sans text-[420px] font-black leading-none text-[#c2552f]/[0.05]"
          aria-hidden
        >
          {day}
        </span>
      )}

      <div className="relative flex h-full flex-col px-16 py-[64px]">
        {/* Kicker */}
        <header className="flex items-center gap-4">
          <span className="h-px w-12" style={{ backgroundColor: ACCENT }} />
          <span className="text-[12px] font-bold uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
            {t('template.common.engagement', 'Engagement')}
          </span>
        </header>

        {/* HERO headline — bold oversized SAVE THE DATE */}
        <h1 className="mt-5 font-sans text-[78px] font-black uppercase leading-[0.82] tracking-[-0.03em] text-[#33271f]">
          <span className="block">{t('template.common.save', 'Save')}</span>
          <span className="block">{t('template.common.the', 'The')}</span>
          <span
            className="block bg-gradient-to-r from-[#d9703f] to-[#b8481f] bg-clip-text text-transparent"
            data-pdf-color="#c2552f"
          >
            {t('template.common.dateWord', 'Date')}
          </span>
        </h1>

        {/* HERO date block — stylized mini calendar */}
        <div className="mt-9 flex items-stretch">
          {parts ? (
            <div className="flex overflow-hidden rounded-[22px] border-[3px] border-[#33271f] bg-[#fbf6ee] shadow-[8px_8px_0_0_rgba(184,72,31,0.18)]">
              {/* month tab */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#d9703f] to-[#b8481f] px-7 py-6 text-center">
                <span className="font-sans text-[20px] font-extrabold uppercase tracking-[0.22em] text-[#fbf6ee] [writing-mode:vertical-rl] rotate-180">
                  {month}
                </span>
              </div>
              {/* giant day numeral */}
              <div className="flex flex-col items-center justify-center px-9 py-5">
                <span className="font-sans text-[120px] font-black leading-[0.78] tracking-tighter text-[#33271f]">
                  {day}
                </span>
                <span className="mt-1 text-[16px] font-bold uppercase tracking-[0.3em] text-[#9a7b62]">
                  {year}
                </span>
              </div>
            </div>
          ) : (
            <div className="rounded-[22px] border-[3px] border-[#33271f] bg-[#fbf6ee] px-9 py-7 shadow-[8px_8px_0_0_rgba(184,72,31,0.18)]">
              <span className="font-sans text-[40px] font-black leading-tight text-[#33271f]">{date}</span>
            </div>
          )}
        </div>

        {/* Lower zone — photo placeholder + supporting details */}
        <div className="mt-auto flex items-end gap-7">
          {/* soft framed photo placeholder */}
          <figure className="flex shrink-0 flex-col items-center">
            <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-[30px] border-[3px] border-dashed border-[#c2552f]/55 bg-gradient-to-br from-[#f3e6d6] to-[#ecd9c4]">
              {/* simple inline portrait glyph */}
              <svg viewBox="0 0 64 64" className="h-16 w-16 text-[#c2552f]/55" fill="none" stroke="currentColor" strokeWidth="2.4">
                <circle cx="32" cy="24" r="11" />
                <path d="M14 52c2-11 9-17 18-17s16 6 18 17" strokeLinecap="round" />
              </svg>
              <span className="absolute bottom-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#c2552f]/70">
                {t('template.common.yourPhotoHere', 'Your Photo Here')}
              </span>
            </div>
            <figcaption className="mt-3 font-script text-[24px] leading-none text-[#c2552f]">
              {caption}
            </figcaption>
          </figure>

          {/* couple + venue, supporting */}
          <div className="flex flex-1 flex-col gap-5 pb-1">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#9a7b62]">
                {t('template.common.celebrating', 'Celebrating')}
              </span>
              <span className="mt-1.5 font-display text-[34px] font-semibold leading-[1.02] tracking-tight text-[#33271f]">
                {couple}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: ACCENT }} />
              <span className="h-px flex-1 bg-[#dcc9b3]" />
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: ACCENT }}>
                {t('template.common.venue', 'Venue')}
              </span>
              <span className="mt-1.5 font-serif text-[18px] leading-snug text-[#33271f]">{venue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
