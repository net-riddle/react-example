import React from 'react';
import '../styles/FooterComponent.css';

export default function FooterComponent() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My App. Tutti i diritti riservati.</p>
    </footer>
  );
}
