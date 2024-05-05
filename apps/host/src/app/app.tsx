import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

// Lazy load the remote modules
// 'dashboard',
//     'loans',
//     'trades',
//     'derivatives',
//     'collateral',
//     'settlements',
//     'counterparties',
//     'settings',
//     'session',
const Dashboard = React.lazy(() => import('dashboard/Module'));
const Loans = React.lazy(() => import('loans/Module'));
const Trades = React.lazy(() => import('trades/Module'));
const Derivatives = React.lazy(() => import('derivatives/Module'));
const Collateral = React.lazy(() => import('collateral/Module'));
const Settlements = React.lazy(() => import('settlements/Module'));
const Counterparties = React.lazy(() => import('counterparties/Module'));
const Settings = React.lazy(() => import('settings/Module'));
const Session = React.lazy(() => import('session/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/loans">Loans</Link>
        </li>
        <li>
          <Link to="/trades">Trades</Link>
        </li>
        <li>
          <Link to="/derivatives">Derivatives</Link>
        </li>
        <li>
          <Link to="/collateral">Collateral</Link>
        </li>
        <li>
          <Link to="/settlements">Settlements</Link>
        </li>
        <li>
          <Link to="/counterparties">Counterparties</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/session">Session</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/derivatives" element={<Derivatives />} />
        <Route path="/collateral" element={<Collateral />} />
        <Route path="/settlements" element={<Settlements />} />
        <Route path="/counterparties" element={<Counterparties />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
