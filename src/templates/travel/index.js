/**
 * Travel category — template registry.
 *
 * Three travel templates share a common field set (packageName, price,
 * contact); the tour poster additionally collects a multi-line `highlights`
 * list. Field shape: { name, label, type: 'text'|'textarea', placeholder?,
 * defaultValue }.
 */
import TourPackagePoster from './TourPackagePoster.jsx'
import HolidayInvitation from './HolidayInvitation.jsx'
import TravelOfferBanner from './TravelOfferBanner.jsx'

/* Shared fields used by every travel template. */
const sharedFields = [
  { name: 'packageName', label: 'Package Name', type: 'text', placeholder: 'Magical Kerala 5N/6D', defaultValue: 'Magical Kerala 5N/6D' },
  { name: 'price', label: 'Price', type: 'text', placeholder: '₹ 18,999', defaultValue: '₹ 18,999' },
  { name: 'contact', label: 'Contact', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
]

/** Scenic tour poster — layered mountains, sun, highlights checklist, price badge. */
const tourPackageTemplate = {
  id: 'travel-tour',
  category: 'travel',
  name: 'Tour Package Poster',
  description: 'Scenic travel poster with layered mountains, a rising sun, a trip-highlights checklist and a bold price badge.',
  i18n: {
    mr: { name: 'टूर पॅकेज पोस्टर', description: 'थरांचे पर्वत, उगवता सूर्य, सहलीच्या ठळक मुद्द्यांची यादी आणि ठळक किंमत बॅजसह निसर्गरम्य प्रवास पोस्टर.' },
    hi: { name: 'टूर पैकेज पोस्टर', description: 'परतदार पहाड़ों, उगते सूरज, यात्रा हाइलाइट्स सूची और बड़े मूल्य बैज वाला सुंदर ट्रैवल पोस्टर.' },
  },
  width: 720,
  height: 960,
  fields: [
    sharedFields[0],
    {
      name: 'highlights',
      label: 'Highlights',
      type: 'textarea',
      placeholder: 'One highlight per line',
      defaultValue: 'Alleppey houseboat stay\nMunnar tea gardens\nKochi heritage walk\nAll meals & transfers',
    },
    sharedFields[1],
    sharedFields[2],
  ],
  Preview: TourPackagePoster,
  colors: { primary: '#7b2d8e', secondary: '#ff8a4c', bg: '#0b1f3a', accent: '#ffe39a' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Tropical holiday invitation — beach, palm tree, "Let's Getaway" script. */
const holidayInvitationTemplate = {
  id: 'travel-holiday',
  category: 'travel',
  name: 'Holiday Invitation Card',
  description: 'Relaxed tropical invitation with a turquoise sea, leaning palm tree and a breezy "Let\'s Getaway" headline.',
  i18n: {
    mr: { name: 'सुट्टी निमंत्रण कार्ड', description: 'नितळ समुद्र, झुकलेले नारळाचे झाड आणि निवांत "Let\'s Getaway" शीर्षकासह उष्णकटिबंधीय निमंत्रण.' },
    hi: { name: 'छुट्टी निमंत्रण कार्ड', description: 'फ़िरोज़ी समुद्र, झुके ताड़ के पेड़ और आरामदेह "Let\'s Getaway" शीर्षक वाला उष्णकटिबंधीय निमंत्रण.' },
  },
  width: 640,
  height: 900,
  fields: [sharedFields[0], sharedFields[1], sharedFields[2]],
  Preview: HolidayInvitation,
  colors: { primary: '#11899f', secondary: '#f4cf8f', bg: '#063b45', accent: '#fff1c2' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Wide web banner — flight route, soaring plane, "Limited Offer", big price. */
const travelOfferTemplate = {
  id: 'travel-offer',
  category: 'travel',
  name: 'Travel Offer Banner',
  description: 'Wide landscape web banner with a flight-route motif, soaring plane, a "Limited Offer" flag and an oversized price.',
  i18n: {
    mr: { name: 'ट्रॅव्हल ऑफर बॅनर', description: 'उड्डाण मार्ग, झेपावणारे विमान, "Limited Offer" फ्लॅग आणि मोठ्या किंमतीसह रुंद वेब बॅनर.' },
    hi: { name: 'ट्रैवल ऑफर बैनर', description: 'उड़ान मार्ग, उड़ते विमान, "Limited Offer" फ़्लैग और बड़े मूल्य वाला चौड़ा वेब बैनर.' },
  },
  width: 1000,
  height: 600,
  fields: [sharedFields[0], sharedFields[1], sharedFields[2]],
  Preview: TravelOfferBanner,
  colors: { primary: '#0a6db0', secondary: '#27c4e0', bg: '#04263f', accent: '#ffe39a' },
  fonts: { heading: 'display', body: 'sans' },
}

export const travelTemplates = [tourPackageTemplate, holidayInvitationTemplate, travelOfferTemplate]
