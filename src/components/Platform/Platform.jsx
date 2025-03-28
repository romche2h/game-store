import React from 'react';
import styles from './Platform.module.scss';
import Button from '../Button/Button';

const platforms = [
  { name: 'PC', img: 'pc.png', monitor: '4K монитор', price: 'от 5 евро' },
  {
    name: 'Play Station',
    img: 'playStation.png',
    monitor: '4K монитор',
    price: 'от 5 евро',
  },
  {
    name: 'X-BOX',
    img: 'x-box.png',
    monitor: '4K монитор',
    price: 'от 5 евро',
  },
  {
    name: 'Nintendo',
    img: 'nintendo.png',
    monitor: 'OLED',
    price: 'от 3 евро',
  },
  {
    name: 'Steam deck',
    img: 'steamDeck.png',
    monitor: 'IPS',
    price: 'от 5 евро',
  },
  { name: 'Mobile', img: 'mobile.png', monitor: 'OLED', price: 'от 3 евро' },
];

function Platform() {
  return (
    <div id='platform-section' className={styles.platform}>
      {platforms.map((platform, index) => (
        <div className={styles.cart} key={index}>
          <img src={platform.img} alt={platform.name} className={styles.img} />
          <h5 className={styles.title}>{platform.name}</h5>
          <div className={`${styles.location} ${styles.info}`}>
            <svg className={styles.svg}>
              <use xlinkHref={'src/icons/sprite-2.svg#icon-location'}></use>
            </svg>
            <p>UA</p>
          </div>

          <div className={`${styles.man} ${styles.info}`}>
            <svg className={styles.svg}>
              <use xlinkHref={'src/icons/sprite-2.svg#icon-man'}></use>
            </svg>
            <p>20+ players</p>
          </div>

          <div className={`${styles.credit} ${styles.info}`}>
            <svg className={styles.svg}>
              <use xlinkHref={'src/icons/sprite-2.svg#icon-credit'}></use>
            </svg>
            <p>{platform.price}</p>
          </div>

          <div className={`${styles.monitor} ${styles.info}`}>
            <svg className={styles.svg}>
              <use xlinkHref={'src/icons/sprite-2.svg#icon-monitor'}></use>
            </svg>
            <p>{platform.monitor}</p>
          </div>

          <Button className={styles.btn}>Выбрать</Button>
        </div>
      ))}
    </div>
  );
}

export default Platform;
