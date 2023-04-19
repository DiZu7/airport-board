import React, { useEffect, useState } from 'react';
import './flightSearchForm.scss';
import { useSearchParams } from 'react-router-dom';

const FlightSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedInputValue, setSearchedInputValue] = useState(
    searchParams.get('search') ? searchParams.get('search') : '',
  );

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams(searchParams => {
      searchParams.set('search', searchedInputValue);
      return searchParams;
    });
  };

  useEffect(() => {
    setSearchParams(searchParams => {
      searchParams.set('search', searchedInputValue);
      return searchParams;
    });

    !searchedInputValue && setSearchParams(searchParams.delete('search'));
  }, [searchParams.get('search'), searchParams]);

  return (
    <div className="search-flights__form-wrap">
      <h2 className="search-flights__title">Flight Search</h2>
      <form className="search-flights__form form-search" onSubmit={handleSubmit}>
        <div className="form-search__icon">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className="form-search__input"
          type="text"
          placeholder="Destination, flight #"
          value={searchedInputValue}
          onChange={e => setSearchedInputValue(e.target.value)}
        />
        <button className="form-search__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default FlightSearchForm;
