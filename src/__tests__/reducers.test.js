import countryReducer, { initialState } from '../redux/reducers/countryReducer';

describe('countries reducers', () => {
  it('should return the initial state', () => {
    expect(countryReducer(undefined, {})).toEqual(initialState);
  });
});
