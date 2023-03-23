import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation, useSearchParams } from 'react-router-dom';
import '../../styles/common.scss';
import './airportBoard.scss';
import Header from '../header/Header';
import Departure from '../departure/Departure';
import Arrival from '../arrival/Arrival';
import moment from 'moment';
import { connect } from 'react-redux';
import * as flightsActions from '../../store/actions/flights.actions';
import { flightsListSelector } from '../../store/selectors/flights.selectors';
import PropTypes from 'prop-types';
import * as QueryString from 'qs';
import { DATE_FORMAT } from '../../utils/dateUtils';

const AirportBoard = ({ flights, getFlightsList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchedDate, setSearchedDate] = useState(
    searchParams.get('date') ? searchParams.get('date') : moment().format(DATE_FORMAT),
  );

  const [searchedText, setSearchedText] = useState(
    searchParams.get('search') ? searchParams.get('search') : '',
  );

  useEffect(() => {
    getFlightsList(searchedDate);
  }, [searchedDate]);

  useEffect(() => {
    setSearchParams({
      date: searchedDate,
      ...(searchedText && { search: searchedText }),
    });
  }, [searchedDate, searchedText, searchParams]);

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/departure" />} />
        <Route
          path="/departure"
          element={
            <Departure
              flights={flights}
              searchedDate={searchedDate}
              setSearchedDate={setSearchedDate}
              searchedText={searchedText}
              setSearchedText={setSearchedText}
              setSearchParams={setSearchParams}
            />
          }
        />
        <Route
          path="/arrival"
          element={
            <Arrival
              flights={flights}
              searchedDate={searchedDate}
              setSearchedDate={setSearchedDate}
              searchedText={searchedText}
              setSearchedText={setSearchedText}
              setSearchParams={setSearchParams}
            />
          }
        />
      </Routes>
      <section className="optional"></section>
      <footer className="footer"></footer>
    </div>
  );
};

AirportBoard.propTypes = {
  flights: PropTypes.object,
  getFlightsList: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    flights: flightsListSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
};

export default connect(mapState, mapDispatch)(AirportBoard);
