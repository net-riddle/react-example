import React, { useState } from 'react';
import './styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };


  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <header className="header">
        <h1 className="logo">Example App</h1>
        <nav className="navbar">
            <ul className="nav-links">
                <li onClick={() => handleNavigate('/')}>Home</li>
                <li onClick={() => handleNavigate(isLoggedIn ? '/profilo' : '/login')}>
                    {isLoggedIn ? 'Profilo' : 'Login'}
                </li>
            </ul>
            
        </nav>
        <button className="theme-toggle"onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞' : '🌙'}
            </button>
      </header>

      <main className="main-content">
        <div className="message-box">
          <h2>Benvenuto nella mia app di esempio!</h2>
          <p>Questa è una semplice landing page</p>
        </div>
      </main>
    </div>
  );
}
