/**
 * Restaurant category — template registry.
 *
 * Each template defines its own `fields` INLINE. The flyer and offer poster
 * share { restaurantName, offer, contactNumber }; the menu card uses
 * { restaurantName, menuItems, contactNumber }.
 *
 * Field shape: { name, label, type: 'text'|'textarea', placeholder?, defaultValue }
 */
import FoodMenuCard from './FoodMenuCard.jsx'
import RestaurantFlyer from './RestaurantFlyer.jsx'
import OfferPromotionPoster from './OfferPromotionPoster.jsx'

/** Elegant itemised menu — cream/charcoal/gold, dotted-leader price list. */
const restaurantMenuTemplate = {
  id: 'restaurant-menu',
  category: 'restaurant',
  name: 'Food Menu Card',
  description: 'Elegant à-la-carte menu with a gold-framed header and a dotted-leader price list on warm cream paper.',
  i18n: {
    mr: { name: 'फूड मेनू कार्ड', description: 'सोनेरी चौकट असलेले शीर्षक आणि क्रीम कागदावर ठिपकेदार किंमत-यादी असलेले देखणे मेनू कार्ड.' },
    hi: { name: 'फूड मेन्यू कार्ड', description: 'सुनहरे फ्रेम वाले शीर्षक और क्रीम कागज़ पर डॉटेड कीमत-सूची के साथ सुरुचिपूर्ण मेन्यू कार्ड.' },
  },
  width: 720,
  height: 960,
  fields: [
    { name: 'restaurantName', label: 'Restaurant Name', type: 'text', placeholder: 'Spice Garden', defaultValue: 'Spice Garden' },
    {
      name: 'menuItems',
      label: 'Menu Items',
      type: 'textarea',
      placeholder: 'Dish | ₹ Price (one per line)',
      defaultValue: 'Paneer Tikka | ₹ 220\nButter Chicken | ₹ 340\nVeg Biryani | ₹ 260\nGulab Jamun | ₹ 120\nMasala Chai | ₹ 40',
    },
    { name: 'contactNumber', label: 'Contact Number', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  ],
  Preview: FoodMenuCard,
  colors: { primary: '#9a3b1b', secondary: '#c9a14a', bg: '#f7f1e3', accent: '#c9a14a' },
  fonts: { heading: 'display', body: 'serif' },
}

/** Promo flyer — warm reds, big plated-dish motif, offer on a bold ribbon. */
const restaurantFlyerTemplate = {
  id: 'restaurant-flyer',
  category: 'restaurant',
  name: 'Restaurant Flyer',
  description: 'Mouth-watering promo flyer with a steaming-dish motif, warm reds and the offer on a bold ribbon.',
  i18n: {
    mr: { name: 'रेस्टॉरंट फ्लायर', description: 'वाफाळत्या डिशचे नक्षीकाम, उबदार लाल रंग आणि ठळक रिबनवरील ऑफरसह तोंडाला पाणी आणणारा प्रोमो फ्लायर.' },
    hi: { name: 'रेस्टोरेंट फ्लायर', description: 'भाप उठती डिश का रूपांकन, गर्म लाल रंग और बोल्ड रिबन पर ऑफर के साथ मुँह में पानी लाने वाला प्रोमो फ्लायर.' },
  },
  width: 720,
  height: 960,
  fields: [
    { name: 'restaurantName', label: 'Restaurant Name', type: 'text', placeholder: 'Spice Garden', defaultValue: 'Spice Garden' },
    { name: 'offer', label: 'Offer', type: 'text', placeholder: 'Buy 1 Get 1 Free', defaultValue: 'Buy 1 Get 1 Free' },
    { name: 'contactNumber', label: 'Contact Number', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  ],
  Preview: RestaurantFlyer,
  colors: { primary: '#e11d2a', secondary: '#ff7a2f', bg: '#2a0d0a', accent: '#ffb84d' },
  fonts: { heading: 'display', body: 'sans' },
}

/** Sale poster — vivid red/orange, giant starburst offer badge, urgent. */
const restaurantOfferTemplate = {
  id: 'restaurant-offer',
  category: 'restaurant',
  name: 'Offer Promotion Poster',
  description: 'Bold sale-style poster with a giant starburst offer badge, sunburst rays and urgent limited-time energy.',
  i18n: {
    mr: { name: 'ऑफर प्रमोशन पोस्टर', description: 'मोठ्या स्टारबर्स्ट ऑफर बॅज, सनबर्स्ट किरणे आणि मर्यादित-वेळेच्या तातडीसह ठळक सेल पोस्टर.' },
    hi: { name: 'ऑफर प्रमोशन पोस्टर', description: 'बड़े स्टारबर्स्ट ऑफर बैज, सनबर्स्ट किरणों और सीमित-समय की तात्कालिकता वाला बोल्ड सेल पोस्टर.' },
  },
  width: 720,
  height: 960,
  fields: [
    { name: 'restaurantName', label: 'Restaurant Name', type: 'text', placeholder: 'Spice Garden', defaultValue: 'Spice Garden' },
    { name: 'offer', label: 'Offer', type: 'text', placeholder: 'Buy 1 Get 1 Free', defaultValue: 'Buy 1 Get 1 Free' },
    { name: 'contactNumber', label: 'Contact Number', type: 'text', placeholder: '+91 98765 43210', defaultValue: '+91 98765 43210' },
  ],
  Preview: OfferPromotionPoster,
  colors: { primary: '#e11d2a', secondary: '#ff8a00', bg: '#b00d12', accent: '#ffd24d' },
  fonts: { heading: 'display', body: 'sans' },
}

export const restaurantTemplates = [
  restaurantMenuTemplate,
  restaurantFlyerTemplate,
  restaurantOfferTemplate,
]
