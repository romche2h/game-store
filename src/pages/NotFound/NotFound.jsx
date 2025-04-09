import React from 'react';
import styles from './NotFound.module.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const icons = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5'];
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <div className={styles.errorMessage}>Страница не найдена</div>
        <div className={styles.errorDescription}>
          Запрашиваемая страница не найдена
        </div>
        <Button onClick={goToHome} className={styles.backButton}>
          Вернуться на главную
        </Button>
        <div className={styles.iconsRow}>
          {icons.map((id) => (
            <svg key={id} className={styles.icon}>
              <use href={`/icons/symbol.svg#${id}`}></use>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
