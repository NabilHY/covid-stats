import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import store from '../redux/store';
import CountriesComponent from '../components/CountryComponent';

describe('Render components', () => {
  test('The Header component is rendering', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('CountryComponent is rendering', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CountriesComponent />
          </Provider>
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
