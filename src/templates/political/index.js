/**
 * Political category — template registry.
 *
 * Three bold Indian-style political flex banners (birthday wishes, election
 * campaign, party joining). Each pairs a Preview component with a config of the
 * shared shape, all using the same four fields (personName, partyName,
 * designation, date) so the editor form stays identical across designs —
 * only the loud flex-banner visual differs.
 */
import BirthdayPolitical from './BirthdayPolitical.jsx'
import ElectionPoster from './ElectionPoster.jsx'
import PartyJoiningPoster from './PartyJoiningPoster.jsx'

/** Shared fields for every political poster. */
const politicalFields = [
  { name: 'personName', label: 'Person Name', type: 'text', placeholder: 'Shri Rajesh Patil' },
  { name: 'partyName', label: 'Party Name', type: 'text', placeholder: 'Jan Vikas Party' },
  { name: 'designation', label: 'Designation', type: 'text', placeholder: 'District President' },
  { name: 'date', label: 'Date', type: 'date', placeholder: '2026-06-20' },
]

/** Birthday — celebratory saffron & gold with a marigold garland and big photo circle. */
const politicalBirthdayTemplate = {
  id: 'political-birthday',
  category: 'political',
  name: 'Birthday Political Poster',
  description: 'Loud saffron-and-gold political birthday flex banner with a marigold garland, a big photo circle and a bold party-name banner.',
  i18n: {
    mr: { name: 'राजकीय वाढदिवस पोस्टर', description: 'झेंडूच्या माळा, मोठे फोटो वर्तुळ आणि पक्षनाव पट्टीसह केशरी-सोनेरी राजकीय वाढदिवस फ्लेक्स बॅनर.' },
    hi: { name: 'राजनीतिक जन्मदिन पोस्टर', description: 'गेंदे की माला, बड़े फोटो सर्कल और पार्टी-नाम बैनर के साथ केसरिया-सुनहरा राजनीतिक जन्मदिन फ्लेक्स बैनर.' },
  },
  width: 720,
  height: 960,
  fields: politicalFields,
  Preview: BirthdayPolitical,
  colors: { primary: '#ea580c', secondary: '#fde68a', bg: '#7c2d12', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Election — tricolour energy with a ballot/vote symbol and a campaign slogan. */
const politicalElectionTemplate = {
  id: 'political-election',
  category: 'political',
  name: 'Election Campaign Poster',
  description: 'Tricolour election flex banner with a ballot/vote symbol, a campaign slogan, a bold candidate name and a photo circle.',
  i18n: {
    mr: { name: 'निवडणूक प्रचार पोस्टर', description: 'मतपेटी/मत चिन्ह, प्रचार घोषवाक्य आणि फोटो वर्तुळासह तिरंगी निवडणूक फ्लेक्स बॅनर.' },
    hi: { name: 'चुनाव प्रचार पोस्टर', description: 'मतपेटी/वोट चिन्ह, प्रचार नारा और फोटो सर्कल के साथ तिरंगा चुनाव फ्लेक्स बैनर.' },
  },
  width: 720,
  height: 960,
  fields: politicalFields,
  Preview: ElectionPoster,
  colors: { primary: '#ea580c', secondary: '#16a34a', bg: '#ffffff', accent: '#1e3a8a' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Joining — festive welcome with a handshake & flag motif on an India-green field. */
const politicalJoiningTemplate = {
  id: 'political-joining',
  category: 'political',
  name: 'Party Joining Poster',
  description: 'Festive welcome flex banner with a handshake and flag motif, a photo circle and a bilingual "पक्ष प्रवेश / Welcome" theme.',
  i18n: {
    mr: { name: 'पक्ष प्रवेश पोस्टर', description: 'हस्तांदोलन व ध्वज नक्षी, फोटो वर्तुळ आणि "पक्ष प्रवेश / Welcome" थीमसह उत्सवी हिरवे स्वागत फ्लेक्स बॅनर.' },
    hi: { name: 'पार्टी प्रवेश पोस्टर', description: 'हाथ मिलाने व झंडे की आकृति, फोटो सर्कल और "पक्ष प्रवेश / Welcome" थीम के साथ उत्सवी हरा स्वागत फ्लेक्स बैनर.' },
  },
  width: 720,
  height: 960,
  fields: politicalFields,
  Preview: PartyJoiningPoster,
  colors: { primary: '#16a34a', secondary: '#f97316', bg: '#052e16', accent: '#d4a437' },
  fonts: { heading: 'display', body: 'sans' },
}

export const politicalTemplates = [
  politicalBirthdayTemplate,
  politicalElectionTemplate,
  politicalJoiningTemplate,
]
