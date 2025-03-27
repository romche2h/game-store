import React from 'react';
import styles from './About.module.scss';
import AboutCard from './AboutCart.jsx';

const aboutItems = [
  {
    icon: 'icon-steam',
    title: 'Лучшая игровая плаформа',
    text: 'Открой для себя лучшие игры на нашей платформе с великолепной графикой и захватывающим геймплеем.',
  },
  {
    icon: 'icon-cup',
    title: 'Еженедельные турниры',
    text: 'Вступай в еженедельные турниры, соревнуйся и побеждай! Лучшие призы ждут победителей.',
  },
  {
    icon: 'icon-headphones',
    title: 'Онлайн общение',
    text: 'Заводи новых друзей и общайся с единомышленниками в удобном онлайн чате прямо на сайте.',
  },
  {
    icon: 'icon-earth',
    title: 'Сообщество во всем мире',
    text: 'Присоединяйся к глобальному сообществу геймеров, находи команду и делись опытом с друзьями.',
  },
  {
    icon: 'icon-ideas',
    title: 'Онлайн чат с поддержкой',
    text: 'Получай оперативную помощь и ответы на вопросы в нашем онлайн чате поддержки.',
  },
  {
    icon: 'icon-buys',
    title: 'Удобная система оплаты',
    text: 'Быстрая и безопасная система оплаты, поддерживающая множество методов для твоего удобства.',
  },
];

function About() {
  return (
    <div className={styles.abouts}>
      {aboutItems.map((item, index) => (
        <AboutCard
          key={index}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default About;
