import Button from '../../components/Button/Button';
import styles from './CreateTeam.module.scss';
import { useState } from 'react';
import CountrySelect from './CountrySelect';

function CreateTeam() {
  const [form, setForm] = useState({
    nameTeam: '',
    platform: '',
    logo: null,
    country: null,
    description: '',
  });
  const [message, setMessage] = useState('');
  const platforms = ['PC', 'Xbox', 'Nintendo Switch', 'Steam Deck', 'Mobile'];

  const handleCreate = (e) => {
    e.preventDefault();
    if (
      !form.nameTeam ||
      !form.platform ||
      !form.logo ||
      !form.country ||
      !form.description
    ) {
      setMessage('Все поля должны заполняться!');
      return;
    }

    const formData = {
      ...form,
      country: form.country.name,
    };

    console.log('Создание команды с данными:', formData);

    setForm({
      nameTeam: '',
      platform: '',
      logo: null,
      country: null,
      description: '',
    });

    const fileInput = document.getElementById('logo');
    if (fileInput) fileInput.value = '';
    setMessage('Команда успешно создана!');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, logo: file }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Создать команду</h1>
      <form className={styles.teamForm} onSubmit={handleCreate}>
        <div className={styles.contant}>
          <div className={styles.title}>
            <svg className={styles.svg}>
              <use href='/icons/symbolTeam.svg#team'></use>
            </svg>
            <label htmlFor='teamName'>Название команды</label>
          </div>
          <input
            id='teamName'
            name='nameTeam'
            type='text'
            placeholder='Введите уникальное название команды'
            value={form.nameTeam}
            onChange={handleChange}
            className={styles.selectAndInput}
          />
        </div>

        <div className={styles.contant}>
          <div className={styles.title}>
            <svg className={styles.svg}>
              <use href='/icons/symbolTeam.svg#controller'></use>
            </svg>
            <label htmlFor='platform'>Платформа</label>
          </div>
          <select
            className={styles.selectAndInput}
            name='platform'
            id='platform'
            value={form.platform}
            onChange={handleChange}
          >
            <option value=''>Выберите платформу</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.contant}>
          <div className={styles.title}>
            <svg className={styles.svg}>
              <use href='/icons/symbolTeam.svg#logoTeam'></use>
            </svg>
            <label htmlFor='logo'>Логотип команды</label>
          </div>
          <input
            id='logo'
            name='logo'
            type='file'
            className={styles.selectAndInput}
            onChange={handleFileChange}
          />
        </div>

        <CountrySelect
          value={form.country}
          onSelect={(country) => setForm((prev) => ({ ...prev, country }))}
        />

        <div className={styles.contant}>
          <div className={styles.title}>
            <svg className={styles.svg}>
              <use href='/icons/symbolTeam.svg#description'></use>
            </svg>
            <label htmlFor='description'>Описание команды</label>
          </div>
          <textarea
            name='description'
            id='description'
            placeholder='Расскажи, кто вы, во что играете, и какие цели преследуете'
            value={form.description}
            onChange={handleChange}
            className={styles.selectAndInput}
          ></textarea>
        </div>

        <Button>Создать команду</Button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default CreateTeam;
