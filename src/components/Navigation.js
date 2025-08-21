import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: '🏠', label: '홈' },
    { path: '/explore', icon: '🚀', label: '탐험' },
    { path: '/quest', icon: '📋', label: '퀘스트' },
    { path: '/market', icon: '🛍️', label: '마켓' },
    { path: '/settings', icon: '⚙️', label: '설정' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bottom-nav">
      {navigationItems.map((item) => (
        <button 
          key={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => handleNavigation(item.path)}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-label">{item.label}</div>
        </button>
      ))}
    </div>
  );
}

export default Navigation;