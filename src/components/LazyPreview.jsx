'use client'

import { useEffect, useRef, useState } from 'react'
import TemplateStage from './TemplateStage.jsx'

/**
 * Renders a template's live preview ONLY once it scrolls near the viewport.
 *
 * With 20+ premium designs per category page, mounting every SVG-heavy preview
 * at once is wasteful. This defers each one behind an IntersectionObserver and
 * reserves the correct space up-front (via aspect-ratio) so there is no layout
 * shift — keeping galleries smooth with no lag. Once shown, it stays shown.
 *
 * @param {object} props.template  Template config ({ width, height, Preview }).
 * @param {object} props.values    Preview values.
 * @param {string} [props.rootMargin='400px']  How early to start mounting.
 */
export default function LazyPreview({ template, values, rootMargin = '400px' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || show) return
    if (typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [show, rootMargin])

  return (
    <div ref={ref} style={{ aspectRatio: `${template.width} / ${template.height}` }} className="w-full">
      {show ? (
        <TemplateStage template={template} values={values} />
      ) : (
        <div className="h-full w-full animate-pulse bg-gradient-to-br from-slate-100 to-slate-200" />
      )}
    </div>
  )
}
