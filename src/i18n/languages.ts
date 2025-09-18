type Language = {
    id: number,
	name: 'LT' | 'EN';
    icon: string;
};

type LanguageCode = 'lt' | 'en';


export const languages: Record<LanguageCode, Language> = {
	lt: { id: 1, name: 'LT', icon: '🇱🇹' },
	en: { id: 2, name: 'EN', icon: '🇬🇧' }
	// no: { id: 3, name: 'NO', icon: '🇳🇴' }
};
 