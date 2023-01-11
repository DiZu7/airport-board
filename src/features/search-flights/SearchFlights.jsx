import React from 'react';
import './searchFlights.scss';

const SearchFlights = () => {
  return (
    <section class="search-flights">
      <h2 class="search-flights__title">Search Flight</h2>
      <form class="search-flights__form form-search">
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
      <div class="search-flights__container">
        <div class="search-flights__nav">
          <a href="#" class="search-flights__flight flight active">
            <div class="flight__icon">
              <i class="fa-solid fa-plane-departure"></i>
            </div>
            departures
          </a>
          <a href="#" class="search-flights__flight search-flights__flight_arrivals flight">
            <div class="flight__icon">
              <i class="fa-solid fa-plane-arrival"></i>
            </div>
            arrivals
          </a>
        </div>
        <div class="search-flights__calendar-dates-wrap">
          <div class="search-flights__calendar-wrap">
            <input
              type="text"
              readonly="readonly"
              class="search-flights__calendar-date"
              value="04/01"
            />
            <div class="search-flights__calendar">
              <i class="fa-regular fa-calendar"></i>
            </div>
          </div>

          <div class="search-flights__dates">
            <div class="date yesterday">
              <div class="date__num">04/01</div>
              <div class="date__title">yesterday</div>
            </div>
            <div class="date today date-active">
              <div class="date__num">05/01</div>
              <div class="date__title">today</div>
            </div>
            <div class="date tomorrow">
              <div class="date__num">06/01</div>
              <div class="date__title">tomorrow</div>
            </div>
          </div>
        </div>
        <div class="search-flights__result">
          <div class="search-flights__info">
            <div class="flight-row">
              <div class="flight-col flight-col__schedule">Schedule</div>
              <div class="flight-col flight-col__destination">To</div>
              <div class="flight-col flight-col__flight">Flight</div>
              <div class="flight-col flight-col__terminal">Terminal</div>
              <div class="flight-col flight-col__status">Status</div>
            </div>
            <div class="flight-row">
              <div class="flight-col flight-col__schedule">21:50</div>
              <div class="flight-col flight-col__destination">New York</div>
              <div class="flight-col flight-col__flight">NY 727</div>
              <div class="flight-col flight-col__terminal">D</div>
              <div class="flight-col flight-col__status">Delayed</div>
            </div>
            <div class="flight-row">
              <div class="flight-col flight-col__schedule">21:50</div>
              <div class="flight-col flight-col__destination">New York</div>
              <div class="flight-col flight-col__flight">NY 727</div>
              <div class="flight-col flight-col__terminal">D</div>
              <div class="flight-col flight-col__status">Delayed</div>
            </div>
          </div>
          <div class="nothing-found hidden">
            <span>No Flight</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFlights;
