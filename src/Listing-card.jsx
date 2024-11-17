import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Listing-card.css';
import { Link } from 'react-router-dom';

const ListingCard = ({ categories }) => {
    // Initialize an array to keep track of the current index for each category
    const [currentImageIndexes, setCurrentImageIndexes] = useState(categories.map(() => 0));

    const handleNextImage = (index) => {
        setCurrentImageIndexes((prevIndexes) =>
            prevIndexes.map((currIndex, idx) =>
                idx === index ? (currIndex + 1) % categories[idx].imageUrl.length : currIndex
            )
        );
    };

    const handlePrevImage = (index) => {
        setCurrentImageIndexes((prevIndexes) =>
            prevIndexes.map((currIndex, idx) =>
                idx === index ? (currIndex - 1 + categories[idx].imageUrl.length) % categories[idx].imageUrl.length : currIndex
            )
        );
    };

    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <div key={category.id} className="category-display">
                    <div className="image-container">
                        <button className="scroll my-left" onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage(index);
                        }}>
                            <FaChevronLeft />
                        </button>
                        <img
                            src={category.imageUrl[index]}
                            alt={category.title}
                            className="category-image"
                        />
                        <button className="scroll my-right" onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage(index);
                        }}>
                            <FaChevronRight />
                        </button>
                    </div>
                    <Link to={`/listings/${category.id}`}>
                        <div className="info">
                            <p className="highlight">{category.title}</p>
                            <p>{category.location}</p>
                            <p>{category.availability}</p>
                            <p className="highlight">${category.pricePerNight} per night</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};


export default ListingCard;
