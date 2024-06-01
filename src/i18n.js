// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LagugeDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LagugeDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'ar', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react : {
      useSuspense: false
    }
  });

export default i18n;
