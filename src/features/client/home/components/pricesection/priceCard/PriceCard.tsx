/**
 * @param {('xs' | 'sm' | 'md' | 'lg' | 'xl')} [size='md'] – The size of the toggle component.
 * @param {string} [bgColor='var(bgColor)'] – Background color (CSS color format or CSS variable).
 * @param {string} [tbColor='var(--white-100)'] – Active tab color.
 * @param {string} [txtColorOn='red'] – Text color for the active tab.
 * @param {string} [txtColorOff='red'] – Text color for the inactive tab.
 */

import styles from './PriceCard.module.css';
import { Center, Stack, Box } from '../../../../../../components/ui';
import type { ReactNode } from 'react';

type PriceCardProps = {
    card: 'basic' | 'standard' | 'premium',
    icon: ReactNode,
    firstRow: string,
    label: string,
    price: number,
    priceTag: string
};

const PriceCard = ({ card, icon, firstRow, label, price, priceTag }: PriceCardProps) => {
    return (
        <Center className={styles[card]}>
            <Stack>
                <Center intrinsic={true}>
                    <Box className={styles.icon}>{ icon }</Box>
                    <Box className={`font-rubik ${styles.label}`} padding={['2rem', '0', '1rem', '0']}>
                        <span>{ firstRow }</span>
                        <br />
                        <span>{ label }</span>
                    </Box>
                    <Box className={`font-garamond ${styles.price}`}><sup className={styles.sup}>€</sup>{ price }</Box>
                    <Box className={`font-garamond ${styles.priceTag}`} padding={['3rem', '0', '0', '0']}>{ priceTag }</Box>
                </Center>
            </Stack>
        </Center>
    );
};

export default PriceCard;