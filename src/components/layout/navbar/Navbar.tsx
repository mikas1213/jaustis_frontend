import styles from './Navbar.module.css';

import { type ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Cluster } from '../../ui';
import { useTranslation } from 'react-i18next';

interface NavProps { 
    children: ReactNode
};

interface ItemProps extends NavProps {
    to: string,
    active?: boolean,
    className?: string
}

const Navbar = ({ children }: NavProps) => {
    
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
  
    const navbarMenuClasses = [
        'font-garamond',
        styles.navbarMenu,
        styles[navbarWidthStyle],
    ].join(' ');

	return (
        <Cluster as='nav' className={styles.navbar}>
            <ul className={navbarMenuClasses}>{children}</ul>
        </Cluster>
	);
};

const Item = ({ children, to, active, className = ''}: ItemProps) => {
    
    const itemClasses = [
        className,
        styles.navbarItem,
        active ? styles.active : ''

    ].filter(Boolean).join(' ');

    return (
        <li className={itemClasses}>
            <Link to={to}>{children}</Link>
        </li>
    );
};

Navbar.Item = Item;

export default Navbar;
