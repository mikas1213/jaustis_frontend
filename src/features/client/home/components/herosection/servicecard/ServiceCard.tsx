import type { ReactNode } from 'react';
import styles from './ServiceCard.module.css';
import { Stack, Box, Icon } from '../../../../../../components/ui';
import { ServiceHeart, ServiceSun, ServiceCal } from '../../../../../../components/ui/icons';

type ServiceCardProps = {
    children: ReactNode,
    id?: string
};

type HeaderProps = {
    id: 'psychotherapy' | 'consulting' | 'session-reservation',
    title: string
};

const ServiceCard = ({ children, id }: ServiceCardProps) => {
    const serviceCardClasses = [
        styles[id as keyof typeof id],
        'font-garamond'        
    ].join(' ');

    return (
        <Box padding={['24px', '32px']} className={serviceCardClasses}>
            <Stack space='var(--s-16)'>
                { children }
            </Stack>
        </Box>
    );
};

ServiceCard.Header = ({ id, title }: HeaderProps) => {
    return (
        <Icon label={title} align='center' className={styles.header}>
            {id === 'psychotherapy' && <ServiceHeart fill='var(--accent-orange)' />}
            {id === 'consulting' && <ServiceSun fill='var(--accent-orange)' />}
            {id === 'session-reservation' && <ServiceCal fill='var(--accent-orange)' />}
        </Icon>
    );
};

ServiceCard.Body = ({ children }: ServiceCardProps) => {
    return (
        <Box className={`font-rubik ${styles.body}`}>
            {children}
        </Box>
    );
};

export default ServiceCard;