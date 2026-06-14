import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Observe an element's content-box size with ResizeObserver.
 * Used by the preview stage to scale a fixed-size template design down to fit
 * whatever space is available (responsive, mobile-first).
 *
 * @returns {[React.RefObject<HTMLElement>, { width: number, height: number }]}
 */
export function useElementSize() {
  const ref = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => setSize({ width: el.clientWidth, height: el.clientHeight })
    update()

    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return [ref, size]
}
