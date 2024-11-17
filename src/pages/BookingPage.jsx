import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookingPage() {
    const { id } = useParams();
    const [form, setForm] = useState({ checkIn: '', checkOut: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/bookings', { id, ...form })
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Error submitting booking:', error));
    };

    return (
        <div class="listing-display">
            <p class="highlight">Booking for Listing {id}</p>
            <form onSubmit={handleSubmit}>
                <label class="my-label">
                    Check-In Date: 
                    <input class="booking-date" type="date" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} required />
                </label>
                <label class="my-label">
                    Check-Out Date: 
                    <input class="booking-date" type="date" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} required />
                </label>
                <button class="booking-btn" type="submit">Confirm Booking</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default BookingPage;
