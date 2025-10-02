import type { ReactNode } from 'react';
import styles from './Icon.module.css';

/**
 * @param {ReactNode} children - vidinis turinys
 * @property {string} label=null Turns the element into an image in assistive technologies and adds an aria-label of the value
 * @property {string} space=null The space between the text and the icon. If null, natural word spacing is preserved
 * @property {string} dir=null Text direction 'ltr' | 'rtl'
 * @property {'cap' | 'ex'} [sizeType='cap'] – Controls vertical sizing alignment
 * @property {string} [size='1cap'] Controls icon size
 * @property {'baseline' | 'center'} [align='baseline'] – Sets the `align-items` style for vertical positioning:
*/

type IconProps = {
    icon: ReactNode,
    className?: string,
    label?: string | null,
    space?: string | null,
    dir?: 'ltr' | 'rtl',
    sizeType?: 'cap' | 'ex'
    size?: string,
    align?: 'baseline' | 'center'
};

const Icon = ({ icon, className = '', label = null, space = '0.33em', dir = 'ltr', sizeType = 'cap', size = '1cap', align = 'baseline'}: IconProps) => {

    const classNames = [
        styles.icon,
        sizeType === 'cap' ? styles.cap : styles.ex,
        className
    ].filter(Boolean).join(' ');
    
    const iconStyle = {
        '--icon-space': space,
        '--icon-size': size,
        '--dir': dir,
        alignItems: align
    };

    const accessibilityProps = label ? {
        role: 'img',
        'aria-label': label
    } : {};

    return (
        <span className={classNames} { ...accessibilityProps } style={iconStyle}>
            { icon }
            { label }
        </span>
    );
};

export default Icon;
