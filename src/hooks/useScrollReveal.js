'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver hook for scroll-triggered animations.
 * Returns a ref and visible state. Respects prefers-reduced-motion.
 *
 * @param {Object} opts
 * @param {number} opts.threshold - Viewport visibility threshold (0-1)
 * @param {boolean} opts.once - Trigger only once (default true)
 */
export function useScrollReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion — show immediately, skip animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, visible }
}
