import styles from './Cluster.module.css';
import type { CSSProperties, ReactNode } from 'react';

/**
 * @param {ReactNode} children – The elements to be visually grouped together.
 * @param {string} [justify='flex-start'] – Defines horizontal alignment of items using CSS `justify-content`.
 * @param {string} [align='flex-start'] – Defines vertical alignment of items using CSS `align-items`.
 * @param {string} [space='var(--s1)'] – Sets the spacing between items via CSS `gap`.
 */

type Justify = 'flex-start' |'center' |'flex-end' |'space-between' |'space-around' | 'space-evenly';
type Align = 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';

type ClusterProps = {
    children: ReactNode,
    justify?: Justify,
    align?: Align,
    space?: string
}

const Cluster = ({ children, justify, align, space }: ClusterProps) => {
    const clusterStyle = {
        '--space': space,
        '--justify': justify,
        '--align': align
    } as CSSProperties;

    return (
        <div className={styles.cluster} style={clusterStyle}>
            { children }
        </div>
    );
};

export default Cluster;