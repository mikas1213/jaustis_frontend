import { type IconProps } from './types';

const Trending = ({ fill }: IconProps) => {
	return (
		<svg
			width='28'
			height='16'
			viewBox='0 0 28 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1.96 16L0 14.1333L10.36 4.2L15.96 9.53333L23.24 2.66667H19.6V0H28V8H25.2V4.53333L15.96 13.3333L10.36 8L1.96 16Z'
				fill={fill ?? undefined}
			/>
		</svg>
	);
};

export default Trending;
