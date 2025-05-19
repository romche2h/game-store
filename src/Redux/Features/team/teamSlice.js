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
    },
    removeTeam: (state, action) => {
      state.teams = state.teams.filter(
        (team) => team.nameTeam !== action.payload
      );
    },
    setTeam: (state, action) => {
      state.teams = action.payload;
    },
  },
});
export const { addTeam, removeTeam, setTeam } = teamSlice.actions;
export default teamSlice.reducer;
