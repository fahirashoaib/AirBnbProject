import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Listing-card.css';
import { Link } from 'react-router-dom';

const ListingCard = ({ categories }) => {
    // Initialize an array to keep track of the current index for each category
    const [currentImageIndexes, setCurrentImageIndexes] = useState(categories.map(() => 0));
    
    // Log the initial state of currentImageIndexes
    useEffect(() => {
        console.log('Initial Image Indexes:', currentImageIndexes);
    }, []); // Run once after the component mounts 


    const handleNextImage = (index) => {
        console.log(`Next Image for Category Index: ${index}`);
        console.log(`Current Image Index Before Update: ${currentImageIndexes[index]}`);
        
        setCurrentImageIndexes((prevIndexes) =>
            prevIndexes.map((currIndex, idx) =>
                idx === index ? (currIndex + 1) % categories[idx].imageUrl.length : currIndex
            )
        );

        // Log the state after the update
        console.log('Updated Image Indexes (after next):', currentImageIndexes);
    };

    const handlePrevImage = (index) => {
        console.log(`Previous Image for Category Index: ${index}`);
        console.log(`Current Image Index Before Update: ${currentImageIndexes[index]}`);
        
        setCurrentImageIndexes((prevIndexes) =>
            prevIndexes.map((currIndex, idx) =>
                idx === index ? (currIndex - 1 + categories[idx].imageUrl.length) % categories[idx].imageUrl.length : currIndex
            )
        );

        // Log the state after the update
        console.log('Updated Image Indexes (after previous):', currentImageIndexes);
    };

    // Log changes in currentImageIndexes whenever it updates
    useEffect(() => {
        console.log('Updated Image Indexes:', currentImageIndexes);
    }, [currentImageIndexes]);

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
                            src={category.imageUrl[currentImageIndexes[index]]}
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
