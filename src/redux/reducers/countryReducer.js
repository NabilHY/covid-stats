import ActionTypes from '../constants/action-types';

const initialState = {
  countries: [
    {
      id: 1,
      name: 'United States',
      cases: 4324211,
      deaths: 39392,
    },
  ],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DISPLAY_STATS:
      return state;
    default:
      return state;
  }
};

export default countryReducer;
