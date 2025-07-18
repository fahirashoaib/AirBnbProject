// pages/ListingDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


function ListingDetails() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Auth/listings/${id}`)
            .then(response => setListing(response.data))
            .catch(error => {
                console.error('Error fetching listing:', error);
                setError('Failed to fetch listing details');
            });
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!listing) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div style={{ display:'block',padding:'1%',fontWeight:'bold' }}>
                <Link to={`/user-dashboard`}>Back to Homepage</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3% 15%' }}>
                <div>
                    <img src={listing.imageUrl[0]} alt={listing.title} className="listing-image" />
                </div>
                <div>
                    <p className="highlight">Listing details of {listing.title}</p>
                    <p>{listing.location}</p>
                    <p>{listing.availability}</p>
                    <p>${listing.pricePerNight} night</p>
                    <Link to={`/bookings/listing/${listing.id}`}>
                        <p className="highlight">Book Now</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ListingDetails;
