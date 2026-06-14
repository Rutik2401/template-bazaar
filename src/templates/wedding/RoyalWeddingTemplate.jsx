'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Decorative SVG pieces (gold foil paisley + flourish) ─────────────── */

function CornerFlourish({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M6 6c34 0 52 4 70 22s22 36 22 70" opacity="0.9" />
      <path d="M6 22c24 0 38 3 51 16s16 27 16 51" opacity="0.55" />
      <path d="M14 14c0 18 8 30 26 30" opacity="0.8" />
      <circle cx="14" cy="14" r="3.4" fill="currentColor" stroke="none" />
      <path
        d="M40 12c8 0 14 2 20 8s8 12 8 20c-8 0-14-2-20-8s-8-12-8-20Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="none"
      />
    </svg>
  )
}

function Divider({ className = '' }) {
  return (
    <svg viewBox="0 0 240 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M10 12h78" strokeLinecap="round" />
      <path d="M152 12h78" strokeLinecap="round" />
      <path d="M120 4l9 8-9 8-9-8 9-8Z" fill="currentColor" fillOpacity="0.18" />
      <circle cx="98" cy="12" r="3" fill="currentColor" stroke="none" />
      <circle cx="142" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Royal Indian wedding invitation.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function RoyalWeddingTemplate({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Priya'
  const groomName = values.groomName?.trim() || 'Arjun'
  const weddingDate = formatDate(values.weddingDate, 'Date to be announced')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const familyName = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-paper font-serif text-maroon-700"
    >
      {/* Deep border band */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf6ea] via-[#fbf2e3] to-[#f7ead2]" />

      {/* Double gold frame */}
      <div className="absolute inset-[18px] rounded-sm border-[2.5px] border-gold-400" />
      <div className="absolute inset-[26px] rounded-sm border border-gold-300/70" />

      {/* Corner flourishes */}
      <CornerFlourish className="absolute left-7 top-7 h-20 w-20 text-gold-500" />
      <CornerFlourish className="absolute right-7 top-7 h-20 w-20 text-gold-500 [transform:scaleX(-1)]" />
      <CornerFlourish className="absolute bottom-7 left-7 h-20 w-20 text-gold-500 [transform:scaleY(-1)]" />
      <CornerFlourish className="absolute bottom-7 right-7 h-20 w-20 text-gold-500 [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-16 py-16 text-center">
        <header className="flex flex-col items-center">
          <div className="text-4xl leading-none text-gold-500">🕉</div>
          <p className="mt-3 text-[13px] font-semibold tracking-[0.42em] text-gold-600">
            {t('template.wedding.blessing')}
          </p>
          <p className="mt-6 max-w-[20rem] text-[15px] italic leading-relaxed text-maroon-500/90">
            {t('template.wedding.invite')}
          </p>
        </header>

        <main className="flex flex-col items-center">
          <h1 className="font-display text-[58px] font-semibold leading-[1.05] tracking-tight">
            <span
              data-pdf-color="#9a6f08"
              className="bg-gradient-to-br from-gold-600 via-gold-500 to-maroon-500 bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>

          <div className="my-3 flex items-center gap-4 text-gold-500">
            <Divider className="h-5 w-40" />
          </div>

          <span className="font-display text-3xl italic text-maroon-400">{t('template.wedding.weds')}</span>

          <div className="my-3 flex items-center gap-4 text-gold-500">
            <Divider className="h-5 w-40" />
          </div>

          <h1 className="font-display text-[58px] font-semibold leading-[1.05] tracking-tight">
            <span
              data-pdf-color="#9a6f08"
              className="bg-gradient-to-br from-maroon-500 via-gold-500 to-gold-600 bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>
        </main>

        <footer className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-600">
              {t('template.wedding.saveDate')}
            </span>
            <span className="font-display text-2xl text-maroon-600">{weddingDate}</span>
          </div>

          <div className="h-px w-24 bg-gold-300" />

          <div className="flex max-w-[22rem] flex-col items-center gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-600">
              {t('template.wedding.venue')}
            </span>
            <span className="text-[17px] leading-snug text-maroon-600">{venue}</span>
          </div>

          <p className="mt-2 text-[15px] italic text-maroon-500/80">
            {t('template.wedding.compliments')}
            <br />
            <span className="font-display text-xl not-italic text-maroon-600">{familyName}</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
