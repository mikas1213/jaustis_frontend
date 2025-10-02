import styles from './BookingSection.module.css';
import { Center } from '../../../../../../components/ui';
const BookingSection = () => {
    
    return (
        <Center as='section' maxWidth='100vw' intrinsic={true} className={styles.bookingSection}>
            <img src='/images/booking-section.png' alt="" />
        </Center>
    );
};

export default BookingSection;