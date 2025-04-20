import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [],
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teams.push(action.payload);
      console.log('команда добавлена!', action.payload);
    },
    removeTeam: (state, action) => {
      state.teams = state.teams.filter((team) => team.id !== action.payload);
      console.log('команда удалина с id:', action.payload);
    },
    setTeam: (state, action) => {
      state.teams = action.payload;
      console.log('команда добавлена в хранилище!', action.payload);
    },
  },
});
export const { addTeam, removeTeam, setTeam } = teamSlice.actions;
export default teamSlice.reducer;
