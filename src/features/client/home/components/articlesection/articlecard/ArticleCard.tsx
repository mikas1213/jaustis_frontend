import styles from './ArticleCard.module.css';
import { Cluster, Stack, Box, Icon } from '../../../../../../components/ui';
import { ShareArticle, Calendar, PersonFull, CircleArrowRight } from '../../../../../../components/ui/icons';
import { type ArticleProps } from '../types';
import type { CSSProperties } from 'react';

const ArticleCard = ({ article }: { article: ArticleProps }) => {
    const cardStyles = {
        ...(article.image ? { backgroundImage: `url(${article.image})` } : { backgroundColor: article.bgColor })
    } as CSSProperties;
    
    const articleCardClasses = [
        'font-rubik',
        styles.articleCard,
        styles[`cardShape_${article.settings.cardShape}`],
        styles[`fontTheme_${article.settings.fontTheme}`]
    ].join(' ');
    
    return (
        <div className={articleCardClasses}>
            <div className={styles.innerArticleCard} style={cardStyles} /*style={{backgroundImage: `url(${img})`}}*/>
                <Stack splitAfter={2}>
                    <Cluster justify='flex-end' className={styles.shareIcon}>
                        <ShareArticle fill={article.settings.fontTheme === 'light' ? 'var(--white-80)' : 'var(--true-grey-700)'} />
                    </Cluster>

                    <Box padding={['0', '40px']}>
                        <Stack className={styles.date} space='var(--s-2)'>
                            <Icon icon={<Calendar fill={article.settings.fontTheme === 'light' ? 'var(--white-80)' : 'var(--true-grey-700)'} />} sizeType='cap' size='1.6cap' align='center' label={article.date} />
                            <Box className={styles.title}>{ article.title}</Box>    
                        </Stack>
                        
                        <Box className={styles.body} padding={['var(--s-16)', '0']}>{ article.body }</Box>
                        <Box className={styles.more}>Daugiau...</Box>
                    </Box>                

                    <Box padding={['var(--s-12)']} className={styles.footer}>
                        <Icon label='Sandra Jatulytė' size='1.3cap' align='center' icon={<PersonFull fill={article.settings.fontTheme === 'light' ? 'var(--white-80)' : 'var(--true-grey-700)'} />} />
                    </Box>
                </Stack>
            </div>
        </div>
    );
};

export const HeaderCard = () => {
    
    return (
        <div className={`font-rubik ${styles.articleCard} ${styles.headerCard}`}>
            <div className={styles.innerArticleCard} style={{ backgroundColor: 'var(--white-100)'}}>
                
                    <Box padding={['40px']}>
                        <Box className={styles.title}>Pažink save</Box>    
                        <Box className={styles.subTitle}>Su meile be žalos</Box>    
                        <Box className={styles.body} padding={['var(--s-24)', '0']}>As the numbers of mobile users continues to outpace the number of desktop users</Box>
                        <Box className={styles.more}>
                            <span>SKAITYTI VISUS STRAIPSNIUS</span>
                            <CircleArrowRight />
                        </Box>
                    </Box>                
                
            </div>
        </div>
    );
};

export default ArticleCard;
