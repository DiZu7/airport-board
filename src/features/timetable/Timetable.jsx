import React from 'react';
// import NothingFound from '../nothing-found/NothingFound';
import './timetable.scss';

const Timetable = () => {
  return (
    <div className="search-flights__timetable timetable">
      <div className="timetable__nav flights-nav">
        <button className="flights-nav__btn btn active">
          <div className="btn__icon">
            <i className="fa-solid fa-plane-departure"></i>
          </div>
          departures
        </button>
        <button className="flights-nav__btn flights-nav__btn_arrivals btn">
          <div className="btn__icon">
            <i className="fa-solid fa-plane-arrival"></i>
          </div>
          arrivals
        </button>
      </div>
      <div className="timetable__calendar-dates-wrap">
        <div className="timetable__calendar-wrap">
          <input
            type="text"
            readOnly="readonly"
            className="timetable__calendar-date"
            value="04/01"
          />
          <div className="timetable__calendar">
            <i className="fa-regular fa-calendar"></i>
          </div>
        </div>

        <div className="timetable__dates">
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
      <div className="timetable__board board">
        <div className="board__flight-row">
          <div className="board__flight-col board__board__flight-colschedule">Schedule</div>
          <div className="board__flight-col board__flight-col_destination">To</div>
          <div className="board__flight-col board__flight-col_flight">Flight</div>
          <div className="board__flight-col board__flight-col_terminal">Terminal</div>
          <div className="board__flight-col board__flight-col_status">Status</div>
        </div>
        <div className="board__flight-row">
          <div className="board__flight-col board__flight-col_schedule">21:50</div>
          <div className="board__flight-col board__flight-col_destination">New York</div>
          <div className="board__flight-col board__flight-col_flight">NY 727</div>
          <div className="board__flight-col board__flight-col_terminal">D</div>
          <div className="board__flight-col board__flight-col_status">Delayed</div>
        </div>
        <div className="board__flight-row">
          <div className="board__flight-col board__flight-col_schedule">21:50</div>
          <div className="board__flight-col board__flight-col_destination">New York</div>
          <div className="board__flight-col board__flight-col_flight">NY 727</div>
          <div className="board__flight-col board__flight-col_terminal">D</div>
          <div className="board__flight-col board__flight-col_status">Delayed</div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;

{
  /* <section className="timetable"> */
}
{
  /* <h2 className="timetable__title">Search Flight</h2>
      <form className="timetable__form form-search">
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
      </form> */
}
