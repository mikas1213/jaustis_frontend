import { useEffect } from 'react';

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

// import { useTranslation } from 'react-i18next';
// import { languages } from './i18n/languages';

// ADMIN
import AdminLayout from './layouts';
import AdminHomePage from './pages/admin/AdminHomePage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

// CLIENT
import ClientLayout from './layouts';
import HomePage from './pages/client/HomePage';
import AboutPage from './pages/client/AboutPage';

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
			{ path: '/about', element: <AboutPage /> }
		],
	},
    { path: '*', element: <h1>404 Page Not Found</h1> }
];

const router = createBrowserRouter(isAdmin ? adminRoutes : clientRoutes);

function App() {
    
	return <RouterProvider router={router} />;
	/*
    const { t, i18n } = useTranslation();
	return (
		<>
			<div>
                <ul style={{
                    listStyleType: 'none', 
                    padding: 0,
                    display: 'flex',
                    gap: '10px',
                    fontSize: '20px'
                }}>
                    <li>{t('navbar:about')}</li>
                    <li>{t('navbar:reservation')}</li>
                    <li>{t('navbar:price')}</li>
                    <li>{t('navbar:articles')}</li>
                    <li>{t('navbar:faq')}</li>
                    <button>{t('navbar:mySessions')}</button>
                    <button>{t('navbar:signin')}</button>
                </ul>
            </div>
            <div>
                {
                    Object.entries(languages).map(([code, lng]) => (
                        <button key={code} onClick={() => i18n.changeLanguage(code)}>{lng.name} {lng.icon}</button>
                    ))
                }
            </div>
		</>
	);
    */
}

export default App;
