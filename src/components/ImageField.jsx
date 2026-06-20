'use client'

import { useRef, useState } from 'react'
import ImageCropModal from './ImageCropModal.jsx'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Photo-upload form field. Picks an image, opens the cropper to fit it to the
 * template's photo frame, and stores the cropped result (a JPEG data URL) as the
 * field value — so it flows through the live preview AND the PDF/PNG export with
 * no extra plumbing.
 *
 * Driven by an `image`-type template field:
 *   { name, label, type: 'image', aspect?, outputWidth?, hint? }
 *
 * @param {object} props
 * @param {object} props.field
 * @param {string} props.value   Current cropped image (data URL) or ''.
 * @param {(name: string, value: string) => void} props.onChange
 */
export default function ImageField({ field, value, onChange }) {
  const { t } = useI18n()
  const inputRef = useRef(null)
  const [rawSrc, setRawSrc] = useState(null) // image awaiting a crop

  const { name } = field
  const aspect = field.aspect || 1
  const outputWidth = field.outputWidth || 1600
  const label = t(`fields.${name}.label`, field.label || 'Photo')
  const hint = t(`fields.${name}.hint`, field.hint || '')

  const pickFile = () => inputRef.current?.click()

  const onFile = (e) => {
    const file = e.target.files?.[0]
    e.target.value = '' // let the same file be re-picked later
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => setRawSrc(String(reader.result))
    reader.readAsDataURL(file)
  }

  const handleApply = (dataUrl) => {
    onChange(name, dataUrl)
    setRawSrc(null)
  }

  return (
    <div>
      <span className="field-label">{label}</span>
      <input ref={inputRef} type="file" accept="image/*" onChange={onFile} className="hidden" />

      {value ? (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt=""
            className="h-16 w-16 shrink-0 rounded-lg object-cover ring-1 ring-black/5"
            style={{ aspectRatio: aspect }}
          />
          <div className="flex flex-1 flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setRawSrc(value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink-soft transition hover:border-gold-300 hover:bg-gold-50"
            >
              {t('imageField.adjust', 'Adjust')}
            </button>
            <button
              type="button"
              onClick={pickFile}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-ink-soft transition hover:border-slate-300 hover:bg-slate-50"
            >
              {t('imageField.change', 'Change')}
            </button>
            <button
              type="button"
              onClick={() => onChange(name, '')}
              className="rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm font-semibold text-rose-500 transition hover:border-rose-300 hover:bg-rose-50"
            >
              {t('imageField.remove', 'Remove')}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={pickFile}
          className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/60 px-4 py-6 text-center transition hover:border-gold-400 hover:bg-gold-50/50"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold-100 to-gold-200 text-gold-600">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 16V4M7 9l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-ink-soft">{t('imageField.upload', 'Upload Photo')}</span>
        </button>
      )}

      {hint && <p className="mt-1.5 text-[13px] leading-snug text-ink-muted">{hint}</p>}

      {rawSrc && (
        <ImageCropModal
          src={rawSrc}
          aspect={aspect}
          outputWidth={outputWidth}
          onApply={handleApply}
          onCancel={() => setRawSrc(null)}
        />
      )}
    </div>
  )
}
