'use client'

import { useI18n } from '@/i18n/I18nProvider'

function Spinner() {
  return (
    <svg className="h-[18px] w-[18px] animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M18 8a3 3 0 1 0-2.83-4M6 12a3 3 0 1 0 0 .01M18 19a3 3 0 1 0-2.83-4M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8.5" cy="8.5" r="1.6" />
      <path d="M21 15l-4.5-4.5L5 21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Shared modern pill base + a translucent "glass" variant for secondary actions.
const PILL =
  'inline-flex h-11 select-none items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold ' +
  'transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'disabled:cursor-not-allowed disabled:opacity-60'
const GLASS =
  'border border-slate-200/80 bg-white/70 text-ink-soft backdrop-blur hover:border-slate-300 hover:bg-white focus-visible:ring-slate-300'

/**
 * Sticky editor action bar — modern pill buttons: Share + two print-quality
 * exports. `onExport('pdf'|'png')` runs the server-side headless-Chrome export
 * (vector PDF / HD PNG). `busyFormat` is the format currently rendering, or null.
 */
export default function ExportBar({ onExport, onShare, busyFormat }) {
  const { t } = useI18n()
  const busy = !!busyFormat

  return (
    <div className="glass-bar sticky bottom-0 z-30 border-b-0 border-t border-slate-200/70 px-5 py-3.5 sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        {/* Share */}
        <button type="button" onClick={onShare} className={`${PILL} ${GLASS} px-4`}>
          <ShareIcon />
          <span className="hidden sm:inline">{t('common.share')}</span>
        </button>

        {/* Exports */}
        <div className="flex flex-1 items-center justify-end gap-2.5 sm:flex-none">
          {/* Image (HD PNG) */}
          <button
            type="button"
            onClick={() => onExport('png')}
            disabled={busy}
            className={`${PILL} ${GLASS} flex-1 sm:min-w-[140px] sm:flex-none`}
          >
            {busyFormat === 'png' ? <Spinner /> : <ImageIcon />}
            {t('editor.exportImage', 'Image')}
          </button>

          {/* PDF (vector, selectable text) — primary action */}
          <button
            type="button"
            onClick={() => onExport('pdf')}
            disabled={busy}
            className={`${PILL} flex-1 bg-gradient-to-b from-gold-400 to-gold-500 font-bold text-white shadow-[0_10px_24px_-8px_rgba(184,134,11,0.65)] hover:-translate-y-0.5 hover:from-gold-400 hover:to-gold-600 hover:shadow-[0_14px_30px_-8px_rgba(184,134,11,0.72)] focus-visible:ring-gold-300 sm:min-w-[150px] sm:flex-none`}
          >
            {busyFormat === 'pdf' ? <Spinner /> : <DownloadIcon />}
            {t('editor.exportPdf', 'PDF')}
          </button>
        </div>
      </div>
    </div>
  )
}
