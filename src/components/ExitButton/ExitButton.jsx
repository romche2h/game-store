import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './ExitButton.module.scss';
import { useNavigate } from 'react-router-dom';

function ExitButton() {
  const [isLoginId, setLoginId] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoginId(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoginId(false);
    navigate('/login');
  };

  if (!isLoginId) {
    return null;
  }

  return (
    <div className={styles.exit}>
      <Button onClick={handleLogout}>Выход</Button>
    </div>
  );
}

export default ExitButton;
