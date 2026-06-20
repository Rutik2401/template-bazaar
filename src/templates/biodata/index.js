/**
 * Marriage Biodata category — template registry.
 *
 * Five visually distinct premium biodata designs (traditional, Marathi,
 * minimal-luxury, photo and modern). All share the same `biodataFields` so the
 * editor form is identical across designs — only the Preview differs.
 */
import { biodataFields, biodataDetailedFields } from '@/templates/_shared/fields.js'

import TraditionalBiodata from './TraditionalBiodata.jsx'
import MarathiBiodata from './MarathiBiodata.jsx'
import PremiumBiodata from './PremiumBiodata.jsx'
import PhotoBiodata from './PhotoBiodata.jsx'
import ModernBiodata from './ModernBiodata.jsx'

// ── Detailed collection (new) — photo upload + cropper, full marriage profile ──
import RoyalGoldBiodata from './RoyalGoldBiodata.jsx'
import SaffronMarathiBiodata from './SaffronMarathiBiodata.jsx'
import RoseFloralBiodata from './RoseFloralBiodata.jsx'
import TealSidebarBiodata from './TealSidebarBiodata.jsx'
import MinimalMonoBiodata from './MinimalMonoBiodata.jsx'
import NavyGoldBiodata from './NavyGoldBiodata.jsx'
import PastelBlueBiodata from './PastelBlueBiodata.jsx'
import GreenGarlandBiodata from './GreenGarlandBiodata.jsx'
import EmeraldNikahBiodata from './EmeraldNikahBiodata.jsx'
import PeachDecoBiodata from './PeachDecoBiodata.jsx'

/** Traditional — maroon & gold, Ganesha header, ornate border. */
const biodataTraditionalTemplate = {
  id: 'biodata-traditional',
  category: 'biodata',
  name: 'Traditional Marriage Biodata',
  description: 'Maroon and gold biodata with a Ganesha header, "॥ श्री गणेशाय नमः ॥" and an ornate double border.',
  i18n: {
    mr: { name: 'पारंपरिक विवाह बायोडाटा', description: 'मरून आणि सोनेरी बायोडाटा, गणेश शीर्ष, "॥ श्री गणेशाय नमः ॥" व नक्षीदार दुहेरी किनार.' },
    hi: { name: 'पारंपरिक विवाह बायोडाटा', description: 'मरून और सुनहरा बायोडाटा, गणेश शीर्ष, "॥ श्री गणेशाय नमः ॥" तथा सजावटी दोहरी किनारी.' },
  },
  width: 794,
  height: 1123,
  fields: biodataFields,
  Preview: TraditionalBiodata,
  colors: { primary: '#7a1f2b', secondary: '#b8860b', bg: '#fdf6ec', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Marathi — Maharashtrian traditional, saffron & green. */
const biodataMarathiTemplate = {
  id: 'biodata-marathi',
  category: 'biodata',
  name: 'Marathi Marriage Biodata',
  description: 'Maharashtrian biodata with saffron and green accents, kalash, swastik and "॥ श्री गणेशाय नमः ॥".',
  i18n: {
    mr: { name: 'मराठी विवाह बायोडाटा', description: 'केशरी आणि हिरव्या रंगछटा, कलश, स्वस्तिक व "॥ श्री गणेशाय नमः ॥" असलेला महाराष्ट्रीय बायोडाटा.' },
    hi: { name: 'मराठी विवाह बायोडाटा', description: 'केसरिया और हरे रंग, कलश, स्वस्तिक व "॥ श्री गणेशाय नमः ॥" के साथ महाराष्ट्रीय बायोडाटा.' },
  },
  width: 794,
  height: 1123,
  fields: biodataFields,
  Preview: MarathiBiodata,
  colors: { primary: '#e07b1e', secondary: '#1b6e3a', bg: '#fff8ec', accent: '#c2641b' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Premium — cream, thin gold double border, refined serif, minimal-luxury. */
const biodataPremiumTemplate = {
  id: 'biodata-premium',
  category: 'biodata',
  name: 'Premium Marriage Biodata',
  description: 'Sophisticated minimal-luxury biodata in cream with a thin gold double border and refined serif type.',
  i18n: {
    mr: { name: 'प्रीमियम विवाह बायोडाटा', description: 'क्रीम रंग, बारीक सोनेरी दुहेरी किनार आणि सुबक सेरिफ टाइपसह अभिजात मिनिमल-लक्झरी बायोडाटा.' },
    hi: { name: 'प्रीमियम विवाह बायोडाटा', description: 'क्रीम रंग, पतली सुनहरी दोहरी किनारी और परिष्कृत सेरिफ़ टाइप वाला सौम्य मिनिमल-लक्ज़री बायोडाटा.' },
  },
  width: 794,
  height: 1123,
  fields: biodataFields,
  Preview: PremiumBiodata,
  colors: { primary: '#b8860b', secondary: '#57534e', bg: '#faf6ee', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Photo — soft rose header with a photo frame placeholder, clean layout. */
const biodataPhotoTemplate = {
  id: 'biodata-photo',
  category: 'biodata',
  name: 'Photo Marriage Biodata',
  description: 'Clean modern biodata with a rounded photo frame placeholder and a soft rose header band.',
  i18n: {
    mr: { name: 'फोटो विवाह बायोडाटा', description: 'गोलाकार फोटो फ्रेम जागा आणि मऊ गुलाबी शीर्षपट्टीसह स्वच्छ आधुनिक बायोडाटा.' },
    hi: { name: 'फोटो विवाह बायोडाटा', description: 'गोल फोटो फ्रेम स्थान और कोमल गुलाबी हेडर बैंड के साथ साफ़ आधुनिक बायोडाटा.' },
  },
  width: 794,
  height: 1123,
  fields: biodataFields,
  Preview: PhotoBiodata,
  colors: { primary: '#e11d48', secondary: '#f59e0b', bg: '#ffffff', accent: '#fb7185' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Modern — two-column with a coloured indigo sidebar, contemporary sans. */
const biodataModernTemplate = {
  id: 'biodata-modern',
  category: 'biodata',
  name: 'Modern Matrimonial Profile',
  description: 'Contemporary two-column profile with a coloured indigo sidebar, monogram and clean sans-serif type.',
  i18n: {
    mr: { name: 'आधुनिक विवाह प्रोफाइल', description: 'रंगीत इंडिगो साइडबार, मोनोग्राम आणि स्वच्छ सॅन्स टाइपसह समकालीन दोन-स्तंभी प्रोफाइल.' },
    hi: { name: 'आधुनिक विवाह प्रोफ़ाइल', description: 'रंगीन इंडिगो साइडबार, मोनोग्राम और साफ़ सैन्स टाइप वाली समकालीन दो-कॉलम प्रोफ़ाइल.' },
  },
  width: 794,
  height: 1123,
  fields: biodataFields,
  Preview: ModernBiodata,
  colors: { primary: '#4338ca', secondary: '#1e1b4b', bg: '#ffffff', accent: '#6366f1' },
  fonts: { heading: 'display', body: 'sans' },
}

// ─────────────────────────────────────────────────────────────────────────────
// Detailed collection — 10 new designs. Each shares `biodataDetailedFields`
// (a complete marriage profile: photo upload + cropper, DOB, rashi, nakshatra,
// gotra, religion/caste, parents, …). Labels render in English, मराठी & हिंदी
// via t('template.common.*'), so downloads never break across languages.
// ─────────────────────────────────────────────────────────────────────────────

const biodataRoyalGoldTemplate = {
  id: 'biodata-royal-gold',
  category: 'biodata',
  name: 'Royal Gold Marriage Biodata',
  description: 'Maroon & gold biodata with a Ganesha header, ornate frame and your photo — with rashi, nakshatra, gotra and family details.',
  i18n: {
    mr: { name: 'रॉयल गोल्ड विवाह बायोडाटा', description: 'गणेश शीर्ष, नक्षीदार किनार आणि फोटोसह मरून-सोनेरी बायोडाटा — राशी, नक्षत्र, गोत्र व कौटुंबिक तपशील.' },
    hi: { name: 'रॉयल गोल्ड विवाह बायोडाटा', description: 'गणेश शीर्ष, सजावटी किनारी और फोटो के साथ मरून-सुनहरा बायोडाटा — राशि, नक्षत्र, गोत्र व पारिवारिक विवरण.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: RoyalGoldBiodata,
  colors: { primary: '#7a1f2b', secondary: '#b8860b', bg: '#fdf6ec', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

const biodataSaffronMarathiTemplate = {
  id: 'biodata-saffron-marathi',
  category: 'biodata',
  name: 'Saffron Marathi Biodata',
  description: 'Maharashtrian saffron & green biodata with kalash, marigold swag and your photo — complete with horoscope & family details.',
  i18n: {
    mr: { name: 'केशरी मराठी बायोडाटा', description: 'कलश, झेंडूची माळ आणि फोटोसह केशरी-हिरवा महाराष्ट्रीय बायोडाटा — पत्रिका व कौटुंबिक तपशीलासह.' },
    hi: { name: 'केसरिया मराठी बायोडाटा', description: 'कलश, गेंदा तोरण और फोटो के साथ केसरिया-हरा महाराष्ट्रीय बायोडाटा — कुंडली व पारिवारिक विवरण सहित.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: SaffronMarathiBiodata,
  colors: { primary: '#e07b1e', secondary: '#1b6e3a', bg: '#fff8ec', accent: '#c2641b' },
  fonts: { heading: 'display', body: 'serif' },
}

const biodataRoseFloralTemplate = {
  id: 'biodata-rose-floral',
  category: 'biodata',
  name: 'Rose Floral Biodata',
  description: 'Soft blush & rose floral biodata with an oval photo frame and refined serif type — elegant and romantic.',
  i18n: {
    mr: { name: 'गुलाबी पुष्प बायोडाटा', description: 'अंडाकृती फोटो फ्रेम व सुबक सेरिफसह मऊ गुलाबी फुलांचा अभिजात बायोडाटा.' },
    hi: { name: 'गुलाबी पुष्प बायोडाटा', description: 'अंडाकार फोटो फ्रेम और परिष्कृत सेरिफ़ के साथ कोमल गुलाबी पुष्प बायोडाटा — सुंदर व रोमांटिक.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: RoseFloralBiodata,
  colors: { primary: '#e11d48', secondary: '#fb7185', bg: '#fff5f7', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'serif' },
}

const biodataTealSidebarTemplate = {
  id: 'biodata-teal-sidebar',
  category: 'biodata',
  name: 'Modern Teal Profile',
  description: 'Contemporary two-column matrimonial profile with a teal photo sidebar and a clean details grid.',
  i18n: {
    mr: { name: 'आधुनिक टील प्रोफाइल', description: 'टील फोटो साइडबार व स्वच्छ तपशील ग्रिडसह समकालीन दोन-स्तंभी विवाह प्रोफाइल.' },
    hi: { name: 'आधुनिक टील प्रोफ़ाइल', description: 'टील फोटो साइडबार और साफ़ विवरण ग्रिड के साथ समकालीन दो-कॉलम विवाह प्रोफ़ाइल.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: TealSidebarBiodata,
  colors: { primary: '#0f766e', secondary: '#134e4a', bg: '#ffffff', accent: '#14b8a6' },
  fonts: { heading: 'display', body: 'sans' },
}

const biodataMinimalMonoTemplate = {
  id: 'biodata-minimal-mono',
  category: 'biodata',
  name: 'Minimal Mono Biodata',
  description: 'Clean editorial black-on-white biodata with hairline rules and a neat photo — understated and modern.',
  i18n: {
    mr: { name: 'मिनिमल मोनो बायोडाटा', description: 'बारीक रेषा व नीटनेटक्या फोटोसह स्वच्छ संपादकीय कृष्णधवल बायोडाटा — साधा व आधुनिक.' },
    hi: { name: 'मिनिमल मोनो बायोडाटा', description: 'पतली रेखाओं और साफ़ फोटो के साथ स्वच्छ श्वेत-श्याम बायोडाटा — सादा व आधुनिक.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: MinimalMonoBiodata,
  colors: { primary: '#111827', secondary: '#6b7280', bg: '#ffffff', accent: '#111827' },
  fonts: { heading: 'display', body: 'sans' },
}

const biodataNavyGoldTemplate = {
  id: 'biodata-navy-gold',
  category: 'biodata',
  name: 'Navy & Gold Luxury Biodata',
  description: 'Deep navy biodata with fine gold borders and a gold-ringed photo — opulent and premium.',
  i18n: {
    mr: { name: 'नेव्ही-गोल्ड लक्झरी बायोडाटा', description: 'बारीक सोनेरी किनार व सोनेरी रिंग फोटोसह गडद नेव्ही बायोडाटा — भव्य व प्रीमियम.' },
    hi: { name: 'नेवी-गोल्ड लक्ज़री बायोडाटा', description: 'महीन सुनहरी किनारी और सुनहरी रिंग फोटो के साथ गहरा नेवी बायोडाटा — भव्य व प्रीमियम.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: NavyGoldBiodata,
  colors: { primary: '#0f172a', secondary: '#d4a437', bg: '#0f172a', accent: '#e2bd66' },
  fonts: { heading: 'display', body: 'serif' },
}

const biodataPastelBlueTemplate = {
  id: 'biodata-pastel-blue',
  category: 'biodata',
  name: 'Pastel Blue Biodata',
  description: 'Soft sky-blue biodata with rounded section cards and a friendly modern layout.',
  i18n: {
    mr: { name: 'पेस्टल ब्लू बायोडाटा', description: 'गोलाकार विभाग कार्ड व सौम्य आधुनिक मांडणीसह मऊ आकाशी निळा बायोडाटा.' },
    hi: { name: 'पेस्टल ब्लू बायोडाटा', description: 'गोल सेक्शन कार्ड और सहज आधुनिक लेआउट के साथ कोमल आसमानी नीला बायोडाटा.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: PastelBlueBiodata,
  colors: { primary: '#3b82f6', secondary: '#60a5fa', bg: '#f5f9ff', accent: '#2563eb' },
  fonts: { heading: 'display', body: 'sans' },
}

const biodataGreenGarlandTemplate = {
  id: 'biodata-green-garland',
  category: 'biodata',
  name: 'Green Garland Biodata',
  description: 'Emerald & marigold biodata with a mango-leaf toran header and a framed photo — fresh and auspicious.',
  i18n: {
    mr: { name: 'ग्रीन गारलँड बायोडाटा', description: 'आंब्याच्या पानांचे तोरण व फ्रेम फोटोसह पाचू-झेंडू बायोडाटा — टवटवीत व शुभ.' },
    hi: { name: 'ग्रीन गारलैंड बायोडाटा', description: 'आम के पत्तों का तोरण और फ्रेम फोटो के साथ पन्ना-गेंदा बायोडाटा — ताज़ा व शुभ.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: GreenGarlandBiodata,
  colors: { primary: '#15803d', secondary: '#d4a437', bg: '#f4fbf1', accent: '#f59e0b' },
  fonts: { heading: 'display', body: 'serif' },
}

const biodataEmeraldNikahTemplate = {
  id: 'biodata-emerald-nikah',
  category: 'biodata',
  name: 'Nikah Marriage Biodata',
  description: 'Emerald & gold Islamic biodata with a crescent, geometric jali border and a mihrab photo arch.',
  i18n: {
    mr: { name: 'निकाह विवाह बायोडाटा', description: 'चंद्रकोर, भौमितिक जाळी किनार व मिहराब फोटो कमानीसह पाचू-सोनेरी इस्लामी बायोडाटा.' },
    hi: { name: 'निकाह विवाह बायोडाटा', description: 'अर्धचंद्र, ज्यामितीय जाली किनारी व मेहराब फोटो आर्च के साथ पन्ना-सुनहरा इस्लामी बायोडाटा.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: EmeraldNikahBiodata,
  colors: { primary: '#064e3b', secondary: '#d4a437', bg: '#f3faf6', accent: '#0f766e' },
  fonts: { heading: 'display', body: 'serif' },
}

const biodataPeachDecoTemplate = {
  id: 'biodata-peach-deco',
  category: 'biodata',
  name: 'Art-Deco Peach Biodata',
  description: 'Gatsby-style peach & gold biodata with art-deco sunburst rays and a stepped photo frame.',
  i18n: {
    mr: { name: 'आर्ट-डेको पीच बायोडाटा', description: 'आर्ट-डेको सूर्यकिरण व पायऱ्यांची फोटो फ्रेमसह पीच-सोनेरी गॅट्सबी शैलीतील बायोडाटा.' },
    hi: { name: 'आर्ट-डेको पीच बायोडाटा', description: 'आर्ट-डेको सूर्यकिरण और सीढ़ीनुमा फोटो फ्रेम के साथ पीच-सुनहरा गैट्सबी शैली बायोडाटा.' },
  },
  width: 794,
  height: 1123,
  fields: biodataDetailedFields,
  Preview: PeachDecoBiodata,
  colors: { primary: '#e08a6e', secondary: '#c79a2f', bg: '#fdf3ec', accent: '#b9603f' },
  fonts: { heading: 'display', body: 'serif' },
}

export const biodataTemplates = [
  biodataTraditionalTemplate,
  biodataMarathiTemplate,
  biodataPremiumTemplate,
  biodataPhotoTemplate,
  biodataModernTemplate,
  // ── Detailed collection (photo upload + cropper, full profile) ──
  biodataRoyalGoldTemplate,
  biodataSaffronMarathiTemplate,
  biodataRoseFloralTemplate,
  biodataTealSidebarTemplate,
  biodataMinimalMonoTemplate,
  biodataNavyGoldTemplate,
  biodataPastelBlueTemplate,
  biodataGreenGarlandTemplate,
  biodataEmeraldNikahTemplate,
  biodataPeachDecoTemplate,
]
