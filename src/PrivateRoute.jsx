// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo }) => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
        return <Navigate to={redirectTo} />;
    }

    return children;
};

export default PrivateRoute;
