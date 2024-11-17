import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingCard from '../Listing-card.jsx';



function HomePage() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/listings')
            .then(response => setListings(response.data))
            .catch(error => console.error('Error fetching listings:', error));
    }, []);

    return (
        <div className="listing-container">
            <ListingCard categories={listings} />
        </div>
    );
}

export default HomePage;

/*
{listings.map(listing => (
                <Link class="listing-display" to={`/listings/${listing.id}`}>
                    <img src={listing.imageUrl} alt={listing.title} className="listing-image" />
                    <div className="listing-details">
                        <p class="highlight">{listing.title}</p>
                        <p>{listing.location}</p>
                        <p>{listing.availability}</p>
                        <p class="highlight">${listing.pricePerNight} per night</p>
                    </div>
                </Link>
            ))}
*/