import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Quest from './pages/Quest';
import Market from './pages/Market';
import Settings from './pages/Settings';
import StarBackground from './components/StarBackground';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <StarBackground />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/market" element={<Market />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        
        <Navigation />
      </div>
    </Router>
  );
}

export default App;