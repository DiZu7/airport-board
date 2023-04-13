import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import FlightSearchForm from '../flight-search-form/FlightSearchForm';
import Timetable from '../timetable/Timetable';
import './searchFlights.scss';
import NothingFound from '../nothing-found/NothingFound';
import Navigation from '../navigation/Navigation';
import * as QueryString from 'qs';
import PropTypes from 'prop-types';

const SearchFlights = ({
  flights,
  url,
  searchedDate,
  setSearchedDate,
  searchedText,
  setSearchedText,
}) => {
  return (
    <main className="search-flights">
      <FlightSearchForm setSearchedText={setSearchedText} />
      <Navigation setSearchedDate={setSearchedDate} searchedDate={searchedDate} url={url} />
      {/* {flights.length === 0 ? (
        <NothingFound />
      ) : ( */}
        <Timetable
          flights={flights}
          searchedDate={searchedDate}
          searchedText={searchedText}
          url={url}
        />
      {/* )} */}
    </main>
  );
};

SearchFlights.propTypes = {
  flights: PropTypes.array,
  url: PropTypes.string.isRequired,
  searchedText: PropTypes.string,
  setSearchedText: PropTypes.func,
  searchedDate: PropTypes.string.isRequired,
  setSearchedDate: PropTypes.func.isRequired,
};

export default SearchFlights;
