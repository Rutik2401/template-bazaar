'use client'

import { useElementSize } from '@/hooks/useElementSize'

/**
 * Renders a fixed-size template design (e.g. 640×900) scaled to fit the
 * available width — the single mechanism behind both the live preview and the
 * thumbnail cards. Mobile-first: it simply shrinks to whatever space it gets.
 *
 * The inner node carries `captureRef` (when provided) so the editor can hand
 * the *natural-size* element to the PDF exporter; ancestor scale transforms are
 * neutralised at export time (see utils/exportPdf).
 *
 * @param {object}   props
 * @param {object}   props.template   Template config ({ width, height, Preview }).
 * @param {object}   props.values     Form values passed to the preview.
 * @param {React.Ref}[props.captureRef]
 * @param {number}   [props.maxScale=1]
 * @param {string}   [props.className]
 */
export default function TemplateStage({ template, values, captureRef, maxScale = 1, className = '' }) {
  const { width, height, Preview } = template
  const [containerRef, size] = useElementSize()

  const scale = size.width > 0 ? Math.min(size.width / width, maxScale) : 0

  return (
    <div ref={containerRef} className={className} style={{ width: '100%' }}>
      {/* Reserve the scaled height so surrounding layout flows correctly. */}
      <div style={{ height: height * scale, width: width * scale, marginInline: 'auto' }}>
        <div
          ref={captureRef}
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <Preview values={values} />
        </div>
      </div>
    </div>
  )
}
