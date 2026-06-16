import RoyalWeddingTemplate from './RoyalWeddingTemplate.jsx'

/**
 * Template configuration object.
 *
 * This is the single source of truth for a template. The editor builds its
 * form from `fields`, seeds state from `field.defaultValue`, and renders
 * `Preview` live. To add a new template, drop a folder with a Preview
 * component + a config like this and register it in `src/templates/index.js`.
 *
 * @typedef {Object} TemplateField
 * @property {string}  name          Key in the values object.
 * @property {string}  label         Shown above the input.
 * @property {'text'|'date'|'time'|'number'|'textarea'} type
 * @property {string}  [placeholder]
 * @property {string}  [hint]        Small helper text under the input.
 * @property {string}  defaultValue
 */
export const weddingRoyalTemplate = {
  id: 'wedding-royal',
  category: 'wedding',
  name: 'Royal Indian Wedding',
  description: 'Traditional Indian wedding invite with gold foil ornaments.',
  i18n: {
    mr: { name: 'रॉयल भारतीय लग्न', description: 'सोनेरी नक्षीकामासह पारंपरिक भारतीय लग्नपत्रिका.' },
    hi: { name: 'रॉयल भारतीय शादी', description: 'सुनहरी नक्काशी के साथ पारंपरिक भारतीय शादी निमंत्रण.' },
  },
  // Natural pixel size of the Preview (used by the live-preview scaler + PDF export).
  width: 640,
  height: 900,
  Preview: RoyalWeddingTemplate,
  fields: [
    { name: 'brideName', label: 'Bride Name', type: 'text', placeholder: 'Sanika', defaultValue: 'Sanika' },
    { name: 'groomName', label: 'Groom Name', type: 'text', placeholder: 'Aarav', defaultValue: 'Aarav' },
    { name: 'weddingDate', label: 'Wedding Date', type: 'date', defaultValue: '2025-12-15' },
    {
      name: 'venue',
      label: 'Venue',
      type: 'text',
      placeholder: 'The Grand Palace, Jaipur',
      defaultValue: 'The Grand Palace, Jaipur',
    },
    {
      name: 'familyName',
      label: 'Family Name',
      type: 'text',
      placeholder: 'The Sharma Family',
      hint: 'Shown at the bottom as "with best compliments from".',
      defaultValue: 'The Sharma Family',
    },
  ],
}
