'use client'

import { useI18n } from '@/i18n/I18nProvider'

/* ── Ganesh Chaturthi motifs ───────────────────────────────────────────── */

/** Stylised Ganesha face — crown, trunk, ears and tilak. */
function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 160 180" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* crown / mukut */}
      <path d="M80 6l10 18h-20l10-18Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M52 30c8-10 48-10 56 0c-6 6-22 9-28 9s-22-3-28-9Z" fill="currentColor" fillOpacity="0.22" />
      <circle cx="80" cy="22" r="3" fill="currentColor" stroke="none" />
      {/* head */}
      <path d="M44 56c0-16 16-26 36-26s36 10 36 26c0 12-6 22-16 28c4 8 4 18-4 26c-9 9-23 12-32 12s-23-3-32-12c-8-8-8-18-4-26c-10-6-16-16-16-28c0-2 0-2 0-2" fill="currentColor" fillOpacity="0.12" />
      {/* ears */}
      <path d="M44 52c-16 0-26 12-26 26s12 24 26 22" fill="currentColor" fillOpacity="0.16" />
      <path d="M116 52c16 0 26 12 26 26s-12 24-26 22" fill="currentColor" fillOpacity="0.16" />
      {/* eyes */}
      <path d="M58 70c4-4 12-4 16 0M86 70c4-4 12-4 16 0" />
      {/* tilak */}
      <path d="M80 50v14M74 56h12" strokeWidth="2.4" />
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#f97316] via-[#d2401a] to-[#7a1f10]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_36%,rgba(254,243,199,0.35),transparent_50%)]" />

      {/* halo behind Ganesha */}
      <div className="pointer-events-none absolute left-1/2 top-[230px] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,224,71,0.5),transparent_70%)]" />

      {/* gold frame */}
      <div className="pointer-events-none absolute inset-6 rounded-md border border-gold-300/60" />
      <div className="pointer-events-none absolute inset-[34px] rounded-md border border-amber-100/25" />

      {/* lotus arc bottom */}
      <Lotus className="pointer-events-none absolute bottom-16 left-1/2 h-28 w-64 -translate-x-1/2 text-gold-200/40" />

      {/* Header — chant + Ganesha */}
      <header className="relative flex flex-col items-center">
        <p className="font-display text-2xl tracking-wide text-gold-100">{t('template.common.om', 'ॐ')}</p>
        <p className="mt-1 font-display text-2xl tracking-wide text-amber-100">
          {t('template.common.ganpatiBappaMorya', 'Ganpati Bappa Morya')}
        </p>
        <Ganesha className="mt-2 h-40 w-40 text-gold-100" />
      </header>

      {/* Headline */}
      <div className="relative">
        <h1 className="font-display text-[54px] leading-[1.0]">
          <span
            data-pdf-color="#fde68a"
            className="bg-gradient-to-b from-amber-100 via-amber-200 to-gold-300 bg-clip-text text-transparent"
          >
            {t('template.common.ganeshChaturthi', 'Happy Ganesh Chaturthi')}
          </span>
        </h1>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Modak className="h-9 w-8 text-gold-200" />
          <span className="h-px w-16 bg-gold-200/60" />
          <span className="text-lg text-gold-100">✦</span>
          <span className="h-px w-16 bg-gold-200/60" />
          <Modak className="h-9 w-8 text-gold-200" />
        </div>
      </div>

      {/* Message */}
      <main className="relative max-w-[27rem]">
        <p className="text-[19px] italic leading-relaxed text-amber-50/95">{message}</p>
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
