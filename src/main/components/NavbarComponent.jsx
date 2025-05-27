import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/NavbarComponent.css';

export default function NavbarComponent({ isLoggedIn}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { darkMode, setDarkMode } = useTheme();

    const handleNavigate = (path) => {
      navigate(path);
    };

    const isOnLoginPage = location.pathname === '/login';

  return (
    <header className="header">
      <h1 className="logo">Example App</h1>
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => handleNavigate('/')}>Home</li>
          <li onClick={() => handleNavigate(isLoggedIn ? '/profilo' : '/login')}>
            {isLoggedIn && !isOnLoginPage ? 'Profilo' : 'Login'}
          </li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}