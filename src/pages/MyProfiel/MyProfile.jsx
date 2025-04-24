import styles from './MyProfile.module.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  deletUserTeam,
  fetchUserTeams,
} from '../../Redux/Features/team/teamThunks';
import { removeTeam } from '../../Redux/Features/team/teamSlice';

function MyProfile() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams || []);
  const team = teams.length > 0 ? teams[0] : null;

  useEffect(() => {
    const loadTeams = async () => {
      setLoading(true);
      await dispatch(fetchUserTeams());
      setLoading(false);
    };

    if (teams.length === 0) {
      loadTeams();
    } else {
      setLoading(false);
    }
  }, [teams.length, dispatch]);

  const goHome = () => navigate('/');
  const goCreatTeam = () => navigate('/creat-team');

  const handleRemoveTeam = (teamId) => {
    dispatch(removeTeam(teamId));
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Загрузка...</h1>
      </div>
    );
  }
  const handleDeleteTeam = (nameTeam) => {
    if (team && teams) {
      dispatch(deletUserTeam(nameTeam));
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Profile</h1>
      {team ? (
        <div className={styles.contant}>
          <div className={styles.nameTeam}>
            Название команды: {team?.nameTeam || 'Нет данных'}
          </div>
          <div className={styles.logoTeam}>
            {team?.logoUrl ? (
              <img
                src={`http://localhost:5000${team.logoUrl}`}
                alt='Логотип команды'
                className={styles.teamLogo}
              />
            ) : (
              <div>Нет логотипа</div>
            )}
            <div className={styles.logoTeamName}>Логотип команды</div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.platformTeam}>
              Платформа: {team?.platform || 'Нет данных'}
            </div>
            <div className={styles.country}>
              Страна: {team?.country || 'Нет данных'}
            </div>
            <div className={styles.description}>
              Описание команды: {team?.description || 'Нет данных'}
            </div>
          </div>
          <div className={styles.actionButtons}>
            <Button>Редактировать</Button>
            <Button onClick={() => handleDeleteTeam(team.nameTeam)}>
              Удалить команду
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.noTeam}>
          <p>У вас пока нет команды</p>
          <Button onClick={goCreatTeam}>Создать команду</Button>
        </div>
      )}
      <div className={styles.inTheMain}>
        <Button onClick={goHome}>На главную</Button>
      </div>
    </div>
  );
}

export default MyProfile;
