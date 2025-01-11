import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import zh_cn from './locales/zh_cn.json';

let isInitialized = false;

// Define a function to initialize i18next
export const initializeI18n = async () => {
    if (!isInitialized) {
        await i18next
            .use(LanguageDetector) // Use language detector to determine user's language
            .init({
                fallbackLng: 'en', // Fallback language if detection fails or translation is missing
                returnEmptyString: false, // Use fallback language if i18next-parser put in empty value for untranslated text
                resources: {
                    en: { translation: en },
                    zh_cn: { translation: zh_cn },
                },
            });
        isInitialized = true;
    }
};

export const i18n = new Proxy(i18next, {
    get(target, prop) {
        if (!isInitialized && prop === 't') {
            throw new Error('i18n.t() called before initialization. Call initializeI18n() first.');
        }
        return Reflect.get(target, prop);
    },
});
