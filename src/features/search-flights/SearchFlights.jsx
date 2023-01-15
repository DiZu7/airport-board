import React, { useEffect, useState } from 'react';
import FlightSearchForm from '../../flight-search-form/FlightSearchForm';
import { fetchFlightsList } from '../../gateway';
import Timetable from '../timetable/Timetable';
import './searchFlights.scss';
import moment from 'moment';

const testDate = new Date();

const SearchFlights = () => {
  const [navigationDate, setDateNavigation] = useState(testDate);
  const [dateForRender, setDateForRender] = useState(navigationDate);

  const [flightsList, setFlightsList] = useState([]);
  const [isBtnDepartureActive, setBtnDepartureActive] = useState(true);
  const [isFlightSearchedFormActive, setFlifghtSearchFormActive] = useState(false);
  const [searchedFlightNumber, setSearchedFlightNumber] = useState('');
  console.log(navigationDate);
  console.log(moment(navigationDate).format('DD-MM-YYYY'));
  console.log(moment(dateForRender).format('DD-MM-YYYY'));
  console.log(isFlightSearchedFormActive);
  console.log(searchedFlightNumber);

  useEffect(() => {
    getDepartures(moment(navigationDate).format('DD-MM-YYYY'));
  }, []);

  // const fetchFlights = (date, type) => {
  //   fetchFlightsList(date).then(flightsList => setFlightsList(flightsList[type]));
  // };

  const getArrivals = date => {
    fetchFlightsList(date)
      .then(flightsList =>
        flightsList.body.arrival.map(flight => ({
          ...flight,
          schedule: flight.timeArrShedule,
          destination: flight['airportFromID.city_en'],
          flightNumber: flight.fltNo,
          terminal: flight.term,
        })),
      )
      .then(arrivalFlightList => {
        setFlightsList(arrivalFlightList);
        setBtnDepartureActive(false);
      });
  };

  const getDepartures = date => {
    fetchFlightsList(date)
      .then(flightsList =>
        flightsList.body.departure.map(flight => ({
          ...flight,
          schedule: flight.timeDepShedule,
          destination: flight['airportToID.city_en'],
          flightNumber: flight.fltNo,
          terminal: flight.term,
        })),
      )
      .then(departureFlightList => {
        setFlightsList(departureFlightList);
        setBtnDepartureActive(true);
      });
    // setFlightsList(flightsList[type]));
  };

  const goNextDate = () => {
    // setDateNavigation(moment(navigationDate).add(1, 'days').format());
    setDateForRender(moment(navigationDate).add(1, 'days').format());
  };

  const goPrevDate = () => {
    // setDateNavigation(moment(navigationDate).subtract(1, 'days').format());
    setDateForRender(moment(navigationDate).subtract(1, 'days').format());
  };

  const goCurrentDate = () => {
    // setDateNavigation(navigationDate);
    setDateForRender(navigationDate);
  };

  const getCalendarValue = date => {
    setDateNavigation(date);
    setDateForRender(date);
    getDepartures(moment(date).format('DD-MM-YYYY'));
  };

  const handleFlightSearch = flightNumber => {
    setSearchedFlightNumber(flightNumber);
  };

  const filteredByDateFlightsList = flightsList.filter(flight =>
    // flight.schedule.includes(moment(navigationDate).format('YYYY-MM-DD')),
    // flight.schedule.includes(moment(dateForRender).format('YYYY-MM-DD')),
    isFlightSearchedFormActive
      ? flight.schedule.includes(moment(dateForRender).format('YYYY-MM-DD')) &&
        flight.fltNo.includes(searchedFlightNumber)
      : flight.schedule.includes(moment(dateForRender).format('YYYY-MM-DD')),
  );

  return (
    <main className="search-flights">
      <div className="search-flights__container">
        <h2 className="search-flights__title">Flight Search</h2>
        <FlightSearchForm
          handleFlightSearch={handleFlightSearch}
          setFlifghtSearchFormActive={setFlifghtSearchFormActive}
        />
      </div>
      <Timetable
        navigationDate={navigationDate}
        testDate={testDate}
        goCurrentDate={goCurrentDate}
        goNextDate={goNextDate}
        goPrevDate={goPrevDate}
        getArrivals={getArrivals}
        getDepartures={getDepartures}
        isBtnDepartureActive={isBtnDepartureActive}
        getCalendarValue={getCalendarValue}
        dateForRender={dateForRender}
        filteredByDateFlightsList={filteredByDateFlightsList}
      />
    </main>
  );
};

export default SearchFlights;
