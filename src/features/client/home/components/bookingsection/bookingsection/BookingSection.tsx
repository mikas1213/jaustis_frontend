import styles from './BookingSection.module.css';
import { Container, Center } from '../../../../../../components/ui';
const BookingSection = () => {
	return (
		<Container id='booking' as='section' maxWidth='100vw'>
			<Center
				as='section'
				intrinsic={true}
				className={styles.bookingSection}
			>
				<img src='/images/booking-section.png' alt='' />
			</Center>
		</Container>
	);
};

export default BookingSection;
