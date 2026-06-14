import { useCallback, useMemo, useState } from 'react'
import { getDefaultValues } from '@/templates'

/**
 * Owns the live form state for a template editor.
 * State is local (useState) per the MVP brief — no backend, no global store.
 * The shape is intentionally trivial so it can later be swapped for a
 * server-synced source without touching the UI.
 *
 * `styles` mirrors `values` but holds per-slot text styling (Option A: font,
 * size, colour, bold/italic, align) for templates that declare `styleSlots`.
 * Templates without styleSlots simply carry an empty styles map.
 *
 * @param {object} template A template config object.
 */
export function useTemplateForm(template) {
  const defaults = useMemo(() => getDefaultValues(template), [template])
  const styleDefaults = useMemo(
    () => structuredClone(template?.styleSlots ?? {}),
    [template],
  )
  const [values, setValues] = useState(defaults)
  const [styles, setStyles] = useState(styleDefaults)

  const update = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const updateStyle = useCallback((slot, patch) => {
    setStyles((prev) => ({ ...prev, [slot]: { ...prev[slot], ...patch } }))
  }, [])

  const reset = useCallback(() => {
    setValues(defaults)
    setStyles(structuredClone(styleDefaults))
  }, [defaults, styleDefaults])

  return { values, update, styles, updateStyle, reset }
}
