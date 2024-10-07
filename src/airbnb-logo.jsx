import React from 'react';
import './airbnb-logo.css'; // Import CSS for styling

const AirbnbLogo = () => {
    return (
        <div>
            <a href="index.html" className="logo-container">
                <img src="/Airbnb-logo.png" alt="Airbnb Logo" className="logo" />
                <h1 className="title">airbnb</h1>
            </a>
        </div>
    );
}

export default AirbnbLogo;
