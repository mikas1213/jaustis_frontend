import styles from './Header.module.css';
import type { ReactElement } from 'react';

import useScrollDirection from '../../../hooks/useScrollDirection';
import Navbar from '../navbar/Navbar';
import { JaustisLogo } from '../../ui/icons';

// import { importImageURL } from '../../../utils/importImage';

const Header = (): ReactElement => {
    const isVisible: boolean = useScrollDirection(286);
    const headerStyle = `${styles.header} ${isVisible ? styles.visible : styles.hidden}`;
    // const img = importImageURL('../assets/svg/1.svg');

    return (
        <header className={headerStyle}>
            {/* <img src={img} alt='jaustis-logo' /> */}
            <JaustisLogo width='200px'/>
            <Navbar />
        </header>
    );
};

export default Header;