import { 
    HeroSection, 
    StatisticSection, 
    AboutMeSection, 
    PriceSection,
    BookingSection,
    ReviewSection
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
        </>
	);
};

export default HomePage;
