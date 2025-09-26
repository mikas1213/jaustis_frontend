/**
 * @template T – A record type mapping 'left' and 'right' to string values.
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size='md'] – The size of the toggle. Controls padding and font size.
 * @param {string} [bgColor='var(bgColor)'] – Background color of the toggle wrapper. Accepts any valid CSS color.
 * @param {string} [tbColor='var(--white-100)'] – Tab background color. Applied via CSS variable.
 * @param {string} [txtColorOn='red'] – Text color for the active tab. Applied via CSS variable.
 * @param {string} [txtColorOff='red'] – Text color for the inactive tab. Applied via CSS variable.
 * @param {string} leftSide – Label for the left tab.
 * @param {string} rightSide – Label for the right tab.
 * @param {SidesConfig<T>} sides – An object mapping 'left' and 'right' to values of type T.
 * @param {(value: T[keyof T]) => void} onClick – Callback triggered when the toggle changes. Receives the selected value.
*/


import styles from './Toggle.module.css';
import type { CSSProperties } from 'react';
import { useState } from 'react';

type SidesConfig<T extends Record<string, string>> = T;
type ToggleProps<T extends Record<string, string>> = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    bgColor?: string,
    tbColor?: string,
    txtColorOn?: string,
    txtColorOff?: string,
    leftSide: string,
    rightSide: string,
    sides: SidesConfig<T>,
    onClick: (value: T[keyof T]) => void
};

type SideType = 'left' | 'right';

const Toggle = <T extends Record<string, string>>({ leftSide, rightSide, size = 'md', bgColor = 'var(bgColor)', tbColor='var(--white-100)', txtColorOn = 'red', txtColorOff = 'red', sides, onClick }: ToggleProps<T>) => {
    const [side, setSide] = useState<SideType>('left');

    const toggleClasses = [
        'font-rubik',
        styles[size],
        styles[side],
        styles.toggleWrapper

    ].join(' ');

    const handleOnChangeSides = (side_: SideType) => {
        setSide(side_);
        const value = sides[side_] as T[keyof T];
        onClick(value);
    };

    return (
        <div className={toggleClasses} style={{ backgroundColor: bgColor, '--txt-color-on': txtColorOn } as CSSProperties}>
            <div className={`font-rubik ${styles.toggle}`} style={{ '--tb-color': tbColor, '--txt-color-off': txtColorOff } as CSSProperties}>
                <div className={`${styles.tab} ${side === 'left' ? styles.active : ''}`} onClick={() => handleOnChangeSides('left')}>{ leftSide }</div>
                <div className={`${styles.tab} ${side === 'right' ? styles.active : ''}`} onClick={() => handleOnChangeSides('right')}>{ rightSide }</div>
            </div>
        </div>
    );
};

export default Toggle;