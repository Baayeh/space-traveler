import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import rocketReducer from './rocket/rockets';
import capsuleSlice from './capsules/capsuleSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rockets: rocketReducer,
    capsules: capsuleSlice,
  },
});

export default store;
