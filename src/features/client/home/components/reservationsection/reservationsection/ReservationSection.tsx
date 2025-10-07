import { Container, Center } from '../../../../../../components/ui';

const ReservationSection = () => {
	return (
		<Container id='reservation' as='section' maxWidth='100vw'>
			<Center
				as='section'
				intrinsic={true}
			>
				<img src='/images/booking-section.png' alt='' />
			</Center>
		</Container>
	);
};

export default ReservationSection;
