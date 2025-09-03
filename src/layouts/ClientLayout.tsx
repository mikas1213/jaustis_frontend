import { Outlet } from 'react-router';

const ClientLayout = () => {
    return (
        <>
            <h3>Header</h3>
            <Outlet />
            <h4>Footer</h4>

        </>
    );
};

export default ClientLayout;