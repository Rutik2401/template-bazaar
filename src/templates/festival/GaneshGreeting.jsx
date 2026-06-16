'use client'

import { useI18n } from '@/i18n/I18nProvider'

/* ── Ganesh Chaturthi motifs ───────────────────────────────────────────── */

/** Stylised Ganesha face — crown, trunk, ears and tilak. */
function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 160 180" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* radiant halo */}
      <circle cx="80" cy="70" r="62" fill="currentColor" fillOpacity="0.08" stroke="none" />
      {/* crown / mukut */}
      <path d="M80 4l11 20h-22l11-20Z" fill="currentColor" fillOpacity="0.4" />
      <path d="M52 30c8-11 48-11 56 0c-6 6-22 9-28 9s-22-3-28-9Z" fill="currentColor" fillOpacity="0.28" />
      <path d="M58 30l-4-8M80 30v-9M102 30l4-8" opacity="0.6" />
      <circle cx="80" cy="22" r="3.4" fill="currentColor" stroke="none" />
      <circle cx="62" cy="27" r="2" fill="currentColor" stroke="none" />
      <circle cx="98" cy="27" r="2" fill="currentColor" stroke="none" />
      {/* head */}
      <path d="M44 56c0-16 16-26 36-26s36 10 36 26c0 12-6 22-16 28c4 8 4 18-4 26c-9 9-23 12-32 12s-23-3-32-12c-8-8-8-18-4-26c-10-6-16-16-16-28c0-2 0-2 0-2" fill="currentColor" fillOpacity="0.16" />
      {/* ears */}
      <path d="M44 52c-16 0-26 12-26 26s12 24 26 22" fill="currentColor" fillOpacity="0.2" />
      <path d="M116 52c16 0 26 12 26 26s-12 24-26 22" fill="currentColor" fillOpacity="0.2" />
      <path d="M30 70c8 2 13 7 16 14M130 70c-8 2-13 7-16 14" opacity="0.55" strokeWidth="1.5" />
      {/* eyes */}
      <path d="M58 70c4-4 12-4 16 0M86 70c4-4 12-4 16 0" />
      <circle cx="66" cy="70" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="94" cy="70" r="1.6" fill="currentColor" stroke="none" />
      {/* tilak */}
      <path d="M80 50v14M74 56h12" strokeWidth="2.6" />
      {/* trunk curling to a modak */}
      <path d="M80 78c0 14-2 24-12 32c-8 6-10 16-4 24c5 6 14 6 18-1" />
      <path d="M84 86c8 0 14 6 14 14" opacity="0.7" />
      {/* tusks */}
      <path d="M70 92c-3 5-3 9 0 13M90 92c3 5 3 9 0 13" opacity="0.8" />
    </svg>
  )
}

/** A modak (sweet dumpling) with a pointed top. */
function Modak({ className = '' }) {
  return (
    <svg viewBox="0 0 70 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M35 6c4 8 4 14 0 18c-4-4-4-10 0-18Z" fill="currentColor" fillOpacity="0.35" />
      <path d="M35 24c16 0 26 22 26 38c0 6-4 10-10 10H19c-6 0-10-4-10-10c0-16 10-38 26-38Z" fill="currentColor" fillOpacity="0.2" />
      {/* pleats */}
      <path d="M35 24l-9 48M35 24l9 48M35 24v48M22 30l-7 40M48 30l7 40" opacity="0.6" />
    </svg>
  )
}

/** Radiating sun-rays halo for divine glow. */
function SunRays({ className = '' }) {
  const rays = Array.from({ length: 32 })
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      {rays.map((_, i) => {
        const a = ((i * 360) / 32) * (Math.PI / 180)
        const r1 = 64
        const r2 = i % 2 === 0 ? 96 : 84
        return (
          <path
            key={i}
            d={`M${100 + Math.cos(a) * r1} ${100 + Math.sin(a) * r1}L${100 + Math.cos(a) * r2} ${100 + Math.sin(a) * r2}`}
            opacity={i % 2 === 0 ? 0.9 : 0.5}
          />
        )
      })}
      <circle cx="100" cy="100" r="58" strokeDasharray="1 7" opacity="0.6" />
    </svg>
  )
}

/** A lotus bloom of layered petals. */
function Lotus({ className = '' }) {
  const petals = Array.from({ length: 9 })
  return (
    <svg viewBox="0 0 160 90" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      {petals.map((_, i) => {
        const a = -90 + (i - 4) * 20
        return (
          <path
            key={i}
            transform={`rotate(${a} 80 86)`}
            d="M80 86c8-30 0-54 0-58c0 4-8 28 0 58Z"
            fill="currentColor"
            fillOpacity={0.12 + (4 - Math.abs(i - 4)) * 0.04}
          />
        )
      })}
      <path d="M40 86h80" opacity="0.6" />
    </svg>
  )
}

/**
 * Ganesh Chaturthi greeting — warm saffron-to-vermilion silk, a central
 * Ganesha framed by lotus and modak, with the Bappa Morya chant.
 * Natural design size: 720 × 900.
 */
export default function GaneshGreeting({ values }) {
  const { t } = useI18n()
  const name = values.personName?.trim() || 'The Sharma Family'
  const message =
    values.message?.trim() ||
    'May Lord Ganesha remove every obstacle from your path and bless your home with wisdom and joy.'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[720px] flex-col items-center justify-between overflow-hidden bg-[#7a1f10] px-16 py-16 text-center font-serif text-amber-50"
    >
      {/* saffron silk gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fb923c] via-[#d2401a] to-[#6a1709]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_34%,rgba(254,243,199,0.42),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_96%,rgba(253,186,116,0.32),transparent_46%)]" />

      {/* radiant sunburst halo behind Ganesha */}
      <SunRays className="pointer-events-none absolute left-1/2 top-[228px] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 text-gold-200/20" />
      <div className="pointer-events-none absolute left-1/2 top-[228px] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,224,71,0.55),transparent_70%)]" />

      {/* gold frame */}
      <div className="pointer-events-none absolute inset-6 rounded-md border border-gold-300/60" />
      <div className="pointer-events-none absolute inset-[34px] rounded-md border border-amber-100/25" />

      {/* lotus arc bottom */}
      <Lotus className="pointer-events-none absolute bottom-14 left-1/2 h-28 w-64 -translate-x-1/2 text-gold-200/45" />

      {/* Header — chant + Ganesha */}
      <header className="relative flex flex-col items-center">
        <p className="font-display text-3xl tracking-wide text-gold-100">{t('template.common.om', 'ॐ')}</p>
        <p className="mt-2 font-display text-[26px] tracking-wide text-amber-100">
          {t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}
        </p>
        <Ganesha className="mt-2 h-44 w-44 text-gold-100 [filter:drop-shadow(0_3px_14px_rgba(253,224,71,0.35))]" />
      </header>

      {/* Headline */}
      <div className="relative">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.5em] text-gold-200">
          {t('template.common.warmWishes', 'Warm wishes on')}
        </p>
        <h1 className="font-display text-[54px] leading-[1.0]">
          <span
            data-pdf-color="#fde68a"
            className="bg-gradient-to-b from-amber-100 via-amber-200 to-gold-300 bg-clip-text text-transparent"
          >
            {t('template.common.ganeshChaturthi', 'Happy Ganesh Chaturthi')}
          </span>
        </h1>
        <div className="mt-5 flex items-center justify-center gap-4">
          <Modak className="h-9 w-8 text-gold-200" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-200/70" />
          <span className="text-lg text-gold-100">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-200/70" />
          <Modak className="h-9 w-8 text-gold-200" />
        </div>
      </div>

      {/* Message */}
      <main className="relative max-w-[27rem]">
        <p className="text-[20px] italic leading-relaxed text-amber-50/95">{message}</p>
      </main>

      {/* Footer */}
      <footer className="relative flex flex-col items-center">
        <p className="text-[13px] uppercase tracking-[0.35em] text-gold-100">
          {t('template.common.greetingsFrom', 'with best wishes from')}
        </p>
        <p className="mt-2 font-display text-3xl text-amber-50">{name}</p>
      </footer>
    </div>
  )
}
