import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CountryComponent = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  const renderList = countries.map((country) => {
    const { location } = country;
    return (
      <div key={location} className="column">
        <Link to={`/country/${location}`}>
          <div className="country-card">
            <div className="card">
              <p>{location}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>{renderList}</>
  );
};

export default CountryComponent;
