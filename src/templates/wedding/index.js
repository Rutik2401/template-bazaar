/**
 * Wedding category — template registry.
 *
 * The first entry is the existing "Royal Indian Wedding" (imported from its
 * own config), followed by four new premium designs. Each new template pairs a
 * Preview component with a config of the same shape, all using the shared
 * `weddingFields` so the editor form stays identical across designs.
 */
import { weddingRoyalTemplate } from './config.js'
import { weddingFields } from '@/templates/_shared/fields.js'

import MarathiWedding from './MarathiWedding.jsx'
import FloralWedding from './FloralWedding.jsx'
import MinimalWedding from './MinimalWedding.jsx'
import LuxuryWedding from './LuxuryWedding.jsx'
import BohoPampasWedding from './BohoPampasWedding.jsx'

/**
 * Boho Pampas wedding — warm beige card with an off-white arch, cream/white
 * florals and golden dried palm leaves, calligraphy names. Its own field set
 * seeds the sample couple (Laksh & Anushka); field names match the shared
 * wedding fields so their localised labels are reused.
 */
const bohoFields = [
  { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Anushka', defaultValue: 'Anushka' },
  { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Laksh', defaultValue: 'Laksh' },
  { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2024-02-25' },
  { name: 'time', label: 'Time', type: 'time', defaultValue: '09:00' },
  {
    name: 'venue',
    label: 'Venue',
    type: 'text',
    placeholder: '123 Anywhere St., Any City, ST 12345',
    defaultValue: '123 Anywhere St., Any City, ST 12345',
  },
]

const weddingBohoTemplate = {
  id: 'wedding-boho',
  category: 'wedding',
  name: 'Boho Pampas Wedding',
  description: 'Warm beige arch invite with cream florals, golden dried palm leaves and calligraphy names.',
  i18n: {
    mr: { name: 'बोहो पँपास लग्न', description: 'उबदार बेज कमान, क्रीम फुले, सोनेरी वाळलेली पाने आणि सुलेखन नावे असलेली लग्नपत्रिका.' },
    hi: { name: 'बोहो पैम्पास विवाह', description: 'गर्म बेज आर्च, क्रीम फूल, सुनहरी सूखी पत्तियों और सुलेख नामों वाला विवाह निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: bohoFields,
  Preview: BohoPampasWedding,
  colors: { primary: '#8B5A2B', secondary: '#b88a3a', bg: '#dcc9a4', accent: '#f5efe1' },
  fonts: { heading: 'script', body: 'serif' },
}

/** Traditional Marathi wedding — paithani green, gold & purple. */
const weddingMarathiTemplate = {
  id: 'wedding-marathi',
  category: 'wedding',
  name: 'Traditional Marathi Wedding',
  description: 'Paithani-inspired green, gold and purple invite with kalash and peacock motifs.',
  i18n: {
    mr: { name: 'पारंपरिक मराठी लग्न', description: 'पैठणी प्रेरित हिरवा, सोनेरी आणि जांभळा रंग, कलश व मोरपीस नक्षीसह लग्नपत्रिका.' },
    hi: { name: 'पारंपरिक मराठी विवाह', description: 'पैठणी से प्रेरित हरा, सुनहरा और बैंगनी रंग, कलश व मोरपंख रूपांकनों के साथ निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: weddingFields,
  Preview: MarathiWedding,
  colors: { primary: '#0f3d2e', secondary: '#7e3aa8', bg: '#0a2c20', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Floral wedding — soft blush & sage watercolour botanicals. */
const weddingFloralTemplate = {
  id: 'wedding-floral',
  category: 'wedding',
  name: 'Floral Wedding',
  description: 'Soft blush and sage botanical invite with watercolour florals.',
  i18n: {
    mr: { name: 'फुलांची लग्नपत्रिका', description: 'मऊ गुलाबी आणि सेज रंगातील जलरंग फुलांची नाजूक लग्नपत्रिका.' },
    hi: { name: 'पुष्प विवाह', description: 'कोमल गुलाबी और सेज वनस्पति रूपांकनों वाला जलरंग पुष्प निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: weddingFields,
  Preview: FloralWedding,
  colors: { primary: '#9f1239', secondary: '#065f46', bg: '#fbf8f4', accent: '#f6c9cf' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Minimal modern wedding — airy white space, terracotta accent. */
const weddingMinimalTemplate = {
  id: 'wedding-minimal',
  category: 'wedding',
  name: 'Minimal Modern Wedding',
  description: 'Airy contemporary invite with thin rules and a single terracotta accent.',
  i18n: {
    mr: { name: 'मिनिमल आधुनिक लग्न', description: 'भरपूर मोकळी जागा आणि टेराकोटा रंगछटा असलेली आधुनिक लग्नपत्रिका.' },
    hi: { name: 'मिनिमल आधुनिक विवाह', description: 'खुली सादगी और टेराकोटा रंग वाला समकालीन विवाह निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: weddingFields,
  Preview: MinimalWedding,
  colors: { primary: '#0f172a', secondary: '#c2552f', bg: '#fcfbf9', accent: '#c2552f' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Luxury gold wedding — black & gold art-deco opulence. */
const weddingLuxuryTemplate = {
  id: 'wedding-luxury',
  category: 'wedding',
  name: 'Luxury Gold Wedding',
  description: 'Opulent black and gold art-deco invite with gold-foil lettering.',
  i18n: {
    mr: { name: 'लक्झरी गोल्ड लग्न', description: 'काळा आणि सोनेरी आर्ट-डेको शैलीतील भव्य लग्नपत्रिका.' },
    hi: { name: 'लग्ज़री गोल्ड विवाह', description: 'काले और सुनहरे आर्ट-डेको शैली में भव्य विवाह निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: weddingFields,
  Preview: LuxuryWedding,
  colors: { primary: '#0b0b0d', secondary: '#d4a437', bg: '#000000', accent: '#b8860b' },
  fonts: { heading: 'display', body: 'serif' },
}

export const weddingTemplates = [
  weddingRoyalTemplate,
  weddingBohoTemplate,
  weddingMarathiTemplate,
  weddingFloralTemplate,
  weddingMinimalTemplate,
  weddingLuxuryTemplate,
]
