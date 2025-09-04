import { useState, useEffect } from 'react';

const useScrollDirection = (threshold: number = 0): boolean => {

	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = (): void => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > threshold && currentScrollY > lastScrollY) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);

	}, [lastScrollY, threshold]);

	return isVisible;
};

export default useScrollDirection;