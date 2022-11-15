import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
