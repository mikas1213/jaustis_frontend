import styles from './Input.module.css';
import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
    label?: string,
    error?: string,
    className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, className = '', ...props }, ref) => {
    const inputClasses = [
        'font-rubik',
        className,
        styles.inputGroup
    ].join(' ');
    
    return (
        <div className={inputClasses}>
            {label && (<label>{label}</label>)}
            <input ref={ref} {...props} />
            {error && (<span>{error}</span>)}
        </div>
    );
});

export default Input;