import styles from './Navbar.module.css';

import { type ReactNode } from 'react';
import { Link } from 'react-router';
import { Cluster } from '../../ui';

interface NavProps { children: ReactNode };
interface ItemProps extends NavProps {
    to: string,
    active?: boolean
}

const Navbar = ({ children }: NavProps) => {
	return (
        <Cluster as='nav' className={styles.navbar}>
            <ul className={styles.navbarMenu}>{children}</ul>
        </Cluster>
	);
};

const Item = ({ children, to, active}: ItemProps) => {
    return (
        <li className={`${styles.navbarItem} ${active ? styles.active : ''}`}>
            <Link to={to}>{children}</Link>
        </li>
    );
};

Navbar.Item = Item;

export default Navbar;
