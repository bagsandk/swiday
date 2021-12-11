import React, { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
import MinimalLayout from 'layout/MinimalLayout';
import AuthGuard from 'guards/AuthGuard';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/Authentication/Login')));
const AuthRegister3 = Loadable(lazy(() => import('views/Authentication/Register')));

// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const AuthenticationRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MinimalLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/login',
            element: <AuthLogin3 />
        },
        {
            path: '/register',
            element: <AuthRegister3 />
        }
    ]
};

export default AuthenticationRoutes;
