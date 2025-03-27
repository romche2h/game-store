import React from 'react';
import styles from './BestText.module.scss';
import Button from '../Button/Button';

function BestText() {
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
          <Button>Создать команду</Button>
        </div>
      </div>
    </div>
  );
}

export default BestText;
