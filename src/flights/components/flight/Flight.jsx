import React from 'react';
import moment from 'moment';
import './flight.scss';
import PropTypes from 'prop-types';
import { showStatusOfFlight } from '../../../utils/flightsUtils';

const Flight = ({ flightData }) => {
  return (
    <tr className="timetable__line">
      <td className="timetable__item">
        {moment(flightData.timeDepShedule || flightData.timeArrShedule).format('HH:mm')}
      </td>
      <td className="timetable__item">
        {flightData['airportToID.city_en'] || flightData['airportFromID.city_en']}
      </td>
      <td className="timetable__item timetable__item_flight">
        <img
          className="timetable__item_logo"
          src={flightData.codeShareData[0].airline.en.logoSmallName}
        ></img>
        {flightData.fltNo}
      </td>
      <td className="timetable__item">{flightData.term}</td>
      <td className="timetable__item timetable__item_status">
        {showStatusOfFlight(flightData.status, flightData.timeTakeofFact)}
      </td>
    </tr>
  );
};

Flight.propTypes = {
  flightData: PropTypes.object,
};

export default Flight;
