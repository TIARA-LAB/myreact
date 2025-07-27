import React from 'react';
import './App.jsx';
import logo from './logo1.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Starbucks Logo" className="logo" />
      <ul className="nav-links">
        <li>Menu</li>
        <li>Rewards</li>
        <li>Gift Cards</li>
      </ul>
      <div className="nav-actions">
        <button className="find-store">Find a store</button>
        <button className="sign-in">Sign in</button>
        <button className="join-now">Join now</button>
      </div>
    </nav>
  );
}

export default Navbar;
