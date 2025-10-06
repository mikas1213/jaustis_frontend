import { Outlet } from 'react-router';
import { Header, Footer } from '../components/layout';
import { ActiveSectionProvider } from '../contexts';

const ClientLayout = () => {
	return (
		<ActiveSectionProvider>
			<Header />
			<Outlet />
			<Footer />
		</ActiveSectionProvider>
	);
};

export default ClientLayout;
