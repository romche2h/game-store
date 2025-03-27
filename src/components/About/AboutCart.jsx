import React from 'react';
import styles from './About.module.scss';

function AboutCard({ icon, title, text }) {
  return (
    <div className={styles.about}>
      <svg className={styles.about__icon}>
        <use xlinkHref={`src/icons/symbol.svg#${icon}`}></use>
      </svg>
      <div className={styles.titleFour}>{title}</div>
      <p className={styles.about__text}>{text}</p>
    </div>
  );
}

export default AboutCard;
