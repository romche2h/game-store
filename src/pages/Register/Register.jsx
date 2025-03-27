import React, { useState } from 'react';
import styles from './Register.module.scss';
import Button from '../../components/Button/Button';
import BackgroundVideoAuth from '../../components/BackgroundVideoAuth/BackgroundVideo';
import InputField from '../../components/InputField/InputField';
import { Link } from 'react-router-dom';

const icons = {
  show: 'src/icons/showpass.svg',
  hide: 'src/icons/iconpass.svg',
};

function Register() {
  const [showPass, setShowPass] = useState(false);

  const toggleShowPass = () => setShowPass((prev) => !prev);

  return (
    <div className={styles.register}>
      <Link to='/'>
        <svg className={styles.logo}>
          <use href='src/icons/symbol.svg#icon-gaming'></use>
        </svg>
      </Link>
      <BackgroundVideoAuth
        className={styles.background}
        sources={['/videoReister.mp4', '/videoReister.webm']}
      />
      <div className={styles.header}>Регистрация</div>
      <form className={styles.form}>
        <InputField
          id='email'
          label='Ваш email'
          placeholder='Email'
          className={styles.inputpass}
        />
        <InputField
          id='password'
          label='Ваш пароль'
          type={showPass ? 'text' : 'password'}
          placeholder='Пароль'
          className={styles.inputpass}
        >
          <img
            className={styles.icon}
            src={showPass ? icons.hide : icons.show}
            alt='иконка скрытия пароля'
            onClick={toggleShowPass}
          />
        </InputField>
        <InputField
          id='name'
          label='Ваше имя'
          placeholder='Имя'
          className={styles.inputpass}
        />
        <Button appearance='big'>Зарегистрироваться</Button>
      </form>
      <div className={styles.links}>
        <p>Есть аккаунт?</p>
        <Link to='/login' className={styles.link}>
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
