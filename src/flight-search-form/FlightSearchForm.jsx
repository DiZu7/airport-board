import React, { useState } from 'react';
import './flightSearchForm.scss';

const FlightSearchForm = ({ handleFlightSearch, setFlifghtSearchFormActive }) => {
  const [searchedFlightNumber, setsearchedFlightNumber] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    setsearchedFlightNumber(e.target.value);
    console.log(searchedFlightNumber);
    if (searchedFlightNumber === '') {
      setFlifghtSearchFormActive(false);
    }
  };

  return (
    <form
      className="search-flights__form form-search"
      onSubmit={e => {
        e.preventDefault();
        handleFlightSearch(searchedFlightNumber);
        setFlifghtSearchFormActive(true);
      }}
    >
      <div className="form-search__icon">
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        className="form-search__input"
        type="text"
        placeholder="flight #"
        value={searchedFlightNumber}
        onChange={handleChange}
      />
      <button className="form-search__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default FlightSearchForm;
