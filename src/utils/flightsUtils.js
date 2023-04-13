import moment from 'moment';
import { DATE_FORMAT, DATE_FORMAT_REVERSE } from './dateUtils';

export const filterFlightsBySearchedValue = (flights, searchedValue) =>
  flights.filter(
    flightData =>
      flightData.fltNo.includes(searchedValue) ||
      flightData['airportToID.city_en' || 'airportFromID.city_en']
        .toLowerCase()
        .includes(searchedValue.toLowerCase()),
  );

export const filterFlightsByDate = (response, date) => {
  if (response.length === 0) {
    return {
      departure: [],
      arrival: [],
    };
  }

  return Object.entries(response).reduce((acc, [key, flightsList]) => {
    const filteredFlightsListByDate = flightsList.filter(flight =>
      (flight.timeDepShedule || flight.timeArrShedule).includes(
        moment(date, DATE_FORMAT).format(DATE_FORMAT_REVERSE),
      ),
    );

    return { ...acc, [key]: filteredFlightsListByDate };
  }, {});
};

export const showStatusOfFlight = (status, time) => {
  const statusTypes = {
    CX: 'canceled',
    DP: `departed at ${moment(time).format('HH:mm')}`,
    LN: `landed at ${moment(time).format('HH:mm')}`,
  };

  return statusTypes[status];
};
