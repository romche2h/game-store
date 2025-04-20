import React, { useEffect, useState } from 'react';
import styles from './MyProfiel.module.scss';
import Button from '../../components/Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyPrifile() {
  const [team, setTeam] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/my-teams', {
          withCredentials: true,
        });
        setTeam(response.data.team);
      } catch (error) {
        console.log('Ошибка при загрузки данных', error);
      }
    };
    fetchTeam();
  }, []);

  const goHome = () => navigate('/');

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Profiel</h1>
      <div className={styles.contant}>
        <div className={styles.nameTeam}>Название команды:</div>
        <div className={styles.logoTeam}>
          <img src='' alt='Лого команды' />
          <div className={styles.logoTeamName}>Логотип команды</div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.platformTeam}>Платформа:</div>
          <div className={styles.country}>Страна:</div>
          <div className={styles.description}>Описание команды:</div>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <Button>Редарктировать</Button>
        <Button>Удалить команду</Button>
      </div>
      <div className={styles.inTheMain}>
        <Button onClick={goHome}>На главную</Button>
      </div>
    </div>
  );
}

export default MyPrifile;
