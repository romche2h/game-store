import React from 'react';
import styles from './PlatformSelect.module.scss';

function PlatformSelect({ value, onChange }) {
  const platforms = ['PC', 'Xbox', 'Nintendo Switch', 'Steam Deck', 'Mobile'];

  return (
    <div className={styles.contant}>
      <div className={styles.title}>
        <svg className={styles.svg}>
          <use href='/icons/symbolTeam.svg#controller'></use>
        </svg>
        <label htmlFor='platform'>Платформа</label>
      </div>
      <select
        className={styles.selectAndInput}
        name='platform'
        id='platform'
        value={value}
        onChange={onChange}
      >
        <option value=''>Выберите платформу</option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PlatformSelect;
