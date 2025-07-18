// SignOrLog.jsx
import React, { useEffect,useState } from 'react';
import SignUp from './signup';
import Login from './login';
import { useNavigate } from 'react-router-dom';
import './signOrLog.css'; 

const SignOrLog = () => {
    const [isSignUp, setIsSignUp] = useState(false);// default is login
    const [loading, setLoading] = useState(true); // Loading state for checking authToken
    const navigate = useNavigate();

    const handleSwitch = () => {
        setIsSignUp(!isSignUp);
    };

    const authToken = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('role'); // Assuming role is saved as 'user' or 'admin'

    useEffect(() => {
        console.log('authToken:', authToken);
        console.log('role:', userRole);
    }, [authToken, userRole]);
    

    useEffect(() => {
        if (authToken && userRole) {
            if (userRole === 'admin') {
                navigate('/admin-dashboard');
            } else if (userRole === 'user') {
                navigate('/user-dashboard');
            }
            else {
                console.error('Invalid role:', userRole);
            }
        }
        else {
            setLoading(false); // Finished checking authToken
        }
    }, [authToken, userRole, navigate]);
    
    if (loading) {
        return <div>Loading...</div>; // You can replace this with a spinner or loading animation
    }

    return (
        <div className="container">
            {isSignUp ? (
                <SignUp onSwitch={handleSwitch} />
            ) : (
                <Login onSwitch={handleSwitch} />
            )}
        </div>
    );
};

export default SignOrLog;