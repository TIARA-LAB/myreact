import React from 'react';
import './hero.jsx';
import logo from './logo1.webp'

function HeroSection() {
  return (
    <section className="hero">
      <img
        src={logo} 
        alt="hero"
        className="hero-img"
      />
      <div className="hero-content">
        <h1>See you on the patio</h1>
        <p>Soak up the season with summer-Berry Refreshers
            and Iced Horchata Oatmilk Shaken espresso.Enjoy these cool favorties while you can 
            Here for a limited time.</p>
        <button className="hero-btn">View the menu</button>
      </div>
    </section>
  );
}

export default HeroSection;
