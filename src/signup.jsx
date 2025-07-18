// signup.jsx
import React, { useState } from 'react';
import axios from 'axios';// import axios for making API requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './signup-login.css'; // Add your CSS for styling

const SignUp = ({ onSwitch }) => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Declare navigate
    const [role, setRole] = useState('user'); // Default to 'user'


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/Auth/register', {
                username,
                email,
                password,
                role
            });

            if (response.data.role) {
                setRole(response.data.role); // Set role from response
            }
            console.log('User registered:', response.data);

            // Store token in localStorage
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
            }

            if (response.data.role) {
                localStorage.setItem('role', response.data.role); // Save role in localStorage
            }
            
            navigate('/'); // This redirects to the home page
        } catch (error) {
            console.error('Error details:', error);  // Log the full error
            const errorMessage = error.response
                ? error.response?.data?.message || 'An error occurred'
                : 'Network error. Please try again later.';
            setError(errorMessage);
        }
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <input>
                
                </input>
                <button className="submit-button" type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <a href="#" onClick={onSwitch}>Log in</a>
            </p>
        </div>
    );
};

export default SignUp;