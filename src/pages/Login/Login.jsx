import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import BackgroundVideoAuth from '../../components/BackgroundVideoAuth/BackgroundVideo';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUserTeams } from '../../Redux/Features/team/teamThunks';

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSteamLogin, setIsSteamLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const icons = {
    show: 'src/icons/showpass.svg',
    hide: 'src/icons/iconpass.svg',
  };

  const toggleShowPass = () => setShowPass((prev) => !prev);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSteamLogin = async () => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      await dispatch(fetchUserTeams());
      navigate('/');
    } else {
      setIsSteamLogin(true);
    }
  };

  useEffect(() => {
    handleSteamLogin();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    if (!form.email || !form.password) {
      setMessage('Введите Логин и пароль');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/login', form, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        await dispatch(fetchUserTeams());
      }
      setMessage(response.data.message);
      setForm({ email: '', password: '' });
      navigate('/');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Ошибка');
    } finally {
      setLoading(false);
    }
  };

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          id='email'
          label='Ваш email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='Email'
          autoFocus
        />
        <InputField
          id='password'
          label='Ваш пароль'
          name='password'
          value={form.password}
          onChange={handleChange}
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
        <Button disabled={loading}>{loading ? 'Загрузка...' : 'Вход'}</Button>
      </form>
      <Button
        onClick={() =>
          (window.location.href = 'http://localhost:5000/auth/steam')
        }
      >
        Войти при помощи Steam
      </Button>
      {isSteamLogin && message && <div>{message}</div>}
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
