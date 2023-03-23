import * as flightsGateway from './flights.gateway.js';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

export const flightsListRecieved = flightsList => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
};

export const getFlightsList = date => {
  return function (dispatch) {
    flightsGateway
      .fetchFlightsList(date)
      .then(flightsList => dispatch(flightsListRecieved(flightsList)));
  };
};
