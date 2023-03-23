import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import '../../styles/common.scss';
import './airportBoard.scss';
import Header from '../header/Header';
import Departure from '../departure/Departure';
import Arrival from '../arrival/Arrival';
import moment from 'moment';
import { connect } from 'react-redux';
import * as flightsActions from '../../store/flights.actions';
import { flightsListSelector } from '../../store/flights.selectors';
import PropTypes from 'prop-types';
import * as QueryString from 'qs';
import { DATE_FORMAT } from '../../utils/dateUtils';

const AirportBoard = ({ flights, getFlightsList }) => {
  const searchParamValue = useLocation().search;

  const [searchedDate, setSearchedDate] = useState(
    searchParamValue === ''
      ? moment().format(DATE_FORMAT)
      : QueryString.parse(searchParamValue)['?date'],
  );

  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    getFlightsList(searchedDate);
  }, [searchedDate]);

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/departure" />}></Route>
        <Route
          path="/departure"
          element={
            <Departure
              flights={flights}
              searchedDate={searchedDate}
              setSearchedDate={setSearchedDate}
              searchedText={searchedText}
              setSearchedText={setSearchedText}
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
