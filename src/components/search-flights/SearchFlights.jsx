import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FlightSearchForm from '../flight-search-form/FlightSearchForm';
import FlightsList from '../../flights/components/flights-list/FlightsList';
import './searchFlights.scss';
import Navigation from '../navigation/Navigation';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import { DATE_FORMAT } from '../../utils/dateUtils';

const SearchFlights = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchedDate, setSearchedDate] = useState(
    searchParams.get('date') ? searchParams.get('date') : moment().format(DATE_FORMAT),
  );

  const [searchedText, setSearchedText] = useState(
    searchParams.get('search') ? searchParams.get('search') : '',
  );

  useEffect(() => {
    setSearchParams({
      date: searchedDate,
      ...(searchedText && { search: searchedText }),
    });
  }, [searchedDate, searchedText, searchParams]);

  return (
    <main className="search-flights">
      <FlightSearchForm setSearchedText={setSearchedText} />
      <Navigation setSearchedDate={setSearchedDate} searchedDate={searchedDate} />
      <FlightsList searchedDate={searchedDate} searchedText={searchedText} />
    </main>
  );
};

// SearchFlights.propTypes = {
//   flights: PropTypes.array,
//   url: PropTypes.string.isRequired,
//   searchedText: PropTypes.string,
//   setSearchedText: PropTypes.func,
//   searchedDate: PropTypes.string.isRequired,
//   setSearchedDate: PropTypes.func.isRequired,
// };

export default SearchFlights;
