import styles from './StatisticSection.module.css';
import { Container, Grid } from '../../../../../../components/ui';
import StatisticCard from '../statisticCard';
import { useTranslation } from 'react-i18next';
import { Trending, History, Check, Share } from '../../../../../../components/ui/icons';
import type { ReactElement } from 'react';

const statistics = ['trending', 'history', 'check', 'share'] as const;
type IconType = typeof statistics[number];
const iconMap: Record<IconType, ReactElement> = {
    'trending': <Trending fill='var(--white-100)' />,
    'history': <History fill='var(--white-100)' />,
    'check': <Check fill='var(--white-100)' />,
    'share': <Share fill='var(--white-100)' />
};
const valuesMap: Record<IconType, string> = {
    'trending': '95%',
    'history': '10+',
    'check': '500+',
    'share': '87%'
}

const StatisticSection = () => {
    const { t } = useTranslation();

	return (
		<Container id='statistics' as='section' maxWidth='100vw' padding='0' className={styles.statisticSection}>
            <Container padding='0'>
                <Grid min='100px' space='1rem'>
                    {statistics.map(stat => 
                        <StatisticCard key={stat} card={stat}>
                            <StatisticCard.Icon>{iconMap[stat]}</StatisticCard.Icon>
                            <StatisticCard.Value>{valuesMap[stat]}</StatisticCard.Value>
                            <StatisticCard.Body>{t(`statistics:${stat}`)}</StatisticCard.Body>
                        </StatisticCard>
                    )}
                </Grid>
            </Container>
		</Container>
	);
};

export default StatisticSection;
