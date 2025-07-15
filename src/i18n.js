import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ro',
    lng: 'ro',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // Aici definim de unde să ia fișierele JSON
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/translation.json`
    }
  });

export default i18n;
