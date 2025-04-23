import axios from 'axios';
import { removeTeam, setTeam } from './teamSlice.js';

export const fetchUserTeams = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/api/my-teams', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { teams } = response.data;
    dispatch(setTeam(teams));
    if (teams && teams.length > 0) {
      localStorage.setItem('team', 'true');
    } else {
      localStorage.removeItem('team');
    }
  } catch (error) {
    console.log('Ошибка при загрузке', error);
    localStorage.removeItem('team');
  }
};

export const deletUserTeam = (nameTeam) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete(
      `http://localhost:5000/api/teams/${encodeURIComponent(nameTeam)}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(removeTeam(nameTeam));

    const response = await axios.get('http://localhost:5000/api/my-teams', {
      headers: { Authorization: `Bearer ${token}` },
    });
    deletUserTeam(setTeam(response.data.teams));
  } catch (error) {
    console.log('ошибка при удалении команды', error);
  }
};
