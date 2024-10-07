import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Listing-card.css';
const categories = [
    {
        title: "Stay in Prince's Purple Rain House",
        type: 'Entire home',
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 150,
        rating: 4.5,
        images: [
            '/images/01-Purple-Rain.png',
            '/images/02-Purple-Rain.png',
            '/images/03-Purple-Rain.png',
            '/images/04-Purple-Rain.png',
            '/images/05-Purple-Rain.png',
            '/images/06-Purple-Rain.png',
            '/images/07-Purple-Rain.png',
        ]
    },
    {
        title: "Sleepover at Polly Pocket's Compact",
        type: 'Private room',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 200,
        rating: 4.8,
        images: [
            '/images/1-Polly-Pocket.png',
            '/images/2-Polly-Pocket.png',
            '/images/3-Polly-Pocket.png',
            '/images/4-Polly-Pocket.png',
            '/images/5-Polly-Pocket.png',
            '/images/6-Polly-Pocket.png',
            '/images/7-Polly-Pocket.png',
        ],
    },
    {
        title: 'Join the Living Room Session with Doja Cat',
        type: 'Private room',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 200,
        rating: 4.8,
        images: [
            '/images/01-Doja-Cat.png',
            '/images/02-Doja-Cat.png',
            '/images/03-Doja-Cat.png',
            '/images/04-Doja-Cat.png',
            '/images/05-Doja-Cat.png',
            '/images/06-Doja-Cat.png',
            '/images/07-Doja-Cat.png',
        ],
    },
    {
        title: 'Join researcher Jaime Maussan for an out of this world stay',
        type: 'Entire home',
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        price: 300,
        rating: 4.9,
        images: [
            '/images/01-Purple-Rain.png',
            '/images/02-Purple-Rain.png',
            '/images/03-Purple-Rain.png',
            '/images/04-Purple-Rain.png',
            '/images/05-Purple-Rain.png',
            '/images/06-Purple-Rain.png',
            '/images/07-Purple-Rain.png',
        ],
    }
];

const ListingCard = () => {
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
