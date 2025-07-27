import React from 'react';
import './middle.jsx';
import logo from './logo2.webp';

function Middle() {
  return (
    <section className="promo-section">
      <div className="promo-card" style={{ backgroundColor: '#9e8d61ff' }}>
        <img src={logo} alt="coffee cup" className="coffee cup" />
        <div className="promo-content">
          <h2>Love it? Get it free.</h2>
          <p>Just join starbucks Rewards and enjoy a free drink with a qualitying purchase
            during your first week.</p>
        </div>
        <button className="promo-section-btn">Join and Order</button>
      </div>
      
    </section>
  );
}

export default Middle;
