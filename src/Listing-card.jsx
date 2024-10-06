import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Listing-card.css';

const categories = [
    {
        title: 'Cozy Cottage',
        type: 'Entire home',
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 150,
        rating: 4.5,
        images: [
            'https://via.placeholder.com/300x200.png?text=Beach+House1',
            'https://via.placeholder.com/300x200.png?text=Beach+House2',
            'https://via.placeholder.com/300x200.png?text=Beach+House3',
        ],
    },
    {
        title: 'Charming Castle',
        type: 'Private room',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 200,
        rating: 4.8,
        images: [
            'https://via.placeholder.com/300x200.png?text=Mountain+Cabin1',
            'https://via.placeholder.com/300x200.png?text=Mountain+Cabin2',
            'https://via.placeholder.com/300x200.png?text=Mountain+Cabin3',
        ],
    },
    {
        title: 'City Apartment',
        type: 'Private room',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 200,
        rating: 4.8,
        images: [
            'https://via.placeholder.com/300x200.png?text=City+Apartment1',
            'https://via.placeholder.com/300x200.png?text=City+Apartment2',
            'https://via.placeholder.com/300x200.png?text=City+Apartment3',
        ],
    },
    {
        title: 'Luxury Villa',
        type: 'Entire home',
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        price: 300,
        rating: 4.9,
        images: [
            'https://via.placeholder.com/300x200.png?text=Luxury+Villa1',
            'https://via.placeholder.com/300x200.png?text=Luxury+Villa2',
            'https://via.placeholder.com/300x200.png?text=Luxury+Villa3',
        ],
    }
];

const ListingCard = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = (category) => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % category.images.length
        );
    };

    const handlePrevImage = (category) => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + category.images.length) % category.images.length
        );
    };

    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                    <div className="image-display">
                        <div className="image-container">
                            <button className="scroll my-left" onClick={() => handlePrevImage(category)}><FaChevronLeft /></button>
                            <img src={category.images[currentImageIndex]} alt={category.title} className="category-image" />
                            <button className="scroll my-right" onClick={() => handleNextImage(category)}><FaChevronRight /></button>
                        </div>
                    </div>
                    <h3>{category.title}</h3>
                    <p>{category.type}, {category.guests} guests, {category.bedrooms} bedrooms, {category.bathrooms} bathrooms, ${category.price}, {category.rating} stars</p>

                </div>
            ))}
        </div>
    );
};

export default ListingCard;
