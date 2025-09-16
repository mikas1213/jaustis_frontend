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

const Box = ({ children, padding = ['0'], borderWidth = '0px', className = '', }: BoxProps) => {
    
    const tb: string = padding[0];
    const lr: string = padding.length === 2 ? padding[1] : tb;

    const boxClasses = [
        styles.box,
        className
    ].filter(Boolean).join(' ');
    
    const boxStyle = {
        '--padding-top-bottom': tb,
        '--padding-left-right': lr,
        '--border-width': borderWidth,
    } as CSSProperties;

    return (
        <div className={boxClasses} style={boxStyle}>{children}</div>
    );
};

export default Box;