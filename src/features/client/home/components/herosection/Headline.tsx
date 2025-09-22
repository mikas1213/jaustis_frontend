import styles from './Headline.module.css';
import { useState, useEffect } from 'react';
import { Cluster, Stack, Box } from '../../../../../components/ui';
import { useTranslation } from 'react-i18next';

const Headline = ({ className = ''}) => {

    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    return (
        <Cluster className={className}>
            <Stack className={isLoaded ? styles.loaded : ''}>
                <Box padding={['220px', '0', '0', '0']} className={`${styles.tagline} font-rubik`}>
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