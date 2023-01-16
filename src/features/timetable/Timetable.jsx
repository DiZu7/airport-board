import React, { useEffect, useState } from 'react';
import { fetchFlightsList } from '../../gateway';
import Flight from '../flight/Flight';
// import NothingFound from '../nothing-found/NothingFound';
import './timetable.scss';
import moment from 'moment';
import Navigation from '../navigation/Navigation';
import NothingFound from '../nothing-found/NothingFound';

// solution 2 - все працює, але не подобається як витягує дані з сервера
// const testDate = '2022-02-22T04:13:00Z';

const Timetable = ({
  navigationDate,
  testDate,
  goCurrentDate,
  goNextDate,
  goPrevDate,
  getArrivals,
  getDepartures,
  isBtnDepartureActive,
  getCalendarValue,
  dateForRender,
  filteredByDateFlightsList,
}) => {
  return (
    <div className="search-flights__timetable timetable">
      <Navigation
        navigationDate={navigationDate}
        testDate={testDate}
        goCurrentDate={goCurrentDate}
        goNextDate={goNextDate}
        goPrevDate={goPrevDate}
        getArrivals={getArrivals}
        getDepartures={getDepartures}
        isBtnDepartureActive={isBtnDepartureActive}
        getCalendarValue={getCalendarValue}
        dateForRender={dateForRender}
      />

      <ul className="timetable__board board">
        <li className="board__flight-row">
          <div className="board__flight-col board__flight-col_schedule">Schedule</div>
          <div className="board__flight-col board__flight-col_destination">To</div>
          <div className="board__flight-col board__flight-col_flight">Flight</div>
          <div className="board__flight-col board__flight-col_terminal">Terminal</div>
          <div className="board__flight-col board__flight-col_status">Status</div>
        </li>
        {filteredByDateFlightsList

          //     flightsList.filter(flight =>
          // flight.timeDepShedule.includes(moment(currentDate).format('YYYY-MM-DD'))

          .map(
            flight =>
              isBtnDepartureActive ? (
                <Flight
                  key={flight.ID}
                  {...flight}
                  schedule={moment(flight.timeDepShedule).format('HH:mm')}
                  destination={flight['airportToID.city_en']}
                  flightNumber={flight.fltNo}
                  terminal={flight.term}
                />
              ) : (
                <Flight
                  key={flight.ID}
                  {...flight}
                  schedule={moment(flight.timeArrShedule).format('HH:mm')}
                  destination={flight['airportFromID.city_en']}
                  flightNumber={flight.fltNo}
                  terminal={flight.term}
                />
              ),
            // <Flight CORECT
            //   key={flight.ID}
            //   {...flight}
            //   schedule={moment(flight.schedule).format('HH:mm')}
            //   // schedule={moment(flight.timeArrShedule).format('HH:mm')}
            //   destination={flight.destination}
            //   // destination={flight['airportFromID.city_en']}
            //   flightNumber={flight.flightNumber}
            //   terminal={flight.terminal}
            // />
          )}
        {filteredByDateFlightsList.length === 0 && <NothingFound />}
      </ul>
    </div>
  );
};

export default Timetable;
