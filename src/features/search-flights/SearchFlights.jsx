import React from 'react';
import Timetable from '../timetable/Timetable';
import './searchFlights.scss';

const SearchFlights = () => {
  return (
    <main className="search-flights">
      <div className="search-flights__container">
        <h2 className="search-flights__title">Flight Search</h2>
        <form className="search-flights__form form-search">
          <div className="form-search__icon">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            className="form-search__input"
            type="text"
            placeholder="Airline, destination or flight #"
          />
          <button className="form-search__btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <Timetable />
    </main>
  );
};

export default SearchFlights;

{
  /* <div className="search-flights__nav">
          <a href="#" className="search-flights__flight flight">
            <div className="flight__icon">
              <i className="fa-solid fa-plane-departure"></i>
            </div>
            All departures
          </a>
          <a href="#" className="search-flights__flight flight flight_arrivals">
            <div className="flight__icon">
              <i className="fa-solid fa-plane-arrival"></i>
            </div>
            All arrivals
          </a>
        </div> */
}
