import { Outlet } from 'react-router';
import { Header, Footer } from '../components/layout';
import { ObserverProvider } from '../contexts';

const ClientLayout = () => {
	return (
		<ObserverProvider>
			<Header />
			<Outlet />
			<Footer />
		</ObserverProvider>
	);
};

export default ClientLayout;
