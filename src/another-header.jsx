// src/another-header.jsx

import React, { useState } from 'react';
import './another-header.css';
import { FaGlobe, FaSearch, FaUser, FaBars } from 'react-icons/fa';
import AirbnbLogo from './airbnb-logo';
import HeaderRightItems from './header-right-items';
const AnotherHeader = () => {
    // State to toggle dropdown
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <header className='my-another-header'>
            <AirbnbLogo />
            <div className="header-mid">
                <div className="display-mh">
                    <a className='add' href="">
                        <p className="select">Anywhere</p>
                    </a>
                    <a className='add' href="">
                        <p className="select">Any week</p>
                    </a>
                    <a className='add' href="">
                        <p className="select">Add guests</p>
                    </a>
                    <a className='search' href=""><FaSearch /></a>
                </div>
            </div>
            <HeaderRightItems />
        </header>
    );
};

export default AnotherHeader;
