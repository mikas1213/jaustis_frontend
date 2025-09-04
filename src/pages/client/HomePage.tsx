// import bgr from '../../assets/images/homepage/background.jpg';
// import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import HeroSection from '../../features/client/home/components/herosection';
import StatisticsSection from '../../features/client/home/components/statisticssection';

const HomePage = () => {
	return (
        <>
            <HeroSection />
            <StatisticsSection />
        </>
	);
};

export default HomePage;
