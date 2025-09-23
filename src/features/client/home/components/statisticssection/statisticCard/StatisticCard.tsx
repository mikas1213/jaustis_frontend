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
            <Stack space='1.5rem' className={styles[card]}>{ children }</Stack>
        </Box>
    );
}

StatisticCard.Icon = ({ children }: ChildrenType) => <Center><Box className={styles.icon}>{ children }</Box></Center>;
StatisticCard.Value = ({ children }: ChildrenType) => <Center><Box className={`font-garamond ${styles.value}`}>{ children }</Box></Center>;
StatisticCard.Body = ({ children }: ChildrenType) => <Center><Box  className={`font-rubik ${styles.body}`}>{ children }</Box></Center>;

export default StatisticCard; 