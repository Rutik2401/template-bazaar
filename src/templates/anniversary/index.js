/**
 * Anniversary category — template registry.
 *
 * All three templates share the same field set (couple name, years completed,
 * date, venue). Each component renders a premium, distinct 640 × 900 card.
 *
 * Field shape: { name, label, type: 'text'|'date', placeholder?, defaultValue }
 */
import RomanticAnniversary from './RomanticAnniversary.jsx'
import SilverJubilee from './SilverJubilee.jsx'
import GoldenAnniversary from './GoldenAnniversary.jsx'

/** Shared fields used by every anniversary template. */
const anniversaryFields = [
  { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
  { name: 'years', label: 'Years Completed', type: 'text', placeholder: '25', defaultValue: '25' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-12-10' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
]

/** Romantic — blush rose & cream, intertwined hearts, soft florals, script. */
const romanticAnniversaryTemplate = {
  id: 'anniversary-romantic',
  category: 'anniversary',
  name: 'Romantic Anniversary Card',
  description: 'Blush rose and cream card with intertwined hearts, soft florals and a flowing script.',
  width: 640,
  height: 900,
  fields: anniversaryFields,
  Preview: RomanticAnniversary,
  colors: { primary: '#e11d48', secondary: '#f472b6', bg: '#fdf2f4', accent: '#fb7185' },
  fonts: { heading: 'script', body: 'serif' },
}

/** Silver — platinum/silver on charcoal, a large metallic numeral, sparkle. */
const silverJubileeTemplate = {
  id: 'anniversary-silver',
  category: 'anniversary',
  name: 'Silver Jubilee Anniversary',
  description: 'Elegant silver and platinum on charcoal with a grand metallic numeral and subtle sparkle.',
  width: 640,
  height: 900,
  fields: anniversaryFields,
  Preview: SilverJubilee,
  colors: { primary: '#e5e7eb', secondary: '#94a3b8', bg: '#14181f', accent: '#cbd5e1' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Golden — luxe gold & deep maroon, ornate frame, a grand numeral. */
const goldenAnniversaryTemplate = {
  id: 'anniversary-golden',
  category: 'anniversary',
  name: 'Golden Anniversary Celebration',
  description: 'Luxe gold on deep maroon with an ornate gold frame and a grand celebratory numeral.',
  width: 640,
  height: 900,
  fields: anniversaryFields,
  Preview: GoldenAnniversary,
  colors: { primary: '#fbbf24', secondary: '#7a0e1f', bg: '#3d0a14', accent: '#fcd34d' },
  fonts: { heading: 'display', body: 'serif' },
}

export const anniversaryTemplates = [
  romanticAnniversaryTemplate,
  silverJubileeTemplate,
  goldenAnniversaryTemplate,
]
