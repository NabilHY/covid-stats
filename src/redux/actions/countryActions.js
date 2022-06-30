import ActionTypes from '../constants/action-types';

export const setCountries = (countries) => ({
  type: ActionTypes.DISPLAY_STATS,
  payload: countries,
});

export const selectCountry = (country) => ({
  type: ActionTypes.SELECTED_COUNTRY,
  payload: country,
});

export const removeSelectedCountry = () => ({
  type: ActionTypes.REMOVE_SELECTED_COUNTRY,
});
