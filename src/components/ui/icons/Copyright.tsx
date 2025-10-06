import { type IconProps } from './types';

const Copyright = ({ fill = 'white' }: IconProps) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_1372_1564)'>
				<path
					d='M7.99992 14.6668C11.6818 14.6668 14.6666 11.6821 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668Z'
					stroke={fill ?? undefined}
					strokeOpacity='0.8'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M9.88668 9.88683C9.51363 10.2595 9.03847 10.5132 8.52127 10.6158C8.00406 10.7185 7.46804 10.6655 6.98094 10.4636C6.49384 10.2616 6.07754 9.91984 5.78466 9.48138C5.49177 9.04291 5.33545 8.52745 5.33545 8.00016C5.33545 7.47287 5.49177 6.95742 5.78466 6.51895C6.07754 6.08049 6.49384 5.73869 6.98094 5.53677C7.46804 5.33485 8.00406 5.28187 8.52127 5.38452C9.03847 5.48717 9.51363 5.74085 9.88668 6.1135'
					stroke={fill ?? undefined}
					strokeOpacity='0.8'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1372_1564'>
					<rect width='16' height='16' fill={fill ?? undefined} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Copyright;
