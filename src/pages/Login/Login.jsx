import React, { useState } from 'react';
import styles from './Login.module.scss';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import BackgroundVideoAuth from '../../components/BackgroundVideoAuth/BackgroundVideo';
import { Link } from 'react-router-dom';

function Login() {
  const [showPass, setShowPass] = useState(false);

  const icons = {
    show: 'src/icons/showpass.svg',
    hide: 'src/icons/iconpass.svg',
  };

  const toggleShowPass = () => setShowPass((prev) => !prev);

  return (
    <div className={styles.login}>
      <Link to='/'>
        <svg className={styles.logo}>
          <use href='src/icons/symbol.svg#icon-gaming'></use>
        </svg>
      </Link>
      <BackgroundVideoAuth
        className={styles.background}
        sources={['videoLogin.mp4', 'videoLogin.webm']}
      />
      <div className={styles.header}>Вход</div>
      <form className={styles.form}>
        <InputField id='email' label='Ваш email' placeholder='Email' />
        <InputField
          id='password'
          label='Ваш пароль'
          type={showPass ? 'text' : 'password'}
          placeholder='Пароль'
        >
          <img
            className={styles.icon}
            src={showPass ? icons.hide : icons.show}
            alt='иконка скрытия пароля'
            onClick={toggleShowPass}
          />
        </InputField>
        <Button appearance='big'>Вход</Button>
      </form>
      <div className={styles.links}>
        <p>Нет аккаунта?</p>
        <Link to='/register' className={styles.link}>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
}

export default Login;
