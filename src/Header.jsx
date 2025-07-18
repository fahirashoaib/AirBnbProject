// src/Header.jsx
import React from 'react';
import './Header.css';
import AirbnbLogo from './airbnb-logo';


const Header = () => {
  return (
    <header className='my-header'>
      <div className="header-top">
        <AirbnbLogo />
      </div>
    </header>
  );
};

export default Header;
