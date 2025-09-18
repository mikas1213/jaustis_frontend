import styles from './HeroSection.module.css';
import { useEffect, type ReactElement } from 'react';
import { Container } from '../../../../../components/ui';

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
            <Container padding='0'>
                asdf
            </Container>
        {/* //     <div className={styles.backgroundCover}/>
		// 	<div className={styles.parallaxContainer}>
		// 		<div className={styles.backgroundImage} data-parallax='0.0' />
		// 		<div className={styles.textOverlay} data-parallax='0.1'>
		// 			<h1>Tavo tekstas čia</h1>
		// 			<h2>Kitas tavo tekstas</h2>
		// 			<h3>Kitas tavo tekstas</h3>
		// 		</div>
		// 	</div> */}
		</section>
//         <section className={styles.heroSection}>
//             <Container>
// asf
//             </Container>
//         </section>
	);
};

export default HeroSection;
