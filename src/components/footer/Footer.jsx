import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  const scrollToPlatform = () => {
    const section = document.getElementById('platform-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Элемент с id="platform-section" не найден');
    }
  };

  return (
    <footer className={styles.footer}>
      <svg className={styles.logo}>
        <use href='src/icons/symbol.svg#icon-gaming'></use>
      </svg>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} onClick={scrollToPlatform}>
            АРЕНДА КОНСОЛЕЙ
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#'>
            КОМАНДНЫЕ СОРЕВНОВАНИЯ
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#'>
            АРЕНДА СЕРВЕРА
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#'>
            СООБЩЕСТВО
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href='#'>
            РАБОТАЙ И ИГРАЙ
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
