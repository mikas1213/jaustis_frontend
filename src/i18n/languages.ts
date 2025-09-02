type Language = {
	name: 'LT' | 'EN' | 'NO';
    icon: string;
};

type LanguageCode = 'lt' | 'en' | 'no';


export const languages: Record<LanguageCode, Language> = {
	lt: { name: 'LT', icon: '🇱🇹' },
	en: { name: 'EN', icon: '🇬🇧' },
	no: { name: 'NO', icon: '🇳🇴' }
};
 