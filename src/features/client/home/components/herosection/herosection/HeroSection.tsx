import styles from './HeroSection.module.css';
import { type ReactElement } from 'react';
import { Container, Stack } from '../../../../../../components/ui';
import Headline from '../headline';
import ServiceCards from '../servicecards';
import { useParallax, useIsLoaded } from '../../../hooks';

const services = ['psychotherapy', 'consulting', 'session-reservation'] as const;
const HeroSection = (): ReactElement => {
    
    useParallax(`.${styles.parallax}`, 0.2);
    const isLoaded = useIsLoaded();

	return (
		<Container as='section' maxWidth='100vw' padding='0' className={styles.heroSection}>
            <Container padding='0'>
                <Stack space='96px' className={styles.parallax}>
                    <Headline className={`${styles.headline} ${isLoaded ? styles.loaded : ''}`} />
                    <ServiceCards services={services} className={`${styles.serviceCards} ${isLoaded ? styles.loaded : ''}`} />
                </Stack>
            </Container>
		</Container>
    )
};

export default HeroSection;