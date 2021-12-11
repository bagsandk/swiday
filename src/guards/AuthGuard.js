import useMe from 'hooks/useMe';
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from 'ui-component/Loader';

export default function AuthGuard({ children }) {
    const { me, loading } = useMe();
    if (loading) {
        return <Loader />;
    }
    const user = me && me;
    console.log(user, 'aa');
    const queryParams = new URLSearchParams(window.location.search);
    const redirect = queryParams.get('redirect');
    const to = redirect || '/';
    if (user) {
        return <Navigate to={to} />;
    }

    return <>{children}</>;
}
