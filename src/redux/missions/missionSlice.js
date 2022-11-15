/* eslint-disable no-param-reassign */
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAllMissions from '../endpoints/missionsApi';

// Action creator
const missionFetch = createAction('missions/fetchmissions');

// state
const initialState = {
  loading: false,
  missions: [],
  error: '',
};

// Thunk Creator
export const fetchMission = createAsyncThunk(missionFetch, async () => {
  const missions = await fetchAllMissions();
  return missions.map((mission) => (
    {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }
  ));
});

// Reducer
const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMission.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.loading = false;
        state.missions = [];
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
