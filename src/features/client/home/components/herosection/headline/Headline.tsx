import styles from './Headline.module.css';
import { Cluster, Stack, Box } from '../../../../../../components/ui';
import { useTranslation } from 'react-i18next';

const Headline = ({ className = ''}: { className: string }) => {
    const { t } = useTranslation();

    return (
        <Cluster className={className}>
            <Stack>
                <Box padding={['278px', '0', '0', '0']} className={`${styles.tagline} font-rubik`}>
                    <h4>{t('headline:tagline')}</h4>
                </Box>
                <Box className={`font-garamond ${styles.titlePrimary}`}>
                    <h1>{t('headline:titleA')}&nbsp;
                        <span className={styles.highlight}>
                            {t('headline:titleB')}        
                        </span> 
                        &nbsp;{t('headline:titleC')}        
                    </h1>
                </Box>
                <Box className={`font-garamond ${styles.titleSecondary}`}>
                    <h1>{t('headline:titleD')}</h1>
                </Box>
            </Stack>    
        </Cluster>
    );
};

export default Headline;