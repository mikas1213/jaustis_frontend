import styles from './Navbar.module.css';
import { type ReactElement } from 'react';

const Navbar = (): ReactElement => {
 

	return (
		<nav>
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
