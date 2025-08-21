import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import PresentationBuilder from './components/PresentationBuilder';
import PresentationView from './components/PresentationView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<PresentationBuilder />} />
          <Route path="/presentation/:id" element={<PresentationView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;