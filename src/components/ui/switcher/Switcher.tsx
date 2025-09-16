import type { CSSProperties, ReactNode } from 'react';
import styles from './Switcher.module.css';

/**
 * @param {ReactNode} children – The elements to be laid out in a switchable horizontal flow.
 * @param {string} [threshold='30rem'] – The minimum container width before items wrap.
 * @param {string} [space='1rem'] – The horizontal spacing (gutter) between items.
 * @param {2 | 3 | 4 | 5 | 6} [limit=4] – The maximum number of items allowed in a single row before wrapping.
 */

type SwitcherProps = {
    children: ReactNode,
    threshold?: string,
    space?: string,
    limit?: 2 | 3 | 4 | 5 | 6
};

const Switcher = ({ children, threshold = '30rem', space = '1rem', limit = 4}: SwitcherProps) => {
	
    const switcherClasses = [
        styles.switcher,
        styles[`limit${limit}`]
    ].join(' ');

	const switcherStyle = {
		'--threshold': threshold,
		'--gutter': space,
	} as CSSProperties;

	return (
		<div className={switcherClasses} style={switcherStyle}>
			{children}
		</div>
	);
};

export default Switcher;
