'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Hand-drawn romantic florals ───────────────────────────────────────── */

/** A layered open rose — concentric petal swirls in blush & burgundy. */
function Rose({ className = '', id = 'r', light = '#f6b9c8', mid = '#e0728e', deep = '#9c1f3f' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <defs>
        <radialGradient id={`rose-${id}`} cx="48%" cy="44%" r="60%">
          <stop offset="0" stopColor={light} />
          <stop offset="0.6" stopColor={mid} />
          <stop offset="1" stopColor={deep} />
        </radialGradient>
      </defs>
      {/* outer petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * 360
        return (
          <path
            key={`o${i}`}
            d="M50 14 C66 18 74 32 70 48 C58 44 48 34 50 14Z"
            fill={`url(#rose-${id})`}
            fillOpacity="0.92"
            transform={`rotate(${a} 50 50)`}
          />
        )
      })}
      <circle cx="50" cy="50" r="26" fill={mid} fillOpacity="0.9" />
      {/* inner spiral petals */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * 360
        return (
          <path
            key={`i${i}`}
            d="M50 30 C60 33 63 42 58 50 C52 46 48 38 50 30Z"
            fill={deep}
            fillOpacity="0.85"
            transform={`rotate(${a} 50 50)`}
          />
        )
      })}
      <circle cx="50" cy="50" r="7" fill={deep} />
      <path d="M50 44 C53 46 53 50 50 52 C47 50 47 46 50 44Z" fill={light} fillOpacity="0.85" />
    </svg>
  )
}

/** Small budding rose on a curling stem. */
function Bud({ className = '', petal = '#e88aa2', deep = '#a82149' }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none">
      <path d="M30 96 C30 70 26 54 22 42" stroke="#7c9a6d" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M28 64 C18 62 12 54 10 44 C22 44 30 52 28 64Z" fill="#8fae93" fillOpacity="0.85" />
      <path d="M34 56 C44 56 50 50 54 42 C42 40 32 46 34 56Z" fill="#a8c79b" fillOpacity="0.8" />
      <path d="M30 6 C42 12 44 26 38 38 C24 40 14 30 16 18 C18 10 24 6 30 6Z" fill={petal} />
      <path d="M30 10 C36 16 36 28 30 36 C24 28 24 16 30 10Z" fill={deep} fillOpacity="0.8" />
    </svg>
  )
}

/** A soft heart with a faint glow. */
function Heart({ className = '', color = '#d54f74' }) {
  return (
    <svg viewBox="0 0 100 90" className={className} fill="none">
      <path
        d="M50 84 C20 60 6 44 6 28 C6 14 17 6 29 6 C39 6 46 12 50 20 C54 12 61 6 71 6 C83 6 94 14 94 28 C94 44 80 60 50 84Z"
        fill={color}
        fillOpacity="0.85"
      />
    </svg>
  )
}

/** A trailing vine with leaves and tiny buds — used for garlands & sprays. */
function Vine({ className = '' }) {
  return (
    <svg viewBox="0 0 320 120" className={className} fill="none">
      <path d="M4 60 C70 18 120 96 180 50 C236 8 280 92 316 56" stroke="#7c9a6d" strokeWidth="2.2" strokeLinecap="round" />
      <g fill="#8fae93" fillOpacity="0.85">
        <path d="M52 44 C44 34 44 22 52 12 C60 22 60 34 52 44Z" />
        <path d="M104 78 C112 70 124 70 134 78 C124 86 112 86 104 78Z" />
        <path d="M168 36 C160 26 160 14 168 4 C176 14 176 26 168 36Z" />
        <path d="M232 76 C240 68 252 68 262 76 C252 84 240 84 232 76Z" />
        <path d="M288 40 C280 30 280 18 288 8 C296 18 296 30 288 40Z" />
      </g>
      <g fill="#e08aa6">
        <circle cx="84" cy="40" r="4.5" />
        <circle cx="146" cy="62" r="4" />
        <circle cx="206" cy="34" r="4.5" />
        <circle cx="270" cy="60" r="4" />
      </g>
    </svg>
  )
}

/**
 * Romantic engagement — a lush blush-rose & burgundy love-letter card with an
 * abundant rose-and-vine garland across the top, a trailing spray below, drifting
 * hearts and a soft glowing centre. The quote is the flowing-script hero line.
 * Natural design size: 640 × 900.
 */
export default function RomanticEngagement({ values }) {
  const { t } = useI18n()
  const couple = values.coupleName?.trim() || 'Aarav & Sanika'
  const date = formatDate(values.date, 'November 20, 2025')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'
  const quote = values.quote?.trim() || 'Two hearts that beat as one'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-gradient-to-b from-[#fff6f3] via-[#fbe6ec] to-[#f3d2dd] font-serif text-[#5e2436]"
    >
      {/* warm romantic wash blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-[#f4a8bf]/55 blur-3xl" />
        <div className="absolute -right-16 -top-10 h-64 w-64 rounded-full bg-[#c8718c]/45 blur-3xl" />
        <div className="absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-[#9c1f3f]/30 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-[#e07ba0]/45 blur-3xl" />
      </div>

      {/* soft glowing centre halo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,247,250,0.95)_0%,_rgba(255,236,242,0.6)_45%,_transparent_72%)]" />

      {/* burgundy hairline frame */}
      <div className="pointer-events-none absolute inset-6 rounded-[14px] border border-[#9c1f3f]/35" />
      <div className="pointer-events-none absolute inset-[30px] rounded-[10px] border border-[#e8a6bb]/60" />

      {/* drifting hearts */}
      <Heart className="absolute left-12 top-[280px] h-5 w-5 rotate-[-12deg] opacity-70" color="#d54f74" />
      <Heart className="absolute right-14 top-[330px] h-4 w-4 rotate-[14deg] opacity-60" color="#b8345c" />
      <Heart className="absolute left-20 bottom-[300px] h-4 w-4 rotate-[8deg] opacity-60" color="#e07ba0" />
      <Heart className="absolute right-16 bottom-[340px] h-5 w-5 rotate-[-10deg] opacity-65" color="#c33d62" />

      {/* ── RICH TOP GARLAND ── */}
      <div className="pointer-events-none absolute -top-2 left-0 right-0 h-56">
        <Vine className="absolute left-2 top-10 h-24 w-72 -scale-x-100" />
        <Vine className="absolute right-2 top-10 h-24 w-72" />
        {/* left cluster */}
        <Bud className="absolute left-6 top-2 h-24 w-14 rotate-[24deg]" />
        <Rose className="absolute left-0 -top-6 h-32 w-32" id="tl1" />
        <Rose className="absolute left-24 top-4 h-24 w-24" id="tl2" light="#f8c9d6" mid="#d96e95" deep="#8d1638" />
        <Rose className="absolute left-12 top-16 h-20 w-20" id="tl3" light="#f6b9c8" mid="#e0728e" deep="#a82149" />
        {/* centre crowning roses */}
        <Rose className="absolute left-1/2 -top-8 h-28 w-28 -translate-x-1/2" id="tc1" light="#fbd3dd" mid="#e07ba0" deep="#9c1f3f" />
        <Bud className="absolute left-1/2 top-14 h-20 w-12 -translate-x-[140%] rotate-[-18deg]" />
        <Bud className="absolute left-1/2 top-14 h-20 w-12 translate-x-[40%] rotate-[18deg] -scale-x-100" />
        {/* right cluster */}
        <Bud className="absolute right-6 top-2 h-24 w-14 -rotate-[24deg] -scale-x-100" />
        <Rose className="absolute right-0 -top-6 h-32 w-32" id="tr1" light="#f8c9d6" mid="#d96e95" deep="#8d1638" />
        <Rose className="absolute right-24 top-4 h-24 w-24" id="tr2" />
        <Rose className="absolute right-12 top-16 h-20 w-20" id="tr3" light="#fbd3dd" mid="#e07ba0" deep="#9c1f3f" />
      </div>

      {/* ── BOTTOM ROSE SPRAY ── */}
      <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-44">
        <Vine className="absolute left-1/2 bottom-12 h-20 w-72 -translate-x-1/2 -scale-y-100" />
        <Rose className="absolute left-1/2 bottom-0 h-24 w-24 -translate-x-[150%]" id="bs1" light="#fbd3dd" mid="#e07ba0" deep="#9c1f3f" />
        <Rose className="absolute left-1/2 -bottom-2 h-28 w-28 -translate-x-1/2" id="bs2" />
        <Rose className="absolute left-1/2 bottom-0 h-24 w-24 translate-x-[55%]" id="bs3" light="#f8c9d6" mid="#d96e95" deep="#8d1638" />
        <Bud className="absolute left-1/2 bottom-14 h-20 w-12 -translate-x-[260%] -rotate-[150deg]" />
        <Bud className="absolute left-1/2 bottom-14 h-20 w-12 translate-x-[150%] rotate-[150deg] -scale-x-100" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-16 py-56 text-center">
        <header className="flex flex-col items-center gap-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.55em] text-[#b8487a]">
            {t('template.common.youAreInvited', "You're Invited")}
          </p>
          <div className="flex items-center gap-2.5 text-[#c97a98]">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c97a98]" />
            <Heart className="h-3.5 w-3.5" color="#c33d62" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c97a98]" />
          </div>
        </header>

        <main className="mt-9 flex flex-col items-center gap-6">
          {/* hero quote in flowing script */}
          <p className="max-w-[26rem] font-script text-[46px] leading-[1.08]">
            <span
              data-pdf-color="#9c1f3f"
              className="bg-gradient-to-r from-[#e0728e] via-[#c33d62] to-[#7d1133] bg-clip-text text-transparent"
            >
              “{quote}”
            </span>
          </p>

          <div className="flex items-center gap-3 text-[#cf8aa6]">
            <span className="h-px w-10 bg-[#e8a6bb]" />
            <span className="text-sm">❧</span>
            <span className="h-px w-10 bg-[#e8a6bb]" />
          </div>

          <h1 className="font-display text-[54px] font-medium leading-[1.05] tracking-[-0.01em] text-[#7d1133]">
            {couple}
          </h1>

          <p className="font-display text-[20px] italic text-[#a85a76]">
            {t('template.common.areGettingEngaged', 'are getting engaged')}
          </p>
        </main>

        <footer className="mt-10 flex flex-col items-center gap-3">
          <div className="rounded-[26px] border border-[#e0a0b6] bg-white/55 px-12 py-5 shadow-[0_14px_36px_-20px_rgba(124,17,51,0.55)] backdrop-blur-sm">
            <p className="font-display text-[24px] tracking-wide text-[#8d1638]">{date}</p>
            <div className="mx-auto my-2 flex items-center justify-center gap-2 text-[#cf8aa6]">
              <span className="h-px w-10 bg-[#e8a6bb]" />
              <Heart className="h-3 w-3" color="#c33d62" />
              <span className="h-px w-10 bg-[#e8a6bb]" />
            </div>
            <p className="text-[16px] leading-snug text-[#6e2b40]">{venue}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
