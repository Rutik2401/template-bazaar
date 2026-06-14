import { useCallback, useMemo, useState } from 'react'
import { getDefaultValues } from '@/templates'

/**
 * Owns the live form state for a template editor.
 * State is local (useState) per the MVP brief — no backend, no global store.
 * The shape is intentionally trivial so it can later be swapped for a
 * server-synced source without touching the UI.
 *
 * @param {object} template A template config object.
 */
export function useTemplateForm(template) {
  const defaults = useMemo(() => getDefaultValues(template), [template])
  const [values, setValues] = useState(defaults)

  const update = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const reset = useCallback(() => setValues(defaults), [defaults])

  return { values, update, reset }
}
