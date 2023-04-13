import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Flight from '../flight/Flight';
import './flightsList.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { departureFlightsListSelector, arrivalFlightsListSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';
import { filterFlightsBySearchedValue } from '../../../utils/flightsUtils';

const FlightsList = ({ flights, getFlightsList, searchedDate, searchedText }) => {
  useEffect(() => {
    getFlightsList(searchedDate);
  }, [searchedDate]);

  const url = useLocation().pathname;
  return flights.length !== 0 ? (
    <table className="search-flights__timetable timetable">
      <thead>
        <tr className=" timetable__line-header">
          <th className="timetable__item">Schedule</th>
          <th className="timetable__item">Destination</th>
          <th className="timetable__item">Flight</th>
          <th className="timetable__item">Terminal</th>
          <th className="timetable__item">Status</th>
        </tr>
      </thead>
      <tbody>
        {searchedText
          ? filterFlightsBySearchedValue(flights, searchedText).map(flightData => (
              <Flight key={flightData.ID} flightData={flightData} />
            ))
          : flights.map(flightData => <Flight key={flightData.ID} flightData={flightData} />)}
      </tbody>
    </table>
  ) : (
    <div className="nothing-found">
      <span>No Flight</span>
    </div>
  );
};

// FlightsList.propTypes = {
//   flights: PropTypes.object.isRequired,
//   // searchedText: PropTypes.string,
//   searchedDate: PropTypes.string.isRequired,
//   getFlightsList: PropTypes.func.isRequired,
// };

const mapState = state => {
  return {
    flights: departureFlightsListSelector(state) || arrivalFlightsListSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
};
export default connect(mapState, mapDispatch)(FlightsList);
