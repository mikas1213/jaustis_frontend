import styles from './Header.module.css';
import useScrollDirection from '../../../hooks/useScrollDirection';

import { JaustisLogo } from '../../ui/icons';
import Navbar from '../navbar/Navbar';
import { Cluster, Container } from '../../ui';

const Header = () => {
    const isVisible: boolean = useScrollDirection(286);
    const isVisibleStyle = `${isVisible ? styles.visible : styles.hidden}`;

    const logoClasses = [
        styles.logoSize,
        isVisible ? styles.visible : styles.hidden
    ].join(' ');

    return (        
        <header className={styles.header}>
            <Container padding='0'>
                <Cluster justify='space-between' align='center'>
                    <JaustisLogo className={logoClasses} />
                    <Navbar />
                    <div className={isVisibleStyle}>Cia bus icons</div>
                </Cluster>
            </Container>
        </header>
    );
};

export default Header;