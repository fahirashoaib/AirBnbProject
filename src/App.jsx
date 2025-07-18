// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignOrLog from './SignOrLog';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import ListingDetails from './pages/ListingDetails';
import BookingPage from './pages/BookingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignOrLog />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path='/listings/:id' element={<ListingDetails />} />
        <Route path="/bookings/listing/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App