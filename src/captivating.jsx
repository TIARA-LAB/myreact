import React from 'react';
import './middle.jsx';
import logo from './logo5.webp';

function Captivating() {
  return (
    <section className="Captivating">
      <div className="Captivating" style={{ backgroundColor: '' }}>
        <img src={logo} alt="coffee cup" className="coffee cup" />
        <div className="Captivating-text">
          <h2>Our captivating new collection</h2>
          <p>Nigerian-American artist Shade Akanbi blends tradition and modernity
            to create rich prints and patterns.For limited time.
          </p>
        </div>
        <button className="Captivating-btn">Learn more</button>
      </div>
      
    </section>
  );
}

export default Captivating;
