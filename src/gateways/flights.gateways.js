import moment from 'moment';
import { DATE_FORMAT, DATE_FORMAT_REVERSE } from '../utils/dateUtils';

const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = date => {
  return fetch(`${baseUrl}/${date}`)
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't display events");
      }
      return response.json();
    })
    .then(({ body }) => {
      if (body.length === 0) {
        return {
          departure: [],
          arrival: [],
        };
      }

      return Object.entries(body).reduce((acc, [key, flightsList]) => {
        const filteredFlightsListByDate = flightsList.filter(flight =>
          key === 'departure'
            ? flight.timeDepShedule.includes(moment(date, DATE_FORMAT).format(DATE_FORMAT_REVERSE))
            : flight.timeArrShedule.includes(moment(date, DATE_FORMAT).format(DATE_FORMAT_REVERSE)),
        );

        return { ...acc, [key]: filteredFlightsListByDate };
      }, {});
    })
    .catch(() => {
      alert("Network Error. Can't display events");
      return {
        departure: [],
        arrival: [],
      };
    });
};

// const filterDeparturesByDate = (flights, date) => {
//   return flights.filter(flight =>
//     flight.timeDepShedule.includes(moment(date, DATE_FORMAT).format(DATE_FORMAT_REVERSE)),
//   );
// };

// const filterArrivalsByDate = (flights, date) => {
//   return flights.filter(flight =>
//     flight.timeArrShedule.includes(moment(date, DATE_FORMAT).format(DATE_FORMAT_REVERSE)),
//   );
// };

// const filteredFlights = Object.entries(flights.body).reduce((acc, [key, flights]) => {
//   const filteredFlights =
//     key === 'departure'
//       ? filterDeparturesByDate(flights, date)
//       : filterArrivalsByDate(flights, date);
//   return { ...acc, [key]: filteredFlights };
// }, {});
