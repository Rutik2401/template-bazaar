/**
 * Religious Invitation category — Indian Hindu ceremony cards.
 *
 * Five visually distinct premium designs sharing the same simple inputs
 * (`religiousFields`): event name, family name, date, time and venue. Each
 * config is config-driven — the editor builds its form from `fields`, seeds
 * state from `defaultValue`, and renders `Preview` live at 640 × 900.
 */
import { religiousFields } from '@/templates/_shared/fields.js'

import SatyanarayanPooja from './SatyanarayanPooja.jsx'
import GrahPravesh from './GrahPravesh.jsx'
import VastuShanti from './VastuShanti.jsx'
import MataKiChowki from './MataKiChowki.jsx'
import GanpatiInvitation from './GanpatiInvitation.jsx'

export const religiousTemplates = [
  {
    id: 'religious-satyanarayan',
    category: 'religious',
    name: 'Satyanarayan Pooja',
    description: 'Auspicious saffron, gold & red invite with a lotus throne and conch shells.',
    i18n: {
      mr: { name: 'सत्यनारायण पूजा', description: 'कमळ व शंखांसह शुभ केशरी-सोनेरी-लाल आमंत्रण.' },
      hi: { name: 'सत्यनारायण पूजा', description: 'कमल और शंख के साथ शुभ केसरिया-सुनहरा-लाल निमंत्रण.' },
    },
    width: 640,
    height: 900,
    fields: religiousFields,
    Preview: SatyanarayanPooja,
    colors: { primary: '#ea580c', secondary: '#b91c1c', accent: '#d4a437', background: '#fff5db' },
    fonts: { display: 'Playfair Display', body: 'Cormorant' },
  },
  {
    id: 'religious-grahpravesh',
    category: 'religious',
    name: 'Grah Pravesh',
    description: 'Warm-orange housewarming invite framed as an ornate doorway with a marigold toran.',
    i18n: {
      mr: { name: 'गृहप्रवेश', description: 'झेंडूच्या तोरणासह सजवलेल्या दरवाज्याच्या आकाराचे उबदार केशरी आमंत्रण.' },
      hi: { name: 'गृह प्रवेश', description: 'गेंदे के तोरण के साथ सजे द्वार के रूप में गर्म नारंगी निमंत्रण.' },
    },
    width: 640,
    height: 900,
    fields: religiousFields,
    Preview: GrahPravesh,
    colors: { primary: '#ea580c', secondary: '#b91c1c', accent: '#f59e0b', background: '#fff1df' },
    fonts: { display: 'Playfair Display', body: 'Cormorant' },
  },
  {
    id: 'religious-vastu',
    category: 'religious',
    name: 'Vastu Shanti',
    description: 'Serene earthy terracotta & sage card centred on a sacred mandala.',
    i18n: {
      mr: { name: 'वास्तुशांती', description: 'पवित्र मंडलावर केंद्रित शांत मातीसारख्या रंगाचे कार्ड.' },
      hi: { name: 'वास्तु शांति', description: 'पवित्र मंडल पर केंद्रित शांत मिट्टी जैसे रंगों का कार्ड.' },
    },
    width: 640,
    height: 900,
    fields: religiousFields,
    Preview: VastuShanti,
    colors: { primary: '#8a5a2b', secondary: '#8a9a5b', accent: '#9a6b3f', background: '#f5ede0' },
    fonts: { display: 'Playfair Display', body: 'Cormorant' },
  },
  {
    id: 'religious-jagran',
    category: 'religious',
    name: 'Mata Ki Chowki',
    description: 'Vibrant crimson & gold devotional Jagran night with trishuls and a divine halo.',
    i18n: {
      mr: { name: 'माता की चौकी', description: 'त्रिशूळ व दिव्य प्रभेसह उत्साही गडद लाल-सोनेरी जागरण आमंत्रण.' },
      hi: { name: 'माता की चौकी', description: 'त्रिशूल और दिव्य आभा के साथ जीवंत लाल-सुनहरा जागरण निमंत्रण.' },
    },
    width: 640,
    height: 900,
    fields: religiousFields,
    Preview: MataKiChowki,
    colors: { primary: '#b8860b', secondary: '#7a0f1c', accent: '#e2bd66', background: '#5a0a14' },
    fonts: { display: 'Playfair Display', body: 'Cormorant' },
  },
  {
    id: 'religious-ganpati',
    category: 'religious',
    name: 'Ganpati Invitation',
    description: 'Festive saffron & red invite with a hand-drawn Ganesha and marigold garlands.',
    i18n: {
      mr: { name: 'गणपती आमंत्रण', description: 'गणेश व झेंडूच्या माळांसह उत्सवी केशरी-लाल आमंत्रण.' },
      hi: { name: 'गणपति निमंत्रण', description: 'गणेश और गेंदे की मालाओं के साथ उत्सवी केसरिया-लाल निमंत्रण.' },
    },
    width: 640,
    height: 900,
    fields: religiousFields,
    Preview: GanpatiInvitation,
    colors: { primary: '#ea580c', secondary: '#b91c1c', accent: '#f59e0b', background: '#fff3d6' },
    fonts: { display: 'Playfair Display', body: 'Cormorant' },
  },
]
