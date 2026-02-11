import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PlanSelection from './pages/PlanSelection';
import FocusConfig from './pages/FocusConfig';
import Checkout from './pages/Checkout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/plan" replace />} />
        <Route path="/plan" element={<PlanSelection />} />
        <Route path="/focus" element={<FocusConfig />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
