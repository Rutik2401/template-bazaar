'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Devotional inline ornaments ───────────────────────────────────────── */

/** Slender Latin cross with a faint gilt halo. */
function Cross({ className = '' }) {
  return (
    <svg viewBox="0 0 40 64" className={className} fill="none">
      <circle cx="20" cy="18" r="13" fill="#cdb46a" fillOpacity="0.12" />
      <g fill="#c2a14e">
        <rect x="17.6" y="4" width="4.8" height="56" rx="2.2" />
        <rect x="7" y="16.6" width="26" height="4.8" rx="2.2" />
      </g>
      <g fill="#e7d49a" fillOpacity="0.7">
        <rect x="18.7" y="5.4" width="2.6" height="53" rx="1.3" />
      </g>
    </svg>
  )
}

/** Two facing doves carrying a slender ribbon between them. */
function Doves({ className = '' }) {
  const dove = (
    <g fill="#9fb4cf" stroke="#7c93b3" strokeWidth="0.8" strokeLinejoin="round">
      {/* body */}
      <path d="M16 30c8-2 16-9 21-19-1 8-2 13 3 18 3 3 1 7-3 8-7 2-15 2-21-1-3-1.4-3-4.6 0-6Z" />
      {/* wing */}
      <path d="M21 22c6 1 12 5 16 12-7 1-13-1-18-6-2.4-2.4-1.2-6 2-6Z" fill="#bccbe0" />
      {/* tail */}
      <path d="M14 35c-5 1-9 0-12-3 4-1 7-1 11 0Z" fill="#8aa1c0" />
    </g>
  )
  return (
    <svg viewBox="0 0 200 70" className={className} fill="none">
      {/* ribbon held between the two birds */}
      <path d="M62 36c14-9 62-9 76 0" stroke="#cdb46a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M62 40c14 9 62 9 76 0" stroke="#cdb46a" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.55" />
      <g transform="translate(2 0)">{dove}</g>
      <g transform="translate(198 0) scale(-1 1)">{dove}</g>
    </svg>
  )
}

/** Two intertwined wedding bands. */
function Rings({ className = '' }) {
  return (
    <svg viewBox="0 0 88 56" className={className} fill="none">
      <circle cx="34" cy="30" r="18" stroke="#c2a14e" strokeWidth="3" />
      <circle cx="56" cy="30" r="18" stroke="#cdb46a" strokeWidth="3" />
      {/* little gleam diamond on the left band */}
      <path d="M34 9l3 4-3 4-3-4 3-4Z" fill="#e7d49a" />
      <path d="M34 9l3 4-3 4-3-4 3-4Z" stroke="#c2a14e" strokeWidth="0.6" />
    </svg>
  )
}

/** A gilt divider with a small four-point sparkle at centre. */
function GiltRule({ className = '' }) {
  return (
    <svg viewBox="0 0 200 16" className={className} fill="none" stroke="#c2a14e" strokeWidth="1.1">
      <path d="M18 8h62M120 8h62" strokeLinecap="round" />
      <path d="M100 1l2.4 5.6L108 8l-5.6 1.4L100 15l-2.4-5.6L92 8l5.6-1.4L100 1Z" fill="#cdb46a" stroke="none" />
    </svg>
  )
}

/**
 * Classic Christian wedding invitation — a tall church-window arch frames the
 * top with a soft stained-glass tint, crowned by a slender cross, facing doves
 * with a ribbon and intertwined rings. Ivory ground with gold and dusty-blue
 * accents, devout and graceful.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function ChristianWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.weddingDate, 'December 15, 2025')
  const time = formatTime(values.ceremonyTime, '')
  const church = values.churchName?.trim() || "St. Mary's Church, Bandra"
  const reception = values.receptionVenue?.trim() || 'Sea Princess Banquet Hall'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fdfcf8] font-serif text-[#2c3340]"
    >
      {/* soft dusty-blue & gold ambient washes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-90px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#dfe7f2]/60 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-[460px] -translate-x-1/2 rounded-full bg-[#f2ead2]/60 blur-3xl" />
      </div>

      {/* hairline gold frame */}
      <div className="pointer-events-none absolute inset-6 border border-[#d9c485]" />
      <div className="pointer-events-none absolute inset-[30px] border border-[#9fb4cf]/40" />

      {/* ── Top church-window arch motif ─────────────────────────────────── */}
      <div className="pointer-events-none absolute left-1/2 top-[58px] h-[300px] w-[260px] -translate-x-1/2">
        <svg viewBox="0 0 260 300" className="h-full w-full" fill="none">
          {/* arch silhouette: pointed gothic window */}
          <path
            d="M130 6C70 6 28 52 28 120v168a8 8 0 0 0 8 8h188a8 8 0 0 0 8-8V120C232 52 190 6 130 6Z"
            fill="#eef3fa"
          />
          {/* stained-glass tint panes */}
          <clipPath id="cw-arch">
            <path d="M130 6C70 6 28 52 28 120v168a8 8 0 0 0 8 8h188a8 8 0 0 0 8-8V120C232 52 190 6 130 6Z" />
          </clipPath>
          <g clipPath="url(#cw-arch)" opacity="0.5">
            <rect x="28" y="6" width="102" height="300" fill="#dde7f4" />
            <rect x="130" y="6" width="102" height="300" fill="#e9e1c8" />
            <path d="M130 6v300" stroke="#cdb46a" strokeWidth="1" opacity="0.6" />
            {/* radiating tracery */}
            <g stroke="#b9c8de" strokeWidth="1.2">
              <path d="M130 96l-70 200M130 96l70 200M130 96V300M130 96l-40 204M130 96l40 204" />
              <path d="M48 150h164M40 210h180M34 264h192" />
            </g>
          </g>
          {/* arch outline */}
          <path
            d="M130 6C70 6 28 52 28 120v168a8 8 0 0 0 8 8h188a8 8 0 0 0 8-8V120C232 52 190 6 130 6Z"
            stroke="#c2a14e"
            strokeWidth="2.2"
          />
          {/* inner sill arch */}
          <path
            d="M130 30C82 30 50 66 50 122v150h160V122C210 66 178 30 130 30Z"
            stroke="#9fb4cf"
            strokeWidth="1.2"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* cross sits atop the window crown */}
      <Cross className="absolute left-1/2 top-[8px] h-[60px] w-[38px] -translate-x-1/2" />

      {/* doves with ribbon near the arch crown */}
      <Doves className="absolute left-1/2 top-[150px] h-[60px] w-[200px] -translate-x-1/2" />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center px-16 pt-[212px] text-center">
        {/* scripture line */}
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.5em] text-[#9a7f3c]">
          {t('template.common.holyMatrimony', 'In Holy Matrimony')}
        </p>
        <p className="mt-4 max-w-[19rem] text-[15px] italic leading-relaxed text-[#5d6b80]">
          “{t('template.common.twoBecomeOne', 'And the two shall become one')}”
        </p>

        <GiltRule className="mt-6 h-4 w-44" />

        {/* names */}
        <div className="mt-7 flex flex-col items-center gap-2">
          <h1 className="font-script text-[58px] leading-[0.9]">
            <span
              data-pdf-color="#a9863a"
              className="bg-gradient-to-r from-[#c2a14e] to-[#9a7f3c] bg-clip-text text-transparent"
            >
              {bride}
            </span>
          </h1>
          <div className="flex items-center gap-4 text-[#9fb4cf]">
            <span className="h-px w-12 bg-[#c9d5e6]" />
            <span className="font-display text-[26px] italic text-[#6b7d96]">
              {t('template.common.weds', 'weds')}
            </span>
            <span className="h-px w-12 bg-[#c9d5e6]" />
          </div>
          <h1 className="font-script text-[58px] leading-[0.9]">
            <span
              data-pdf-color="#a9863a"
              className="bg-gradient-to-r from-[#9a7f3c] to-[#c2a14e] bg-clip-text text-transparent"
            >
              {groom}
            </span>
          </h1>
        </div>

        {/* intertwined rings */}
        <Rings className="mt-7 h-[46px] w-[74px]" />

        {/* ceremony details */}
        <div className="mt-6 flex flex-col items-center gap-1.5">
          <p className="font-sans text-[10px] uppercase tracking-[0.42em] text-[#9a7f3c]">
            {t('template.common.theCeremony', 'The Ceremony')}
          </p>
          <p className="font-display text-[22px] text-[#2c3340]">
            {date}{time && ` · ${time}`}
          </p>
          <p className="max-w-[20rem] text-[16px] leading-snug text-[#5d6b80]">{church}</p>
        </div>

        {/* reception */}
        <div className="mt-auto mb-2 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-3 text-[#9fb4cf]">
            <span className="h-px w-10 bg-[#c9d5e6]" />
            <span className="text-[13px] text-[#c2a14e]">✦</span>
            <span className="h-px w-10 bg-[#c9d5e6]" />
          </div>
          <p className="text-[14px] text-[#5d6b80]">
            <span className="font-sans text-[10px] uppercase tracking-[0.36em] text-[#9a7f3c]">
              {t('template.common.reception', 'Reception')}
            </span>
            <span className="mx-2 text-[#c2a14e]">·</span>
            <span className="font-display text-[16px] text-[#2c3340]">{reception}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
