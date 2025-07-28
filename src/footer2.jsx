import React from 'react';
import './footer2.jsx';
import facebook from  './assets/facebook.png';
import pinterest from './assets/pinterest.png';
import spotify from './assets/spotify.png';
import twitter from './assets/twitter.png';
import youtube from './assets/youtube.png';
import instagram from './assets/instagram.png';



function Footer() {
  return (
    <footer className="footer-bottom">
      <div className="footer-social">
        <a href="#"><img src={facebook} alt="facebook"/></a>
        <a href="#"><img src={pinterest} alt="pinterest" /></a>
        <a href="#"><img src={spotify} alt="spotify" /></a>
        <a href="#"><img src={twitter} alt="twitter" /></a>
        <a href="#"><img src={youtube} alt="youTube" /></a>
        <a href="#"><img src={instagram} alt="instagram"/></a>
        
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
