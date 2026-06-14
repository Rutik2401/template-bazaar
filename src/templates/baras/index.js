/**
 * Baby Naming Ceremony (Marathi "Bārsā / बारसे") template category.
 *
 * Five visually-distinct premium designs. Each config is the single source of
 * truth for a template — the editor builds its form from `fields`, seeds state
 * from `field.defaultValue`, and renders `Preview` live at the natural 640×900
 * size used by both the live preview and the PDF export.
 */
import { barasFields } from '@/templates/_shared/fields.js'

import TraditionalBaras from './TraditionalBaras.jsx'
import CuteBaras from './CuteBaras.jsx'
import GirlBaras from './GirlBaras.jsx'
import BoyBaras from './BoyBaras.jsx'
import PremiumBaras from './PremiumBaras.jsx'

export const barasTemplates = [
  {
    id: 'baras-traditional',
    category: 'baras',
    name: 'Traditional Baras',
    description: 'Marigold orange & maroon with a hanging cradle (palna), toran and Om motif.',
    i18n: {
      mr: { name: 'पारंपरिक बारसे', description: 'झुलत्या पाळण्यासह झेंडू-केशरी व मरून रंगाचे, तोरण व ॐ चिन्ह असलेले पारंपरिक कार्ड.' },
      hi: { name: 'पारंपरिक नामकरण', description: 'झूलते पालने के साथ गेंदा-नारंगी व मैरून रंग, तोरण और ॐ चिह्न वाला पारंपरिक कार्ड.' },
    },
    width: 640,
    height: 900,
    fields: barasFields,
    Preview: TraditionalBaras,
    colors: { primary: '#ea580c', secondary: '#7a1f2b', accent: '#b8860b', background: '#ffd28a' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'baras-cute',
    category: 'baras',
    name: 'Cute Baby Theme',
    description: 'Gender-neutral mint, peach & cream pastels with a teddy, clouds and stars.',
    i18n: {
      mr: { name: 'गोंडस बाळ थीम', description: 'टेडी, ढग व ताऱ्यांसह मिंट, पीच आणि क्रीम पेस्टल रंगांचे लिंग-निरपेक्ष कार्ड.' },
      hi: { name: 'प्यारी बेबी थीम', description: 'टेडी, बादल व सितारों के साथ मिंट, पीच और क्रीम पेस्टल रंगों वाला कार्ड.' },
    },
    width: 640,
    height: 900,
    fields: barasFields,
    Preview: CuteBaras,
    colors: { primary: '#7ec8a4', secondary: '#f6a98a', accent: '#fcd34d', background: '#fff7ef' },
    fonts: { heading: 'display', body: 'party' },
  },
  {
    id: 'baras-girl',
    category: 'baras',
    name: 'Pink Baby Girl',
    description: 'Soft blush pinks with delicate florals and a sweet "It\'s a Girl" ribbon.',
    i18n: {
      mr: { name: 'गुलाबी बाळ मुलगी', description: 'नाजूक फुलांसह मऊ गुलाबी रंग आणि गोड "It\'s a Girl" रिबन.' },
      hi: { name: 'गुलाबी बेबी गर्ल', description: 'नाज़ुक फूलों के साथ कोमल गुलाबी रंग और प्यारा "It\'s a Girl" रिबन.' },
    },
    width: 640,
    height: 900,
    fields: barasFields,
    Preview: GirlBaras,
    colors: { primary: '#f472b6', secondary: '#f9a8c4', accent: '#fcd34d', background: '#ffe6f0' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'baras-boy',
    category: 'baras',
    name: 'Blue Baby Boy',
    description: 'Dreamy soft blues with a smiling moon, stars and clouds, "It\'s a Boy".',
    i18n: {
      mr: { name: 'निळा बाळ मुलगा', description: 'हसणारा चंद्र, तारे व ढगांसह स्वप्नवत मऊ निळ्या रंगाचे "It\'s a Boy" कार्ड.' },
      hi: { name: 'नीला बेबी बॉय', description: 'मुस्कुराते चाँद, सितारों व बादलों के साथ स्वप्निल नीले रंग का "It\'s a Boy" कार्ड.' },
    },
    width: 640,
    height: 900,
    fields: barasFields,
    Preview: BoyBaras,
    colors: { primary: '#3b82f6', secondary: '#60a5fa', accent: '#fcd34d', background: '#dceafe' },
    fonts: { heading: 'display', body: 'serif' },
  },
  {
    id: 'baras-premium',
    category: 'baras',
    name: 'Premium Naming Ceremony',
    description: 'Sophisticated cream & gold with refined typography and ornamental flourishes.',
    i18n: {
      mr: { name: 'प्रीमियम नामकरण सोहळा', description: 'परिष्कृत अक्षरशैली व सुबक नक्षीकामासह उच्चभ्रू क्रीम आणि सोनेरी कार्ड.' },
      hi: { name: 'प्रीमियम नामकरण समारोह', description: 'परिष्कृत टाइपोग्राफी व सुंदर अलंकरण के साथ शानदार क्रीम और सुनहरा कार्ड.' },
    },
    width: 640,
    height: 900,
    fields: barasFields,
    Preview: PremiumBaras,
    colors: { primary: '#b8860b', secondary: '#d4a437', accent: '#7a5606', background: '#f4ecdb' },
    fonts: { heading: 'display', body: 'serif' },
  },
]
