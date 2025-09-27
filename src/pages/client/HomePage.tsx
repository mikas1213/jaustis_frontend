import { 
    HeroSection, 
    StatisticsSection, 
    AboutMeSection, 
    PriceSection,
    BookingSection,
    ReviewSection
} from '../../features/client/home/components';

const HomePage = () => {
	return (
        <>
            <HeroSection />
            <StatisticsSection />
            <AboutMeSection />
            <PriceSection />
            <BookingSection />
            <ReviewSection />
        </>
	);
};

export default HomePage;
