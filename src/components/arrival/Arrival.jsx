import React from 'react';
import '../timetable/timetable.scss';
import { useLocation } from 'react-router-dom';
import SearchFlights from '../search-flights/SearchFlights';
import PropTypes from 'prop-types';

const Arrival = ({
  flights,
  searchedDate,
  setSearchedDate,
  searchedText,
  setSearchedText,
}) => {
  const url = useLocation().pathname;

  return (
    <SearchFlights
      flights={flights.arrival}
      url={url}
      searchedDate={searchedDate}
      setSearchedDate={setSearchedDate}
      searchedText={searchedText}
      setSearchedText={setSearchedText}
    />
  );
};

Arrival.propTypes = {
  flights: PropTypes.object,
  searchedText: PropTypes.string,
  setSearchedText: PropTypes.func,
  searchedDate: PropTypes.string.isRequired,
  setSearchedDate: PropTypes.func.isRequired,
};

export default Arrival;
