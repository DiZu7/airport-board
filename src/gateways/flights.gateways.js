import { filterFlightsByDate } from '../utils/flightsUtils';

const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = date => {
  return fetch(`${baseUrl}/${date}`)
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't display events");
      }
      return response.json();
    })
    .then(({ body }) => filterFlightsByDate(body, date))
    .catch(() => {
      alert("Network Error. Can't display events");
    });
};
