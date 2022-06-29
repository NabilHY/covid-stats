import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import CountryStats from '../components/CountryStats';

describe('metrics data rendering', () => {
  test('Country stats page renders', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CountryStats />
          </Provider>
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
