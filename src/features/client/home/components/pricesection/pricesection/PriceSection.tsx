import styles from './PriceSection.module.css';
import { useState, type ReactElement } from 'react';
import { Container, Center, Grid, Box, Toggle } from '../../../../../../components/ui';
import PriceCard from '../priceCard';
import { useTranslation } from 'react-i18next';
import { PriceOrange, PriceGreen, PriceBlue } from '../../../../../../components/ui/icons';

const plans = ['basic', 'standard', 'premium'] as const;
const sides = {
    left: 'personal',
    right: 'pair'
} as const;

type TerapyType = typeof sides[keyof typeof sides];
type PlanType = typeof plans[number];

const iconMap: Record<PlanType, ReactElement> = {
    'basic': <PriceOrange />,
    'standard': <PriceGreen />,
    'premium': <PriceBlue />
};

const pricesMap: Record<PlanType, Record<TerapyType, number>> = {
    basic: { personal: 49, pair: 79 },
    standard: { personal: 45, pair: 65 },
    premium: { personal: 39, pair: 59 }
}


const PriceSection = () => {
    const { t } = useTranslation();
    const [terapy, setTerapy] = useState<TerapyType>(sides.left);
    
    return (
        <Container id='price' as='section' padding='0' maxWidth='100vw' className={styles.priceSection}>
            <Container padding='0'>
                <Center intrinsic={true} maxWidth='100%'>
                    <Box className={`font-garamond ${styles.header}`} padding={['5rem']}>{ t('prices:header') }</Box>
                </Center>

                <Grid>
                    {plans.map(card => (
                        <PriceCard 
                            key={card} 
                            card={card} 
                            icon={iconMap[card]} 
                            firstRow={t('prices:firstRow')}
                            label={t(`prices:${card}`)} 
                            price={pricesMap[card][terapy]} 
                            priceTag={t('prices:priceTag')} 
                        />
                    ))}
                </Grid>

                <Center intrinsic={true} maxWidth='var(--layout-width)'>
                    <Box padding={['5rem', '0']}>
                        <Toggle 
                            size='md'
                            bgColor='var(--true-grey-100)' 
                            tbColor='var(--white-100)'
                            txtColorOn='var(--dark-green)'
                            txtColorOff='var(--true-grey-500)'
                            leftSide='Asmeninis'
                            rightSide='Poros'
                            sides={sides}
                            onClick={setTerapy}
                        />
                    </Box>
                </Center>
            </Container>
        </Container>
    );
};

export default PriceSection;


