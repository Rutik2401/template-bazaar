'use client'

import { formatDate, formatTime } from '@/utils/format'
import { useI18n } from '@/i18n/I18nProvider'

/* ── Gold filigree ornaments (pure inline SVG) ─────────────────────────── */

/** Ornate gilt corner — twin scrolls, paisley bud and beadwork. */
function FiligreeCorner({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M6 6c36 0 54 5 72 23s23 36 23 72" opacity="0.95" />
      <path d="M6 22c26 0 40 4 53 17s17 27 17 53" opacity="0.5" />
      <path d="M14 14c0 18 8 30 26 30" opacity="0.8" />
      <path
        d="M40 14c8 0 14 2 19 8s8 11 8 19c-8 0-14-2-19-8s-8-11-8-19Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="none"
      />
      <path d="M47 21c5 1 8 4 10 10" opacity="0.5" />
      <circle cx="13" cy="13" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="84" cy="84" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="70" cy="30" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="30" cy="70" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Engraved divider — lotus diamond flanked by tapering rules + buds. */
function OrnaDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 280 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M16 12h84M180 12h84" strokeLinecap="round" />
      <path d="M140 2l12 10-12 10-12-10 12-10Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M140 6l7 6-7 6-7-6 7-6Z" />
      <path d="M100 12c9 0 13-4 13-9M180 12c-9 0-13-4-13-9" opacity="0.6" />
      <circle cx="113" cy="12" r="3" fill="currentColor" stroke="none" />
      <circle cx="167" cy="12" r="3" fill="currentColor" stroke="none" />
      <circle cx="24" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="256" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Stylized cartoon portrait of the couple — bride (saree, jewellery, bun) and
 * groom (sherwani, turban) head-and-shoulders, elegant flat illustration.
 * No photographs, all hand-drawn SVG.
 */
function CouplePortrait({ className = '' }) {
  return (
    <svg viewBox="0 0 260 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* soft halo behind couple */}
      <ellipse cx="130" cy="150" rx="120" ry="140" fill="#f6e6c9" opacity="0.55" />

      {/* ── GROOM (left) ──────────────────────────────── */}
      {/* shoulders / sherwani */}
      <path d="M30 300c0-46 22-78 62-86l14 86Z" fill="#0f5132" />
      <path d="M30 300c0-46 22-78 62-86" stroke="#c9a227" strokeWidth="2.5" fill="none" />
      {/* sherwani placket + buttons */}
      <path d="M84 220l8 80" stroke="#c9a227" strokeWidth="2" />
      <circle cx="86" cy="244" r="2.4" fill="#e8c75b" />
      <circle cx="88" cy="262" r="2.4" fill="#e8c75b" />
      <circle cx="90" cy="280" r="2.4" fill="#e8c75b" />
      {/* neck */}
      <path d="M76 200h26v26l-13 8-13-8Z" fill="#e0a878" />
      {/* face */}
      <ellipse cx="89" cy="172" rx="32" ry="36" fill="#edb886" />
      {/* ears */}
      <circle cx="58" cy="174" r="6" fill="#e0a878" />
      <circle cx="120" cy="174" r="6" fill="#e0a878" />
      {/* turban */}
      <path d="M57 156c2-30 26-46 50-40 22 6 30 26 26 44-14-12-30-16-46-12-12 3-22 9-30 8Z" fill="#7b1e2b" />
      <path d="M61 150c10-6 24-8 38-4" stroke="#e8c75b" strokeWidth="2.5" fill="none" />
      <path d="M64 140c10-5 22-6 34-3" stroke="#e8c75b" strokeWidth="2" fill="none" opacity="0.8" />
      {/* turban brooch + plume */}
      <path d="M104 132c6-10 14-14 20-12-4 6-6 12-4 18Z" fill="#c9a227" />
      <circle cx="103" cy="138" r="4" fill="#e8c75b" stroke="#7b1e2b" strokeWidth="1.5" />
      {/* eyes + brows */}
      <path d="M74 168q6-5 12 0M96 168q6-5 12 0" stroke="#4a2c1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="173" r="2.6" fill="#3a2414" />
      <circle cx="102" cy="173" r="2.6" fill="#3a2414" />
      {/* nose + smile + moustache */}
      <path d="M89 178v8" stroke="#c98b5e" strokeWidth="2" strokeLinecap="round" />
      <path d="M80 192q9 7 18 0" stroke="#7a4a2a" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M80 190q9 4 18 0" stroke="#3a2414" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* ── BRIDE (right) ─────────────────────────────── */}
      {/* shoulders / saree drape */}
      <path d="M230 300c0-46-22-78-62-86l-14 86Z" fill="#7b1e2b" />
      <path d="M230 300c0-46-22-78-62-86" stroke="#e8c75b" strokeWidth="2.5" fill="none" />
      {/* saree pallu gold border */}
      <path d="M176 216l-16 84" stroke="#e8c75b" strokeWidth="3" opacity="0.9" />
      <path d="M186 222l-12 78" stroke="#c9a227" strokeWidth="1.6" opacity="0.7" />
      {/* neck */}
      <path d="M158 200h26v26l-13 8-13-8Z" fill="#eab98a" />
      {/* necklace */}
      <path d="M156 222q15 16 30 0" stroke="#e8c75b" strokeWidth="2.5" fill="none" />
      <circle cx="171" cy="232" r="3.5" fill="#c9a227" />
      <path d="M160 226q11 12 22 0" stroke="#c9a227" strokeWidth="1.6" fill="none" opacity="0.8" />
      {/* face */}
      <ellipse cx="171" cy="172" rx="31" ry="35" fill="#f3c79a" />
      {/* hair bun + center-parted hair */}
      <path d="M140 168c0-34 24-52 50-44 20 8 24 30 18 48-8-16-22-24-38-22-14 2-24 10-30 18Z" fill="#2a1a10" />
      <path d="M171 128c0 16 0 30-2 44" stroke="#1a0f08" strokeWidth="2" opacity="0.6" />
      <circle cx="206" cy="176" r="14" fill="#2a1a10" />
      {/* gajra on bun */}
      <circle cx="200" cy="168" r="3" fill="#fff4e0" />
      <circle cx="208" cy="166" r="3" fill="#fff4e0" />
      <circle cx="214" cy="173" r="3" fill="#fff4e0" />
      <circle cx="210" cy="184" r="3" fill="#fff4e0" />
      {/* maang tikka */}
      <path d="M171 128v-12" stroke="#e8c75b" strokeWidth="2" />
      <circle cx="171" cy="114" r="4" fill="#e8c75b" stroke="#7b1e2b" strokeWidth="1.2" />
      {/* bindi */}
      <circle cx="171" cy="150" r="3" fill="#7b1e2b" />
      {/* eyes + brows */}
      <path d="M156 166q6-5 12 0M174 166q6-5 12 0" stroke="#4a2c1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="162" cy="171" r="2.6" fill="#3a2414" />
      <circle cx="180" cy="171" r="2.6" fill="#3a2414" />
      {/* nose + smile + blush */}
      <path d="M171 176v7" stroke="#d99a6a" strokeWidth="2" strokeLinecap="round" />
      <path d="M163 190q8 7 16 0" stroke="#a23b46" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <circle cx="152" cy="184" r="5" fill="#e88a8a" opacity="0.4" />
      <circle cx="190" cy="184" r="5" fill="#e88a8a" opacity="0.4" />
      {/* nath (nose ring) */}
      <path d="M165 180q-8 4-9 12" stroke="#e8c75b" strokeWidth="1.6" fill="none" />
      <circle cx="155" cy="194" r="2.4" fill="#e8c75b" />
      {/* earrings */}
      <circle cx="140" cy="186" r="4" fill="#e8c75b" />
      <circle cx="202" cy="186" r="4" fill="#e8c75b" />
    </svg>
  )
}

/**
 * Bride & Groom Portrait — a luxury framed museum-portrait card. An ornate
 * gold filigree frame wraps a regal maroon mat; the upper half is a tall
 * arched window holding a hand-illustrated couple, beneath which an engraved
 * banner ribbon bears both names over date · time · venue.
 * Natural design size: 640 × 900 (portrait card).
 */
export default function BrideGroomPortrait({ values }) {
  let t
  try {
    t = useI18n().t
  } catch {
    t = undefined
  }
  const tr = (key, fallback) => {
    if (!t) return fallback
    const v = t(key, fallback)
    return v && v !== key ? v : fallback
  }

  const brideName = values.brideName?.trim() || 'Sanika'
  const groomName = values.groomName?.trim() || 'Aarav'
  const weddingDate = formatDate(values.weddingDate, 'December 15, 2025')
  const time = formatTime(values.time, '')
  const venue = values.venue?.trim() || 'The Grand Palace, Jaipur'
  const photo = (values.photo || '').trim()

  return (
    <div
      data-export-root
      className="relative h-[900px] w-[640px] overflow-hidden bg-[#3a0d16] font-serif text-[#f6e6c9]"
    >
      {/* Deep maroon → emerald base with a warm gold core glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a0f1c] via-[#350b15] to-[#06281d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_34%,_rgba(212,164,55,0.20),_transparent_62%)]" />

      {/* Ornate gold frame — emerald mat, double gold keyline border */}
      <div className="absolute inset-[16px] rounded-[8px] border-[7px] border-[#0f5132]" />
      <div className="absolute inset-[16px] rounded-[8px] ring-1 ring-inset ring-[#e8c75b]/60" />
      <div className="absolute inset-[28px] rounded-[5px] border-[2.5px] border-[#d4a437]" />
      <div className="absolute inset-[36px] rounded-[4px] border border-[#e8c75b]/45" />

      {/* Filigree frame corners */}
      <FiligreeCorner className="absolute left-10 top-10 h-20 w-20 text-[#e8c75b]" />
      <FiligreeCorner className="absolute right-10 top-10 h-20 w-20 text-[#e8c75b] [transform:scaleX(-1)]" />
      <FiligreeCorner className="absolute bottom-10 left-10 h-20 w-20 text-[#e8c75b] [transform:scaleY(-1)]" />
      <FiligreeCorner className="absolute bottom-10 right-10 h-20 w-20 text-[#e8c75b] [transform:scale(-1)]" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center px-[58px] pt-[64px] pb-[60px] text-center">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.5em] text-[#e8c75b]">
          {tr('template.wedding.blessing', 'Together Forever')}
        </p>

        {/* ── Arched portrait window (upper half) ── */}
        <div className="relative mt-5 h-[372px] w-[348px]">
          {/* arched inner mat — also clips an uploaded photo to the arch shape */}
          <div className="absolute inset-0 overflow-hidden rounded-t-[174px] rounded-b-[14px] bg-gradient-to-b from-[#fdf7ec] to-[#f4e3c2] shadow-[inset_0_0_0_2px_rgba(122,30,43,0.18)]">
            {photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
            )}
          </div>
          {/* portrait illustration — shown only when no photo is uploaded */}
          {!photo && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <CouplePortrait className="h-[326px] w-[300px]" />
            </div>
          )}
          {/* gold arch keyline frame */}
          <div className="pointer-events-none absolute inset-0 rounded-t-[174px] rounded-b-[14px] border-[3px] border-[#d4a437]" />
          <div className="pointer-events-none absolute inset-[7px] rounded-t-[168px] rounded-b-[10px] border border-[#e8c75b]/55" />
          {/* keystone medallion at arch apex */}
          <div className="absolute -top-[14px] left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-[2.5px] border-[#d4a437] bg-[#7b1e2b]">
            <span className="text-[14px] leading-none text-[#e8c75b]" data-pdf-color="#e8c75b">❖</span>
          </div>
        </div>

        {/* ── Engraved banner ribbon with names ── */}
        <div className="relative mt-9 flex items-center justify-center">
          <div className="relative rounded-[4px] border-y-[2px] border-[#d4a437] bg-[#0f5132]/40 px-12 py-3 shadow-[0_0_0_1px_rgba(232,199,91,0.4)_inset]">
            {/* ribbon notched ends */}
            <span className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[14px] border-r-[12px] border-y-transparent border-r-[#d4a437]" />
            <span className="absolute -right-3 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[14px] border-l-[12px] border-y-transparent border-l-[#d4a437]" />
            <h1 className="font-script text-[46px] font-medium leading-[1.05]">
              <span
                data-pdf-color="#e8c75b"
                className="bg-gradient-to-b from-[#fdf0c2] via-[#e8c75b] to-[#b98a1e] bg-clip-text text-transparent"
              >
                {brideName}
              </span>
              <span className="mx-3 align-middle font-display text-[28px] not-italic text-[#e8c75b]">
                {tr('template.common.and', '&')}
              </span>
              <span
                data-pdf-color="#e8c75b"
                className="bg-gradient-to-b from-[#fdf0c2] via-[#e8c75b] to-[#b98a1e] bg-clip-text text-transparent"
              >
                {groomName}
              </span>
            </h1>
          </div>
        </div>

        <OrnaDivider className="mt-6 h-5 w-64 text-[#e8c75b]" />

        {/* ── Date · time · venue stacked & centered ── */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="font-display text-[24px] leading-none tracking-wide text-[#fdf0c2]">
            {weddingDate}
            {time && <span className="text-[#e8c75b]"> · {time}</span>}
          </p>
          <div className="flex max-w-[20rem] flex-col items-center gap-1">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.42em] text-[#e8c75b]">
              {tr('template.wedding.venue', 'Venue')}
            </span>
            <span className="text-[15px] leading-snug text-[#f6e6c9]">{venue}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
