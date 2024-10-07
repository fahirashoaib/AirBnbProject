import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Listing-card.css';

const ListingCard = ({categories}) => {
    // Initialize an array to keep track of the current index for each category
    const [currentImageIndexes, setCurrentImageIndexes] = useState(categories.map(() => 0));

    const handleNextImage = (index) => {
        setCurrentImageIndexes((prevIndexes) =>
            prevIndexes.map((currIndex, idx) =>
                idx === index ? (currIndex + 1) % categories[idx].images.length : currIndex
            )
        );
    };

    const handlePrevImage = (index) => {
        setCurrentImageIndexes((prevIndexes) =>
            prevIndexes.map((currIndex, idx) =>
                idx === index ? (currIndex - 1 + categories[idx].images.length) % categories[idx].images.length : currIndex
            )
        );
    };

    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <div key={index} className="category-display">
                    <div className="image-container">
                        <button className="scroll my-left" onClick={() => handlePrevImage(index)}>
                            <FaChevronLeft />
                        </button>
                        <img src={category.images[currentImageIndexes[index]]} alt={category.title} className="category-image" />
                        <button className="scroll my-right" onClick={() => handleNextImage(index)}>
                            <FaChevronRight />
                        </button>
                    </div>
                    <div className="info">
                        <p className='my-heading'>{category.title}</p>
                        <p className='my-text'>{category.type}</p>
                        <p className='my-text'>{category.guests} guests</p>
                        <p className='my-text'>{category.bedrooms} bedrooms</p>
                        <p className='my-text'>{category.bathrooms} bathrooms</p>
                        <p className='my-text'>${category.price}</p>
                        <p className='my-text'>{category.rating} <FaStar /></p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default ListingCard;
