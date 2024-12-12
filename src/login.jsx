// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';// import axios for making API requests
import './signup-login.css'; // Add your CSS for styling

const Login = ({ onSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post('hht://localhost:5000/api/users/login', {
                email,
                password
            });
            console.log('User logged in:', response.data);
            onSwitch(); // Switch to sign up form
        }catch(error){
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
                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <a href="#" onClick={onSwitch}>Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
