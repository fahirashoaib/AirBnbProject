import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import CategoryList from './Category-list.jsx'
import ListingCard from './Listing-card.jsx';
import Footer from './footer.jsx';
import './index.css'


const category1 = [
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
          '/images/JAIME-MAUSSAN-1.jpg',
          '/images/JAIME-MAUSSAN-2.jpg',
          '/images/JAIME-MAUSSAN-3.jpg',
          '/images/JAIME-MAUSSAN-4.jpg',
          '/images/JAIME-MAUSSAN-5.jpg',
          '/images/JAIME-MAUSSAN-6.jpg',
          '/images/JAIME-MAUSSAN-7.jpg',
          '/images/JAIME-MAUSSAN-8.jpg',
      ],
  }
];

const category2 = [
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
          '/images/JAIME-MAUSSAN-1.jpg',
          '/images/JAIME-MAUSSAN-2.jpg',
          '/images/JAIME-MAUSSAN-3.jpg',
          '/images/JAIME-MAUSSAN-4.jpg',
          '/images/JAIME-MAUSSAN-5.jpg',
          '/images/JAIME-MAUSSAN-6.jpg',
          '/images/JAIME-MAUSSAN-7.jpg',
          '/images/JAIME-MAUSSAN-8.jpg',
      ],
  },
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
        '/images/JAIME-MAUSSAN-1.jpg',
        '/images/JAIME-MAUSSAN-2.jpg',
        '/images/JAIME-MAUSSAN-3.jpg',
        '/images/JAIME-MAUSSAN-4.jpg',
        '/images/JAIME-MAUSSAN-5.jpg',
        '/images/JAIME-MAUSSAN-6.jpg',
        '/images/JAIME-MAUSSAN-7.jpg',
        '/images/JAIME-MAUSSAN-8.jpg',
    ],
}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <CategoryList />
    <ListingCard categories={category1} />
    <div>
      <p className='card-heading'>Past Experiences</p>
      <ListingCard categories={category2} />
    </div>
    <Footer/>
  </StrictMode>
)
