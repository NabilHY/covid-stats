import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CgEnter } from 'react-icons/cg';

const CountryComponent = () => {
  const data = useSelector((state) => state.allCountries.countries);
  const countries = data.sort((a, b) => (a.location > b.location ? 1 : -1));
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
      <Link to={`/country/${country.location}`} className="cont-card">
        <div key={country.location} className="cont-card">
          <div className="country-card">
            <div className="card">
              <p>{country.location}</p>
              <p>
                Confirmed Cases:
                {' '}
                {country.confirmed}
              </p>
            </div>
            <CgEnter size={30} />
          </div>
        </div>
      </Link>
    </>
  ));
  return (
    <div className="home">
      <input
        type="text"
        placeholder="Search for country..."
        onChange={(event) => { setSearchTerm(event.target.value); }}
      />
      <div className="countries-container">
        {renderList}
      </div>
    </div>
  );
};

export default CountryComponent;
