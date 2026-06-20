'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useElementSize } from '@/hooks/useElementSize'
import { useI18n } from '@/i18n/I18nProvider'

const MIN_ZOOM = 1
const MAX_ZOOM = 4
const QUALITY = 0.86

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

/**
 * Full-screen photo cropper — drag to reposition, pinch / wheel / slider to
 * zoom, then "Apply" bakes the visible crop into a downscaled JPEG data URL.
 *
 * The crop frame is a fixed aspect ratio (matching the template's photo area),
 * so whatever the user fits inside the frame is exactly what lands in the
 * design. The output is capped to `outputWidth` px on its long edge and JPEG-
 * encoded, keeping the data URL small enough to ride through the export pipeline
 * (it travels in the print URL hash — see app/api/export/route.js).
 *
 * @param {object} props
 * @param {string} props.src           Raw uploaded image (data URL).
 * @param {number} [props.aspect=1]    Crop frame width / height.
 * @param {number} [props.outputWidth=1600] Max output width in px.
 * @param {(dataUrl: string) => void} props.onApply
 * @param {() => void} props.onCancel
 */
export default function ImageCropModal({ src, aspect = 1, outputWidth = 1600, onApply, onCancel }) {
  const { t } = useI18n()
  const [areaRef, area] = useElementSize()
  const imgRef = useRef(null)
  const pointers = useRef(new Map())
  const drag = useRef(null)
  const pinch = useRef(null)

  const [nat, setNat] = useState(null) // natural image size { w, h }
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  // Crop viewport pixel size — width from the measured box, height from aspect.
  const VW = area.width || 0
  const VH = VW / aspect

  // Lock background scroll + close on Escape while the modal is open.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onCancel?.()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onCancel])

  // Decode the source to learn its natural size (drives the cover scale + crop).
  useEffect(() => {
    const img = new Image()
    img.onload = () => setNat({ w: img.naturalWidth, h: img.naturalHeight })
    img.src = src
  }, [src])

  // Base scale so the image always *covers* the crop frame at zoom = 1.
  const baseScale = nat && VW ? Math.max(VW / nat.w, VH / nat.h) : 1

  const clampOffset = useCallback(
    (o, z) => {
      if (!nat || !VW) return { x: 0, y: 0 }
      const dispW = nat.w * baseScale * z
      const dispH = nat.h * baseScale * z
      const maxX = Math.max(0, (dispW - VW) / 2)
      const maxY = Math.max(0, (dispH - VH) / 2)
      return { x: clamp(o.x, -maxX, maxX), y: clamp(o.y, -maxY, maxY) }
    },
    [nat, VW, VH, baseScale],
  )

  // Re-clamp whenever zoom or viewport size changes (e.g. on resize / load).
  useEffect(() => {
    setOffset((o) => clampOffset(o, zoom))
  }, [zoom, clampOffset])

  // Wheel-zoom (non-passive so we can preventDefault the page scroll).
  useEffect(() => {
    const el = areaRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      setZoom((z) => clamp(z * (e.deltaY < 0 ? 1.08 : 0.92), MIN_ZOOM, MAX_ZOOM))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [areaRef])

  const dispW = nat ? nat.w * baseScale * zoom : 0
  const dispH = nat ? nat.h * baseScale * zoom : 0
  const left = (VW - dispW) / 2 + offset.x
  const top = (VH - dispH) / 2 + offset.y

  // ── Pointer gestures: 1 finger pans, 2 fingers pinch-zoom ─────────────────
  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      pinch.current = { dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, zoom }
      drag.current = null
    } else {
      drag.current = { startX: e.clientX, startY: e.clientY, ox: offset.x, oy: offset.y }
    }
  }

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size >= 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      setZoom(clamp((pinch.current.zoom * dist) / pinch.current.dist, MIN_ZOOM, MAX_ZOOM))
    } else if (drag.current) {
      const dx = e.clientX - drag.current.startX
      const dy = e.clientY - drag.current.startY
      setOffset(clampOffset({ x: drag.current.ox + dx, y: drag.current.oy + dy }, zoom))
    }
  }

  const endPointer = (e) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinch.current = null
    if (pointers.current.size === 1) {
      const [p] = [...pointers.current.values()]
      drag.current = { startX: p.x, startY: p.y, ox: offset.x, oy: offset.y }
    } else if (pointers.current.size === 0) {
      drag.current = null
    }
  }

  // ── Bake the visible crop into a downscaled JPEG ──────────────────────────
  const handleApply = () => {
    if (!nat || !VW || !imgRef.current) return
    const scale = baseScale * zoom
    const sWidth = VW / scale
    const sHeight = VH / scale
    const sx = clamp((dispW - VW) / 2 / scale - offset.x / scale, 0, Math.max(0, nat.w - sWidth))
    const sy = clamp((dispH - VH) / 2 / scale - offset.y / scale, 0, Math.max(0, nat.h - sHeight))

    const outW = Math.min(outputWidth, Math.round(sWidth))
    const outH = Math.round(outW / aspect)

    const canvas = document.createElement('canvas')
    canvas.width = outW
    canvas.height = outH
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, outW, outH)
    ctx.drawImage(imgRef.current, sx, sy, sWidth, sHeight, 0, 0, outW, outH)
    onApply(canvas.toDataURL('image/jpeg', QUALITY))
  }

  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('imageField.cropTitle', 'Adjust your photo')}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm animate-fade-in"
      onMouseDown={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2.5xl border border-white/10 bg-white shadow-lift">
        {/* Header */}
        <div className="border-b border-slate-100 px-5 py-4">
          <h2 className="text-base font-bold text-ink">{t('imageField.cropTitle', 'Adjust your photo')}</h2>
          <p className="mt-0.5 text-[13px] text-ink-muted">
            {t('imageField.cropHint', 'Drag to reposition • Pinch or use the slider to zoom')}
          </p>
        </div>

        {/* Crop stage */}
        <div className="bg-gradient-to-b from-slate-100 to-slate-200 px-5 py-5">
          <div
            ref={areaRef}
            className="relative mx-auto w-full touch-none select-none overflow-hidden rounded-xl bg-slate-800 shadow-inner"
            style={{ height: VH || undefined, aspectRatio: VW ? undefined : aspect }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
          >
            {/* the draggable image */}
            {nat && VW > 0 && (
              <img
                ref={imgRef}
                src={src}
                alt=""
                draggable={false}
                className="absolute max-w-none cursor-grab active:cursor-grabbing"
                style={{ width: dispW, height: dispH, left, top }}
              />
            )}

            {/* rule-of-thirds + frame guides */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 ring-1 ring-inset ring-white/40" />
              <div className="absolute left-1/3 top-0 h-full w-px bg-white/25" />
              <div className="absolute left-2/3 top-0 h-full w-px bg-white/25" />
              <div className="absolute left-0 top-1/3 h-px w-full bg-white/25" />
              <div className="absolute left-0 top-2/3 h-px w-full bg-white/25" />
            </div>
          </div>

          {/* Zoom control */}
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              aria-label="Zoom out"
              onClick={() => setZoom((z) => clamp(z - 0.2, MIN_ZOOM, MAX_ZOOM))}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-ink-soft transition hover:border-slate-300 hover:bg-slate-50"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14" strokeLinecap="round" />
              </svg>
            </button>
            <input
              type="range"
              min={MIN_ZOOM}
              max={MAX_ZOOM}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              aria-label={t('imageField.zoom', 'Zoom')}
              className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-slate-200 accent-gold-500"
            />
            <button
              type="button"
              aria-label="Zoom in"
              onClick={() => setZoom((z) => clamp(z + 0.2, MIN_ZOOM, MAX_ZOOM))}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-ink-soft transition hover:border-slate-300 hover:bg-slate-50"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 border-t border-slate-100 px-5 py-4">
          <button type="button" onClick={onCancel} className="btn-ghost flex-1">
            {t('imageField.cancel', 'Cancel')}
          </button>
          <button type="button" onClick={handleApply} disabled={!nat} className="btn-gold flex-1">
            {t('imageField.apply', 'Apply')}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
