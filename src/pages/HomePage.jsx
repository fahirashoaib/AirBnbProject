// pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingCard from '../Listing-card.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';


function HomePage() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Auth/listings')
            .then(response => {
                // Extract the listings array from the response object
                setListings(response.data.listings);
            })
            .catch(error => console.error('Error fetching listings:', error));
    }, []); // Make sure to include an empty dependency array for the effect to run only once


    return (
        <div>
            <Header />
            <div className="listing-container">
                <ListingCard categories={listings} />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
