import React, { useEffect, useState } from 'react';
import styles from './BestText.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function BestText() {
  const [isLoginId, setLoginId] = useState(false);
  const navigate = useNavigate();
  const createTeam = () => {
    navigate('/creat-team');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoginId(!!token);
  }, []);

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
          {isLoginId && <Button onClick={createTeam}>Создать команду</Button>}
        </div>
      </div>
    </div>
  );
}

export default BestText;
