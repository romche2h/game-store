import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SteamSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token =
      url.searchParams.get('token') || localStorage.getItem('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [navigate]);
  return <div>Загрузка...</div>;
}

export default SteamSuccess;
