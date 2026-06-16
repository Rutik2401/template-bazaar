'use client'

import { formatDate } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Decorative SVG pieces (gold corners + photo watermark) ──────────────── */

/** Ornate gold corner bracket — layered scroll, leaf bud and beaded dots. */
function FrameCorner({ className = '' }) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      {/* sweeping bracket scrolls */}
      <path d="M6 6c30 0 46 4 60 18s18 30 18 60" opacity="0.95" />
      <path d="M6 18c22 0 34 3 45 14s14 23 14 45" opacity="0.5" />
      {/* inner curl */}
      <path d="M12 12c0 16 7 26 23 26" opacity="0.75" />
      {/* leaf bud */}
      <path
        d="M34 12c7 0 12 2 17 7s7 10 7 17c-7 0-12-2-17-7s-7-10-7-17Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="none"
      />
      <path d="M41 19c4 1 7 3 9 9" opacity="0.5" />
      {/* beaded dots */}
      <circle cx="11" cy="11" r="2.8" fill="currentColor" stroke="none" />
      <circle cx="62" cy="38" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="38" cy="62" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Faint camera + heart watermark for the empty photo plate. */
function PhotoWatermark({ className = '' }) {
  return (
    <svg viewBox="0 0 120 96" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      {/* camera body */}
      <rect x="14" y="26" width="92" height="58" rx="10" opacity="0.9" />
      {/* viewfinder hump */}
      <path d="M44 26l8-12h16l8 12" opacity="0.9" strokeLinejoin="round" />
      {/* lens ring */}
      <circle cx="60" cy="56" r="20" opacity="0.85" />
      <circle cx="60" cy="56" r="11" opacity="0.55" />
      {/* shutter dot */}
      <circle cx="94" cy="38" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />
      {/* little heart in the lens */}
      <path
        d="M60 62c-5-4-10-7-10-12a4.6 4.6 0 0 1 10-1 4.6 4.6 0 0 1 10 1c0 5-5 8-10 12Z"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
      />
    </svg>
  )
}

/** Slender ruled divider with a centred diamond bud. */
function RuleBud({ className = '' }) {
  return (
    <svg viewBox="0 0 240 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M10 8h94" strokeLinecap="round" opacity="0.7" />
      <path d="M136 8h94" strokeLinecap="round" opacity="0.7" />
      <path d="M120 2l7 6-7 6-7-6 7-6Z" fill="currentColor" fillOpacity="0.22" />
      <circle cx="104" cy="8" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="136" cy="8" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Photo-frame wedding invitation — a gallery-style ornate gold frame holds a
 * large rounded photo plate (styled placeholder, as uploads aren't available),
 * with the couple beneath in a display face and a script caption.
 * Ivory + soft gold, refined and premium. Natural design size: 640 × 900.
 */
export default function PhotoFrameWedding({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const weddingDate = formatDate(values.weddingDate, 'December 15, 2025')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const photoCaption = values.photoCaption?.trim() || 'The day we say forever'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#fbf6ec] font-serif text-[#6b5328]"
    >
      {/* Warm ivory base with a soft gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf9f0] via-[#fbf4e7] to-[#f6ecd6]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(184,134,11,0.10),_transparent_62%)]" />

      {/* Outer gold keylines framing the whole card */}
      <div className="absolute inset-[16px] rounded-[8px] border border-[#caa64a]/55" />
      <div className="absolute inset-[22px] rounded-[6px] border-[2px] border-[#d9b65f]/70" />

      {/* Content */}
      <div className="relative flex h-full flex-col px-[44px] pb-[44px] pt-[44px]">
        {/* ── Photo plate (upper ~55%) ──────────────────────────────── */}
        <div className="relative h-[488px] w-full">
          {/* ornate gold frame mat */}
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#e7c878] via-[#d4ad53] to-[#b98f2e] p-[10px] shadow-[0_18px_40px_-18px_rgba(120,86,18,0.45)]">
            {/* inner ivory plate */}
            <div className="relative h-full w-full overflow-hidden rounded-[12px] border border-[#e9d9a8] bg-gradient-to-br from-[#fdfaf2] to-[#f3e9d2]">
              {/* hairline keyline inside the plate */}
              <div className="pointer-events-none absolute inset-[10px] rounded-[8px] border border-[#d9b65f]/45" />

              {/* faint camera / heart watermark + placeholder label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
                <PhotoWatermark className="h-24 w-28 text-[#caa64a]/30" />
                <p className="font-sans text-[12px] font-medium uppercase tracking-[0.46em] text-[#b58f3a]/70">
                  {t('template.wedding.yourPhotoHere', 'Your Photo Here')}
                </p>
              </div>

              {/* decorative gold corners on the frame */}
              <FrameCorner className="absolute left-2 top-2 h-14 w-14 text-[#b98f2e]" />
              <FrameCorner className="absolute right-2 top-2 h-14 w-14 text-[#b98f2e] [transform:scaleX(-1)]" />
              <FrameCorner className="absolute bottom-2 left-2 h-14 w-14 text-[#b98f2e] [transform:scaleY(-1)]" />
              <FrameCorner className="absolute bottom-2 right-2 h-14 w-14 text-[#b98f2e] [transform:scale(-1)]" />
            </div>
          </div>
        </div>

        {/* ── Caption block (lower ~45%) ─────────────────────────────── */}
        <div className="relative flex flex-1 flex-col items-center justify-center text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.5em] text-[#b58f3a]">
            {t('template.wedding.together', 'Together with their families')}
          </p>

          {/* couple names — large display face with gold gradient clip-text */}
          <h1 className="mt-5 font-display text-[58px] font-normal leading-[0.95] tracking-tight">
            <span
              data-pdf-color="#9a6f08"
              className="bg-gradient-to-br from-[#c79a2f] via-[#e0bd62] to-[#a4791b] bg-clip-text text-transparent"
            >
              {brideName}
            </span>
          </h1>
          <span className="my-1 font-script text-[30px] leading-none text-[#c79a2f]">
            {t('template.common.and', '&')}
          </span>
          <h1 className="font-display text-[58px] font-normal leading-[0.95] tracking-tight">
            <span
              data-pdf-color="#9a6f08"
              className="bg-gradient-to-bl from-[#c79a2f] via-[#e0bd62] to-[#a4791b] bg-clip-text text-transparent"
            >
              {groomName}
            </span>
          </h1>

          {/* script caption */}
          <p className="mt-5 font-script text-[26px] italic leading-tight text-[#a4791b]">
            {photoCaption}
          </p>

          {/* thin ruled divider */}
          <RuleBud className="mt-6 h-4 w-56 text-[#caa64a]" />

          {/* date · venue on a clean centred line */}
          <div className="mt-5 flex flex-col items-center gap-1.5">
            <p className="font-display text-[22px] leading-none tracking-wide text-[#6b5328]">{weddingDate}</p>
            <p className="max-w-[24rem] font-serif text-[16px] leading-snug text-[#8a6f37]">{venue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
