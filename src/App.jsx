import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx'
import HomePage from './pages/HomePage.jsx';
import ListingDetails from './pages/ListingDetails.jsx';
import BookingPage from './pages/BookingPage.jsx';
import Footer from './footer.jsx';
import './App.css'



function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/listings/:id" element={<ListingDetails />} />
                <Route path="/book/:id" element={<BookingPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App

/*

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import CategoryList from './Category-list.jsx'
import ListingCard from './Listing-card.jsx';
import Footer from './footer.jsx';
import './App.css'


function App() {
  return (
    <div>
      <Header />
      <CategoryList />
      <ListingCard categories={category1} />
      <div>
        <p className='card-heading'>Past Experiences</p>
        <ListingCard categories={category2} />
      </div>
      <Footer/>
    </div>
  )
}

export default App
*/