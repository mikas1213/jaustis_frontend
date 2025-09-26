import styles from './BookingSection.module.css';
import { importImageURL } from '../../../../../../utils/importImage';
const bookingImg = importImageURL('../../src/assets/images/homepage/booking-section.png');

const BookingSection = () => {
    
    return (
        <div className={styles.bookingSection}>
            <img src={bookingImg} alt="" />
            asdf
        </div>
    );
};

export default BookingSection;