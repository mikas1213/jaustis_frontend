import styles from './ArticleSection.module.css';
import { Container } from '../../../../../../components/ui';
import ArticleCard from '../articlecard';
import { HeaderCard } from '../articlecard/ArticleCard';
import { type ArticleProps } from '../types';

const articles: ArticleProps[] = [
    {   
        id: 1,
        date: 'Gruodžio 4, 2025',
        title: 'Modern Lifestyle',
        body: 'As the numbers of mobile users continues to outpace the number of desktop users',
        image: null,
        bgColor: 'var(--dark-green)',
        settings: {
            cardShape: '1_1',
            fontTheme: 'light'
        }
    },
    {   
        id: 2,
        date: 'Gruodžio 4, 2025',
        title: 'Modern Lifestyle',
        body: 'As the numbers of mobile users continues to outpace the number of desktop users',
        image: '../assets/images/homepage/article2.webp',
        bgColor: null,
        settings: {
            cardShape: '1_1',
            fontTheme: 'light'
        }
    },
    {   
        id: 3,
        date: 'Gruodžio 4, 2025',
        title: 'Modern Lifestyle',
        body: 'As the numbers of mobile users continues to outpace the number of desktop users',
        image: '../assets/images/homepage/article1.webp',
        bgColor: null,
        settings: {
            cardShape: '2_1',
            fontTheme: 'light'
        }
    },
    {   
        id: 4,
        date: 'Gruodžio 4, 2025',
        title: 'Modern Lifestyle',
        body: 'As the numbers of mobile users continues to outpace the number of desktop users',
        image: '../assets/images/homepage/article2.webp',
        bgColor: null, 
        settings: {
            cardShape: '1_1',
            fontTheme: 'light'
        }
    },
    {   
        id: 5,
        date: 'Gruodžio 4, 2025',
        title: 'Modern Lifestyle',
        body: 'As the numbers of mobile users continues to outpace the number of desktop users',
        image: null,
        bgColor: 'var(--white-100)',
        settings: {
            cardShape: '1_1',
            fontTheme: 'dark'
        }
    }
];

const ArticleSection = () => {
    return (
        <Container as='section' maxWidth='100vw' padding='0'>
            <Container maxWidth='var(--layout-width)' padding='0'>
                <div className={styles.articles}>
                    <HeaderCard />
                    { articles.map(article => <ArticleCard key={article.id} article={article} />) }
                </div>
            </Container>
        </Container>
    );
};

export default ArticleSection;