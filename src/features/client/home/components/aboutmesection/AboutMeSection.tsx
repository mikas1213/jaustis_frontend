import styles from './AboutMeSection.module.css';
import { Container, Grid, Stack, Box } from '../../../../../components/ui';
import { useTranslation } from 'react-i18next';

const AboutMeSection = () => {
    const { t } = useTranslation();

    return (
        <Container as='section' padding='0'>
            <Grid space='var(--s-24)' className={styles.aboutMe}>
                <div className={styles.left} role='img' aria-label={t('aboutme:imgAlt')}></div>
                <Stack splitAfter={4}> 
                    <Box padding={['0', '0', 'var(--s-16)', 'var(--s-56)']} className={`font-rubik ${styles.greeting}`}>{t('aboutme:greeting')}</Box>
                    <Box padding={['0', '0', 'var(--s-48)', 'var(--s-56)']} className={`font-garamond ${styles.title}`}>{t('aboutme:title')}</Box>
                    <Box padding={['0', '0', 'var(--s-24)', 'var(--s-56)']} className={`font-rubik ${styles.about}`}>{t('aboutme:about1')}</Box>
                    <Box padding={['0', '0', '0', 'var(--s-56)']} className={`font-rubik ${styles.about}`}>{t('aboutme:about2')}</Box>
                    <Box padding={['0', '0', '0', 'var(--s-56)']} className={`font-garamond ${styles.signature}`}>
                        <span>{t('aboutme:signature')}</span>
                    </Box>
                </Stack>
            </Grid>
        </Container>
    );
};

export default AboutMeSection;