import { 
    HeroSection, 
    StatisticSection, 
    AboutMeSection, 
    PriceSection,
    BookingSection,
    ReviewSection,
    ArticleSection
} from '../../features/client/home/components';

const HomePage = () => {
	return (
        <>
            <HeroSection />
            <StatisticSection />
            <AboutMeSection />
            <PriceSection />
            <BookingSection />
            <ReviewSection />
            <ArticleSection />
        </>
	);
};

export default HomePage;
