import styles from './HeroSection.module.css';
import { useEffect, type ReactElement } from 'react';

const HeroSection = (): ReactElement => {

    useEffect(() => {
        const handleScroll = (): void => {
            const scrolled: number = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;

            parallaxElements.forEach(el => {
                const speed: number = parseFloat(el.dataset.parallax || '0');
                const yPos: number = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;

            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

	return (
		<section className={styles.heroSection}>
			<div className={styles.parallaxContainer}>
				<div className={styles.backgroundImage} data-parallax='0.5' />
				<div className={styles.textOverlay} data-parallax='0.8'>
					<h1>Tavo tekstas čia</h1>
					<h2>Kitas tavo tekstas</h2>
					<h3>Kitas tavo tekstas</h3>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
