// SignOrLog.jsx
import React, { useState } from 'react';
import SignUp from './signup';
import Login from '../login';
import './signOrLog.css'; 

const SignOrLog = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSwitch = () => {
        setIsSignUp(!isSignUp);
    };

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
