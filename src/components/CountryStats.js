import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectCountry, removeSelectedCountry } from '../redux/actions/countryActions';

const CountryStats = () => {
  const country = useSelector((state) => state.country);
  const { location } = useParams();
  const dispatch = useDispatch();
  const fetchCountryStats = async () => {
    const response = await axios
      .get(`https://covid2019-api.herokuapp.com/v2/country/${location}`)
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(selectCountry(response.data.data));
  };

  let loaded = false;

  const change = () => {
    loaded = true;
  };

  useEffect(() => {
    if (location && location !== '' && !loaded) {
      fetchCountryStats();
      change();
    }
    return () => {
      dispatch(removeSelectedCountry());
    };
  }, [location]);

  return (
    <>
      {country[0] && country.map((coun) => (
        <>
          <div key={uuidv4()}>
            <p>{coun.location}</p>
            <p>{coun.deaths}</p>
            <p>{coun.confirmed}</p>
            <p>{coun.active}</p>
            <p>{coun.recovered}</p>
          </div>

        </>
      ))}
    </>
  );
};

export default CountryStats;
