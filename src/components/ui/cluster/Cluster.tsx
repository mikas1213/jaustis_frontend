import styles from './Cluster.module.css';
import { forwardRef } from 'react';
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

/**
 * @param {ElementType} [as='div'] – The HTML element or React component to render as the container.
 * @param {ReactNode} children – The elements to be visually grouped together.
 * @param {string} [justify='flex-start'] – Defines horizontal alignment of items using CSS `justify-content`.
 * @param {string} [align='flex-start'] – Defines vertical alignment of items using CSS `align-items`.
 * @param {string} [gap='var(--s1)'] – Sets the spacing between items via CSS `gap`.
 * @param {string} [className] – Additional CSS class names to apply to the container.
 */

type Justify = 'flex-start' |'center' |'flex-end' |'space-between' |'space-around' | 'space-evenly';
type Align = 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';

type ClusterProps = {
    as?: ElementType,
    children: ReactNode,
    justify?: Justify,
    align?: Align,
    gap?: string,
    className?: string
} & HTMLAttributes<HTMLElement>

const Cluster = forwardRef<HTMLDivElement, ClusterProps>(({ as: Component = 'div', children, justify, align, gap, className = '', ...props}, ref) => {
    const clusterClasses = [
        styles.cluster,
        className
    ].join(' ');

    const clusterStyle = {
        '--gap': gap,
        '--justify': justify,
        '--align': align
    } as CSSProperties;

    return (
        <Component ref={ref} className={clusterClasses} style={clusterStyle} {...props}>
            { children }
        </Component>
    );
});

export default Cluster;