import { useEffect } from 'react'

/**
 * Minimal auto-dismissing toast. Rendered at the bottom-center of the screen.
 * Controlled — parent owns the message and clears it.
 */
export default function Toast({ message, onDismiss, duration = 2600 }) {
  useEffect(() => {
    if (!message) return
    const t = setTimeout(onDismiss, duration)
    return () => clearTimeout(t)
  }, [message, duration, onDismiss])

  if (!message) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4 sm:bottom-28">
      <div className="animate-fade-up rounded-full bg-ink/95 px-5 py-3 text-sm font-medium text-white shadow-lift ring-1 ring-white/10 backdrop-blur">
        {message}
      </div>
    </div>
  )
}
