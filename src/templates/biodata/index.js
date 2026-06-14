/**
 * Marriage Biodata category — template registry.
 *
 * Five visually distinct premium biodata designs (traditional, Marathi,
 * minimal-luxury, photo and modern). All share the same `biodataFields` so the
 * editor form is identical across designs — only the Preview differs.
 */
import { biodataFields } from '@/templates/_shared/fields.js'

import TraditionalBiodata from './TraditionalBiodata.jsx'
import MarathiBiodata from './MarathiBiodata.jsx'
import PremiumBiodata from './PremiumBiodata.jsx'
import PhotoBiodata from './PhotoBiodata.jsx'
import ModernBiodata from './ModernBiodata.jsx'

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

export const biodataTemplates = [
  biodataTraditionalTemplate,
  biodataMarathiTemplate,
  biodataPremiumTemplate,
  biodataPhotoTemplate,
  biodataModernTemplate,
]
