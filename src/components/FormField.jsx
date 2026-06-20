'use client'

import ImageField from './ImageField.jsx'
import { useI18n } from '@/i18n/I18nProvider'

/**
 * Renders a single form input from a template field config.
 * Big, high-contrast, touch-friendly controls — usable by non-technical and
 * older users on a phone.
 *
 * @param {object}   props
 * @param {object}   props.field   Field config from a template.
 * @param {string}   props.value
 * @param {(name: string, value: string) => void} props.onChange
 */
export default function FormField({ field, value, onChange }) {
  const { t } = useI18n()
  const { name, type = 'text', placeholder } = field

  // Photo upload (with cropper) is its own self-contained control.
  if (type === 'image') {
    return <ImageField field={field} value={value} onChange={onChange} />
  }

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
    </div>
  )
}
