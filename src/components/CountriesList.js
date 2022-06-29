import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCountries } from '../redux/actions/countryActions';
import CountryComponent from './CountryComponent';

const CountriesList = () => {
  const dispatch = useDispatch();
  const fetchCountries = async () => {
    const response = await axios
      .get('https://covid2019-api.herokuapp.com/v2/current')
      .catch(() => {});
    dispatch(setCountries(response.data.data));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <CountryComponent />
    </div>
  );
};

export default CountriesList;
