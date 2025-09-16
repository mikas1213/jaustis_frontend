import type { CSSProperties, ReactNode } from 'react';
import styles from './Grid.module.css';

/**
 * @param {ReactNode} children – The grid items to be displayed (e.g. cards, blocks).
 * @param {string} [space='1rem'] – The spacing between grid items. Applied as CSS `gap`.
 * @param {string} [min='250px'] – The minimum column width. Accepts any valid CSS length value.
 */

type GridProps = {
    children: ReactNode;
    space?: string;
    min?: string;
};

const Grid = ({ children, space = '1rem', min = '250px' }: GridProps) => {
    
    const gridStyle = {
        '--space': space,
        '--minimum': min
    } as CSSProperties;

    return (
        <div className={styles.grid} style={gridStyle}>
            {children}
        </div>
    );
};

export default Grid;