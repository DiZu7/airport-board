import React from 'react';
import FlightSearchForm from '../flight-search-form/FlightSearchForm';
import FlightsList from '../../flights/components/flights-list/FlightsList';
import './searchFlights.scss';
import Navigation from '../navigation/Navigation';

const SearchFlights = () => {
  return (
    <main className="search-flights">
      <FlightSearchForm />
      <Navigation />
      <FlightsList />
    </main>
  );
};

export default SearchFlights;
