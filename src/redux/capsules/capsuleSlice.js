import { createSlice } from '@reduxjs/toolkit';

const formatDate = (date) => new Date(date).toLocaleString().split(', ')[0];

const initialState = {
  capsules: null,
};

const capsuleSlice = createSlice({
  name: 'capsules',
  initialState,
  reducers: {
    setCapsules: (state, action) => {
      const newData = action.payload.map((capsule) => ({
        ...capsule,
        original_launch: formatDate(capsule.original_launch),
      }));
      return {
        ...state,
        capsules: newData,
      };
    },
    searchCapsule: (state, action) => ({
      ...state,
      capsules: action.payload,
    }),
  },
});

export const selectCapsules = (state) => state.capsules;
export const { setCapsules, searchCapsule } = capsuleSlice.actions;
export default capsuleSlice.reducer;
