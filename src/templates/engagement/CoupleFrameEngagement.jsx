'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Baroque frame ornaments ─────────────────────────────────────────────── */

/** Ornate carved corner for a museum-style gilt frame — acanthus scrolls + shell. */
function FrameCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {/* outer acanthus scroll */}
      <path d="M4 4c44 0 70 4 92 22s22 48 22 92" opacity="0.9" />
      <path d="M4 22c30 0 50 6 66 22s22 36 22 66" opacity="0.55" />
      {/* carved shell crest */}
      <path d="M10 10c0 24 12 38 36 38C46 24 34 10 10 10Z" fill="currentColor" fillOpacity="0.22" stroke="none" />
      <path d="M16 16c4 16 14 26 30 30" opacity="0.6" />
      <path d="M14 28c6 10 14 18 24 22" opacity="0.4" />
      {/* scrolled volute */}
      <path d="M70 14c8 0 14 6 14 14s-6 12-12 12-9-5-9-10 4-8 8-8 6 3 6 7" opacity="0.8" />
      {/* beadwork */}
      <circle cx="10" cy="10" r="3.4" fill="currentColor" stroke="none" />
      <circle cx="100" cy="100" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="52" cy="14" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="52" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Crowning cartouche for the top centre of the frame. */
function Cartouche({ className = '' }) {
  return (
    <svg viewBox="0 0 160 70" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M80 6c26 0 46 6 60 18-14 12-34 18-60 18S48 36 20 24C34 12 54 6 80 6Z" fill="currentColor" fillOpacity="0.16" />
      <path d="M30 24c14-10 32-15 50-15s36 5 50 15" opacity="0.7" />
      <path d="M14 36c10 6 20 9 30 9M146 36c-10 6-20 9-30 9" opacity="0.55" strokeLinecap="round" />
      <path d="M80 2v10M76 7l4-5 4 5" />
      <circle cx="80" cy="24" r="4" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Engraved nameplate plaque shape (drawn behind the couple's names). */
function Nameplate({ className = '' }) {
  return (
    <svg viewBox="0 0 320 92" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" preserveAspectRatio="none">
      <path
        d="M18 46c0-14 8-22 24-26 30-7 86-10 118-10s88 3 118 10c16 4 24 12 24 26s-8 22-24 26c-30 7-86 10-118 10s-88-3-118-10c-16-4-24-12-24-26Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M28 46c0-10 7-17 20-20 28-6 80-9 112-9s84 3 112 9c13 3 20 10 20 20s-7 17-20 20c-28 6-80 9-112 9s-84-3-112-9c-13-3-20-10-20-20Z"
        opacity="0.55"
      />
      <circle cx="14" cy="46" r="3" fill="currentColor" stroke="none" />
      <circle cx="306" cy="46" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ── Full-length couple illustration (no photo) ─────────────────────────────
   A stylized standing couple in elegant Indian attire — groom in a sherwani,
   bride in a lehenga — rendered with flat gilt-and-jewel tones against a soft
   studio backdrop. Purely decorative SVG, gallery-portrait proportions.        */
function CoupleIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 300 560" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* studio floor shadow */}
      <ellipse cx="150" cy="540" rx="120" ry="16" fill="#000000" opacity="0.18" />

      {/* ── GROOM (left) — ivory & gold sherwani ── */}
      <g>
        {/* churidar / legs */}
        <path d="M96 392c-3 40-5 86-6 126 0 6 13 6 14 0 3-34 5-66 7-96 2 30 4 62 7 96 1 6 14 6 14 0-1-40-3-86-6-126Z" fill="#efe6d2" />
        <path d="M96 392c-3 40-5 86-6 126 0 6 13 6 14 0 3-34 5-66 7-96 2 30 4 62 7 96 1 6 14 6 14 0-1-40-3-86-6-126Z" fill="#000" opacity="0.05" />
        {/* shoes */}
        <path d="M82 518c-3 0-6 4-6 8s14 5 22 3c4-1 4-9 0-11Z" fill="#3a2a18" />
        <path d="M134 518c3 0 6 4 6 8s-14 5-22 3c-4-1-4-9 0-11Z" fill="#3a2a18" />
        {/* sherwani coat */}
        <path d="M82 250c0-26 18-44 36-44s36 18 36 44c0 56-2 110-6 152-20 8-40 8-60 0-4-42-6-96-6-152Z" fill="#f5ecd6" />
        <path d="M82 250c0-26 18-44 36-44s36 18 36 44c0 56-2 110-6 152-20 8-40 8-60 0-4-42-6-96-6-152Z" stroke="#cBa14a" strokeWidth="1.5" />
        {/* coat centre placket + buttons */}
        <path d="M118 212v178" stroke="#cBa14a" strokeWidth="1.4" />
        <circle cx="118" cy="252" r="2.4" fill="#b8860b" />
        <circle cx="118" cy="278" r="2.4" fill="#b8860b" />
        <circle cx="118" cy="304" r="2.4" fill="#b8860b" />
        <circle cx="118" cy="330" r="2.4" fill="#b8860b" />
        {/* dupatta/stole over shoulder */}
        <path d="M132 220c18 8 28 30 26 64-6-2-12-3-16-6-4-30-8-46-10-58Z" fill="#d9b24a" opacity="0.85" />
        <path d="M132 220c18 8 28 30 26 64-6-2-12-3-16-6-4-30-8-46-10-58Z" stroke="#a9810f" strokeWidth="0.8" />
        {/* neck + face */}
        <path d="M110 200h16v18h-16Z" fill="#e6b98f" />
        <path d="M100 168c0-16 8-28 18-28s18 12 18 28-8 30-18 30-18-14-18-30Z" fill="#f0c79c" />
        {/* hair + turban (safa) */}
        <path d="M99 158c-2-22 12-34 19-34s21 12 19 34c-6-8-12-12-19-12s-13 4-19 12Z" fill="#2c2117" />
        <path d="M96 150c2-18 18-30 22-30s20 12 22 30c-4-4-10-12-22-12s-18 8-22 12Z" fill="#c8423b" />
        <path d="M96 150c2-18 18-30 22-30s20 12 22 30" stroke="#9c2f29" strokeWidth="1" fill="none" />
        <path d="M128 128c8-2 16 2 16 8s-8 8-14 6Z" fill="#d9b24a" />
        {/* kalgi feather brooch */}
        <path d="M120 118c2-10 0-18-2-22 6 4 10 12 8 22Z" fill="#d9b24a" />
        <circle cx="120" cy="120" r="3" fill="#b8860b" />
      </g>

      {/* ── BRIDE (right) — rose & gold lehenga ── */}
      <g>
        {/* flared lehenga skirt */}
        <path d="M150 318c8-8 26-8 34 0 16 16 30 110 36 196-44 16-98 16-142 0 6-86 20-180 36-196 8-8 28-8 36 0Z" fill="#d36b86" />
        <path d="M150 318c8-8 26-8 34 0 16 16 30 110 36 196-44 16-98 16-142 0 6-86 20-180 36-196 8-8 28-8 36 0Z" stroke="#a93f5c" strokeWidth="1.4" />
        {/* skirt gold hem + zari bands */}
        <path d="M86 482c44 14 98 14 142 0" stroke="#e9c75a" strokeWidth="6" fill="none" opacity="0.9" />
        <path d="M96 432c38 11 86 11 124 0" stroke="#e9c75a" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M104 384c30 9 68 9 98 0" stroke="#e9c75a" strokeWidth="2" fill="none" opacity="0.6" />
        {/* skirt motifs */}
        <circle cx="130" cy="450" r="3" fill="#f3dd8e" />
        <circle cx="186" cy="450" r="3" fill="#f3dd8e" />
        <circle cx="158" cy="470" r="3.4" fill="#f3dd8e" />
        {/* choli / blouse */}
        <path d="M150 254c0-18 14-30 30-30s30 12 30 30c0 24-2 46-6 66-16 8-32 8-48 0-4-20-6-42-6-66Z" fill="#b83f5c" />
        <path d="M150 254c0-18 14-30 30-30s30 12 30 30c0 24-2 46-6 66-16 8-32 8-48 0-4-20-6-42-6-66Z" stroke="#e9c75a" strokeWidth="1.4" />
        {/* dupatta draped diagonally */}
        <path d="M156 240c-14 24-18 64-12 104 8 4 16 6 24 6-2-40 0-86 8-118-8-2-14-2-20 8Z" fill="#e7a8b9" opacity="0.7" />
        <path d="M156 240c-14 24-18 64-12 104" stroke="#d36b86" strokeWidth="0.8" fill="none" opacity="0.8" />
        {/* neck + face */}
        <path d="M172 206h16v20h-16Z" fill="#e8bd92" />
        <path d="M162 176c0-16 8-28 18-28s18 12 18 28-8 30-18 30-18-14-18-30Z" fill="#f2cb9f" />
        {/* hair with centre parting + bun */}
        <path d="M159 178c-2-24 12-38 21-38s23 14 21 38c-2-12-8-22-21-22s-19 10-21 22Z" fill="#241a12" />
        <path d="M180 140c-14 0-21 12-21 30 0 6 1 12 3 16-4-2-8-8-8-18 0-22 12-36 26-36Z" fill="#1d150e" />
        <ellipse cx="200" cy="196" rx="9" ry="11" fill="#1d150e" />
        {/* maang tikka + jewellery */}
        <path d="M180 140v8" stroke="#e9c75a" strokeWidth="1.4" />
        <circle cx="180" cy="150" r="3" fill="#e9c75a" />
        {/* necklace */}
        <path d="M170 210c4 8 16 8 20 0" stroke="#e9c75a" strokeWidth="2" fill="none" />
        <circle cx="180" cy="218" r="2.6" fill="#f3dd8e" />
        {/* bindi */}
        <circle cx="180" cy="166" r="1.8" fill="#a93f5c" />
      </g>

      {/* joined inner hands suggested by overlapping sleeves */}
      <path d="M138 300c8 6 18 6 26 0" stroke="#cBa14a" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />

      {/* falling petals for studio romance */}
      <path d="M58 120c4-3 9-2 10 2-4 3-9 2-10-2Z" fill="#e7a8b9" opacity="0.7" />
      <path d="M242 96c4 3 5 8 1 10-3-4-2-8-1-10Z" fill="#e7a8b9" opacity="0.6" />
      <path d="M250 220c-4 2-9 1-9-3 4-3 8-1 9 3Z" fill="#e9c75a" opacity="0.6" />
      <path d="M50 250c4 2 5 7 1 9-3-3-2-7-1-9Z" fill="#e9c75a" opacity="0.5" />
    </svg>
  )
}

/**
 * Luxury Couple Frame — a tall, ornate baroque gilt picture-frame containing a
 * full-length stylized illustration of the engaged couple in Indian attire,
 * set against a soft studio backdrop. A carved nameplate bears the names; an
 * engagement-ceremony line with date · venue sits below the frame.
 * Natural design size: 640 × 900.
 */
export default function CoupleFrameEngagement({ values }) {
  const { t } = useI18n()
  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const date = formatDate(values.date, 'November 20, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'Hotel Grand, Pune'

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#1c1208] font-serif text-[#f3e7c9]"
    >
      {/* warm gallery wall */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1b0d] via-[#1f1408] to-[#160d05]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(214,168,76,0.18),transparent_62%)]" />

      {/* gallery spotlight pooling on the floor */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_50%_100%,rgba(233,199,90,0.16),transparent_70%)]" />

      <div className="relative flex h-full flex-col items-center px-12 pt-12 pb-9">
        {/* ── THE ORNATE GILT FRAME ── */}
        <div className="relative w-full flex-1">
          {/* outer gilt moulding */}
          <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-[#f4dd8e] via-[#c9982f] to-[#8a6512] shadow-[0_18px_44px_rgba(0,0,0,0.55)]" />
          {/* carved bevel rings */}
          <div className="absolute inset-[10px] rounded-[10px] border-[3px] border-[#7c5a14]/70" />
          <div className="absolute inset-[15px] rounded-[9px] bg-gradient-to-tl from-[#f4dd8e] via-[#d6a84c] to-[#a37a1d]" />
          <div className="absolute inset-[24px] rounded-[7px] border-[2px] border-[#7c5a14]/60" />

          {/* inner picture window — soft studio backdrop */}
          <div className="absolute inset-[30px] overflow-hidden rounded-[6px] bg-gradient-to-b from-[#fbf3df] via-[#f3e3c4] to-[#e6cfa3]">
            {/* backdrop radial sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_22%,rgba(255,255,255,0.7),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_115%,rgba(176,138,66,0.35),transparent_60%)]" />

            {/* full-length couple illustration */}
            <CoupleIllustration className="absolute inset-x-0 top-7 mx-auto h-[78%] w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)]" />

            {/* engraved nameplate inside the frame's base */}
            <div className="absolute inset-x-6 bottom-5 flex items-center justify-center">
              <div className="relative flex w-full max-w-[20rem] items-center justify-center py-4">
                <Nameplate className="absolute inset-0 h-full w-full text-[#a9810f]" />
                <div className="relative flex items-baseline gap-3 px-4">
                  <span
                    data-pdf-color="#9a6f08"
                    className="bg-gradient-to-br from-[#7c5a14] via-[#b8860b] to-[#8a6512] bg-clip-text font-script text-[34px] leading-none text-transparent"
                  >
                    {groomName}
                  </span>
                  <span className="font-display text-base italic text-[#8a6512]">&amp;</span>
                  <span
                    data-pdf-color="#9a6f08"
                    className="bg-gradient-to-bl from-[#7c5a14] via-[#b8860b] to-[#8a6512] bg-clip-text font-script text-[34px] leading-none text-transparent"
                  >
                    {brideName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* crowning cartouche atop the frame */}
          <Cartouche className="absolute left-1/2 top-[6px] h-12 w-32 -translate-x-1/2 text-[#f4dd8e] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />

          {/* carved frame corners */}
          <FrameCorner className="absolute left-1.5 top-1.5 h-16 w-16 text-[#f4dd8e]/90" />
          <FrameCorner className="absolute right-1.5 top-1.5 h-16 w-16 text-[#f4dd8e]/90 [transform:scaleX(-1)]" />
          <FrameCorner className="absolute bottom-1.5 left-1.5 h-16 w-16 text-[#f4dd8e]/90 [transform:scaleY(-1)]" />
          <FrameCorner className="absolute bottom-1.5 right-1.5 h-16 w-16 text-[#f4dd8e]/90 [transform:scale(-1)]" />
        </div>

        {/* ── BELOW-FRAME PLAQUE: engagement ceremony · date · venue ── */}
        <footer className="mt-6 flex flex-col items-center gap-2.5 text-center">
          <div className="flex items-center gap-3 text-[#d6a84c]">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d6a84c]" />
            <span className="text-sm">◆</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d6a84c]" />
          </div>

          <p className="font-display text-[15px] uppercase tracking-[0.42em] text-[#d6a84c]">
            {t('template.common.engagementCeremony', 'Engagement Ceremony')}
          </p>

          <p className="font-display text-[22px] leading-none tracking-wide text-[#f3e7c9]">
            {date}
            {time && <span className="text-[#d6a84c]"> · {time}</span>}
          </p>

          <p className="max-w-[24rem] text-[15px] leading-snug text-[#c9b98e]">
            {venue}
          </p>
        </footer>
      </div>
    </div>
  )
}
