import React from 'react';
import { Navigate } from 'react-router-dom';

function RedirectIfAuthenticated({ children }) {
  const token = localStorage.getItem('token');
  if (token) {
    return <Navigate to='/' />;
  }
  return children;
}

export default RedirectIfAuthenticated;
