import React from 'react';
import styles from './HeaderLeft.module.scss';
import Button from '../Button/Button';

const gameImages = [
  { src: 'game1.png', alt: 'logo one' },
  { src: 'game2.png', alt: 'logo two' },
  { src: 'game3.png', alt: 'logo three' },
  { src: 'game4.png', alt: 'logo four' },
];

function HeaderLeft() {
  return (
    <header className={styles.header_left}>
      <svg className={styles.logo}>
        <use href='src/icons/symbol.svg#icon-gaming'></use>
      </svg>
      <div className={styles.content}>
        <div className={styles.titleThree}>ТВОЯ ИГРОВАЯ СТАНЦИЯ</div>
        <div className={styles.titleOne}>Погрузись в мир современных игр</div>
        <Button>ВЫБРАТЬ ПЛАТФОРМУ</Button>
        <div className={styles.about}>О нас</div>
        <div className={styles.gameImg}>
          {gameImages.map((image, index) => (
            <img
              key={index}
              className={styles.img}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default HeaderLeft;
