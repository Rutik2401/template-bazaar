'use client'

import { useI18n } from '@/i18n/I18nProvider'

function Spinner() {
  return (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Sticky editor action bar: Share + two print-quality exports.
 *
 * `onExport('pdf'|'png')` runs the server-side headless-Chrome export
 * (vector PDF / HD PNG). `busyFormat` is the format currently rendering, or null.
 */
export default function ExportBar({ onExport, onShare, busyFormat }) {
  const { t } = useI18n()
  const busy = !!busyFormat

  return (
    <div className="glass-bar sticky bottom-0 z-30 border-b-0 border-t border-slate-200/70 px-5 py-3 sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <button type="button" onClick={onShare} className="btn-ghost hidden sm:inline-flex">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M18 8a3 3 0 1 0-2.83-4M6 12a3 3 0 1 0 0 .01M18 19a3 3 0 1 0-2.83-4M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t('common.share')}
        </button>

        <div className="flex flex-1 items-center gap-2 sm:flex-none">
          {/* Image (PNG) — HD raster */}
          <button
            type="button"
            onClick={() => onExport('png')}
            disabled={busy}
            className="btn-ghost flex-1 disabled:opacity-60 sm:min-w-[150px] sm:flex-none"
          >
            {busyFormat === 'png' ? <Spinner /> : <DownloadIcon />}
            {t('editor.exportImage', 'Image')}
          </button>

          {/* PDF — vector, selectable text */}
          <button
            type="button"
            onClick={() => onExport('pdf')}
            disabled={busy}
            className="btn-gold flex-1 disabled:opacity-60 sm:min-w-[170px] sm:flex-none"
          >
            {busyFormat === 'pdf' ? <Spinner /> : <DownloadIcon />}
            {t('editor.exportPdf', 'PDF')}
          </button>
        </div>
      </div>
    </div>
  )
}
