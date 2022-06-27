import ActionTypes from '../constants/action-types';

export const setProducts = (countries) => ({
  type: ActionTypes.DISPLAY_STATS,
  payload: countries,
});

export const SELECTED_COUNTRY = (country) => ({
  type: ActionTypes.SELECTED_COUNTRY,
  payload: country,
});
