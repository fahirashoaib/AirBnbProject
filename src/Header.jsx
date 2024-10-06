import React, { useState } from 'react';
import './Header.css'; // Import CSS for styling
import { FaGlobe, FaSearch, FaUser, FaBars } from 'react-icons/fa'; // Import icons

const Header = () => {
  // State to toggle dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className='my-header'>
      <div className="header-top">
        <a href="index.html" className="logo-container">
          <img src="/Airbnb-logo.png" alt="Airbnb Logo" className="logo" />
          <h1 className="title">airbnb</h1>
        </a>
        <nav className="header-buttons">
          <a className="btn">Stays</a>
          <a className="btn">Experience</a>
        </nav>
        <div className="header-buttons">
          <a href="airbnb-your-home.html"  className="btn">Airbnb your home</a>
          <a  className="btn"><FaGlobe /></a>
          {/* Dropdown Toggle Button */}
          <button className="another-btn-container" onClick={toggleDropdown}>
            <a className="another-btn"><FaBars /></a>
            <a className="another-btn"><FaUser /></a>
          </button>
          {/* Dropdown Menu */}
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <a href="/signup" className="dropdown-item">Sign Up</a>
              <a href="/login" className="dropdown-item">Login</a>
              <hr className="dropdown-divider" />
              <a href="/profile" className="dropdown-item">Profile</a>
              <a href="/settings" className="dropdown-item">Settings</a>
              <a href="/help" className="dropdown-item">Help</a>
              <a href="/logout" className="dropdown-item">Logout</a>
            </div>
          )}
        </div>
      </div>
      <div className="header-bottom">
        <div className="display-bh">
          <div class="dest">
            <a className='where-to' href="">Where</a>
            <input className='input-box' placeholder='Search destinations'></input>
          </div>
          <a className='add-items' href="">Check in
            <p class="select-items">Add dates</p>
          </a>
          <a className='add-items' href="">Check out
            <p class="select-items">Add dates</p>
          </a>
          <a className='add-items' href="">Who
            <p class="select-items">Add guests</p>
          </a>
        </div>
        <a className='search-btn' href=""><FaSearch /></a>
      </div>
    </header>
  );
};

export default Header;

/*
import { useState } from 'react'
import './App.css'

const [count, setCount] = useState(0)

<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

export default App

*/
