/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CountryComponent = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  const [searchTerm, setSearchTerm] = useState('');
  const renderList = countries.filter((country) => {
    if (searchTerm === '') {
      return country;
    } if (country.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return country;
    }
    return undefined;
  }).map((country) => (
    <>
      <div key={country.location} className="column">
        <Link to={`/country/${country.location}`}>
          <div className="country-card">
            <div className="card">
              <p>{country.location}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  ));
  return (
    <>
      <input
        type="text"
        placeholder="Search for country..."
        onChange={(event) => { setSearchTerm(event.target.value); }}
      />
      {renderList}
    </>
  );
};

export default CountryComponent;
