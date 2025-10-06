import { type IconProps } from './types';

const Copy = ({ fill = '#ffffff' }: IconProps) => {
	return (
		<svg
			width='20'
			height='22'
			viewBox='0 0 20 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M17.5 18H6.5C5.95 18 5.47917 17.8042 5.0875 17.4125C4.69583 17.0208 4.5 16.55 4.5 16V2C4.5 1.45 4.69583 0.979167 5.0875 0.5875C5.47917 0.195833 5.95 0 6.5 0H13.5L19.5 6V16C19.5 16.55 19.3042 17.0208 18.9125 17.4125C18.5208 17.8042 18.05 18 17.5 18ZM12.5 7V2H6.5V16H17.5V7H12.5ZM2.5 22C1.95 22 1.47917 21.8042 1.0875 21.4125C0.695833 21.0208 0.5 20.55 0.5 20V6H2.5V20H13.5V22H2.5Z'
				fill={fill ?? undefined}
			/>
		</svg>
	);
};

export default Copy;
