import styles from './FaqCard.module.css';
import { Stack, Box } from '../../../../../../components/ui';
import { useTranslation } from 'react-i18next';

const FaqCard = ({ faq }: { faq: string }) => {
    
    const { t } = useTranslation();

    return (
        <Stack className='font-rubik' space='var(--s-8)'>
            <Box className={styles.question}>{t(`faq:${faq}:question`)}</Box>
            <Box className={styles.answer}>{t(`faq:${faq}:answer`)}</Box>
        </Stack>

    );
};

export default FaqCard;