import type { ReactNode } from 'react';
import styles from './ServiceCard.module.css';
import { Stack, Box, Icon } from '../../../../../../components/ui';
import { ServiceHeart, ServiceSun, ServiceCal } from '../../../../../../components/ui/icons';

type ServiceCardProps = {
    id?: string,
    icon: ReactNode,
    label: string,
    body: string
};

type HeaderProps = {
    id: 'psychotherapy' | 'consulting' | 'session-reservation',
    title: string
};

const ServiceCard = ({ id, icon, label, body }: ServiceCardProps) => {
    const serviceCardClasses = [
        'font-garamond',        
        styles[id as keyof typeof id]
    ].join(' ');

    return (
        <Box padding={['24px', '32px']} className={serviceCardClasses}>
            <Stack space='var(--s-16)'>
                 <Icon 
                    icon={icon}
                    label={label} 
                    align='center' 
                    size='1.2cap' 
                    className={styles.header} 
                />
                <Box className={`font-rubik ${styles.body}`}>
                    {body}
                </Box>
            </Stack>
        </Box>
    );
};

ServiceCard.Header = ({ id, title }: HeaderProps) => {
    let icon = id === 'psychotherapy' && <ServiceHeart fill='var(--accent-orange)' />;
    icon = id === 'consulting' && <ServiceSun fill='var(--accent-orange)' />;
    icon = id === 'session-reservation' && <ServiceCal fill='var(--accent-orange)' />;

    return (
        <Icon 
            icon={icon}
            label={title} 
            align='center' 
            size='1.2cap' 
            className={styles.header} 
        />
    );
};

export default ServiceCard;