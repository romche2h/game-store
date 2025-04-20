import { configureStore } from '@reduxjs/toolkit';
import teamReducer from './Features/team/teamSlice.js';

export const store = configureStore({
  reducer: {
    team: teamReducer,
  },
});

export default store;
