import moment from 'moment/moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './navigation.scss';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { DATE_FORMAT, DATE_FORMAT_SHORT, yesterday, today, tomorrow } from '../../utils/dateUtils';

const Navigation = ({ searchedDate, setSearchedDate, url }) => {
  const [isReactCalendarActive, setReactCalendarActive] = useState(false);

  const setClassNamesDate = date =>
    classNames('date', {
      date_active: searchedDate === date.format(DATE_FORMAT),
    });

  const handleChange = nextValue => {
    setSearchedDate(moment(nextValue).format(DATE_FORMAT));
    setReactCalendarActive(false);
  };

  return (
    <>
      <div className="search-flights__nav flights-nav">
        <Link
          to="/departure"
          className={classNames('flights-nav__btn btn', { active: url !== '/arrival' })}
        >
          <div className="btn__icon">
            <i className="fa-solid fa-plane-departure"></i>
          </div>
          departures
        </Link>
        <Link
          to="/arrival"
          className={classNames('flights-nav__btn flights-nav__btn_arrival btn', {
            active: url === '/arrival',
          })}
        >
          <div className="btn__icon">
            <i className="fa-solid fa-plane-arrival"></i>
          </div>
          arrivals
        </Link>
      </div>
      <div className="search-flights__calendar-dates-wrap">
        <div
          className="search-flights__calendar-wrap"
          onClick={() => setReactCalendarActive(!isReactCalendarActive)}
        >
          <input
            type="text"
            readOnly="readonly"
            className="search-flights__calendar-date"
            value={moment(searchedDate, DATE_FORMAT).format(DATE_FORMAT_SHORT)}
          />
          <div className="search-flights__calendar">
            <i className="fa-regular fa-calendar"></i>
          </div>
        </div>

        <div className="search-flights__dates">
          <div className={setClassNamesDate(yesterday)}>
            <div className="date__num">{yesterday.format(DATE_FORMAT_SHORT)}</div>
            <div
              className="date__title"
              onClick={() => setSearchedDate(yesterday.format(DATE_FORMAT))}
            >
              yesterday
            </div>
          </div>
          <div className={setClassNamesDate(today)}>
            <div className="date__num">{today.format(DATE_FORMAT_SHORT)}</div>
            <div className="date__title" onClick={() => setSearchedDate(today.format(DATE_FORMAT))}>
              today
            </div>
          </div>

          <div className={setClassNamesDate(tomorrow)}>
            <div className="date__num">{tomorrow.format(DATE_FORMAT_SHORT)}</div>
            <div
              className="date__title"
              onClick={() => setSearchedDate(tomorrow.format(DATE_FORMAT))}
            >
              tomorrow
            </div>
          </div>
        </div>
      </div>

      {isReactCalendarActive && (
        <div className="search-flights__react-calendar-wrap">
          <Calendar
            onChange={handleChange}
            value={new Date(moment(searchedDate, DATE_FORMAT).format())}
          />
        </div>
      )}
    </>
  );
};

Navigation.propTypes = {
  url: PropTypes.string.isRequired,
  searchedDate: PropTypes.string.isRequired,
  setSearchedDate: PropTypes.func.isRequired,
};

export default Navigation;
