import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import CategoryList from './Category-list.jsx'
import ListingCard from './Listing-card.jsx'; // Import the ListingCardContainer
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <CategoryList />
    <ListingCard />
  </StrictMode>
)
