import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. Placeholder for actual authentication check
  const isAuthenticated = () => {console.log("Checking authentication")}; // Replace with real auth logic
  
  // 2. Deny access and redirect if not authenticated
  if (!isAuthenticated) {
    // Redirects the user to the login page
    return <Navigate to="/login" replace />; 
  }

  // 3. Allow access if authenticated
  return (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default ProtectedRoute;
