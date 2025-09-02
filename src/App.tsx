import './App.css';
import { useTranslation } from 'react-i18next';
import { languages } from './i18n/languages';

function App() {
    const { t, i18n } = useTranslation();

	return (
		<>
			<div>
                <ul style={{
                    listStyleType: 'none', 
                    padding: 0,
                    display: 'flex',
                    gap: '10px',
                    fontSize: '20px'
                }}>
                    <li>{t('navbar:about')}</li>
                    <li>{t('navbar:reservation')}</li>
                    <li>{t('navbar:price')}</li>
                    <li>{t('navbar:articles')}</li>
                    <li>{t('navbar:faq')}</li>
                    <button>{t('navbar:mySessions')}</button>
                    <button>{t('navbar:signin')}</button>
                </ul>
            </div>
            <div>
                {
                    Object.entries(languages).map(([code, lng]) => (
                        <button key={code} onClick={() => i18n.changeLanguage(code)}>{lng.name} {lng.icon}</button>
                    ))
                }
            </div>
		</>
	);
}

export default App;
 