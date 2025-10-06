import React, { useState, type MouseEvent } from 'react';
import styles from './RippleButton.module.css';

interface Ripple {
	x: number;
	y: number;
	size: number;
	id: number;
}

interface RippleButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	onClick?: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({
	children,
	variant = 'primary',
	onClick,
}) => {
	const [ripples, setRipples] = useState<Ripple[]>([]);
	const rippleIdRef = React.useRef(0);

	const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
		const button = event.currentTarget;
		const rect = button.getBoundingClientRect();

		const size = Math.max(rect.width, rect.height) * 2;
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		const newRipple: Ripple = {
			x,
			y,
			size,
			id: rippleIdRef.current++,
		};

		setRipples((prev) => [...prev, newRipple]);

		setTimeout(() => {
			setRipples((prev) =>
				prev.filter((ripple) => ripple.id !== newRipple.id)
			);
		}, 600);
	};

	const handleClick = () => {
		if (onClick) onClick();
	};

	return (
		<button
			className={`${styles.rippleButton} ${
				variant === 'secondary' ? styles.secondary : ''
			}`}
			onMouseDown={createRipple}
			onClick={handleClick}
		>
			<span className={styles.buttonText}>{children}</span>
			<div className={styles.rippleContainer}>
				{ripples.map((ripple) => (
					<span
						key={ripple.id}
						className={styles.ripple}
						style={{
							left: `${ripple.x}px`,
							top: `${ripple.y}px`,
							width: `${ripple.size}px`,
							height: `${ripple.size}px`,
						}}
					/>
				))}
			</div>
		</button>
	);
};

export default RippleButton;