import ActionTypes from '../constants/action-types';

const initialState = {
  countries: [{
    id: 1,
    name: 'United States',
  }],
};

const countryReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.DISPLAY_STATS:
      return state;
    default:
      return state;
  }
};

export default countryReducer;
