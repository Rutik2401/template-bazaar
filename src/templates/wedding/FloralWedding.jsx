'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Soft watercolour botanical pieces ─────────────────────────────────── */

function FloralSpray({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      {/* stems */}
      <g stroke="#6b8f71" strokeWidth="2" strokeLinecap="round">
        <path d="M40 170c20-30 30-70 28-120" />
        <path d="M40 170c0-30 8-58 26-86" />
        <path d="M40 170c14-22 36-40 64-50" />
        <path d="M40 170c-4-24 0-46 10-66" opacity="0.8" />
      </g>
      {/* leaves */}
      <g fill="#8fae93">
        <path d="M66 96c-12-4-20-14-22-28 14 2 24 12 22 28Z" opacity="0.8" />
        <path d="M78 64c-10-6-15-17-14-30 12 5 19 16 14 30Z" opacity="0.7" />
        <path d="M92 122c-13-1-24-9-29-23 14-2 26 5 29 23Z" opacity="0.75" />
        <path d="M50 110c-11 3-22 1-32-8 11-7 23-7 32 8Z" opacity="0.6" />
      </g>
      {/* gilt accent leaf veins */}
      <g stroke="#c9a24a" strokeWidth="1" opacity="0.5" strokeLinecap="round">
        <path d="M44 68c8 0 14 4 18 12" />
        <path d="M120 60c-7 2-11 7-12 15" />
      </g>
      {/* blush roses */}
      <g>
        <circle cx="62" cy="46" r="22" fill="#f6c9cf" />
        <circle cx="62" cy="46" r="13" fill="#eba9b3" />
        <circle cx="62" cy="46" r="6" fill="#d98494" />
        <circle cx="104" cy="78" r="16" fill="#f8d4d9" />
        <circle cx="104" cy="78" r="9" fill="#eeb6bf" />
        <circle cx="104" cy="78" r="4" fill="#dd97a4" />
        <circle cx="40" cy="92" r="13" fill="#f6c9cf" />
        <circle cx="40" cy="92" r="7" fill="#e9a4af" />
      </g>
      {/* tiny buds */}
      <g fill="#e7b7a0">
        <circle cx="128" cy="58" r="5" />
        <circle cx="88" cy="34" r="4" />
        <circle cx="118" cy="98" r="4.5" />
        <circle cx="30" cy="60" r="3.5" />
      </g>
    </svg>
  )
}

/** Slim gilt divider with a rose-bud centre. */
function GiltDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" stroke="#c9a24a" strokeWidth="1.2">
      <path d="M14 10h66M120 10h66" strokeLinecap="round" />
      <circle cx="100" cy="10" r="4" fill="#eba9b3" stroke="none" />
      <circle cx="100" cy="10" r="6.5" opacity="0.6" />
      <circle cx="88" cy="10" r="1.6" fill="#c9a24a" stroke="none" />
      <circle cx="112" cy="10" r="1.6" fill="#c9a24a" stroke="none" />
    </svg>
  )
}

/**
 * Floral wedding invitation — soft blush + sage botanical watercolour with
 * gilt accents and a hairline gold frame. Romantic and premium.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function FloralWedding({ values }) {
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
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#fbf8f4] px-16 py-[72px] text-center font-serif text-emerald-900"
    >
      {/* watercolour wash corners */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-rose-100/60 blur-3xl" />
        <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-50/50 blur-3xl" />
      </div>

      {/* hairline gold frame */}
      <div className="pointer-events-none absolute inset-7 rounded-[10px] border border-[#dcc38a]/70" />
      <div className="pointer-events-none absolute inset-[34px] rounded-[8px] border border-rose-200/50" />

      {/* corner sprays */}
      <FloralSpray className="absolute -left-2 -top-2 h-52 w-52" />
      <FloralSpray className="absolute -right-2 -top-2 h-52 w-52 [transform:scaleX(-1)]" />
      <FloralSpray className="absolute -bottom-2 -left-2 h-52 w-52 [transform:scaleY(-1)]" />
      <FloralSpray className="absolute -bottom-2 -right-2 h-52 w-52 [transform:scale(-1)]" />

      <header className="relative z-10 flex flex-col items-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-rose-400">
          {t('template.common.togetherWithFamilies', 'Together with their families')}
        </p>
        <p className="mt-3 max-w-[20rem] text-[15px] italic leading-relaxed text-emerald-700/80">
          {t('template.common.requestPresence', 'request the pleasure of your company')}
        </p>
        <GiltDivider className="mx-auto mt-4 h-4 w-40" />
      </header>

      <main className="relative z-10 flex flex-col items-center gap-1">
        <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.4em] text-emerald-600/70">
          {t('template.common.celebrating', 'celebrating')}
        </p>
        <h1 className="font-script text-[66px] leading-[0.9]">
          <span data-pdf-color="#9f1239" className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
            {bride}
          </span>
        </h1>
        <span className="my-1 font-display text-3xl italic text-emerald-600">{t('template.common.weds', 'weds')}</span>
        <h1 className="font-script text-[66px] leading-[0.9]">
          <span data-pdf-color="#9f1239" className="bg-gradient-to-r from-rose-700 to-rose-500 bg-clip-text text-transparent">
            {groom}
          </span>
        </h1>
      </main>

      <footer className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-rose-300">
          <span className="h-px w-12 bg-rose-200" />
          <span className="text-lg">❀</span>
          <span className="h-px w-12 bg-rose-200" />
        </div>
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-rose-400">{t('template.common.saveTheDate', 'Save the Date')}</p>
          <p className="mt-1.5 font-display text-[26px] text-emerald-800">{date}{time && ` · ${time}`}</p>
        </div>
        <p className="max-w-[22rem] text-[16px] leading-snug text-emerald-800">{venue}</p>
        <p className="text-[14px] italic leading-relaxed text-rose-400">
          {t('template.common.withBestCompliments', 'With best compliments from')}
          <br />
          <span className="font-display text-lg not-italic tracking-wide text-emerald-800">{family}</span>
        </p>
      </footer>
    </div>
  )
}
