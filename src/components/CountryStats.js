import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdLocalHospital } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';
import { TbRadioactive } from 'react-icons/tb';
import { GiConfirmed } from 'react-icons/gi';
import { FaSkullCrossbones } from 'react-icons/fa';

import axios from 'axios';
import { selectCountry, removeSelectedCountry } from '../redux/actions/countryActions';

const CountryStats = () => {
  const country = useSelector((state) => state.country);
  const { location } = useParams();
  const dispatch = useDispatch();
  const fetchCountryStats = async () => {
    const response = await axios
      .get(`https://covid2019-api.herokuapp.com/v2/country/${location}`)
      .catch(() => { });
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
          <div className="metrics" key={uuidv4()}>
            <BiCurrentLocation size={30} />
            <h1>{coun.location}</h1>
            <div>
              <div className="info" key={uuidv4()}>
                <FaSkullCrossbones size={30} />
                <p>{coun.deaths}</p>
              </div>
              <div className="info" key={uuidv4()}>
                <GiConfirmed size={30} />
                <p>{coun.confirmed}</p>
              </div>
              <div className="info" key={uuidv4()}>
                <TbRadioactive size={30} />
                <p>{coun.active}</p>
              </div>
              <div className="info" key={uuidv4()}>
                <MdLocalHospital size={30} />
                <p>{coun.recovered}</p>
              </div>
            </div>
          </div>

        </>
      ))}
    </>
  );
};

export default CountryStats;
