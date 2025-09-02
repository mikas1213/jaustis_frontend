import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ltLang from './locales/lt.json';
import enLang from './locales/en.json';
import noLang from './locales/no.json';

const resources = {
	lt: ltLang,
	en: enLang,
	no: noLang,
};

i18next
	.use(initReactI18next)
    .use(LanguageDetector)
	.init({
		lng: 'lt',
		fallbackLng: 'lt',
		debug: false,
		resources,
		ns: ['navbar', 'button'],
		// defaultNS: 'common',
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: [
                'geo',
                'localStorage', 
                'cookie', 
                'navigator'
            ],
			lookupLocalStorage: 'jaustis_lng',

            lookupCookie: 'jaustis_lng',
            cookieMinutes: 10080, // 7 dienos
            cookieOptions: { path: '/', sameSite: 'strict' },

			caches: ['localStorage', 'cookie'],
		},
	});

export default i18next;
