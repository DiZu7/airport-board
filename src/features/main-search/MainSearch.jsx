import React from 'react';
import './mainSearch.scss';

const MainSearch = () => {
  return (
    <section class="main-search">
      <div class="main-search__container">
        <h2 class="main-search__title">Flight Search</h2>
        <form class="main-search__form form-search">
          <div class="form-search__icon">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            class="form-search__input"
            type="text"
            placeholder="Airline, destination or flight #"
          />
          <button class="form-search__btn" type="submit">
            Search
          </button>
        </form>
        <div class="main-search__nav">
          <a href="#" class="main-search__flight flight">
            <div class="flight__icon">
              <i class="fa-solid fa-plane-departure"></i>
            </div>
            All departures
          </a>
          <a href="#" class="main-search__flight flight flight_arrivals">
            <div class="flight__icon">
              <i class="fa-solid fa-plane-arrival"></i>
            </div>
            All arrivals
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSearch;
