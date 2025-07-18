// pages/BookingPage.jsx

import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BookingPage() {
    const { id: listingId } = useParams();
    const [form, setForm] = useState({ startDate: '', endDate: '', totalAmount: 0 });
    const [message, setMessage] = useState('');
    

    const userId = localStorage.getItem('userId');

    const calculateTotalAmount = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = (end - start) / (1000 * 60 * 60 * 24);
        return days > 0 ? days * 100 : 0; // Assume $100 per day
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { startDate, endDate, totalAmount } = form;
        const payload = { userId, listingId, startDate, endDate, totalAmount };
        const token = localStorage.getItem('token'); // Get the token

        axios.post('http://localhost:5000/api/Auth/bookings', payload, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })


            .then(response => setMessage(response.data.message))
            .catch(error => {
                console.error('Error submitting booking:', error);
                setMessage('Error submitting booking');
            });
    };

    return (
        <div>
            <div style={{ display: 'block', padding: '1%', fontWeight: 'bold' }}>
                <Link to={`/listings/${listingId}`}>Back to Listing detail page</Link>
            </div>
            <div className="listing-display">
                <p className="highlight">Booking for Listing {listingId}</p>
                <form onSubmit={handleSubmit}>
                    <label className="my-label">
                        Check-In Date:
                        <input className="booking-date" type="date" value={form.startDate} onChange={(e) => setForm({
                            ...form, startDate: e.target.value,
                            totalAmount: calculateTotalAmount(e.target.value, form.endDate)
                        })} required />
                    </label>
                    <label className="my-label">
                        Check-Out Date:
                        <input className="booking-date" type="date" value={form.endDate} onChange={(e) => setForm({
                            ...form, endDate: e.target.value,
                            totalAmount: calculateTotalAmount(form.startDate, e.target.value)
                        })} required />
                    </label>
                    <p>Total Amount: ${form.totalAmount}</p>
                    <button className="booking-btn" type="submit">Confirm Booking</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default BookingPage;
