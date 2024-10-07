import React, { useState } from 'react';
import './header-right-items.css';
import { FaGlobe, FaBars, FaUser } from 'react-icons/fa'; // Importing icons

const HeaderRightItems = () => {
    // State to toggle dropdown
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="my-header-buttons">
            <a href="airbnb-your-home.html" className="my-button">Airbnb your home</a>
            <a className="btn"><FaGlobe /></a>
            <button className="new-btn-container" onClick={toggleDropdown}>
                <FaBars className="new-btn" />
                <FaUser className="new-btn" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownVisible && (
                <div className="menu">
                    <a href="/signup" className="list-item">Sign Up</a>
                    <a href="/login" className="list-item">Login</a>
                    <hr className="menu-divider" />
                    <a href="/profile" className="list-item">Profile</a>
                    <a href="/settings" className="list-item">Settings</a>
                    <a href="/help" className="list-item">Help</a>
                    <a href="/logout" className="list-item">Logout</a>
                </div>
            )}
        </div>
    );
}

export default HeaderRightItems;
