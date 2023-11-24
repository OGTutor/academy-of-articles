import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '@/public/locales/en/translation.json';
import translationES from '@/public/locales/es/translation.json';

import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
	en: { translation: translationEN },
	es: { translation: translationES },
};

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
