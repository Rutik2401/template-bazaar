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

// ── Premium Collection (new) ────────────────────────────────────────────────
import CartoonCoupleWedding from './CartoonCoupleWedding.jsx'
import BrideGroomPortrait from './BrideGroomPortrait.jsx'
import SouthIndianWedding from './SouthIndianWedding.jsx'
import NikahWedding from './NikahWedding.jsx'
import PhotoFrameWedding from './PhotoFrameWedding.jsx'
import WhatsappWedding from './WhatsappWedding.jsx'
import DestinationWedding from './DestinationWedding.jsx'
import RoyalPalaceWedding from './RoyalPalaceWedding.jsx'
import VintageWedding from './VintageWedding.jsx'
import WatercolorWedding from './WatercolorWedding.jsx'
import GujaratiWedding from './GujaratiWedding.jsx'
import ChristianWedding from './ChristianWedding.jsx'
import LuxuryReception from './LuxuryReception.jsx'
import HaldiCeremony from './HaldiCeremony.jsx'
import MehendiCeremony from './MehendiCeremony.jsx'

/**
 * Boho Pampas wedding — warm beige card with an off-white arch, cream/white
 * florals and golden dried palm leaves, calligraphy names. Its own field set
 * seeds the sample couple (Aarav & Sanika); field names match the shared
 * wedding fields so their localised labels are reused.
 */
const bohoFields = [
  { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
  { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
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

// ─────────────────────────────────────────────────────────────────────────────
// Premium Collection — 15 new designs. Each has a UNIQUE layout AND its OWN
// custom field set (dynamic fields differ per template — not a shared form).
// ─────────────────────────────────────────────────────────────────────────────

const weddingCartoonCoupleTemplate = {
  id: 'wedding-cartoon-couple',
  category: 'wedding',
  name: 'Cartoon Couple Wedding',
  description: 'Illustrated bride & groom under a floral arch — playful, modern and premium.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
    { name: 'tagline', label: 'Tagline', type: 'text', placeholder: 'Two souls, one journey', defaultValue: 'Two souls, one beautiful journey' },
  ],
  Preview: CartoonCoupleWedding,
  colors: { primary: '#be4a6f', secondary: '#d99a4e', bg: '#fff5f0', accent: '#e8a0b8' },
  fonts: { heading: 'script', body: 'sans' },
}

const weddingPortraitTemplate = {
  id: 'wedding-portrait',
  category: 'wedding',
  name: 'Bride & Groom Portrait',
  description: 'Ornate gold-framed arch with an illustrated couple portrait and an engraved name banner.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '11:00' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
  ],
  Preview: BrideGroomPortrait,
  colors: { primary: '#5e1822', secondary: '#0f3d2e', bg: '#3a0f17', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingSouthIndianTemplate = {
  id: 'wedding-south-indian',
  category: 'wedding',
  name: 'South Indian Wedding',
  description: 'Kanchipuram maroon & gold with a temple gopuram, hanging bells and banana-leaf borders.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'brideParents', label: "Bride's Parents", type: 'text', placeholder: 'D/o Mr. & Mrs. Iyer', defaultValue: 'D/o Mr. & Mrs. Iyer' },
    { name: 'groomParents', label: "Groom's Parents", type: 'text', placeholder: 'S/o Mr. & Mrs. Rao', defaultValue: 'S/o Mr. & Mrs. Rao' },
    { name: 'muhurtam', label: 'Muhurtam Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'time', label: 'Muhurtam Time', type: 'time', defaultValue: '06:30' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Sri Kalyana Mandapam, Chennai', defaultValue: 'Sri Kalyana Mandapam, Chennai' },
  ],
  Preview: SouthIndianWedding,
  colors: { primary: '#7a1f12', secondary: '#1f7a3d', bg: '#4a0d0a', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingNikahTemplate = {
  id: 'wedding-muslim',
  category: 'wedding',
  name: 'Nikah Ceremony',
  description: 'Elegant emerald & gold mihrab arch with a crescent, star and geometric jali border.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'nikahDate', label: 'Nikah Date', type: 'date', defaultValue: '2025-12-20' },
    { name: 'nikahTime', label: 'Nikah Time', type: 'time', defaultValue: '17:00' },
    { name: 'walimaInfo', label: 'Walima Note', type: 'text', placeholder: 'Walima reception to follow', defaultValue: 'Walima reception to follow' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Grand Ballroom, Hyderabad', defaultValue: 'Grand Ballroom, Hyderabad' },
  ],
  Preview: NikahWedding,
  colors: { primary: '#064e3b', secondary: '#0f766e', bg: '#03291f', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingPhotoFrameTemplate = {
  id: 'wedding-photo-frame',
  category: 'wedding',
  name: 'Photo Frame Wedding',
  description: 'Large gold-framed photo area with a caption, names and clean details below.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
    { name: 'photoCaption', label: 'Photo Caption', type: 'text', placeholder: 'The day we say forever', defaultValue: 'The day we say forever' },
  ],
  Preview: PhotoFrameWedding,
  colors: { primary: '#1f2937', secondary: '#b8860b', bg: '#fbf7ef', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingWhatsappTemplate = {
  id: 'wedding-whatsapp',
  category: 'wedding',
  name: 'WhatsApp Wedding Card',
  description: 'Vertical mobile-first invite designed to be shared beautifully on WhatsApp.',
  width: 720,
  height: 1280,
  fields: [
    { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '11:00' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
    { name: 'rsvpContact', label: 'RSVP Contact', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  ],
  Preview: WhatsappWedding,
  colors: { primary: '#5e1822', secondary: '#7e3aa8', bg: '#3a0f17', accent: '#d4a437' },
  fonts: { heading: 'script', body: 'serif' },
}

const weddingDestinationTemplate = {
  id: 'wedding-destination',
  category: 'wedding',
  name: 'Destination Wedding',
  description: 'Breezy beach-resort scene with sea, sunset and palms — luxury getaway vibe.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'location', label: 'Location', type: 'text', placeholder: 'Goa, India', defaultValue: 'Goa, India' },
    { name: 'resortName', label: 'Resort', type: 'text', placeholder: 'Taj Exotica Resort', defaultValue: 'Taj Exotica Resort' },
    { name: 'rsvpContact', label: 'RSVP Contact', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  ],
  Preview: DestinationWedding,
  colors: { primary: '#0e7490', secondary: '#f97362', bg: '#e8f6f7', accent: '#f3b760' },
  fonts: { heading: 'script', body: 'sans' },
}

const weddingPalaceTemplate = {
  id: 'wedding-palace',
  category: 'wedding',
  name: 'Royal Palace Wedding',
  description: 'A grand palace skyline framed by pillars and a crown in royal red & heavy gold.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '11:00' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
    { name: 'hostFamily', label: 'Hosted By', type: 'text', placeholder: 'The Rathore Family', defaultValue: 'The Rathore Family' },
  ],
  Preview: RoyalPalaceWedding,
  colors: { primary: '#6b1020', secondary: '#d4a437', bg: '#4a0a16', accent: '#f4e2a8' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingVintageTemplate = {
  id: 'wedding-vintage',
  category: 'wedding',
  name: 'Vintage Wedding',
  description: 'Aged parchment with Victorian filigree, an oval monogram and old-world serif charm.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
    { name: 'quote', label: 'Quote', type: 'textarea', placeholder: 'A short romantic quote', defaultValue: 'Two lives, two hearts, joined together in friendship and united forever in love' },
  ],
  Preview: VintageWedding,
  colors: { primary: '#5b3a29', secondary: '#7a1f2b', bg: '#efe6d2', accent: '#a9842f' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingWatercolorTemplate = {
  id: 'wedding-watercolor',
  category: 'wedding',
  name: 'Watercolor Wedding',
  description: 'Soft watercolour washes with delicate botanicals and airy handwritten names.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Jaipur', defaultValue: 'The Grand Palace, Jaipur' },
  ],
  Preview: WatercolorWedding,
  colors: { primary: '#9f6b7f', secondary: '#7e9069', bg: '#fdfbf8', accent: '#e2a78d' },
  fonts: { heading: 'script', body: 'serif' },
}

const weddingGujaratiTemplate = {
  id: 'wedding-gujarati',
  category: 'wedding',
  name: 'Gujarati Kankotri',
  description: 'Vibrant red, green & gold kankotri with Ganesha, a hanging toran and bandhani accents.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '11:00' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Grand Palace, Ahmedabad', defaultValue: 'The Grand Palace, Ahmedabad' },
    { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Patel Family', defaultValue: 'The Patel Family' },
  ],
  Preview: GujaratiWedding,
  colors: { primary: '#b91c1c', secondary: '#15803d', bg: '#fff1e6', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingChristianTemplate = {
  id: 'wedding-christian',
  category: 'wedding',
  name: 'Christian Wedding',
  description: 'Timeless ivory & gold with a church arch, doves, cross and intertwined rings.',
  width: 640,
  height: 900,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    { name: 'ceremonyTime', label: 'Ceremony Time', type: 'time', defaultValue: '16:00' },
    { name: 'churchName', label: 'Church', type: 'text', placeholder: "St. Mary's Church, Bandra", defaultValue: "St. Mary's Church, Bandra" },
    { name: 'receptionVenue', label: 'Reception Venue', type: 'text', placeholder: 'Sea Princess Banquet Hall', defaultValue: 'Sea Princess Banquet Hall' },
  ],
  Preview: ChristianWedding,
  colors: { primary: '#1e3a5f', secondary: '#b8860b', bg: '#fbfaf7', accent: '#cdb27a' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingReceptionTemplate = {
  id: 'wedding-reception',
  category: 'wedding',
  name: 'Luxury Reception',
  description: 'Black-tie evening glamour in black & gold with art-deco rays and a champagne motif.',
  width: 640,
  height: 900,
  fields: [
    { name: 'coupleName', label: 'Couple Name', type: 'text', placeholder: 'Aarav & Sanika', defaultValue: 'Aarav & Sanika' },
    { name: 'receptionDate', label: 'Reception Date', type: 'date', defaultValue: '2025-12-16' },
    { name: 'receptionTime', label: 'Reception Time', type: 'time', defaultValue: '19:30' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'The Leela Ballroom, Mumbai', defaultValue: 'The Leela Ballroom, Mumbai' },
    { name: 'hostName', label: 'Hosted By', type: 'text', placeholder: 'The Mehta Family', defaultValue: 'The Mehta Family' },
  ],
  Preview: LuxuryReception,
  colors: { primary: '#0b0b0d', secondary: '#d4a437', bg: '#0b0b0d', accent: '#f4e2a8' },
  fonts: { heading: 'display', body: 'serif' },
}

const weddingHaldiTemplate = {
  id: 'wedding-haldi',
  category: 'wedding',
  name: 'Haldi Ceremony',
  description: 'Sunny turmeric-yellow card with a marigold garland and joyful haldi motifs.',
  width: 640,
  height: 900,
  fields: [
    { name: 'celebrantName', label: 'Celebrant Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'haldiDate', label: 'Haldi Date', type: 'date', defaultValue: '2025-12-13' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '10:00' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Residence, Pune', defaultValue: 'Residence, Pune' },
    { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
  ],
  Preview: HaldiCeremony,
  colors: { primary: '#ca8a04', secondary: '#ea580c', bg: '#fef3c7', accent: '#f59e0b' },
  fonts: { heading: 'party', body: 'sans' },
}

const weddingMehendiTemplate = {
  id: 'wedding-mehendi',
  category: 'wedding',
  name: 'Mehendi Ceremony',
  description: 'Intricate henna mandala & paisley art in deep green, fuchsia and gold.',
  width: 640,
  height: 900,
  fields: [
    { name: 'celebrantName', label: 'Celebrant Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'mehendiDate', label: 'Mehendi Date', type: 'date', defaultValue: '2025-12-12' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '16:00' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Residence, Pune', defaultValue: 'Residence, Pune' },
    { name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'The Sharma Family', defaultValue: 'The Sharma Family' },
  ],
  Preview: MehendiCeremony,
  colors: { primary: '#15803d', secondary: '#be185d', bg: '#f0fdf4', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

export const weddingTemplates = [
  weddingRoyalTemplate,
  weddingBohoTemplate,
  weddingMarathiTemplate,
  weddingFloralTemplate,
  weddingMinimalTemplate,
  weddingLuxuryTemplate,
  // ── Premium Collection ──
  weddingCartoonCoupleTemplate,
  weddingPortraitTemplate,
  weddingSouthIndianTemplate,
  weddingNikahTemplate,
  weddingPhotoFrameTemplate,
  weddingWhatsappTemplate,
  weddingDestinationTemplate,
  weddingPalaceTemplate,
  weddingVintageTemplate,
  weddingWatercolorTemplate,
  weddingGujaratiTemplate,
  weddingChristianTemplate,
  weddingReceptionTemplate,
  weddingHaldiTemplate,
  weddingMehendiTemplate,
]
