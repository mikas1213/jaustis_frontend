import styles from './ReviewCard.module.css';
import { Cluster, Stack, Box } from '../../../../../../components/ui';
import { Star } from '../../../../../../components/ui/icons';
import formatUserInitials from '../../../../../../utils/formatUserInitials';
import { type Review } from '../types';

type ReviewCardProps = {
    review: Review,
    row: string
};

const ReviewCard = ({ review, row }: ReviewCardProps) => {
    
    const reviewCardClasses = [
        'font-rubik',
        styles.reviewCard
    ].join(' ');

    const initials = formatUserInitials(review, 'NS');
    const nameSurname = formatUserInitials(review, 'NameS');
    
    return (
        <Box className={reviewCardClasses} padding={['var(--s-24)']}>
            <Stack space='var(--s-16)'>
                <Cluster gap='var(--s-16)' align='center'>
                    <span className={`${styles.initials} ${styles[row]}`}>
                        {initials}
                    </span>
                    <Stack space='var(--s-4)'>
                        <span className={styles.userName}>{ nameSurname }</span>
                        <span className={styles.date}>2025-04-17</span>
                    </Stack>
                </Cluster>

                <Box>
                    <Cluster gap='var(--s-4)'>
                        {Array.from({ length: 5}).map((_, i) => <Star key={i}/>)}
                    </Cluster>
                    
                </Box>
                
                <Box className={styles.review}>
                    The epoxy floring system that Concrete Epoxy 101 Installed in my shoiwroom has really. 
                    View more...
                </Box>
            </Stack>
        </Box>
    );
};

export default ReviewCard;