/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Budgets from './pages/Budgets';
import Expenses from './pages/Expenses';
import Start from './pages/Start';

function AppRoutes() {
  const { userName } = useAppContext();

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main className={`mx-auto max-w-7xl px-4 ${userName ? 'pt-8 pb-24 md:pt-24 md:pb-8' : ''}`}>
        <Routes>
          <Route 
            path="/start" 
            element={userName ? <Navigate to="/" /> : <Start />} 
          />
          <Route 
            path="/" 
            element={userName ? <Dashboard /> : <Navigate to="/start" />} 
          />
          <Route 
            path="/budgets" 
            element={userName ? <Budgets /> : <Navigate to="/start" />} 
          />
          <Route 
            path="/expenses" 
            element={userName ? <Expenses /> : <Navigate to="/start" />} 
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}
