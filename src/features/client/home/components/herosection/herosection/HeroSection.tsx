import styles from './HeroSection.module.css';
import { useEffect, type ReactElement } from 'react';
import { Container, Stack } from '../../../../../../components/ui';
import Headline from '../headline';

const HeroSection = (): ReactElement => {

    useEffect(() => {

        const handleScroll = (): void => {
            const parallaxElement = document.querySelector(`.${styles.headline}`) as HTMLElement;
            const scrolled: number = window.pageYOffset;
            const speed: number = 0.3;
            const yPos: number = -(scrolled * speed);
            parallaxElement.style.transform = `translateY(${yPos}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

	return (
		<Container as='section' maxWidth='100vw' padding='0' className={styles.heroSection}>
            <Container padding='0'>
                <Stack>
                    <Headline className={styles.headline} />
                </Stack>
            </Container>
		</Container>
    )
};

export default HeroSection;
