import React from 'react';
import './footer2.jsx';

function Footer() {
  return (
    <footer className="footer-bottom">
      <div className="footer-social">
        <a href="#"><img src="/images/facebook.svg" alt="sportify" /></a>
        <a href="#"><img src="/images/facebook.svg" alt="Facebook" /></a>
        <a href="#"><img src="/images/twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="/images/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="/images/youtube.svg" alt="YouTube" /></a>
        <a href="#"><img src="/images/pinterest.svg" alt="Pinterest" /></a>
      </div>
      <div className="footer-legal">
        <ul>
          <li><a href="#">Privacy Notice</a></li>
          <li><a href="#">Consumer Health Privacy Notice</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Do Not Share My Personal Information</a></li>
          <li><a href="#">CA Supply Chain Act</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Cookie Preferences</a></li>

        </ul>
        <p>© 2025 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
