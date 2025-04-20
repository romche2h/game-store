import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  //  добавить если есть команда то редеректить на главную
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to={'/login'} />;
  }
  return children;
}

export default ProtectedRoute;
