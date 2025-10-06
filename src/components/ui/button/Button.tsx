import styles from './Button.module.css';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'xs' | 'sm' | 'md' | 'lg'
    label: string,
    icon?: ReactNode,
    className?: string
};

const Button = ({ size = 'md', label, icon = null, className, ...props }: ButtonProps) => {
    const buttonClasses = [
        'font-rubik',
        className,
        styles.button,
        styles[size]
    ].filter(Boolean).join(' ');

    return (
        <button className={buttonClasses} {...props}>
            { icon && icon }
            { label }
        </button>
    );
};

export default Button;
