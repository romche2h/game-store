import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './ProfileAndLogout.module.scss';
import { useNavigate } from 'react-router-dom';

function ProfileAndLogout() {
  const [isLoginId, setLoginId] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getUserName = localStorage.getItem('username');
    setUserName(getUserName);
    setLoginId(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
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
    <>
      <div className={styles.profileAndLogout}>
        <Button onClick={buttonProfile}>Мой профиль</Button>
        <Button onClick={handleLogout}>Выход</Button>
      </div>
      <div className={styles.userName}>Привет, {userName}</div>
    </>
  );
}

export default ProfileAndLogout;
