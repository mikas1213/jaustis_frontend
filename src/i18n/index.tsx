import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ltLang from './locales/lt/navbar.json';
import enLang from './locales/en/navbar.json';
import noLang from './locales/no/navbar.json';

// const resources = {
//     lt: { navigation: ltLang },
//     en: { navigation: enLang },
//     no: { navigation: noLang }
// };

const resources = {
	lt: ltLang,
	en: enLang,
	no: noLang,
};

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: 'lt',
		fallbackLng: 'lt',
		// debug: true,
		resources,
		// ns: ['navbar', 'button'],
		// defaultNS: 'common',
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['localStorage', 'cookie', 'navigator'],
			lookupLocalStorage: 'i18nextLng',
			caches: ['localStorage'],
		},
	});

export default i18next;
