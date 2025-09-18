import styles from './LangToggle.module.css';
import { useState, useEffect } from 'react';
import { Cluster } from '../../ui';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../i18n/languages';

const LangToggle = () => {

    const { i18n } = useTranslation();
    const lngCount: number = Object.entries(languages).length;
    const [lngNr, setLngNr] = useState<number>(() => {
        const lng: string | null = (i18n.language || localStorage.getItem('jaustis_lng'))?.split('-')[0] || 'lt';
        return languages[lng as keyof typeof languages]?.id || 1
    });

    const [currentLanguate, setCurrentLanguage] = useState<string>(() => {
        const lng: string | null = i18n.language || localStorage.getItem('jaustis_lng');
        return lng?.split('-')[0] || 'lt';
    });

    const langToggleClasses = [
        styles.languages,
        styles[`language${lngCount}`],
        styles[`lang${lngNr}`],
        styles[currentLanguate]
    ].join(' ');
        

    useEffect(() => {
        const savedLang: string = localStorage.getItem('jaustis_lng')?.split('-')[0] || 'lt';
        setCurrentLanguage(savedLang);

        const handleLanguageChange = (lng: string) => {
            setCurrentLanguage(lng);
        }

        
        i18n.on('languageChanged', handleLanguageChange);
        
        return () => i18n.off('languageChanged', handleLanguageChange);
    }, [i18n]);


    return (
        <Cluster className={styles.languageToggle}>
            <Cluster gap='0' className={langToggleClasses}> 
                {Object.entries(languages).map(([key, value], i) => 
                    <div key={key} className={`${styles.flag} ${lngNr === i+1 ? styles.choosedLng : ''}`} onClick={() => {
                        i18n.changeLanguage(key);
                        setLngNr(i+1);
                    }}>{value.icon}</div>
                )}
            </Cluster>
        </Cluster>
    );
}; 

export default LangToggle;