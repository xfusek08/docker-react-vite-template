// this file is a default file from: https://react.i18next.com/latest/using-with-hooks#configure-i18next
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import log from 'loglevel';
import { initReactI18next } from 'react-i18next';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: true, // NOTE: Set to true if you want to see unrecognized translation keys
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    })
    .catch((e) => {
        log.error('i18n init error:', e);
    });

export default i18n;
