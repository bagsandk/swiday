// project imports
import UserBasedGuard from 'guards/UserBasedGuard';
import MainLayout from 'layout/MainLayout';
import React, { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const ClaimPoint = Loadable(lazy(() => import('views/ClaimPoint')));
const Point = Loadable(lazy(() => import('views/Point')));
const FoodMenu = Loadable(lazy(() => import('views/Menu')));

const MainRoutes = {
    path: '/',
    element: (
        <UserBasedGuard>
            <MainLayout />
        </UserBasedGuard>
    ),
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/menu/food',
            element: <FoodMenu />
        },
        {
            path: '/point',
            element: <Point />
        },
        {
            path: '/claimpoint/:exp/:code/:jumlah',
            element: <ClaimPoint />
        }
    ]
};

export default MainRoutes;
