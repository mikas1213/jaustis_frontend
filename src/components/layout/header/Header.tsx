import styles from './Header.module.css';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { JaustisLogo } from '../../ui/icons';
import Navbar from '../navbar/Navbar';
import Auth from '../auth/Auth';
import { Cluster, Container  } from '../../ui';
import LangToggle from '../langToggle/LangToggle';
import { useTranslation } from 'react-i18next';
import { scrollToElement } from '../../../utils/scrolltoElement';

const navItems = ['about', 'price', 'reservation', 'articles', 'faq', 'mano-sesijos'] as const;

const Header = () => {
    const { t } = useTranslation(); 
    const isVisible: boolean = useScrollDirection(50);
    const isVisibleStyle = `${isVisible ? styles.visible : styles.hidden}`;
    
    const logoClasses = [
        styles.logoSize,
        isVisibleStyle
    ].join(' ');

    const handleScrollToTop = () => scrollToElement('hero', 0);
    
    return (        
        <header className={styles.header}>
            <Container padding='0'>
                <Cluster justify='space-between' align='center'>
                    <JaustisLogo className={logoClasses} cursorPointer={true} onClick={handleScrollToTop} />

                    <Navbar>
                        {navItems.map(item => <Navbar.Item key={item} section={item}>{t(`navbar:${item}`)}</Navbar.Item>)}
                    </Navbar>
                    
                    <Cluster gap='var(--s-16)' className={isVisibleStyle}>
                        <LangToggle />
                        <Auth />
                    </Cluster>
                </Cluster>
            </Container>
        </header>
    );
};

export default Header;