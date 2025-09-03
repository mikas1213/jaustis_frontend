import { Outlet } from 'react-router';

const ClientLayout = () => {
	return (
		<div className='container'>
			
            
				<h3>Header</h3>
				<Outlet />
				<h4>Footer</h4>
            
			
		</div>
	);
};

export default ClientLayout;
