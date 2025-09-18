import styles from './Header.module.css';
import useScrollDirection from '../../../hooks/useScrollDirection';

import { JaustisLogo } from '../../ui/icons';
import Navbar from '../navbar/Navbar';
import Auth from '../auth/Auth';

import { Cluster, Container  } from '../../ui';
import LangToggle from '../langToggle/LangToggle';

import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const isVisible: boolean = useScrollDirection(286);
    const isVisibleStyle = `${isVisible ? styles.visible : styles.hidden}`;

    const logoClasses = [
        styles.logoSize,
        isVisibleStyle
    ].join(' ');

    return (        
        <header className={styles.header}>
            <Container padding='0'>
                <Cluster justify='space-between' align='center'>
                    <JaustisLogo className={logoClasses} />
                    <Navbar>
                        <Navbar.Item to='/'>{t('navbar:about')}</Navbar.Item>
                        <Navbar.Item to='/kaina'>{t('navbar:price')}</Navbar.Item>
                        <Navbar.Item to='/rezervacija' active={isVisible}>{t('navbar:reservation')}</Navbar.Item>
                        <Navbar.Item to='/straipsniai'>{t('navbar:articles')}</Navbar.Item>
                        <Navbar.Item to='/duk'>{t('navbar:faq')}</Navbar.Item>
                    </Navbar>

                    <Cluster gap='var(--s-24)' className={isVisibleStyle}>
                        <LangToggle />
                        <Auth />
                    </Cluster>
                    
                </Cluster>
            </Container>
        </header>
    );
};

export default Header;