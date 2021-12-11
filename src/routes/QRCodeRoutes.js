import MinimalLayout from 'layout/MinimalLayout';
import React, { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

const QR = Loadable(lazy(() => import('views/Qr')));

const QRCodeRoutes = {
    path: '/qr',
    element: <MinimalLayout />,
    children: [
        {
            path: '/listmenu',
            element: <QR />
        },
        {
            path: '/addpoint',
            element: <QR />
        }
    ]
};

export default QRCodeRoutes;
