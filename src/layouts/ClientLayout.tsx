import { Outlet } from 'react-router';
import { Header, Footer } from '../components/layout';


const ClientLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default ClientLayout;
