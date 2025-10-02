import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

// ADMIN
import AdminLayout from './layouts';
import AdminHomePage from './pages/admin/AdminHomePage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

// CLIENT
import ClientLayout from './layouts';
import HomePage from './pages/client/HomePage';
// import AboutPage from './pages/client/AboutPage';

const hostname = window.location.hostname;
const isAdmin = hostname.startsWith('admin.');

const adminRoutes = [
	{
		path: '/',
		element: <AdminLayout />,
		children: [
			{ path: '/', element: <AdminHomePage /> },
			{ path: '/users', element: <AdminUsersPage /> }
		],
	},
	{ path: '*', element: <h1>404 Page Not Found</h1> },
];

const clientRoutes = [
	{
		path: '/',
		element: <ClientLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			// { path: '/about', element: <AboutPage /> }
		],
	},
    { path: '*', element: <h1>404 Page Not Found</h1> }
];

const router = createBrowserRouter(isAdmin ? adminRoutes : clientRoutes);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
