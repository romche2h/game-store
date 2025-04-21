import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './ProfileAndLogout.module.scss';
import { useNavigate } from 'react-router-dom';

function ProfileAndLogout() {
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

  const buttonProfile = () => {
    navigate('/my-profile');
  };

  if (!isLoginId) {
    return null;
  }

  return (
    <div className={styles.profileAndLogout}>
      <Button onClick={buttonProfile}>Мой профиль</Button>
      <Button onClick={handleLogout}>Выход</Button>
    </div>
  );
}

export default ProfileAndLogout;
