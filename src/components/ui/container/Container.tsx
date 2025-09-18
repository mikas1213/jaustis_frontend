import type { CSSProperties, ReactNode } from 'react';
import { forwardRef } from 'react';
import styles from './Container.module.css';

/**
 * @param {ReactNode} children – The content that will be constrained by width.
 * @param {string} [maxWidth='1200px'] – The maximum width of the container.
 * @param {string} [padding='1rem'] – Horizontal padding applied to the left and right sides.
 * @param {string} [className] – Additional CSS class names to apply to the container.
 * @param {string} [className] – Additional CSS class names to apply to the container.
 */


type ContainerProps = {
    children: ReactNode;
    maxWidth?: string;
    padding?: string;
    className?: string;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, maxWidth = 'var(--layout-width)', padding = '1rem', className = ''}, ref) => {
    const containerStyle = {
        '--max-width': maxWidth,
        '--padding': padding
    } as CSSProperties;

    return (
        <div ref={ref} className={`${styles.container} ${className}`} style={containerStyle}>
            {children}
        </div>
    );
});

export default Container;