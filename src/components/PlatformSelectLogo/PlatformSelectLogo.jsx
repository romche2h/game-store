import React from 'react';
import styles from './PlatformSelectLogo.module.scss';

function PlatformSelectLogo({ onChange }) {
  return (
    <div className={styles.contant}>
      <div className={styles.title}>
        <svg className={styles.svg}>
          <use href='/icons/symbolTeam.svg#logoTeam'></use>
        </svg>
        <label htmlFor='logo'>Логотип команды</label>
      </div>
      <label htmlFor='logo' className={styles.customFile}>
        <span className={styles.plus}>+</span>
      </label>
      <input
        id='logo'
        name='logo'
        type='file'
        className={styles.hiddenFileInput}
        onChange={onChange}
      />
    </div>
  );
}

export default PlatformSelectLogo;
