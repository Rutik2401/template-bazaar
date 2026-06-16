/**
 * Housewarming category — template registry.
 *
 * All three templates share the same four fields (familyName, date, time,
 * address) but each carries a premium, distinct visual identity.
 *
 * Field shape: { name, label, type: 'text'|'date'|'time', placeholder?, defaultValue }
 */
import TraditionalGrahPravesh from './TraditionalGrahPravesh.jsx'
import VastuShantiInvite from './VastuShantiInvite.jsx'
import ModernHousewarming from './ModernHousewarming.jsx'

/** Shared field set for every housewarming template. */
const housewarmingFields = [
  { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-07-12' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '10:30' },
  { name: 'address', label: 'Address', type: 'text', placeholder: 'B-204, Green Acres, Pune', defaultValue: 'B-204, Green Acres, Pune' },
]

/** Saffron & maroon traditional Grah Pravesh — kalash, swastik, toran, Ganesha. */
const traditionalTemplate = {
  id: 'housewarming-traditional',
  category: 'housewarming',
  name: 'Traditional Grah Pravesh',
  description: 'Classic saffron-and-maroon Grah Pravesh invite with a kalash, swastiks, toran and Lord Ganesha invocation.',
  width: 640,
  height: 900,
  fields: housewarmingFields,
  Preview: TraditionalGrahPravesh,
  colors: { primary: '#8a1e1d', secondary: '#fbbf24', bg: '#5c0f12', accent: '#fcd34d' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Earthy terracotta & green Vastu Shanti — vastu-purush mandala, diya. */
const vastuTemplate = {
  id: 'housewarming-vastu',
  category: 'housewarming',
  name: 'Vastu Shanti Invite',
  description: 'Calm, earthy terracotta-and-green Vastu Shanti invitation built around a vastu-purush mandala and a lit diya.',
  width: 640,
  height: 900,
  fields: housewarmingFields,
  Preview: VastuShantiInvite,
  colors: { primary: '#8f3a23', secondary: '#4e7049', bg: '#e6d8bd', accent: '#a8472a' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Modern teal & gold — minimalist line-art house and key. */
const modernTemplate = {
  id: 'housewarming-modern',
  category: 'housewarming',
  name: 'Modern Housewarming Invitation',
  description: 'Minimalist, elegant teal-and-gold housewarming card with clean line-art house and key icons.',
  width: 640,
  height: 900,
  fields: housewarmingFields,
  Preview: ModernHousewarming,
  colors: { primary: '#0c3b3a', secondary: '#d4af54', bg: '#072523', accent: '#fcd34d' },
  fonts: { heading: 'display', body: 'sans' },
}

export const housewarmingTemplates = [traditionalTemplate, vastuTemplate, modernTemplate]
