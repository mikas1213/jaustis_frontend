import type { CSSProperties, ReactNode } from 'react';
import styles from './Container.module.css';

/**
 * @param {ReactNode} children – The content that will be constrained by width.
 * @param {string} [maxWidth='1200px'] – The maximum width of the container.
 * @param {string} [padding='1rem'] – Horizontal padding applied to the left and right sides.
 */


type ContainerProps = {
    children: ReactNode;
    maxWidth?: string;
    padding?: string;
};

const Container = ({ children, maxWidth = 'var(--layout-width)', padding = '1rem' }: ContainerProps) => {
    const containerStyle = {
        '--max-width': maxWidth,
        '--padding': padding
    } as CSSProperties;

    return (
        <div className={styles.container} style={containerStyle}>
            {children}
        </div>
    );
};

export default Container;