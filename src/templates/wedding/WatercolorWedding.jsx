'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Delicate single-stroke botanical sprigs ───────────────────────────── */

/** A thin botanical sprig — one stem with a few fine leaves. Painterly, sparse. */
function Sprig({ className = '' }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none" stroke="currentColor">
      <g strokeWidth="1.3" strokeLinecap="round">
        {/* main stem, gently curving */}
        <path d="M60 196C58 150 54 104 64 58 70 30 78 14 84 4" />
        {/* side stems */}
        <path d="M61 150c-14-6-24-18-30-34" opacity="0.85" />
        <path d="M62 120c14-4 24-15 30-30" opacity="0.85" />
        <path d="M64 92c-12-5-20-15-24-28" opacity="0.8" />
        <path d="M67 64c12-3 20-12 25-24" opacity="0.8" />
      </g>
      {/* slender single-stroke leaves */}
      <g strokeWidth="1.2" strokeLinecap="round">
        <path d="M31 116c-9-2-16-9-19-19 11-1 18 5 19 19Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M92 90c9-3 15-10 17-21-11 0-17 7-17 21Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M40 64c-8-3-13-10-14-20 10 1 15 8 14 20Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M92 40c8-4 13-12 13-22-10 1-15 9-13 22Z" fill="currentColor" fillOpacity="0.1" />
      </g>
      {/* a couple of fine buds */}
      <g strokeWidth="1.1">
        <circle cx="84" cy="6" r="3.5" fill="currentColor" fillOpacity="0.18" />
        <circle cx="22" cy="98" r="2.6" fill="currentColor" fillOpacity="0.16" />
      </g>
    </svg>
  )
}

/**
 * Watercolour wedding invitation — soft translucent washes (dusty-rose, sage,
 * peach) bleeding inward from the corners, an airy white centre, delicate
 * single-stroke botanical sprigs, and large flowing script names.
 * Gallery-art, effortlessly expensive, minimal text.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function WatercolorWedding({ values }) {
  const { t } = useI18n()
  const bride = values.brideName?.trim() || 'Sanika'
  const groom = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.weddingDate, 'December 15, 2025')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'

  return (
    <div
      data-export-root
      className="relative flex h-[900px] w-[640px] flex-col items-center justify-center overflow-hidden bg-[#fefdfb] px-16 text-center font-serif text-stone-700"
    >
      {/* ── Translucent watercolour washes bleeding in from the corners ─── */}
      <div className="pointer-events-none absolute inset-0">
        {/* dusty-rose — top left */}
        <div className="absolute -left-28 -top-28 h-[24rem] w-[24rem] rounded-full bg-[#e8b4ba]/45 blur-[80px]" />
        <div className="absolute -left-12 -top-16 h-56 w-56 rounded-full bg-[#dca0a8]/35 blur-[60px]" />
        {/* sage-green — bottom right */}
        <div className="absolute -bottom-28 -right-28 h-[24rem] w-[24rem] rounded-full bg-[#a9c0a0]/45 blur-[80px]" />
        <div className="absolute -bottom-14 -right-14 h-56 w-56 rounded-full bg-[#8fae8a]/30 blur-[60px]" />
        {/* peach — top right */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f3c6a3]/40 blur-[75px]" />
        {/* soft peach + rose — bottom left */}
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f0cbb6]/38 blur-[75px]" />
        <div className="absolute -bottom-10 -left-6 h-44 w-44 rounded-full bg-[#e8b4ba]/25 blur-[55px]" />
        {/* faint sage drift mid-edges to keep the bleed organic */}
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[70px]" />
      </div>

      {/* ── Delicate single-stroke botanical sprigs over the washes ────── */}
      <Sprig className="absolute left-6 top-4 h-44 w-28 text-[#7c9576] opacity-70" />
      <Sprig className="absolute bottom-4 right-6 h-44 w-28 rotate-180 text-[#7c9576] opacity-70" />
      <Sprig className="absolute right-8 top-8 h-36 w-24 -scale-x-100 text-[#b78089] opacity-55" />
      <Sprig className="absolute bottom-6 left-8 h-36 w-24 rotate-180 -scale-x-100 text-[#b78089] opacity-55" />

      {/* ── Airy centred composition ───────────────────────────────────── */}
      <header className="relative z-10 flex flex-col items-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400">
          {t('template.common.togetherWithFamilies', 'Together with their families')}
        </p>
        <p className="mt-4 font-display text-[15px] italic tracking-wide text-stone-500/90">
          {t('template.common.requestPresence', 'request the pleasure of your company at the marriage of')}
        </p>
      </header>

      <main className="relative z-10 my-10 flex flex-col items-center">
        <h1 className="font-script text-[78px] leading-[0.85]">
          <span
            data-pdf-color="#b45f6a"
            className="bg-gradient-to-br from-[#cf8088] to-[#a64e5c] bg-clip-text text-transparent"
          >
            {bride}
          </span>
        </h1>

        <span className="my-3 font-script text-[40px] leading-none text-[#9bb194]">
          {t('template.common.and', '&')}
        </span>

        <h1 className="font-script text-[78px] leading-[0.85]">
          <span
            data-pdf-color="#7c9576"
            className="bg-gradient-to-br from-[#9bb194] to-[#5f7a59] bg-clip-text text-transparent"
          >
            {groom}
          </span>
        </h1>
      </main>

      <footer className="relative z-10 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3 text-[#d6a9af]">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#d6a9af]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#cf8088]/70" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#d6a9af]" />
        </div>
        <p className="font-display text-[22px] tracking-[0.04em] text-stone-600">{date}</p>
        <p className="max-w-[20rem] font-sans text-[12px] uppercase leading-relaxed tracking-[0.32em] text-stone-400">
          {venue}
        </p>
      </footer>
    </div>
  )
}
