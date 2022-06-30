import ActionTypes from '../constants/action-types';

export const initialState = {
  countries: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DISPLAY_STATS:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export const selectedCountryReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_COUNTRY:
      return [action.payload];
    case ActionTypes.REMOVE_SELECTED_COUNTRY:
      return {};
    default:
      return state;
  }
};

export default countryReducer;
