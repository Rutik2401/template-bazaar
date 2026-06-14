/**
 * Business category — template registry.
 *
 * Unlike other categories, each business template defines its own `fields`
 * INLINE (no shared set), because a visiting card, an invoice, an invitation,
 * a flyer and an offer poster each collect very different information.
 *
 * Field shape: { name, label, type: 'text'|'textarea'|'date'|'time',
 *                placeholder?, defaultValue }
 * Only field `name`s with existing i18n labels are used (see fields.<name>).
 */
import BusinessCard from './BusinessCard.jsx'
import BusinessInvoice from './BusinessInvoice.jsx'
import BusinessOpening from './BusinessOpening.jsx'
import BusinessFlyer from './BusinessFlyer.jsx'
import BusinessOffer from './BusinessOffer.jsx'

/** Visiting card — dark panel, accent stripe, monogram. Landscape. */
const businessCardTemplate = {
  id: 'business-card',
  category: 'business',
  name: 'Modern Visiting Card',
  description: 'Professional business card with a dark slate panel, accent stripe and monogram badge.',
  i18n: {
    mr: { name: 'आधुनिक व्हिजिटिंग कार्ड', description: 'गडद पॅनेल, अ‍ॅक्सेंट पट्टी आणि मोनोग्रामसह व्यावसायिक बिझनेस कार्ड.' },
    hi: { name: 'आधुनिक विज़िटिंग कार्ड', description: 'गहरे पैनल, एक्सेंट पट्टी और मोनोग्राम के साथ पेशेवर बिज़नेस कार्ड.' },
  },
  width: 1000,
  height: 580,
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Rohan Mehta', defaultValue: 'Rohan Mehta' },
    { name: 'designation', label: 'Designation', type: 'text', placeholder: 'Founder & CEO', defaultValue: 'Founder & Chief Executive' },
    { name: 'company', label: 'Company', type: 'text', placeholder: 'Mehta Solutions', defaultValue: 'Mehta Solutions' },
    { name: 'phone', label: 'Phone', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
    { name: 'email', label: 'Email', type: 'text', placeholder: 'rohan@mehtasolutions.com', defaultValue: 'rohan@mehtasolutions.com' },
    { name: 'address', label: 'Address', type: 'text', placeholder: '12, MG Road, Pune 411001', defaultValue: '12, MG Road, Pune 411001' },
  ],
  Preview: BusinessCard,
  colors: { primary: '#0f172a', secondary: '#4f46e5', bg: '#ffffff', accent: '#22d3ee' },
  fonts: { heading: 'display', body: 'sans' },
}

/** A4 invoice — header, billed-to, items table, total. */
const businessInvoiceTemplate = {
  id: 'business-invoice',
  category: 'business',
  name: 'Professional Invoice',
  description: 'Clean A4 invoice with a branded header, itemised table and a bold total.',
  i18n: {
    mr: { name: 'व्यावसायिक इनव्हॉइस', description: 'ब्रँडेड हेडर, वस्तूंची सारणी आणि ठळक एकूण रकमेसह स्वच्छ A4 इनव्हॉइस.' },
    hi: { name: 'पेशेवर इनवॉइस', description: 'ब्रांडेड हेडर, वस्तु तालिका और स्पष्ट कुल राशि के साथ साफ़ A4 इनवॉइस.' },
  },
  width: 794,
  height: 1123,
  fields: [
    { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Mehta Solutions', defaultValue: 'Mehta Solutions' },
    { name: 'invoiceNumber', label: 'Invoice No.', type: 'text', placeholder: 'INV-2026-014', defaultValue: 'INV-2026-014' },
    { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-06-14' },
    { name: 'personName', label: 'Billed To', type: 'text', placeholder: 'Sharma Enterprises', defaultValue: 'Sharma Enterprises' },
    {
      name: 'items',
      label: 'Items',
      type: 'textarea',
      placeholder: 'Item | Qty | Price',
      defaultValue:
        'Brand Strategy & Identity | 1 | ₹ 18,000\nWebsite Design (5 pages) | 1 | ₹ 22,000\nSocial Media Kit | 3 | ₹ 8,500',
    },
    { name: 'amount', label: 'Amount', type: 'text', placeholder: '₹ 48,500', defaultValue: '₹ 48,500' },
  ],
  Preview: BusinessInvoice,
  colors: { primary: '#4f46e5', secondary: '#7c3aed', bg: '#ffffff', accent: '#0f172a' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Shop grand-opening invitation — festive maroon & gold, confetti. */
const businessOpeningTemplate = {
  id: 'business-opening',
  category: 'business',
  name: 'Grand Opening Invitation',
  description: 'Festive shop-opening invite with confetti, ribbon motifs and a gold-foil headline.',
  i18n: {
    mr: { name: 'भव्य उद्घाटन निमंत्रण', description: 'कॉन्फेटी, रिबन नक्षी आणि सोनेरी शीर्षकासह उत्सवी दुकान उद्घाटन निमंत्रण.' },
    hi: { name: 'भव्य उद्घाटन निमंत्रण', description: 'कन्फ़ेटी, रिबन रूपांकनों और सुनहरे शीर्षक के साथ उत्सवी दुकान उद्घाटन निमंत्रण.' },
  },
  width: 720,
  height: 960,
  fields: [
    { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Mehta Boutique', defaultValue: 'Mehta Boutique' },
    { name: 'ownerName', label: 'Owner Name', type: 'text', placeholder: 'Rohan & Anita Mehta', defaultValue: 'Rohan & Anita Mehta' },
    { name: 'date', label: 'Date', type: 'date', defaultValue: '2026-06-20' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '11:00' },
    { name: 'venue', label: 'Venue', type: 'text', placeholder: 'Shop 14, MG Road, Pune', defaultValue: 'Shop 14, MG Road, Pune' },
  ],
  Preview: BusinessOpening,
  colors: { primary: '#7a0e1f', secondary: '#fbbf24', bg: '#4a0712', accent: '#fcd34d' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Marketing flyer — bold lime/black, oversized type, feature list. */
const businessFlyerTemplate = {
  id: 'business-flyer',
  category: 'business',
  name: 'Bold Business Flyer',
  description: 'High-energy marketing flyer with oversized type, geometric shapes and a feature list.',
  i18n: {
    mr: { name: 'ठळक बिझनेस फ्लायर', description: 'मोठ्या अक्षरांचे, भूमितीय आकार आणि वैशिष्ट्य यादीसह ऊर्जावान मार्केटिंग फ्लायर.' },
    hi: { name: 'बोल्ड बिज़नेस फ्लायर', description: 'बड़े अक्षरों, ज्यामितीय आकृतियों और सुविधा सूची वाला ऊर्जावान मार्केटिंग फ्लायर.' },
  },
  width: 720,
  height: 960,
  fields: [
    { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Apex Fitness Studio', defaultValue: 'Apex Fitness Studio' },
    { name: 'tagline', label: 'Tagline', type: 'text', placeholder: 'Train Harder. Live Stronger.', defaultValue: 'Train Harder Live Stronger' },
    {
      name: 'offerDetails',
      label: 'Offer Details',
      type: 'textarea',
      placeholder: 'One feature per line',
      defaultValue:
        'State-of-the-art equipment\nCertified personal trainers\nGroup classes every day\nFree trial for new members',
    },
    { name: 'phone', label: 'Phone', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
    { name: 'address', label: 'Address', type: 'text', placeholder: '2nd Floor, MG Road, Pune', defaultValue: '2nd Floor, MG Road, Pune' },
  ],
  Preview: BusinessFlyer,
  colors: { primary: '#a3e635', secondary: '#34d399', bg: '#0b0f17', accent: '#a3e635' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Sale / offer poster — giant offer badge, sunburst, orange→pink. */
const businessOfferTemplate = {
  id: 'business-offer',
  category: 'business',
  name: 'Special Offer Poster',
  description: 'Eye-catching sale poster with a giant offer badge, sunburst rays and a vivid gradient.',
  i18n: {
    mr: { name: 'विशेष ऑफर पोस्टर', description: 'मोठ्या ऑफर बॅज, सनबर्स्ट किरणे आणि चमकदार ग्रेडिएंटसह आकर्षक सेल पोस्टर.' },
    hi: { name: 'विशेष ऑफर पोस्टर', description: 'बड़े ऑफर बैज, सनबर्स्ट किरणों और चमकीले ग्रेडिएंट वाला आकर्षक सेल पोस्टर.' },
  },
  width: 720,
  height: 960,
  fields: [
    { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Mehta Boutique', defaultValue: 'Mehta Boutique' },
    { name: 'offerTitle', label: 'Offer Title', type: 'text', placeholder: '50% OFF', defaultValue: '50% OFF' },
    {
      name: 'offerDetails',
      label: 'Offer Details',
      type: 'textarea',
      placeholder: 'Describe the offer',
      defaultValue: 'On the entire summer collection. Limited period only — grab your favourites before they are gone!',
    },
    { name: 'date', label: 'Valid Till', type: 'date', defaultValue: '2026-06-30' },
    { name: 'phone', label: 'Phone', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  ],
  Preview: BusinessOffer,
  colors: { primary: '#ff2d75', secondary: '#ffb800', bg: '#1a0b2e', accent: '#ffd24d' },
  fonts: { heading: 'display', body: 'sans' },
}

export const businessTemplates = [
  businessCardTemplate,
  businessInvoiceTemplate,
  businessOpeningTemplate,
  businessFlyerTemplate,
  businessOfferTemplate,
]
