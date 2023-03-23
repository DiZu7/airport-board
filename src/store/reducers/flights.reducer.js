import { FLIGHTS_LIST_RECIEVED } from '../actions/flights.actions';

const initialState = {
  flightsList: {
    departure: [],
    arrival: [],
  },
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED: {
      return {
        ...state,
        flightsList: action.payload.flightsList.body,
      };
    }
    default:
      return state;
  }
};

export default flightsReducer;
