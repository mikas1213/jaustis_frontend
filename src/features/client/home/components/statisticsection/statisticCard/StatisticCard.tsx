import styles from './StatisticCard.module.css';
import { Stack, Center, Box } from '../../../../../../components/ui';
import type { ReactNode } from 'react';

type ChildrenType = { children: ReactNode };
type StatisticCardProps = ChildrenType & {
    card: 'trending' | 'history' | 'check' | 'share',
};

const StatisticCard = ({ children, card }: StatisticCardProps) => {
    return (
        <Box padding={['6rem', '0']}>
            <Stack space='1.5rem' className={styles[card]}>
                <Center intrinsic={true}>
                    { children }
                </Center>
            </Stack>
        </Box>
    );
}

StatisticCard.Icon = ({ children }: ChildrenType) => <Box className={styles.icon}>{ children }</Box>;
StatisticCard.Value = ({ children }: ChildrenType) => <Box className={`font-garamond ${styles.value}`} padding={['1.5rem', '0']}>{ children }</Box>;
StatisticCard.Body = ({ children }: ChildrenType) => <Box  className={`font-rubik ${styles.body}`} padding={['0', '2rem']}>{ children }</Box>;

export default StatisticCard; 