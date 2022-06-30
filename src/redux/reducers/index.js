import { combineReducers } from 'redux';
import countryReducer, { selectedCountryReducer } from './countryReducer';

const reducers = combineReducers({
  allCountries: countryReducer,
  country: selectedCountryReducer,
});

export default reducers;
