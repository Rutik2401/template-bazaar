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
      </g>
      {/* leaves */}
      <g fill="#8fae93">
        <path d="M66 96c-12-4-20-14-22-28 14 2 24 12 22 28Z" opacity="0.8" />
        <path d="M78 64c-10-6-15-17-14-30 12 5 19 16 14 30Z" opacity="0.7" />
        <path d="M92 122c-13-1-24-9-29-23 14-2 26 5 29 23Z" opacity="0.75" />
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
      </g>
    </svg>
  )
}

/**
 * Floral wedding invitation — soft blush + sage botanical watercolour.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function FloralWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Anushka'
  const groom = values.groomName?.trim() || 'Laksh'
  const date = formatDate(values.weddingDate, 'Date to be announced')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const family = values.familyName?.trim() || 'The Sharma Family'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-between overflow-hidden bg-[#fbf8f4] px-16 py-20 text-center font-serif text-emerald-900"
    >
      {/* watercolour wash corners */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-rose-100/60 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-emerald-100/60 blur-2xl" />
      </div>

      {/* corner sprays */}
      <FloralSpray className="absolute -left-2 -top-2 h-52 w-52" />
      <FloralSpray className="absolute -right-2 -top-2 h-52 w-52 [transform:scaleX(-1)]" />
      <FloralSpray className="absolute -bottom-2 -left-2 h-52 w-52 [transform:scaleY(-1)]" />
      <FloralSpray className="absolute -bottom-2 -right-2 h-52 w-52 [transform:scale(-1)]" />

      <header className="relative z-10">
        <p className="text-[12px] uppercase tracking-[0.45em] text-rose-400">
          {t('template.common.togetherWithFamilies', 'Together with their families')}
        </p>
        <p className="mt-3 text-[15px] italic leading-relaxed text-emerald-700/80">
          {t('template.common.requestPresence', 'request the pleasure of your company')}
        </p>
        <div className="mx-auto mt-4 h-px w-16 bg-rose-200" />
      </header>

      <main className="relative z-10 flex flex-col items-center gap-1">
        <p className="mb-2 text-[12px] uppercase tracking-[0.4em] text-emerald-600/70">
          {t('template.common.celebrating', 'celebrating')}
        </p>
        <h1 className="font-display text-[62px] leading-none">
          <span data-pdf-color="#9f1239" className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
            {bride}
          </span>
        </h1>
        <span className="my-1 font-display text-3xl italic text-emerald-600">{t('template.common.weds', 'weds')}</span>
        <h1 className="font-display text-[62px] leading-none">
          <span data-pdf-color="#9f1239" className="bg-gradient-to-r from-rose-700 to-rose-500 bg-clip-text text-transparent">
            {groom}
          </span>
        </h1>
      </main>

      <footer className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-rose-300">
          <span className="h-px w-10 bg-rose-200" />
          <span className="text-lg">❀</span>
          <span className="h-px w-10 bg-rose-200" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-rose-400">{t('template.common.saveTheDate', 'Save the Date')}</p>
          <p className="mt-1 font-display text-2xl text-emerald-800">{date}{time && ` · ${time}`}</p>
        </div>
        <p className="max-w-[22rem] text-[16px] leading-snug text-emerald-800">{venue}</p>
        <p className="text-[14px] italic text-rose-400">
          {t('template.common.withBestCompliments', 'With best compliments from')}
          <br />
          <span className="font-display text-lg not-italic text-emerald-800">{family}</span>
        </p>
      </footer>
    </div>
  )
}
