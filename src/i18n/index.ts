import { createI18n } from 'vue-i18n';
import en from './locales/en';
import km from './locales/km';

const savedLanguage = localStorage.getItem('language-store');
const initialLocale = savedLanguage ? JSON.parse(savedLanguage).currentLanguage.code : 'en';

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: initialLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    km
  },
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric'
      }
    },
    km: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    km: {
      currency: {
        style: 'currency',
        currency: 'KHR'
      }
    }
  },
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false,
  allowComposition: true,
  globalInjection: true
});

export default i18n; 