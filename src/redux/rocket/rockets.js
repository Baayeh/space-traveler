import rocketFetch from '../endpoints/rocketsApi';

const FETCH_ROCKET = 'rocket/FETCH_ROCKET';

const initialState = [];

const fetchRockets = () => ({
  type: FETCH_ROCKET,
});

export const fetchAllRockets = () => async (dispatch) => {
  const response = await rocketFetch();
  dispatch(fetchRockets(response));
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    default: return state;
  }
};

export default rocketReducer;
