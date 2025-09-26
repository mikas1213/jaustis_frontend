import { 
    HeroSection, 
    StatisticsSection, 
    AboutMeSection, 
    PriceSection,
    BookingSection
} from '../../features/client/home/components';

const HomePage = () => {
	return (
        <>
            <HeroSection />
            <StatisticsSection />
            <AboutMeSection />
            <PriceSection />
            <BookingSection />
        </>
	);
};

export default HomePage;
