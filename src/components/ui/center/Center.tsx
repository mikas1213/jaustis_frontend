import type { CSSProperties, ReactNode } from 'react';
import styles from './Center.module.css';

/**
 * @param {ReactNode} children – The content to be centered within the container.
 * @param {string} [max='var(--measure')] – The maximum width of the container.
 * @param {boolean} [textCenter=false] – If `true`, centers the text inside the container.
 * @param {string} [gutters='var(--s-0')] – Horizontal padding on the left and right sides.
 * @param {boolean} [intrinsic=false] – If `true`, the container width will shrink to fit its content.
 */

type CenterProps = {
	children: ReactNode,
	max?: string,
	textCenter?: boolean,
    gutters?: string,
    intrinsic?: boolean
};

const Center = ({ children, max = 'var(--measure)', textCenter = false, gutters = 'var(--s-0)', intrinsic = false }: CenterProps) => {
    
	const classNames = [
        styles.center, 
        textCenter ? styles.textCenter : '',
        intrinsic ? styles.intrinsic : ''
    ].filter(Boolean).join(' ');

    const centerStyle = {
        '--measure': max,
        '--s-0': gutters
    } as CSSProperties;

	return <div className={classNames} style={centerStyle}>{children}</div>;
};

export default Center;
