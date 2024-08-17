import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        window.scrollTo(0, 0)
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {loading && <Loading />}
            <Outlet />
        </>
    );
};

export default Layout;
