import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

const auth = isAuthenticated();


const ProtectedRoute = () => (
    auth ? <Outlet /> : <Navigate to="/" />

);

export default ProtectedRoute;