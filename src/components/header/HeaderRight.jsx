import React from 'react';
import styles from './HeaderRight.module.scss';
import ProfileAndLogout from '../ProfileAndLogout/ProfileAndLogout';
const players = [
  {
    id: 1,
    name: 'Полина Сердюк',
    score: 2956,
    avatar: '/player1.png',
  },
  {
    id: 2,
    name: 'Снегирев Влад',
    score: 2798,
    avatar: '/player2.png',
  },
  {
    id: 3,
    name: 'Пиво Денис',
    score: 2563,
    avatar: '/player3.png',
  },
];

function HeaderRight() {
  return (
    <>
      <div className={styles.gamersList}>
        <ProfileAndLogout />
        <div className={styles.titleFour}>TOP 3 PLAYERS</div>
        {players.map((player) => (
          <div key={player.id} className={styles.container}>
            <img
              src={player.avatar}
              alt={`foto ${player.name}`}
              className={styles.avatar}
            />
            <div className={styles.info}>
              <div className={styles.name}>{player.name}</div>
              <div className={styles.score}>{player.score}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HeaderRight;
