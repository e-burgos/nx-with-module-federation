import React from 'react';

const Dashboard = React.lazy(() => import('dashboard/Module'));

const Trades = React.lazy(() => import('trades/Module'));

const Loans = React.lazy(() => import('loans/Module'));

const Derivatives = React.lazy(() => import('derivatives/Module'));

const Collateral = React.lazy(() => import('collateral/Module'));

const Settlements = React.lazy(() => import('settlements/Module'));

const Counterparties = React.lazy(() => import('counterparties/Module'));

const Settings = React.lazy(() => import('settings/Module'));

const Session = React.lazy(() => import('session/Module'));

export const routesConfig = [
  {
    key: 'home',
    path: '/',
    element: <Dashboard withHost />,
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    element: <Dashboard withHost />,
  },
  {
    key: 'trades',
    path: '/trades',
    element: <Trades withHost />,
  },
  {
    key: 'loans',
    path: '/loans',
    element: <Loans withHost />,
  },
  {
    key: 'derivatives',
    path: '/derivatives',
    element: <Derivatives withHost />,
  },
  {
    key: 'collateral',
    path: '/collateral',
    element: <Collateral withHost />,
  },
  {
    key: 'settlements',
    path: '/settlements',
    element: <Settlements withHost />,
  },
  {
    key: 'counterparties',
    path: '/counterparties',
    element: <Counterparties withHost />,
  },
  {
    key: 'settings',
    path: '/settings',
    element: <Settings withHost />,
  },
  {
    key: 'session',
    path: '/session',
    element: <Session withHost />,
  },
];
