import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Little Lemon Restaurant. All rights reserved.</p>
      <nav>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
