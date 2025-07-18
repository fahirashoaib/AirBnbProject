// login.jsx
import React, { useState } from 'react';
import axios from 'axios';// import axios for making API requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './signup-login.css'; // Add your CSS for styling

const Login = ({ onSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Declare navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/Auth/login', {
                email,
                password
            });
            console.log('User logged in:', response.data);

            // Store token in localStorage
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
            }

            if (response.data.role) {
                localStorage.setItem('role', response.data.role); // Save role in localStorage
            }

            // Redirect based on role
            if (response.data.role === 'admin') {
                navigate('/admin-dashboard');
            } else if (response.data.role === 'user') {
                navigate('/user-dashboard');
            }
            else {
                console.error('Invalid role:', response.data.role);
            }

        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }

    };

    return (
        <div className="form-container">
            <h2>Sign In</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="submit-button" type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <a href="#" onClick={onSwitch}>Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
