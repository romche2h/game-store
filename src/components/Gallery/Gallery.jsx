import React from 'react';
import styles from './Gallery.module.scss';

const galleryImages = [
  { src: '/gal1.png', alt: 'foto-galery' },
  { src: '/gal2.png', alt: 'foto-galery' },
  { src: '/gal3.png', alt: 'foto-galery' },
  { src: '/gal4.png', alt: 'foto-galery' },
  { src: '/gal5.png', alt: 'foto-galery' },
  { src: '/gal6.png', alt: 'foto-galery' },
  { src: '/gal7.png', alt: 'foto-galery' },
  { src: '/gal8.png', alt: 'foto-galery' },
  { src: '/gal9.png', alt: 'foto-galery' },
  { src: '/gal10.png', alt: 'foto-galery' },
  { src: '/gal11.png', alt: 'foto-galery' },
  { src: '/gal12.png', alt: 'foto-galery' },
  { src: '/gal13.png', alt: 'foto-galery' },
  { src: '/gal14.png', alt: 'foto-galery' },
];

function Gallery() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.item}>
            <img className={styles.img} src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
