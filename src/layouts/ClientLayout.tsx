import { Outlet } from 'react-router';
import { Header } from '../components/layout';

const ClientLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<h4>Footer</h4>
		</>
	);
};

export default ClientLayout;
