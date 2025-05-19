import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateTeam.module.scss';
import PlatformSelect from '../../components/PlatformSelect/PlatformSelect';
import PlatformSelectLogo from '../../components/PlatformSelectLogo/PlatformSelectLogo';
import PlatformSelectCountry from '../../components/PlatformSelectCountry/PlatformSelectCountry';
import PlatformSelectTeamName from '../../components/PlatformSelectTeamName/PlatformSelectTeamName';
import PlatformSelectDescription from '../../components/PlatformSelectDescription/PlatformSelectDescription';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTeam } from '../../Redux/Features/team/teamSlice';

function CreateTeam() {
  const [form, setForm] = useState({
    nameTeam: '',
    platform: '',
    logo: null,
    country: null,
    description: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreate = async (e) => {
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

    const formData = new FormData();
    formData.append('nameTeam', form.nameTeam);
    formData.append('platform', form.platform);
    formData.append('logo', form.logo);
    formData.append('country', JSON.stringify(form.country));
    formData.append('description', form.description);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Токен не найден!');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/teams',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { data } = response;
      setMessage(data.message);

      setForm({
        nameTeam: '',
        platform: '',
        logo: null,
        country: null,
        description: '',
      });

      const fileInput = document.getElementById('logo');
      if (fileInput) fileInput.value = '';

      const { team } = data;
      dispatch(addTeam({ ...team, id: Date.now() }));

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error || 'Ошибка при создании команды!');
      } else {
        setMessage('Ошибка при подключении к серверу!');
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, logo: file }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ограничение только английского языка и цифры в поле nameTeam
    if (name === 'nameTeam') {
      const regex = /^[a-zA-Z0-9\s]*$/;
      if (!regex.test(value)) return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const homePage = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Создать команду</h1>
      <form className={styles.teamForm} onSubmit={handleCreate}>
        <PlatformSelectTeamName
          value={form.nameTeam}
          onChange={handleChange}
          autoFocus
        />
        <PlatformSelect value={form.platform} onChange={handleChange} />
        <PlatformSelectLogo onChange={handleFileChange} />
        <PlatformSelectCountry
          value={form.country}
          onSelect={(country) => setForm((prev) => ({ ...prev, country }))}
        />
        <PlatformSelectDescription
          value={form.description}
          onChange={handleChange}
        />
        <Button>Создать команду</Button>
      </form>
      <Button className={styles.back} onClick={homePage}>
        <svg className={styles.logoArrowBack}>
          <use xlinkHref='src/icons/symbol.svg#arrow-back'></use>
        </svg>
      </Button>

      <div>{message}</div>
    </div>
  );
}

export default CreateTeam;
