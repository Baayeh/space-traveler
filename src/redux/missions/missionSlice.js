/* eslint-disable no-param-reassign */
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAllMissions from '../endpoints/missionsApi';

// Action creator
const missionFetch = createAction('mission/fetchmissions');

// state
const initialState = {
  loading: false,
  missions: [],
  error: '',
};

// Thunk Creator
export const fetchMission = createAsyncThunk(missionFetch, async () => {
  const missions = await fetchAllMissions();
  return missions;
});

// Reducer
const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    reserveMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      }),
    }),
    leaveMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      }),
    }),
  },
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

export const { reserveMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
