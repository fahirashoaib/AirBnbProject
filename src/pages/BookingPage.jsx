import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookingPage() {
    const { id: listingId } = useParams();
    const [form, setForm] = useState({ startDate: '', endDate: '', totalAmount: 0 });
    const [message, setMessage] = useState('');

    const userId=1;//replace with actual user id from authentication

    const calculateTotalAmount = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = (end - start) / (1000 * 60 * 60 * 24);
        return days > 0 ? days * 100 : 0; // Assume $100 per day
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { userId, listingId,startDate: form.startDate,endDate: form.endDate,totalAmount: calculateTotalAmount(form.startDate, form.endDate) };
        axios.post('http://localhost:5000/api/bookings', payload)
            .then(response => setMessage(response.data.message))
            .catch(error => {
                console.error('Error submitting booking:', error);
                setMessage('Error submitting booking');
            });
    };

    return (
        <div class="listing-display">
            <p class="highlight">Booking for Listing {listingId}</p>
            <form onSubmit={handleSubmit}>
                <label class="my-label">
                    Check-In Date: 
                    <input class="booking-date" type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value,
                        totalAmount: calculateTotalAmount(e.target.value, form.endDate)
                     })} required />
                </label>
                <label class="my-label">
                    Check-Out Date: 
                    <input class="booking-date" type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value,
                        totalAmount: calculateTotalAmount(form.startDate, e.target.value)
                     })} required />
                </label>
                <p>Total Amount: ${form.totalAmount}</p>
                <button class="booking-btn" type="submit">Confirm Booking</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default BookingPage;
