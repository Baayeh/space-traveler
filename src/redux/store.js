import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import rocketReducer from './rocket/rockets';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rockets: rocketReducer,
  },
});

export default store;
