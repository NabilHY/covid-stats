import { combineReducers } from 'redux';
import countryReducer from './countryReducer';

const reducers = combineReducers({
  allCountries: countryReducer,
});

export default reducers;
