import { Navigate, useLocation } from 'react-router';
import React from 'react';
import useMe from '../hooks/useMe';
import Loader from 'ui-component/Loader';

export default function UserBasedGuard({ children }) {
    const { me, loading } = useMe();
    const { pathname } = useLocation();
    if (loading) {
        return <Loader />;
    }
    const user = me && me;
    const to = pathname === '/' ? '' : `?redirect=${pathname}`;
    if (!user) {
        return <Navigate to={`/login${to}`} />;
    }
    return <>{children}</>;
}
