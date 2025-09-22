import type { CSSProperties, ReactNode } from 'react';
import styles from './Box.module.css';

/**
 * Box component for wrapping content with customizable padding, border width, and styling.
 *
 * @param {ReactNode} children – The inner content to be wrapped by the Box.
 * @param {string[]} [padding=['0']] – Padding values:
 *   - If the array contains 1 value → applies to both top/bottom and left/right.
 *   - If the array contains 2 values → interpreted as [top/bottom, left/right].
 * @param {string} [borderWidth='0px'] – CSS border width (e.g. '1px', '2px', '0').
 * @param {string} [className=''] – Additional CSS class names to apply to the Box.
 */

type BoxProps = {
    children: ReactNode,
    padding?: string[],
    borderWidth?: string
    className?: string
};

const Box = ({ children, padding = ['0'], borderWidth = '0', className = '', }: BoxProps) => {
    
    type PaddingArray = string[];
    const normalizePadding = (p: PaddingArray): [string, string, string, string] => {
        switch(p.length) {
            case 1: return [p[0], p[0], p[0], p[0]];
            case 2: return [p[0], p[1], p[0], p[1]];
            case 3: return [p[0], p[1], p[2], p[1]];
            case 4: return [p[0], p[1], p[2], p[3]];
            default: return ['0', '0', '0', '0'];
        }
    };

    const [t, r, b, l] = normalizePadding(padding);

    const boxClasses = [
        styles.box,
        className
    ].filter(Boolean).join(' ');
    
    const boxStyle = {
        '--pad-t': t,
        '--pad-r': r,
        '--pad-b': b,
        '--pad-l': l,
        '--border-width': borderWidth,
    } as CSSProperties;

    return (
        <div className={boxClasses} style={boxStyle}>{children}</div>
    );
};

export default Box;