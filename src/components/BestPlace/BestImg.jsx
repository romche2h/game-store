import React from 'react';
import styles from './BestImg.module.scss';

const images = [
  {
    className: styles.background,
    src: '/bestPlaceImg.png',
    alt: 'Background',
  },
  {
    className: styles.overlayOne,
    src: '/foto-man.png',
    alt: 'First Overlay',
  },
  {
    className: styles.overlayTwo,
    src: '/foto2man.png',
    alt: 'Second Overlay',
  },
];

function BestImg() {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img
          key={index}
          className={image.className}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default BestImg;
