import { useTheme } from './contexts/ThemeContext';
import './styles/LandingPage.css';
import Navbar from './components/NavbarComponent';
import Footer from './components/FooterComponent';

export default function LandingPage({ isLoggedIn }) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <Navbar isLoggedIn={isLoggedIn} />  

      <main className="main-content">
        <div className="message-box">
          <h2>Benvenuto nella mia app di esempio!</h2>
          <p>Questa è una semplice landing page</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
