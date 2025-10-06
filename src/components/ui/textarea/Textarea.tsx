import styles from './Textarea.module.css';
import { forwardRef, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string,
	error?: string,
    className?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, className = '', ...props }, ref) => {
        const textareaClasses = [
            'font-rubik',
            className,
            styles.textareaGroup
        ].join(' ');

		return (
			<div className={textareaClasses}>
				{label && (<label>{label}</label>)}
				<textarea ref={ref} {...props} />
                {error && <span>{error}</span>}
			</div>
		);
	}
);

export default Textarea;