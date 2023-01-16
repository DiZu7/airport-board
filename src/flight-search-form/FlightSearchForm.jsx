import React, { useState } from 'react';
import './flightSearchForm.scss';

const FlightSearchForm = ({ handleFlightSearch, setFlifghtSearchFormActive }) => {
  const [searchedFlightNumber, setsearchedFlightNumber] = useState('');

  // const handleChange = e => {
  //   setsearchedFlightNumber(e.target.value);

  //   // searchedFlightNumber === ''
  //   //   ? setFlifghtSearchFormActive(false)
  //   //   : setFlifghtSearchFormActive(true);
  //   // handleFlightSearch(searchedFlightNumber);
  // };

  return (
    <form
      className="search-flights__form form-search"
      onSubmit={e => {
        e.preventDefault();

        handleFlightSearch(searchedFlightNumber);
        // setFlifghtSearchFormActive(true);
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
        onChange={e => setsearchedFlightNumber(e.target.value)}
        // onChange={handleChange}
      />
      <button className="form-search__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default FlightSearchForm;
