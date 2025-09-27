import styles from './BookingSection.module.css';
import { importImageURL } from '../../../../../../utils/importImage';
import { Center } from '../../../../../../components/ui';

const bookingImg = importImageURL('/src/assets/images/homepage/booking-section.png');
const BookingSection = () => {
    
    return (
        <Center maxWidth='100vw' intrinsic={true} className={styles.bookingSection}>
            <img src={bookingImg} alt="" />
        </Center>
    );
};

export default BookingSection;