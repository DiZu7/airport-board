import React from 'react';
import NothingFound from '../nothing-found/NothingFound';
import './searchFlights.scss';

const SearchFlights = () => {
  return (
    <section className="search-flights">
      <h2 className="search-flights__title">Search Flight</h2>
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
      <div className="search-flights__container">
        <div className="search-flights__nav">
          <a href="#" className="search-flights__flight flight active">
            <div className="flight__icon">
              <i className="fa-solid fa-plane-departure"></i>
            </div>
            departures
          </a>
          <a href="#" className="search-flights__flight search-flights__flight_arrivals flight">
            <div className="flight__icon">
              <i className="fa-solid fa-plane-arrival"></i>
            </div>
            arrivals
          </a>
        </div>
        <div className="search-flights__calendar-dates-wrap">
          <div className="search-flights__calendar-wrap">
            <input
              type="text"
              readOnly="readonly"
              className="search-flights__calendar-date"
              value="04/01"
            />
            <div className="search-flights__calendar">
              <i className="fa-regular fa-calendar"></i>
            </div>
          </div>

          <div className="search-flights__dates">
            <div className="date yesterday">
              <div className="date__num">04/01</div>
              <div className="date__title">yesterday</div>
            </div>
            <div className="date today date-active">
              <div className="date__num">05/01</div>
              <div className="date__title">today</div>
            </div>
            <div className="date tomorrow">
              <div className="date__num">06/01</div>
              <div className="date__title">tomorrow</div>
            </div>
          </div>
        </div>
        <div className="search-flights__result">
          <div className="search-flights__info">
            <div className="flight-row">
              <div className="flight-col flight-col__schedule">Schedule</div>
              <div className="flight-col flight-col__destination">To</div>
              <div className="flight-col flight-col__flight">Flight</div>
              <div className="flight-col flight-col__terminal">Terminal</div>
              <div className="flight-col flight-col__status">Status</div>
            </div>
            <div className="flight-row">
              <div className="flight-col flight-col__schedule">21:50</div>
              <div className="flight-col flight-col__destination">New York</div>
              <div className="flight-col flight-col__flight">NY 727</div>
              <div className="flight-col flight-col__terminal">D</div>
              <div className="flight-col flight-col__status">Delayed</div>
            </div>
            <div className="flight-row">
              <div className="flight-col flight-col__schedule">21:50</div>
              <div className="flight-col flight-col__destination">New York</div>
              <div className="flight-col flight-col__flight">NY 727</div>
              <div className="flight-col flight-col__terminal">D</div>
              <div className="flight-col flight-col__status">Delayed</div>
            </div>
          </div>
          {/* <NothingFound /> */}
        </div>
      </div>
    </section>
  );
};

export default SearchFlights;
