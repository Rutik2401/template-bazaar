/**
 * Farewell category — template registry.
 *
 * Three visually distinct, premium-quality farewell card designs (school,
 * college, office) that share the same simple four-field input set — only the
 * visual treatment differs. Wired into the platform via the central
 * `src/templates/index.js` registry.
 *
 * Config shape: { id, category, name, description, i18n:{mr,hi},
 *                 width, height, fields, Preview, colors, fonts }
 */
import SchoolFarewell from './SchoolFarewell.jsx'
import CollegeFarewell from './CollegeFarewell.jsx'
import OfficeFarewell from './OfficeFarewell.jsx'

/** Shared four-field input set for every farewell template. */
const farewellFields = [
  { name: 'eventName', label: 'Event Name', type: 'text', placeholder: 'Farewell 2026', defaultValue: 'Farewell 2026' },
  { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-04-25' },
  { name: 'venue', label: 'Venue', type: 'text', placeholder: 'School Auditorium', defaultValue: 'School Auditorium' },
  { name: 'organizerName', label: 'Organizer Name', type: 'text', placeholder: 'Class of 2026', defaultValue: 'Class of 2026' },
]

const schoolFarewellTemplate = {
  id: 'farewell-school',
  category: 'farewell',
  name: 'School Farewell',
  description: 'Playful & warm send-off with books, a graduation cap and stars in bright blue & yellow.',
  i18n: {
    mr: { name: 'शाळा निरोप समारंभ', description: 'पुस्तके, पदवी टोपी आणि तारे यांसह चमकदार निळ्या-पिवळ्या रंगातील आनंदी निरोप कार्ड.' },
    hi: { name: 'स्कूल विदाई', description: 'किताबों, ग्रेजुएशन कैप और सितारों के साथ चटक नीले-पीले रंग का गर्मजोशी भरा विदाई कार्ड.' },
  },
  width: 640,
  height: 900,
  fields: farewellFields,
  Preview: SchoolFarewell,
  colors: { primary: '#1d4ed8', secondary: '#38bdf8', accent: '#fde047', background: '#e0f2fe' },
  fonts: { heading: 'display', body: 'sans' },
}

const collegeFarewellTemplate = {
  id: 'farewell-college',
  category: 'farewell',
  name: 'College Farewell',
  description: 'Vibrant purple-to-pink gradient with confetti and a big, bold "Farewell" wordmark.',
  i18n: {
    mr: { name: 'कॉलेज निरोप समारंभ', description: 'कॉन्फेटी आणि ठळक "Farewell" शीर्षकासह जांभळ्या-गुलाबी रंगाचे चैतन्यमय डिझाइन.' },
    hi: { name: 'कॉलेज विदाई', description: 'कॉन्फ़ेटी और दमदार "Farewell" शीर्षक के साथ बैंगनी-गुलाबी रंग का जोशीला डिज़ाइन.' },
  },
  width: 640,
  height: 900,
  fields: farewellFields,
  Preview: CollegeFarewell,
  colors: { primary: '#7c3aed', secondary: '#ec4899', accent: '#fde047', background: '#2e1065' },
  fonts: { heading: 'display', body: 'party' },
}

const officeFarewellTemplate = {
  id: 'farewell-office',
  category: 'farewell',
  name: 'Office Farewell',
  description: 'Corporate-elegant navy & gold card with a refined "Goodbye & Good Luck".',
  i18n: {
    mr: { name: 'कार्यालय निरोप समारंभ', description: 'नक्षीदार "Goodbye & Good Luck" सह नेव्ही व सोनेरी रंगाचे प्रतिष्ठित कॉर्पोरेट कार्ड.' },
    hi: { name: 'ऑफिस विदाई', description: 'परिष्कृत "Goodbye & Good Luck" के साथ नेवी व सुनहरे रंग का प्रतिष्ठित कॉर्पोरेट कार्ड.' },
  },
  width: 640,
  height: 900,
  fields: farewellFields,
  Preview: OfficeFarewell,
  colors: { primary: '#0b1f3a', secondary: '#13315c', accent: '#c9a227', background: '#0b1f3a' },
  fonts: { heading: 'display', body: 'serif' },
}

/** All farewell templates — school, college, office. */
export const farewellTemplates = [
  schoolFarewellTemplate,
  collegeFarewellTemplate,
  officeFarewellTemplate,
]
