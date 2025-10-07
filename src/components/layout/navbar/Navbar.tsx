import styles from './Navbar.module.css';
import { type ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Cluster } from '../../ui';
import { useTranslation } from 'react-i18next';
import { useObserver } from '../../../contexts';
import { scrollToElement } from '../../../utils/scrolltoElement';

interface NavProps { 
    children: ReactNode
};

interface ItemProps extends NavProps {
    section?: string,
    active?: boolean,
    className?: string
}

const Navbar = ({ children }: NavProps) => {
    const { heroPassed } = useObserver();
    type Lng = 'lt' | 'en' | 'no';
    const { i18n } = useTranslation();
    const [navbarWidthStyle, setNavbarWidthStyle] = useState<Lng>(() => {
        return (i18n.language || localStorage.getItem('jaustis_lng') || 'lt').split('-')[0] as Lng;
    });
    
    useEffect(() => {
        const handleLanguageChange = (lng: Lng) => {
            setNavbarWidthStyle(lng);
        };

        i18n.on('languageChanged', handleLanguageChange);
        
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const navbarClasses = [
        styles.navbar,
        heroPassed && styles.heroPassed
    ].filter(Boolean).join(' ');
  
    const navbarMenuClasses = [
        'font-garamond',
        styles.navbarMenu,
        styles[navbarWidthStyle],
    ].join(' ');

	return (
        <Cluster as='nav' className={navbarClasses}>
            <ul className={navbarMenuClasses}>
                {children}
            </ul>
        </Cluster>
	);
};

const Item = ({ children, section, className = ''}: ItemProps) => {
    const { activeSection } = useObserver();
    const itemClasses = [
        className,
        styles.navbarItem,
        activeSection === section && styles.active
    ].filter(Boolean).join(' ');
    
    return (
        <li className={itemClasses}>
            {section && <>
                {section === 'mano-sesijos' ?
                    <Link to={section}>{children}</Link> :
                    <span onClick={() => scrollToElement(section, -32)} >{children}</span>
                }
            </>}
        </li>
    );
};

Navbar.Item = Item;

export default Navbar;
