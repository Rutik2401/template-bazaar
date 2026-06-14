'use client'

import { useI18n } from '@/i18n/I18nProvider'
import TextStyleControls from '@/components/TextStyleControls.jsx'

/**
 * Renders a single form input from a template field config.
 * Big, high-contrast, touch-friendly controls — usable by non-technical and
 * older users on a phone.
 *
 * When `styleable` is set (the template declares a style slot for this field),
 * a compact text-style toolbar is shown beneath the input (Option A pilot).
 *
 * @param {object}   props
 * @param {object}   props.field   Field config from a template.
 * @param {string}   props.value
 * @param {(name: string, value: string) => void} props.onChange
 * @param {boolean}  [props.styleable]
 * @param {object}   [props.style]            Current slot style.
 * @param {(patch: object) => void} [props.onStyleChange]
 */
export default function FormField({ field, value, onChange, styleable, style, onStyleChange }) {
  const { t } = useI18n()
  const { name, type = 'text', placeholder } = field
  const id = `field-${name}`

  const label = t(`fields.${name}.label`, field.label)
  const hint = t(`fields.${name}.hint`, field.hint || '')

  const commonProps = {
    id,
    value: value ?? '',
    placeholder,
    onChange: (e) => onChange(name, e.target.value),
    className: 'field-input',
  }

  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea {...commonProps} rows={field.rows ?? 4} className="field-input resize-y leading-relaxed" />
      ) : (
        <input
          {...commonProps}
          type={type}
          inputMode={type === 'number' ? 'numeric' : undefined}
        />
      )}

      {hint && <p className="mt-1.5 text-[13px] leading-snug text-ink-muted">{hint}</p>}

      {styleable && <TextStyleControls value={style} onChange={onStyleChange} />}
    </div>
  )
}
