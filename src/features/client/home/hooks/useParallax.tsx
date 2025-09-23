/**
 * @param {string} selector – CSS selector targeting the element to apply the parallax effect to.
 * @param {number} [speed=0.3] – Parallax scroll speed factor:
 * @example useParallax('.hero-image', 0.4);
 */

import { useEffect } from 'react';

const useParallax = (selector: string, speed: number = 0.3): void => {
	useEffect(() => {
		const handleScroll = (): void => {
			const parallaxElement = document.querySelector(selector) as HTMLElement;
			if (!parallaxElement) return;

			const scrolled: number = window.pageYOffset;
			const yPos: number = -(scrolled * speed);
			parallaxElement.style.transform = `translateY(${yPos}px)`;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [selector, speed]);
};

export default useParallax;
