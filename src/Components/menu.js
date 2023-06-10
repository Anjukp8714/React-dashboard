import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="menu-items">
          <a href="#" className="menu-item">Home</a>
          <a href="#" className="menu-item">About</a>
          <a href="#" className="menu-item">Services</a>
          <a href="#" className="menu-item">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
