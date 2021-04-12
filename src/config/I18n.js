import i18next from 'i18next';
import textSpanish from '../domain/assets/i18n/es.json';

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'es', // 'en' | 'es'
    resources: textSpanish
  });

export default i18next