import { Outlet } from 'react-router';

const AdminLayout = () => {
	return (
		<>
			<h3>Admnin Header</h3>
			<Outlet />
			<h4>Admin Footer</h4>
		</>
	);
};

export default AdminLayout;
