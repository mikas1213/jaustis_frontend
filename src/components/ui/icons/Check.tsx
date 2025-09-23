import { type IconProps } from './types';

const Check = ({ fill }: IconProps) => {
	return (
		<svg
			width='32'
			height='18'
			viewBox='0 0 32 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.25571 18L0 9.54262L2.08219 7.44699L8.29224 13.8087L10.3379 15.9044L8.25571 18ZM16.5114 18L8.25571 9.54262L10.3014 7.40956L16.5114 13.7713L29.9543 0L32 2.13306L16.5114 18ZM16.5114 9.54262L14.4292 7.44699L21.6621 0.037422L23.7443 2.13306L16.5114 9.54262Z'
                fill={fill ?? undefined}
			/>
		</svg>
	);
};

export default Check;
