import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [totalListings, setTotalListings] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  // Fetch data from backend on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingsResponse = await axios.get(`http://localhost:5000/api/Auth/listings`);
        setTotalListings(listingsResponse.data.listings?.length || 0);
        // console.log("Listings Response:", listingsResponse.data);
        // console.log(listingsResponse.data.length);

        const bookingsResponse = await axios.get(`http://localhost:5000/api/Auth/bookings`);
        setTotalBookings(bookingsResponse.data.bookings?.length || 0);
        // console.log("Bookings Response:", bookingsResponse.data);
        // console.log(bookingsResponse.data.length);

        const usersResponse = await axios.get(`http://localhost:5000/api/Auth/users`);
        setTotalUsers(usersResponse.data.user?.length || 0);
        // console.log("Users Response:", usersResponse.data);
        // console.log(usersResponse.data.length);

      } catch (error) {
        setError('Error fetching data');
        console.error(error);
      }
    };

    fetchData();
  }, []); // Only runs once after the component mounts

  const handleLogout = () => {
    // Remove the authentication token from localStorage or cookies
    localStorage.removeItem('authToken'); // Assuming you're using localStorage for the token
    // Redirect the user to the login page
    localStorage.removeItem('role');
    navigate('/');
  };


  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-overview">
        <div className="stats-card">
          <h3>Total Listings</h3>
          <p>{totalListings}</p>

        </div>
        <div className="stats-card">
          <h3>Total Bookings</h3>
          <p>{totalBookings}</p>

        </div>
        <div className="stats-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>

        </div>
      </div>

      <div className="booking-management">
        <h2>Upcoming Bookings</h2>
        {/* Assuming `bookings` is a state, this can be mapped */}
      </div>

      <div className="user-management">
        <h2>User Management</h2>
        {/* Assuming `users` is a state, this can be mapped */}
      </div>
      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>

  );
};

export default AdminDashboard;
