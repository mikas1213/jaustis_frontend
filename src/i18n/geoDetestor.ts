// geoDetector.ts
export type LanguageCode = 'lt' | 'en' | 'no';

const countryToLanguage: Record<string, LanguageCode> = {
    'LT': 'lt',
    'NO': 'no',
    'US': 'en',
    'GB': 'en',
    'CA': 'en',
    'AU': 'en',
    'NZ': 'en',
    // pridėti daugiau pagal poreikį
};

export const geoDetector = {
    name: 'geo',
    lookup: async (): Promise<LanguageCode | null> => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            const countryCode = data.country_code;
            console.log('Aptikta šalis:', countryCode);
            
            if (typeof countryCode === 'string' && countryCode in countryToLanguage) {
                const detectedLang = countryToLanguage[countryCode];
                console.log('Geo detektorius: nustačiama kalba', detectedLang);
                return detectedLang;
            }
            
            console.log('Šalis neatpažinta, naudojama EN');
            return 'en'; // default
        } catch (err) {
            console.warn('Geo aptikimo klaida:', err);
            return null;
        }
    },
    
    cacheUserLanguage: (lng: string) => {
        // Išsaugojame detektorius nustatytą kalbą
        console.log('Geo detektorius išsaugo kalbą:', lng);
    }
};