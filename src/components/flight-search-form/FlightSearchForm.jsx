import React, { useEffect, useState } from 'react';
import './flightSearchForm.scss';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const FlightSearchForm = ({ setSearchedText }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchedInputValue, setSearchedInputValue] = useState('');

  useEffect(() => {
    searchParams.get('search') && setSearchedInputValue(searchParams.get('search'));
  }, [searchParams.get('search')]);

  console.log(searchedInputValue);
  return (
    <div className="search-flights__form-wrap">
      <h2 className="search-flights__title">Flight Search</h2>
      <form
        className="search-flights__form form-search"
        onSubmit={e => {
          e.preventDefault();
          setSearchedText(searchedInputValue);
        }}
      >
        <div className="form-search__icon">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className="form-search__input"
          type="text"
          placeholder="Destination, flight #"
          value={searchedInputValue}
          onChange={e => setSearchedInputValue(e.target.value)}
        />
        <button className="form-search__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

FlightSearchForm.propTypes = {
  setSearchedText: PropTypes.func,
};
export default FlightSearchForm;
