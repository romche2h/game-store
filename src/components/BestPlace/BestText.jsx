import React from 'react';
import styles from './BestText.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BestText() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const teams = useSelector((state) => state.team.teams || []);
  const haveProfile = teams.length > 0;

  const createTeam = () => {
    navigate('/creat-team');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <div className={styles.titleThree}>ВЕДИ КОМАНДУ К ПОБЕДЕ</div>
          <div className={styles.titleTwo}>
            Лучшее место для <br />
            онлайн соревнований
          </div>
          <div className={styles.description}>
            Как уже неоднократно упомянуто, базовые <br />
            сценарии поведения пользователей освещают <br /> чрезвычайно
            интересные особенности картины.
          </div>

          {token &&
            (haveProfile ? (
              <Button disabled>У вас есть команда</Button>
            ) : (
              <Button onClick={createTeam}>Создать команду</Button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BestText;
