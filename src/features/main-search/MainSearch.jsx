import React from 'react';
import './mainSearch.scss';

const MainSearch = () => {
  return (
    <section className="main-search">
      <div className="main-search__container">
        <h2 className="main-search__title">Flight Search</h2>
        <form className="main-search__form form-search">
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
        <div className="main-search__nav">
          <a href="#" className="main-search__flight flight">
            <div className="flight__icon">
              <i className="fa-solid fa-plane-departure"></i>
            </div>
            All departures
          </a>
          <a href="#" className="main-search__flight flight flight_arrivals">
            <div className="flight__icon">
              <i className="fa-solid fa-plane-arrival"></i>
            </div>
            All arrivals
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSearch;
