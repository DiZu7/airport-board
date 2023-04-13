// export const flightsListSelector = state => state.flights.flightsList;
export const departureFlightsListSelector = state => state.flights.flightsList.departure;
export const arrivalFlightsListSelector = state => state.flights.flightsList.arrival;

// import { createSelector } from 'reselect';

// export const usersListSelector = state => {
//   return state.users.usersList;
// };

// export const filterTextSelector = state => {
//   return state.users.filterText;
// };

// export const filteredUsersList = createSelector(
//   [usersListSelector, filterTextSelector],
//   (usersList, filterText) =>
//     usersList.filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase())),
// );
