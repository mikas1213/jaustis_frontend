import styles from './Header.module.css';

import type { ReactElement } from 'react';
import Navbar from '../navbar/Navbar';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { importImageURL } from '../../../utils/importImage';

const Header = (): ReactElement => {
    const isVisible: boolean = useScrollDirection(86);
    const headerStyle = `${styles.header} ${isVisible ? styles.visible : styles.hidden}`;
    const img = importImageURL('../assets/svg/1.svg');

    return (
        <header 
            className={headerStyle}
        >
            <img src={img} alt='jaustis-logo' />
            <Navbar />
        </header>
    );
};

export default Header;