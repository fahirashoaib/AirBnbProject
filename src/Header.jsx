import React from 'react';
import './Header.css'; // Import CSS for styling
import { FaSearch } from 'react-icons/fa'; // Import search icon
import AirbnbLogo from './airbnb-logo';
import HeaderRightItems from './header-right-items';

const Header = () => {
  return (
    <header className='my-header'>
      <div className="header-top">
        <AirbnbLogo />
        <nav className="header-buttons">
          <a className="btn">Stays</a>
          <a className="btn">Experience</a>
        </nav>
        <HeaderRightItems />
      </div>
      <div className="header-bottom">
        <div className="display-bh">
          <div className="dest">
            <a className='where-to' href="">Where</a>
            <input className='input-box' placeholder='Search destinations' />
          </div>
          <a className='add-items' href="">Check in
            <p className="select-items">Add dates</p>
          </a>
          <a className='add-items' href="">Check out
            <p className="select-items">Add dates</p>
          </a>
          <a className='add-items' href="">Who
            <p className="select-items">Add guests</p>
          </a>
          <a className='search-btn' href=""><FaSearch /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
