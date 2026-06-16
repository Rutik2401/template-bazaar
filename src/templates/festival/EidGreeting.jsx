'use client'

import { useI18n } from '@/i18n/I18nProvider'

/* ── Eid Mubarak motifs ────────────────────────────────────────────────── */

/** Crescent moon with a single star tucked in its curve. */
function CrescentStar({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      {/* soft moon glow */}
      <circle cx="58" cy="60" r="54" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M78 14a50 50 0 1 0 0 92a40 40 0 1 1 0-92Z"
        fill="currentColor"
        fillOpacity="0.96"
      />
      <path
        d="M92 44l4 11 12 .6-9 8 3 11-10-7-10 7 3-11-9-8 12-.6 4-11Z"
        fill="currentColor"
      />
      {/* twinkle accents */}
      <circle cx="104" cy="22" r="1.8" fill="currentColor" />
      <circle cx="20" cy="40" r="1.4" fill="currentColor" fillOpacity="0.8" />
    </svg>
  )
}

/** A delicate Islamic filigree arch (mihrab) ornament. */
function FiligreeArch({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 58V30c0-22 18-26 50-26s50 4 50 26v28" opacity="0.55" />
      <path d="M30 58V34c0-12 10-18 30-18s30 6 30 18v24" opacity="0.8" />
      <path d="M60 16v-9M52 11h16" />
      <circle cx="60" cy="5" r="2.4" fill="currentColor" stroke="none" />
      <path d="M4 58h112" opacity="0.5" />
    </svg>
  )
}

/** Domed mosque silhouette with minarets. */
function MosqueSkyline({ className = '' }) {
  return (
    <svg viewBox="0 0 720 200" preserveAspectRatio="none" className={className} fill="currentColor">
      {/* left minaret */}
      <path d="M70 200V70a8 8 0 0 1 16 0v130Z" />
      <path d="M78 56a10 10 0 0 1 0-20a10 10 0 0 1 0 20Z" />
      {/* right minaret */}
      <path d="M634 200V70a8 8 0 0 1 16 0v130Z" />
      <path d="M642 56a10 10 0 0 1 0-20a10 10 0 0 1 0 20Z" />
      {/* central dome + body */}
      <path d="M360 30c26 0 44 22 44 46h-88c0-24 18-46 44-46Z" />
      <path d="M356 18a4 4 0 0 1 8 0v14h-8Z" />
      <path d="M236 200V90c0-10 8-18 18-18h212c10 0 18 8 18 18v110Z" />
      {/* side domes */}
      <path d="M210 200v-70c0-18 14-32 30-32v102Z" />
      <path d="M480 200V98c16 0 30 14 30 32v70Z" />
      {/* arched doorway */}
      <path d="M340 200v-46a20 20 0 0 1 40 0v46Z" fill="#064e3b" />
    </svg>
  )
}

/** Hanging filigree lantern (fanoos). */
function Lantern({ className = '' }) {
  return (
    <svg viewBox="0 0 60 130" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 4v14" />
      <path d="M18 18h24l4 8H14l4-8Z" fill="currentColor" fillOpacity="0.3" />
      {/* glowing body */}
      <path d="M16 30c0-2 2-4 4-4h20c2 0 4 2 4 4l4 44c0 3-3 6-6 6H18c-3 0-6-3-6-6l4-44Z" fill="#fcd34d" fillOpacity="0.35" />
      <path d="M30 30v50M18 40h24M16 60h28" opacity="0.65" />
      {/* tassel */}
      <path d="M22 84h16l-3 10H25l-3-10Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M30 94v14" />
    </svg>
  )
}

/**
 * Eid Mubarak greeting — emerald green with gold filigree, a crescent moon
 * and star above a mosque skyline, flanked by hanging lanterns.
 * Natural design size: 720 × 900.
 */
export default function EidGreeting({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'The Khan Family'
  const message =
    values.message?.trim() ||
    'May this blessed Eid bring peace, prosperity and boundless joy to you and your loved ones.'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[720px] flex-col items-center justify-between overflow-hidden bg-[#052e23] px-16 pb-0 pt-16 text-center font-serif text-emerald-50"
    >
      {/* emerald night sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d6b4d] via-[#064e3b] to-[#021f16]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_72%_16%,rgba(252,211,77,0.42),transparent_46%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_28%_30%,rgba(16,185,129,0.28),transparent_42%)]" />

      {/* scattered stars */}
      <div className="pointer-events-none absolute left-16 top-24 text-gold-200/70">✦</div>
      <div className="pointer-events-none absolute left-28 top-44 text-sm text-gold-200/50">✦</div>
      <div className="pointer-events-none absolute right-28 top-56 text-sm text-gold-200/50">✦</div>
      <div className="pointer-events-none absolute left-1/3 top-16 text-xs text-gold-100/60">✦</div>
      <div className="pointer-events-none absolute right-1/3 top-40 text-[10px] text-gold-100/50">✦</div>
      <div className="pointer-events-none absolute right-16 top-28 text-xs text-emerald-100/40">·</div>

      {/* gold frame */}
      <div className="pointer-events-none absolute inset-6 rounded-md border border-gold-300/60" />
      <div className="pointer-events-none absolute inset-[34px] rounded-md border border-emerald-200/20" />

      {/* hanging lanterns */}
      <Lantern className="absolute left-10 top-6 h-32 w-14 text-gold-300 [filter:drop-shadow(0_2px_10px_rgba(252,211,77,0.4))]" />
      <Lantern className="absolute right-10 top-6 h-32 w-14 text-gold-300 [filter:drop-shadow(0_2px_10px_rgba(252,211,77,0.4))]" />

      {/* Header — crescent + headline */}
      <header className="relative flex flex-col items-center">
        <CrescentStar className="h-24 w-24 text-gold-300 [filter:drop-shadow(0_2px_16px_rgba(252,211,77,0.5))]" />
        <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.5em] text-gold-200">
          {t('template.common.warmWishes', 'Warm wishes on')}
        </p>
        <h1 className="mt-3 font-display text-[64px] leading-[0.95]">
          <span
            data-pdf-color="#fcd34d"
            className="bg-gradient-to-b from-amber-100 via-gold-300 to-gold-500 bg-clip-text text-transparent"
          >
            {t('template.common.eidMubarak', 'Eid Mubarak')}
          </span>
        </h1>
        <div className="mt-4 flex items-center gap-3 text-gold-300">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold-300/70" />
          <span className="text-lg">✦</span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold-300/70" />
        </div>
      </header>

      {/* Message */}
      <main className="relative flex max-w-[27rem] flex-col items-center">
        <FiligreeArch className="mb-5 h-12 w-40 text-gold-200/70" />
        <p className="text-[20px] italic leading-relaxed text-emerald-50/95">{message}</p>
        <p className="mt-8 text-[13px] uppercase tracking-[0.35em] text-gold-200">
          {t('template.common.greetingsFrom', 'with best wishes from')}
        </p>
        <p className="mt-2 font-display text-3xl text-emerald-50">{name}</p>
      </main>

      {/* Mosque skyline anchored to the base */}
      <footer className="relative -mx-16 mt-6 w-[calc(100%+8rem)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#011d15] to-transparent" />
        <MosqueSkyline className="relative h-44 w-full text-emerald-950/90" />
      </footer>
    </div>
  )
}
