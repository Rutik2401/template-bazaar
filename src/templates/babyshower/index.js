/**
 * Baby Shower category — template registry.
 *
 * All three templates share the same four fields (mother, date, venue,
 * family) but each has a distinct visual treatment: a traditional Indian
 * godh-bharai card, a cute pastel nursery card and a modern minimal invite.
 *
 * Field shape: { name, label, type: 'text'|'textarea'|'date'|'time',
 *                placeholder?, defaultValue }
 */
import TraditionalBabyShower from './TraditionalBabyShower.jsx'
import CuteBabyShower from './CuteBabyShower.jsx'
import ModernBabyShower from './ModernBabyShower.jsx'

/** Shared field set for every baby-shower template. */
const babyShowerFields = [
  { name: 'motherName', label: 'Mother Name', type: 'text', placeholder: 'Priya Sharma', defaultValue: 'Priya Sharma' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-08-15' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Hotel Grand, Pune', defaultValue: 'Hotel Grand, Pune' },
  { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
]

/** Traditional godh-bharai — marigold orange & maroon, kalash, toran, paisley. */
const traditionalBabyShowerTemplate = {
  id: 'babyshower-traditional',
  category: 'babyshower',
  name: 'Traditional Baby Shower',
  description: 'Indian godh-bharai invitation in marigold orange & maroon silk with a kalash, hanging toran and paisley corners.',
  i18n: {
    mr: { name: 'पारंपरिक डोहाळे जेवण', description: 'झेंडू नारंगी व मरून रेशमी रंगात कलश, तोरण आणि पैसली नक्षीसह पारंपरिक डोहाळे जेवण निमंत्रण.' },
    hi: { name: 'पारंपरिक गोद भराई', description: 'गेंदे जैसी नारंगी व मैरून रेशमी रंगों में कलश, तोरण और पैस्ले के साथ पारंपरिक गोद भराई निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: babyShowerFields,
  Preview: TraditionalBabyShower,
  colors: { primary: '#c2410c', secondary: '#7a1f2b', bg: '#45111a', accent: '#e2bd66' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Cute nursery — pastel sky-blue & pink, clouds, stars, rattle, baby feet. */
const cuteBabyShowerTemplate = {
  id: 'babyshower-cute',
  category: 'babyshower',
  name: 'Cute Baby Theme',
  description: 'Playful pastel baby shower card in sky-blue & pink with clouds, twinkling stars, a rattle and tiny baby feet.',
  i18n: {
    mr: { name: 'गोंडस बेबी थीम', description: 'आकाशी निळ्या व गुलाबी रंगात ढग, तारे, खुळखुळा आणि लहान पावलांसह खेळकर बेबी शॉवर कार्ड.' },
    hi: { name: 'क्यूट बेबी थीम', description: 'आसमानी नीले व गुलाबी रंग में बादल, तारे, झुनझुना और नन्हे पैरों के साथ चंचल बेबी शॉवर कार्ड.' },
  },
  width: 640,
  height: 900,
  fields: babyShowerFields,
  Preview: CuteBabyShower,
  colors: { primary: '#38bdf8', secondary: '#f472b6', bg: '#e0f2fe', accent: '#fbbf24' },
  fonts: { heading: 'display', body: 'party' },
}

/** Modern minimal — sage-green & peach, botanical arch, editorial type. */
const modernBabyShowerTemplate = {
  id: 'babyshower-modern',
  category: 'babyshower',
  name: 'Modern Celebration Invite',
  description: 'Minimal modern invite in sage-green & peach with a botanical arch motif and clean editorial typography.',
  i18n: {
    mr: { name: 'आधुनिक सेलिब्रेशन निमंत्रण', description: 'सेज ग्रीन व पीच रंगात वनस्पती कमान आणि स्वच्छ टायपोग्राफीसह आधुनिक मिनिमल निमंत्रण.' },
    hi: { name: 'मॉडर्न सेलिब्रेशन निमंत्रण', description: 'सेज ग्रीन व पीच रंग में वानस्पतिक मेहराब और साफ़ टाइपोग्राफी वाला आधुनिक मिनिमल निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: babyShowerFields,
  Preview: ModernBabyShower,
  colors: { primary: '#7e9069', secondary: '#e2a78d', bg: '#f4f1e9', accent: '#9b6b53' },
  fonts: { heading: 'display', body: 'sans' },
}

export const babyShowerTemplates = [
  traditionalBabyShowerTemplate,
  cuteBabyShowerTemplate,
  modernBabyShowerTemplate,
]
