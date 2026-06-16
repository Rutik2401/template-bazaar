'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Ring + heart crest for the top of the arched frame ──────────────────── */
function RingCrest({ className = '' }) {
  return (
    <svg viewBox="0 0 90 70" className={className} fill="none">
      <defs>
        <linearGradient id="cp-crest" x1="10" y1="10" x2="80" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3cbb4" />
          <stop offset="0.5" stopColor="#c98a6b" />
          <stop offset="1" stopColor="#8f5638" />
        </linearGradient>
      </defs>
      {/* two interlocking rings */}
      <circle cx="36" cy="40" r="16" stroke="url(#cp-crest)" strokeWidth="3.4" />
      <circle cx="54" cy="40" r="16" stroke="url(#cp-crest)" strokeWidth="3.4" />
      {/* tiny heart resting on top */}
      <path
        d="M45 14c-3-6-12-6-12 1 0 5 8 9 12 13 4-4 12-8 12-13 0-7-9-7-12-1Z"
        fill="url(#cp-crest)"
        stroke="#8f5638"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M30 6 33 9M60 6 57 9" stroke="#c98a6b" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

/* ── Stylized couple illustration (head & shoulders, no photo) ───────────── */
function CoupleIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 320 380" className={className} fill="none">
      <defs>
        <linearGradient id="cp-bg" x1="0" y1="0" x2="0" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fbeae0" />
          <stop offset="1" stopColor="#f1cdbb" />
        </linearGradient>
        <linearGradient id="cp-grWear" x1="40" y1="220" x2="170" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5f2742" />
          <stop offset="1" stopColor="#3d1529" />
        </linearGradient>
        <linearGradient id="cp-brWear" x1="160" y1="220" x2="300" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#c98a6b" />
          <stop offset="1" stopColor="#9a5e3f" />
        </linearGradient>
      </defs>

      {/* portrait background */}
      <rect x="0" y="0" width="320" height="380" fill="url(#cp-bg)" />
      <circle cx="160" cy="150" r="120" fill="#fff" fillOpacity="0.18" />

      {/* ── Groom (left) ── */}
      <path d="M30 380 C40 285 78 250 118 250 C158 250 176 290 176 380 Z" fill="url(#cp-grWear)" />
      <path d="M118 250 L118 380" stroke="#2b0f1d" strokeWidth="2" opacity="0.5" />
      {/* collar / sherwani buttons */}
      <circle cx="108" cy="288" r="3" fill="#e7c4ad" />
      <circle cx="108" cy="308" r="3" fill="#e7c4ad" />
      <circle cx="108" cy="328" r="3" fill="#e7c4ad" />
      {/* neck + face */}
      <rect x="98" y="222" width="34" height="36" rx="14" fill="#e7b48f" />
      <circle cx="115" cy="190" r="42" fill="#f0c39c" />
      {/* hair */}
      <path d="M75 184 C74 146 100 130 118 130 C148 130 156 156 156 178 C150 165 138 158 120 158 C100 158 84 168 78 192 Z" fill="#2b1b12" />
      {/* brow + eyes */}
      <path d="M98 184 q8 -5 16 0M124 184 q8 -5 16 0" stroke="#3a261a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="106" cy="190" r="2.6" fill="#3a261a" />
      <circle cx="132" cy="190" r="2.6" fill="#3a261a" />
      {/* nose + smile */}
      <path d="M119 192 l-4 12 7 0" stroke="#cf9a72" strokeWidth="2" strokeLinecap="round" />
      <path d="M104 210 q11 9 26 0" stroke="#b06a4a" strokeWidth="2.4" strokeLinecap="round" />

      {/* ── Bride (right) ── */}
      <path d="M150 380 C150 290 168 250 208 250 C252 250 286 286 296 380 Z" fill="url(#cp-brWear)" />
      {/* dupatta drape */}
      <path d="M208 250 C236 262 266 300 276 380" stroke="#7a3f28" strokeWidth="2.4" opacity="0.55" fill="none" />
      <path d="M170 268 q40 -10 70 14" stroke="#f3d9c4" strokeWidth="2" opacity="0.6" fill="none" />
      {/* neck + face */}
      <rect x="196" y="224" width="30" height="34" rx="13" fill="#eeac82" />
      <circle cx="211" cy="192" r="40" fill="#f6c79e" />
      {/* hair (parted, bun) */}
      <path d="M171 192 C170 154 192 134 211 134 C236 134 252 158 251 192 C245 170 232 160 211 160 C192 160 178 170 175 194 Z" fill="#241008" />
      <circle cx="170" cy="196" r="14" fill="#241008" />
      {/* maang tikka */}
      <path d="M211 134 l0 18" stroke="#d99a4e" strokeWidth="2" />
      <circle cx="211" cy="156" r="4" fill="#e7b54e" stroke="#a8721f" strokeWidth="1" />
      {/* brow + eyes */}
      <path d="M194 188 q8 -5 16 0M214 188 q8 -5 16 0" stroke="#3a261a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="202" cy="194" r="2.6" fill="#3a261a" />
      <circle cx="222" cy="194" r="2.6" fill="#3a261a" />
      {/* bindi */}
      <circle cx="211" cy="170" r="3" fill="#a3163b" />
      {/* nose-ring + lips */}
      <path d="M205 206 q-7 4 -2 9" stroke="#d99a4e" strokeWidth="1.6" fill="none" />
      <path d="M200 214 q11 8 24 0" stroke="#b03a5b" strokeWidth="2.8" strokeLinecap="round" />
      {/* earrings */}
      <circle cx="240" cy="206" r="3.4" fill="#e7b54e" />
      <circle cx="240" cy="216" r="2.2" fill="#e7b54e" />
    </svg>
  )
}

function Sprig({ className = '' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" stroke="currentColor">
      <path d="M8 20 C40 20 52 12 60 12 C68 12 80 20 112 20" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      <path d="M36 17 c-3 -8 -11 -10 -16 -8 c1 7 8 11 16 8Z" fill="currentColor" fillOpacity="0.16" strokeWidth="1" />
      <path d="M84 17 c3 -8 11 -10 16 -8 c-1 7 -8 11 -16 8Z" fill="currentColor" fillOpacity="0.16" strokeWidth="1" />
      <circle cx="60" cy="11" r="4" fill="currentColor" fillOpacity="0.85" stroke="none" />
    </svg>
  )
}

/**
 * Couple Portrait engagement card — an illustrated head-and-shoulders couple
 * inside an ornate arched frame, with a name banner beneath.
 * Rose-gold & deep plum. Natural design size: 640 × 900.
 */
export default function CouplePortraitEngagement({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fbf3ee] via-[#f3ddd0] to-[#e7c3b1] font-serif text-[#4a1f35]"
    >
      {/* soft plum & rose-gold glows */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#7a3050]/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#d39a78]/35 blur-3xl" />

      {/* plum outer mat with rose-gold keyline */}
      <div className="absolute inset-[16px] rounded-[20px] border-[5px] border-[#5f2742]/85" />
      <div className="absolute inset-[16px] rounded-[20px] ring-1 ring-inset ring-[#d9a98c]/60" />
      <div className="absolute inset-[28px] rounded-[14px] border border-[#c98a6b]/55" />

      <div className="relative flex h-full flex-col items-center justify-between px-14 py-14 text-center">
        {/* header */}
        <header className="flex flex-col items-center gap-3">
          <RingCrest className="h-12 w-16 drop-shadow-[0_3px_6px_rgba(143,86,56,0.3)]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.56em] text-[#a0506e]">
            {t('template.common.engagementOf', 'The Engagement Of')}
          </p>
        </header>

        {/* arched portrait frame */}
        <main className="flex flex-col items-center">
          <div className="relative h-[400px] w-[320px]">
            {/* ornate arched border */}
            <div className="absolute -inset-3 rounded-t-[160px] rounded-b-[22px] bg-gradient-to-b from-[#caa07f] via-[#b87a59] to-[#8f5638] shadow-[0_10px_28px_rgba(95,39,66,0.28)]" />
            <div className="absolute -inset-1.5 rounded-t-[150px] rounded-b-[18px] border-2 border-[#fbeae0]/70" />
            {/* inner image plate, arched & clipped */}
            <div className="absolute inset-0 overflow-hidden rounded-t-[148px] rounded-b-[16px] ring-1 ring-[#5f2742]/30">
              <CoupleIllustration className="h-full w-full" />
            </div>
            {/* crest seated on the arch apex */}
            <RingCrest className="absolute -top-7 left-1/2 h-12 w-16 -translate-x-1/2" />
          </div>

          <Sprig className="mt-7 h-8 w-44 text-[#b87a59]" />
        </main>

        {/* name banner + details */}
        <footer className="flex w-full flex-col items-center gap-4">
          <h1 className="font-script text-[58px] font-medium leading-[0.95]">
            <span
              data-pdf-color="#9a5e3f"
              className="bg-gradient-to-r from-[#5f2742] via-[#b87a59] to-[#d99a4e] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
            <span className="mx-3 align-middle font-display text-[30px] italic text-[#a0506e]">&amp;</span>
            <span
              data-pdf-color="#9a5e3f"
              className="bg-gradient-to-r from-[#d99a4e] via-[#b87a59] to-[#5f2742] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          {/* thin divider */}
          <div className="flex items-center gap-2.5 text-[#b87a59]/80">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#b87a59]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#b87a59]" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#b87a59]" />
          </div>

          <p className="font-display text-[24px] leading-tight text-[#5f2742]">
            {date}
            {time && <span className="text-[#a0506e]"> · {time}</span>}
          </p>
          <p className="max-w-[24rem] text-[16px] leading-snug text-[#7a3450]">{venue}</p>
        </footer>
      </div>
    </div>
  )
}
