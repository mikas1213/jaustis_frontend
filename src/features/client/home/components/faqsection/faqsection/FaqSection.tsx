import styles from './FaqSection.module.css';
import { Container, Center, Grid, Box } from '../../../../../../components/ui';
import { useTranslation } from 'react-i18next';
import FaqCard from '../faqcard';

const FaqSection = () => {
    const { t } = useTranslation();

    return (
        <Container id='faq' as='section' maxWidth='100vw' padding='0' className={styles.faqSection}>
            <Container maxWidth='var(--layout-width)' padding='0' className={styles.innerFaqSection}>
                <Center maxWidth='var(--layout-width)' intrinsic={true}>
                    <Box padding={['var(--s-56)']} className={`font-garamond ${styles.header}`}>{t('faq:header')}</Box>
                    <Grid min='400px' space='var(--s-40)'>
                        {Array.from({ length: 6}).map((_, i) => <FaqCard key={i} faq={`q${i+1}`} />)}
                    </Grid>
                </Center>
            </Container>
        </Container>
    );
};

export default FaqSection;