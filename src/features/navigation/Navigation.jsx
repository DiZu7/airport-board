import moment from 'moment/moment';
import React, { useState } from 'react';
import classNames from 'classnames';
import './navigation.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Navigation = ({
  goNextDate,
  goCurrentDate,
  goPrevDate,
  testDate,
  navigationDate,
  getArrivals,
  getDepartures,
  isBtnDepartureActive,
  setBtnDepartureActive,
  getCalendarValue,
  dateForRender,
}) => {
  const prevDate = moment(navigationDate).subtract(1, 'day');
  const nextDate = moment(navigationDate).add(1, 'day');
  // const prevDate = moment(currentDate).subtract(1, 'day');
  // const nextDate = moment(currentDate).add(1, 'day');

  // const [isBtnDepartureActive, setBtnDepartureActive] = useState(true);

  // console.log(prevDate);
  // console.log(nextDate);
  // const [isBtnDepartureActive, setBtnDepartureActive] = useState(true);

  const [isReactCalendarActive, setReactCalendarActive] = useState(false);

  const [calendarValue, setCalendarValue] = useState(testDate);
  const [dateActive, setDateActive] = useState('today');

  const handleChange = nextValue => {
    setCalendarValue(nextValue);
    getCalendarValue(nextValue);
    setReactCalendarActive(false);
    console.log(nextValue);
    console.log(navigationDate);
  };

  // const handleChange = e => {
  //   setCalendarValue(e.target.value);
  //   console.log(e.target.value);
  //   console.log(calendarValue);
  // };

  return (
    <>
      <div className="timetable__nav flights-nav">
        <button
          className={classNames('flights-nav__btn btn', { active: isBtnDepartureActive })}
          // className="flights-nav__btn btn active"
          onClick={() => {
            // setBtnDepartureActive(true);
            getDepartures();
            // getDepartures(moment(navigationDate).format('DD-MM-YYYY')); CORRECT
            // getDepartures(moment(currentDate).format('DD-MM-YYYY'));
          }}
        >
          <div className="btn__icon">
            <i className="fa-solid fa-plane-departure"></i>
          </div>
          departures
        </button>
        <button
          className={classNames('flights-nav__btn btn', { active: !isBtnDepartureActive })}
          // className="flights-nav__btn flights-nav__btn_arrivals btn"
          onClick={() => {
            // setBtnDepartureActive(false);
            getArrivals();
            // getArrivals(moment(navigationDate).format('DD-MM-YYYY')); CORRECT
            // getArrivals(moment(currentDate).format('DD-MM-YYYY'));
          }}
        >
          <div className="btn__icon">
            <i className="fa-solid fa-plane-arrival"></i>
          </div>
          arrivals
        </button>
      </div>
      <div className="timetable__calendar-dates-wrap">
        <div className="timetable__calendar-wrap" onClick={() => setReactCalendarActive(true)}>
          <input
            type="text"
            readOnly="readonly"
            className="timetable__calendar-date"
            // value={moment(calendarValue).format('DD/MM')}
            // value={moment(calendarValue).format('DD/MM')}
            value={moment(dateForRender).format('DD/MM')}
          />
          <div className="timetable__calendar">
            <i className="fa-regular fa-calendar"></i>
          </div>
        </div>

        <div className="timetable__dates">
          <div
            className={classNames('date', {
              date_active: dateActive === 'yesterday',
            })}
            onClick={() => {
              setDateActive('yesterday');
              goPrevDate();
            }}
          >
            <div className="date__num">{prevDate.format('DD/MM')}</div>
            <div className="date__title">yesterday</div>
          </div>
          <div
            className={classNames('date', { date_active: dateActive === 'today' })}
            onClick={() => {
              setDateActive('today');
              goCurrentDate();
            }}
          >
            <div className="date__num">{moment(navigationDate).format('DD/MM')}</div>
            <div className="date__title">today</div>
          </div>
          <div
            className={classNames('date', {
              date_active: dateActive === 'tomorrow',
            })}
            onClick={() => {
              setDateActive('tomorrow');
              goNextDate();
            }}
          >
            <div className="date__num">{nextDate.format('DD/MM')}</div>
            <div className="date__title">tomorrow</div>
          </div>
        </div>
      </div>
      {isReactCalendarActive && (
        <div className="timetable__react-calendar-wrap">
          <Calendar
            onChange={handleChange}
            // onChange={() => {
            //   setCalendarValue;
            //   getCalendarValue(calendarValue);
            // }}
            value={calendarValue}
          />
        </div>
      )}
    </>
  );
};

export default Navigation;
