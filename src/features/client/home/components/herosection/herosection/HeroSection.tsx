import styles from './HeroSection.module.css';
import { type ReactElement } from 'react';
import { Container, Stack, Grid } from '../../../../../../components/ui';
import Headline from '../headline';
import ServiceCard from '../servicecard';
import { useParallax, useIsLoaded } from '../../../hooks';
import { useTranslation } from 'react-i18next';
import { ServiceHeart, ServiceSun, ServiceCal } from '../../../../../../components/ui/icons';

const services = ['psychotherapy', 'consulting', 'session-reservation'] as const;
type ServiceType = typeof services[number];

const iconMap: Record<ServiceType, ReactElement> = {
    'psychotherapy': <ServiceHeart fill='var(--accent-orange)' />, 
    'consulting': <ServiceSun fill='var(--accent-orange)' />, 
    'session-reservation': <ServiceCal fill='var(--accent-orange)' />
};

const HeroSection = (): ReactElement => {
    const { t } = useTranslation();
    useParallax(`.${styles.parallax}`, 0.2);
    const isLoaded = useIsLoaded();

	return (
		<Container id='hero' as='section' maxWidth='100vw' padding='0' className={styles.heroSection}>
            <Container padding='0'>
                <Stack space='96px' className={styles.parallax}>
                    <Headline className={`${styles.headline} ${isLoaded ? styles.loaded : ''}`} />
                    <Grid space='0' min='160px' className={`${styles.serviceCards} ${isLoaded ? styles.loaded : ''}`}>
                        {services.map(service => (
                            <ServiceCard 
                                key={service}
                                id={service} 
                                icon={iconMap[service]} 
                                label={t(`services:${service}:title`)}
                                body={t(`services:${service}:body`)}
                            />
                        ))}
                    </Grid>
                </Stack>
            </Container>
		</Container>
    )
};

export default HeroSection;