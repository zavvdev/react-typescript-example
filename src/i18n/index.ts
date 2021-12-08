import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import {
  APP_LANGUAGES,
  APP_DEFAULT_LANGUAGE, I18N_LOCAL_STORAGE_KEY,
} from 'src/constants';
import enLocales from 'src/i18n/locales/en';
import ruLocales from 'src/i18n/locales/ru';

const resources = {
  [APP_LANGUAGES.en]: enLocales,
  [APP_LANGUAGES.ru]: ruLocales,
};

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: 'languageDetector',
  lookup() {
    let appLanguage = APP_DEFAULT_LANGUAGE;

    const locale = window.navigator.language;
    const localeShort = locale.split(/_|-/)[0];
    const storeLang = localStorage.getItem(I18N_LOCAL_STORAGE_KEY);

    const isPresent = Object.values(APP_LANGUAGES).find(
      (item) => item === localeShort,
    );

    if (storeLang) {
      appLanguage = storeLang;
    } else if (isPresent) {
      appLanguage = localeShort;
    }

    return appLanguage;
  },
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: APP_DEFAULT_LANGUAGE,
    react: {
      useSuspense: true,
    },
    detection: {
      order: ['languageDetector', 'localStorage'],
    },
  });

export default i18n;
