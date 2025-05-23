import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import BackgroundVideoAuth from '../../components/BackgroundVideoAuth/BackgroundVideo';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { fetchUserTeams } from '../../Redux/Features/team/teamThunks';

const icons = {
  show: 'src/icons/showpass.svg',
  hide: 'src/icons/iconpass.svg',
};

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSteamLogin, setIsSteamLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const restrictEmail = (value) => {
    return value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
  };

  const restrictPassword = (value) => {
    return value.replace(/[^a-zA-Z0-9!@#$%^&*]/g, '');
  };

  const toggleShowPass = () => setShowPass((prev) => !prev);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'email') {
      value = restrictEmail(value);
    } else if (name === 'password') {
      value = restrictPassword(value);
    }
    setForm({ ...form, [name]: value });
  };

  const handleSteamLogin = async () => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      localStorage.setItem('username', decoded.username);
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

    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.test(form.email)) {
      setMessage('Не корректный email или пароль');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', form, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        localStorage.setItem('username', decoded.username);
        await dispatch(fetchUserTeams());
        navigate('/');
      }
      setMessage(response.data.message || 'Успешный вход');
      setForm({ email: '', password: '' });
    } catch (error) {
      setMessage(error.response?.data?.error || 'Ошибка входа');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <Link to='/'>
        <svg className={styles.logo}>
          <use href='src/icons/symbol.svg#icon-gaming' />
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
      {isSteamLogin && message && (
        <div className={styles.message}>{message}</div>
      )}
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
