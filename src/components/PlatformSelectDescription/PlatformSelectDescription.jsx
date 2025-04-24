import React from 'react';
import styles from './PlatformSelectDescription.module.scss';

function PlatformSelectDescription({ value, onChange }) {
  return (
    <div className={styles.contant}>
      <div className={styles.title}>
        <svg className={styles.svg}>
          <use href='/icons/symbolTeam.svg#description'></use>
        </svg>
        <label htmlFor='description'>Описание команды</label>
      </div>
      <textarea
        name='description'
        id='description'
        placeholder='Расскажи, кто вы, во что играете..'
        maxLength='200'
        value={value}
        onChange={onChange}
        className={styles.selectAndInput}
      ></textarea>
    </div>
  );
}

export default PlatformSelectDescription;
