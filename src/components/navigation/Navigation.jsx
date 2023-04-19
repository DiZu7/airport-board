import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import './navigation.scss';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { DATE_FORMAT, DATE_FORMAT_SHORT, yesterday, today, tomorrow } from '../../utils/dateUtils';
import { setClassNamesDate, setClassNamesNavLink } from '../../utils/classNamesUtils';
import moment from 'moment/moment';

const Navigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isReactCalendarActive, setReactCalendarActive] = useState(false);
  const [calendarValue, setCalendarValue] = useState(
    searchParams.get('date')
      ? new Date(moment(searchParams.get('date'), DATE_FORMAT).format())
      : new Date(),
  );

  useEffect(() => {
    setSearchParams(searchParams => {
      searchParams.set('date', moment(calendarValue).format(DATE_FORMAT));
      return searchParams;
    });

  }, [searchParams.get('date'), calendarValue]);

  const url = useLocation().pathname;
  console.log(searchParams.get('date'));

  return (
    <>
      <div className="search-flights__nav flights-nav">
        <NavLink to="/departure" className={setClassNamesNavLink(url, '/departure')}>
          <div className="btn__icon">
            <i className="fa-solid fa-plane-departure"></i>
          </div>
          departures
        </NavLink>
        <NavLink to="/arrival" className={setClassNamesNavLink(url, '/arrival')}>
          <div className="btn__icon">
            <i className="fa-solid fa-plane-arrival"></i>
          </div>
          arrivals
        </NavLink>
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
            value={moment(calendarValue, DATE_FORMAT).format(DATE_FORMAT_SHORT)}
          />
          <div className="search-flights__calendar">
            <i className="fa-regular fa-calendar"></i>
          </div>
        </div>

        <div className="search-flights__dates">
          <div className={setClassNamesDate(calendarValue, yesterday)}>
            <div className="date__num">{yesterday.format(DATE_FORMAT_SHORT)}</div>
            <div
              className="date__title"
              onClick={() => setCalendarValue(new Date(yesterday.format()))}
            >
              yesterday
            </div>
          </div>
          <div className={setClassNamesDate(calendarValue, today)}>
            <div className="date__num">{today.format(DATE_FORMAT_SHORT)}</div>
            <div className="date__title" onClick={() => setCalendarValue(new Date(today.format()))}>
              today
            </div>
          </div>

          <div className={setClassNamesDate(calendarValue, tomorrow)}>
            <div className="date__num">{tomorrow.format(DATE_FORMAT_SHORT)}</div>
            <div
              className="date__title"
              onClick={() => setCalendarValue(new Date(tomorrow.format()))}
            >
              tomorrow
            </div>
          </div>
        </div>
      </div>

      {isReactCalendarActive && (
        <div className="search-flights__react-calendar-wrap">
          <Calendar
            onChange={nextValue => {
              setCalendarValue(nextValue);
              setReactCalendarActive(false);
            }}
            value={calendarValue}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
