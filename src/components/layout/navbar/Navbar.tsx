import styles from './navbar.module.css';
import { useState, useEffect, type ReactElement } from 'react';

const Navbar = (): ReactElement => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const navbarClass = `${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`;

    useEffect(() => {
        const handleScroll = (): void => {
            const currentScrollY = window.scrollY;

            if(currentScrollY > 100 && currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [lastScrollY]);

	return (
		<nav className={navbarClass}>
			<div className='navContent'>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
