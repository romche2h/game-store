import { useState } from 'react';
import styles from './Register.module.scss';
import Button from '../../components/Button/Button';
import BackgroundVideoAuth from '../../components/BackgroundVideoAuth/BackgroundVideo';
import InputField from '../../components/InputField/InputField';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const icons = {
  show: 'src/icons/showpass.svg',
  hide: 'src/icons/iconpass.svg',
};

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const restrictUsername = (value) => {
    return value.replace(/[^a-zA-Z0-9]/g, '');
  };

  const restrictEmail = (value) => {
    return value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
  };

  const restrictPassword = (value) => {
    return value.replace(/[^a-zA-Z0-9!@#$%^&*]/g, '');
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'username') {
      value = restrictUsername(value);
    } else if (name === 'email') {
      value = restrictEmail(value);
    } else if (name === 'password') {
      value = restrictPassword(value);
    }

    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!form.username || !form.email || !form.password) {
      setMessage('Все поля должны заполняться!');
      setLoading(false);

      return;
    }

    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.test(form.email)) {
      setMessage('Введите корректный маил');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/register',
        form,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      setMessage(response.data.message);
      setForm({ username: '', email: '', password: '' });
      navigate('/login');
    } catch (error) {
      console.error('Ошибка запроса:', error.response || error.message);
      setMessage(error.response?.data?.error || 'Ошибка регистрации!');
    } finally {
      setLoading(false);
    }
  };
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          onChange={handleChange}
          name='email'
          id='email'
          value={form.email}
          label='Ваш email'
          placeholder='Email'
          className={styles.inputpass}
          autoFocus
        />
        <InputField
          id='password'
          name='password'
          label='Ваш пароль'
          value={form.password}
          type={showPass ? 'text' : 'password'}
          placeholder='Пароль'
          className={styles.inputpass}
          onChange={handleChange}
        >
          <img
            className={styles.icon}
            src={showPass ? icons.hide : icons.show}
            alt='иконка скрытия пароля'
            onClick={toggleShowPass}
          />
        </InputField>
        <InputField
          id='username'
          name='username'
          value={form.username}
          label='Ваше имя'
          placeholder='Имя'
          maxLength={15}
          className={styles.inputpass}
          onChange={handleChange}
        />
        <Button disabled={loading}>
          {loading ? 'Загрузка...' : 'Зарегистрироваться'}
        </Button>
      </form>
      <Button
        onClick={() =>
          (window.location.href = 'http://localhost:5000/auth/steam')
        }
      >
        Есть steam?
      </Button>
      {message && <div className={styles.errorMessage}>{message}</div>}
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
