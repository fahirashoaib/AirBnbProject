import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ListingDetails() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/listings/${id}`)
            .then(response => setListing(response.data))
            .catch(error => {
                console.error('Error fetching listing:', error);
                setError('Failed to fetch listing details');
            });
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if(!listing) {
        return <p>Loading...</p>;
    }

    return (
        listing ? (
            <div class="listing-display">
                <div>
                    <div>
                        <img src={listing.imageUrl[0]} alt={listing.title} className="listing-image" />
                    </div>
                    <p class="highlight">Listing details of {listing.title}</p>
                    <p>{listing.location}</p>
                    <p>{listing.availability}</p>
                    <p>${listing.pricePerNight} night</p>
                    <Link to={`/book/${listing.id}`}>
                        <p class="highlight">Book Now</p>
                    </Link>
                </div>
            </div>
        ) : <p>Loading...</p>
    );
}

export default ListingDetails;
