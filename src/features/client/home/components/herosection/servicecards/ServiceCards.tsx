import { Grid } from '../../../../../../components/ui';
import ServiceCard from '../servicecard/ServiceCard';
import { useTranslation } from 'react-i18next';

type ServiceType = 'psychotherapy' | 'consulting' | 'session-reservation' ;
type ServiceCardsProps = {
    services: readonly ServiceType[],
    className?: string
}

const ServiceCards = ({ services, className = '' }: ServiceCardsProps) => {
    const { t } = useTranslation();

    return (
        <Grid space='0' min='160px' className={className}>
            {services.map(card => (
                <ServiceCard key={card} id={card}>
                   <ServiceCard.Header id={card} title={t(`services:${card}:title`)} />
                   <ServiceCard.Body>
                        {t(`services:${card}:body`)}
                   </ServiceCard.Body>
                </ServiceCard>
            ))}
        </Grid>
    );
};

export default ServiceCards;