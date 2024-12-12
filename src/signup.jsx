// SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';// import axios for making API requests

import './signup-login.css'; // Add your CSS for styling

const SignUp = ({ onSwitch }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/users/signup', {
                name,
                email,
                password
            });
        console.log('User registered:', response.data);
        onSwitch();
        }catch(error){
            setError(error.response?.data?.message || 'An error occurred');
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
                    value={name}
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
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <a href="#" onClick={onSwitch}>Log in</a>
            </p>
        </div>
    );
};

export default SignUp;
