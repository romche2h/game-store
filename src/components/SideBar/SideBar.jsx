import React, { useState } from 'react';
import styles from './SideBar.module.scss';
import { Link } from 'react-router-dom';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.sidebar} onClick={toggleMenu}>
      <div className={styles.hamburger}></div>
      <div className={`${styles.menu} ${isOpen ? styles.menuActive : ''}`}>
        <div className={styles.menuContent}>
          <Link className={styles.link} to='/login'>
            Вход
          </Link>

          <Link className={styles.link} to='register'>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
