import React from 'react';
import styles from './PlatformSelectTeamName.module.scss';

function PlatformSelectTeamName({ value, onChange, autoFocus }) {
  return (
    <div className={styles.contant}>
      <div className={styles.title}>
        <svg className={styles.svg}>
          <use href='/icons/symbolTeam.svg#team'></use>
        </svg>
        <label htmlFor='teamName'>Название команды</label>
      </div>
      <input
        id='teamName'
        name='nameTeam'
        type='text'
        placeholder='Введите уникальное название команды'
        maxLength='22'
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        className={styles.selectAndInput}
      />
    </div>
  );
}

export default PlatformSelectTeamName;
