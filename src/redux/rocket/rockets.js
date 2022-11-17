/* eslint-disable no-param-reassign */
import rocketFetch from '../endpoints/rocketsApi';

const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'rockets/CANCEL_RESERVATION';

const initialState = [];

const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchAllRockets = () => async (dispatch) => {
  const response = await rocketFetch();
  dispatch(fetchRockets(response));
};

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });

    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });

    default: return state;
  }
};

export default rocketReducer;
