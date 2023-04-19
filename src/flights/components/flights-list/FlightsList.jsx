import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Flight from '../flight/Flight';
import './flightsList.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { flightsListSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';
import { filterFlightsBySearchedValue } from '../../../utils/flightsUtils';

const FlightsList = ({ flights, getFlightsList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchedText = searchParams.get('search');
  const searchedDate = searchParams.get('date');

  useEffect(() => {
    if (searchedDate) {
      getFlightsList(searchedDate);
    }
  }, [searchedDate]);

  const flightsList = useLocation().pathname === '/departure' ? flights.departure : flights.arrival;
  return flightsList.length !== 0 ? (
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
          ? filterFlightsBySearchedValue(flightsList, searchedText).map(flightData => (
              <Flight key={flightData.ID} flightData={flightData} />
            ))
          : flightsList.map(flightData => <Flight key={flightData.ID} flightData={flightData} />)}
      </tbody>
    </table>
  ) : (
    <div className="nothing-found">
      <span>No Flight</span>
    </div>
  );
};

FlightsList.propTypes = {
  flights: PropTypes.object.isRequired,
  getFlightsList: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    flights: flightsListSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
};
export default connect(mapState, mapDispatch)(FlightsList);
