import { Outlet } from 'react-router';
import { Header } from '../components/layout';

const ClientLayout = () => {
	return (
		<div className='container'>
			<Header />
			<Outlet />
			<h4>Footer</h4>
		</div>
	);
};

export default ClientLayout;
