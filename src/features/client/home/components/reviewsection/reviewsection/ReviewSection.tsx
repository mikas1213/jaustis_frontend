import styles from './ReviewSection.module.css';
import { Container, Center, Grid, Stack, Box } from '../../../../../../components/ui';
import ReviewCard from '../reviewcard';
import { useTranslation } from 'react-i18next';
import { type Review } from '../types';

const mockReviews: Review[] = [
    {
        id: 'U1',
        name: 'Mindaugas',
        surName: 'Petraitis',
        date: '2025-04-17',
        rating: 5,
        review: 'The epoxy flooring system that Concrete Epoxy 101 installed in my showroom has really exceeded my expectations...'
    },
    {
        id: 'U2',
        name: 'Jonas',
        surName: 'Kazlauskas',
        date: '2025-03-22',
        rating: 4,
        review: 'Puikus darbas, profesionalus aptarnavimas. Labai rekomenduoju šią įmonę...'
    },
    {
        id: 'U3',
        name: 'Rūta',
        surName: 'Stankeviče',
        date: '2025-02-15',
        rating: 5,
        review: 'Neįtikėtina kokybė! Grindys atrodo puikiai ir labai lengva prižiūrėti...'
    },
    {
        id: 'U4',
        name: 'Rūta',
        surName: 'Stankeviče',
        date: '2025-02-15',
        rating: 5,
        review: 'Neįtikėtina kokybė! Grindys atrodo puikiai ir labai lengva prižiūrėti...'
    },
    {
        id: 'U5',
        name: 'Kristina',
        surName: 'Namas',
        date: '2025-02-15',
        rating: 2,
        review: 'Neįtikėtina kokybė! Grindys atrodo puikiai ir labai lengva prižiūrėti...'
    },
    {
        id: 'U6',
        name: 'Ona',
        surName: 'Paparte',
        date: '2025-02-15',
        rating: 5,
        review: 'Neįtikėtina kokybė! Grindys atrodo puikiai ir labai lengva prižiūrėti...'
    },
    {
        id: 'U7',
        name: 'Rūta',
        surName: 'Stankeviče',
        date: '2025-02-15',
        rating: 3,
        review: 'Neįtikėtina kokybė! Grindys atrodo puikiai ir labai lengva prižiūrėti...'
    },
];

const ReviewSection = () => {
    const { t } = useTranslation();
    return (
        <Container as='section' maxWidth='100vw' padding='0' className={styles.reviewSection}>{ 
            <Container maxWidth='var(--layout-width)' padding='0'>
                <Stack space='var(--s-24)'>
                    <Center>
                        <Box className={`font-garamond ${styles.header}`} padding={['4rem', '0', '2.5rem']}>{t('reviews:header')}</Box>
                    </Center>
                    <Grid space='var(--s-24)'>
                        {mockReviews.slice(0, 4).map((review, i) => <ReviewCard key={review.id} row={`A${i+1}`} review={review} />)}
                    </Grid>

                    <Grid space='var(--s-24)'>
                       {mockReviews.slice(4, 7).map((review, i) => <ReviewCard key={review.id} row={`B${i+1}`} review={review} />)}
                    </Grid>
                </Stack>
                <Box padding={['0', '0', 'var(--s-56)']}>&nbsp;</Box>
            </Container>
        }</Container>
    );
};

export default ReviewSection;