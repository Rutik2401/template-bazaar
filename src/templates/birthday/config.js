import PartyBirthdayTemplate from './PartyBirthdayTemplate.jsx'

export const birthdayPartyTemplate = {
  id: 'birthday-party',
  category: 'birthday',
  name: 'Modern Birthday Party',
  description: 'Vibrant blue–purple gradient card with balloons & confetti.',
  i18n: {
    mr: { name: 'मॉडर्न वाढदिवस पार्टी', description: 'फुगे आणि कॉन्फेटीसह जिवंत निळसर-जांभळ्या रंगाचे कार्ड.' },
    hi: { name: 'मॉडर्न जन्मदिन पार्टी', description: 'गुब्बारों और कॉन्फ़ेटी के साथ जीवंत नीले–बैंगनी कार्ड.' },
  },
  width: 640,
  height: 900,
  Preview: PartyBirthdayTemplate,
  fields: [
    { name: 'personName', label: 'Person Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'age', label: 'Age', type: 'number', placeholder: '7', defaultValue: '7' },
    { name: 'date', label: 'Date', type: 'date', defaultValue: '2025-08-23' },
    { name: 'time', label: 'Time', type: 'time', defaultValue: '16:00' },
    {
      name: 'venue',
      label: 'Venue',
      type: 'text',
      placeholder: 'Funland Play Cafe, Pune',
      defaultValue: 'Funland Play Cafe, Pune',
    },
  ],
}
