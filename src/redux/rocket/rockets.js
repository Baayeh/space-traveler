import rocketFetch from '../endpoints/rocketsApi';

const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';

const initialState = [];

const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchAllRockets = () => async (dispatch) => {
  const response = await rocketFetch();
  dispatch(fetchRockets(response));
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default: return state;
  }
};

export default rocketReducer;
