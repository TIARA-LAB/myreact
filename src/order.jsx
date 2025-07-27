import React from 'react';
import './hero.jsx';
import logo from './logo3.webp'

function Order() {
  return (
    <section className="Order">
      <img
        src={logo} 
        alt="coffee cup"
        className="Order-img"
      />
      <div className="Order-content">
        <h1>Order ahead.Pick up and fly.</h1>
        <p>Make summer travel more chill with the starbucks app.Just find a store at an airport
            ,order your favorties,pick up and go.</p>
        <button className="Order-btn">Find a store</button>
      </div>
    </section>
  );
}

export default Order;
