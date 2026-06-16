/**
 * Social Media category — template registry.
 *
 * Promo creatives sized for social platforms (Instagram square, WhatsApp
 * status 9:16, Facebook cover). Each template defines its `fields` INLINE.
 * All three share the same trio of fields: brandName, offerText, contact.
 *
 * Field shape: { name, label, type: 'text'|'textarea', placeholder?, defaultValue }
 */
import InstagramPost from './InstagramPost.jsx'
import WhatsappStatus from './WhatsappStatus.jsx'
import FacebookBanner from './FacebookBanner.jsx'

/** Shared field set for every social-media template. */
const socialFields = [
  { name: 'brandName', label: 'Brand Name', type: 'text', placeholder: 'Mehta Boutique', defaultValue: 'Mehta Boutique' },
  {
    name: 'offerText',
    label: 'Offer Text',
    type: 'textarea',
    placeholder: 'Flat 50% OFF on the entire collection!',
    defaultValue: 'Flat 50% OFF on the entire collection!',
  },
  { name: 'contact', label: 'Contact', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
]

/** Instagram square promo — bold centred offer, vivid gradient, handle + CTA. */
const instagramTemplate = {
  id: 'social-instagram',
  category: 'socialmedia',
  name: 'Instagram Promotion Post',
  description: 'Bold centred promo post with a vivid gradient, oversized offer headline, brand handle and a shop-now CTA.',
  i18n: {
    mr: { name: 'इंस्टाग्राम प्रमोशन पोस्ट', description: 'चमकदार ग्रेडिएंट, मोठ्या ऑफर शीर्षक, ब्रँड हँडल आणि CTA सह ठळक प्रमोशन पोस्ट.' },
    hi: { name: 'इंस्टाग्राम प्रमोशन पोस्ट', description: 'चमकीले ग्रेडिएंट, बड़े ऑफ़र शीर्षक, ब्रांड हैंडल और CTA के साथ बोल्ड प्रमोशन पोस्ट.' },
  },
  width: 1080,
  height: 1080,
  fields: socialFields,
  Preview: InstagramPost,
  colors: { primary: '#7c1fff', secondary: '#ff2d9b', bg: '#1a0033', accent: '#ff8a00' },
  fonts: { heading: 'display', body: 'sans' },
}

/** WhatsApp status — tall 9:16 vertical story, big headline, offer card, contact. */
const whatsappTemplate = {
  id: 'social-whatsapp',
  category: 'socialmedia',
  name: 'WhatsApp Status Template',
  description: 'Tall 9:16 status with a large headline, bright offer card and contact pinned to the bottom. Built for phones.',
  i18n: {
    mr: { name: 'व्हॉट्सअ‍ॅप स्टेटस टेम्पलेट', description: 'मोठे शीर्षक, चमकदार ऑफर कार्ड आणि तळाशी संपर्क असलेले उभे ९:१६ स्टेटस.' },
    hi: { name: 'व्हाट्सएप स्टेटस टेम्पलेट', description: 'बड़े शीर्षक, चमकीले ऑफ़र कार्ड और नीचे संपर्क के साथ लंबवत ९:१६ स्टेटस.' },
  },
  width: 1080,
  height: 1920,
  fields: socialFields,
  Preview: WhatsappStatus,
  colors: { primary: '#00d97e', secondary: '#019875', bg: '#04231d', accent: '#075e54' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Facebook banner — wide 1200×630 split cover: brand left, offer right. */
const facebookTemplate = {
  id: 'social-facebook',
  category: 'socialmedia',
  name: 'Facebook Banner',
  description: 'Wide cover-photo banner with a brand panel on the left and the offer plus contact on a bright gradient at the right.',
  i18n: {
    mr: { name: 'फेसबुक बॅनर', description: 'डावीकडे ब्रँड पॅनेल आणि उजवीकडे ऑफर व संपर्कासह रुंद कव्हर बॅनर.' },
    hi: { name: 'फेसबुक बैनर', description: 'बाईं ओर ब्रांड पैनल और दाईं ओर ऑफ़र व संपर्क के साथ चौड़ा कवर बैनर.' },
  },
  width: 1200,
  height: 630,
  fields: socialFields,
  Preview: FacebookBanner,
  colors: { primary: '#7c3aed', secondary: '#db2777', bg: '#0b1030', accent: '#f97316' },
  fonts: { heading: 'display', body: 'sans' },
}

export const socialMediaTemplates = [instagramTemplate, whatsappTemplate, facebookTemplate]
