import React from 'react';
import Flight from '../flight/Flight';
import './timetable.scss';
import moment from 'moment';
import PropTypes from 'prop-types';
import { DATE_FORMAT, DATE_FORMAT_REVERSE } from '../../utils/dateUtils';


  const Timetable = ({ flights, searchedDate, searchedText, url }) => {
  const filteredByDateFlights = flights.filter(flightData =>
    flightData[url === '/departure' ? 'timeDepShedule' : 'timeArrShedule'].includes(
      moment(searchedDate, DATE_FORMAT).format(DATE_FORMAT_REVERSE),
    ),
  );

  return (
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
          ? filteredByDateFlights
              .filter(
                flightData =>
                  flightData.fltNo.includes(searchedText) ||
                  flightData[url === '/departure' ? 'airportToID.city_en' : 'airportFromID.city_en']
                    .toLowerCase()
                    .includes(searchedText.toLowerCase()),
              )
              .map(flightData => <Flight key={flightData.ID} flightData={flightData} />)
          : filteredByDateFlights.map(flightData => (
              <Flight key={flightData.ID} flightData={flightData} />
            ))}
      </tbody>
    </table>
  );
};

Timetable.propTypes = {
  flights: PropTypes.array,
  url: PropTypes.string.isRequired,
  searchedText: PropTypes.string,
  searchedDate: PropTypes.string.isRequired,
};

export default Timetable;
