import React, { useEffect, useState } from 'react';
import FlightSearchForm from '../../flight-search-form/FlightSearchForm';
import { fetchFlightsList } from '../../gateway';
import Timetable from '../timetable/Timetable';
import './searchFlights.scss';
import moment from 'moment';

const testDate = new Date(); // moment js should use

const SearchFlights = () => {
  const [navigationDate, setDateNavigation] = useState(testDate);
  const [dateForRender, setDateForRender] = useState(navigationDate);

  const [flightsList, setFlightsList] = useState({ departure: [], arrival: [] });
  const [isBtnDepartureActive, setBtnDepartureActive] = useState(true);
  const [searchedFlightNumber, setSearchedFlightNumber] = useState('');

  useEffect(() => {
    fetchFlights(moment(navigationDate).format('DD-MM-YYYY'));

    console.log(flightsList);
  }, [navigationDate]);

  const fetchFlights = date => {
    fetchFlightsList(date).then(flightsListAll => {
      setFlightsList(flightsListAll.body);
    });
  };

  const getDepartures = () => {
    setBtnDepartureActive(true);
    // setDateForRender(navigationDate);
  };

  const getArrivals = () => {
    setBtnDepartureActive(false);
    // setDateForRender(navigationDate);
  };

  const goNextDate = () => {
    setDateForRender(moment(navigationDate).add(1, 'days').format());
  };

  const goPrevDate = () => {
    setDateForRender(moment(navigationDate).subtract(1, 'days').format());
  };

  const goCurrentDate = () => {
    setDateForRender(navigationDate);
  };

  const getCalendarValue = date => {
    setDateNavigation(date);
    setDateForRender(date);
    getDepartures();
  };

  const handleFlightSearch = flightNumber => {
    setSearchedFlightNumber(flightNumber);
  };

  const filteredByDateFlightsList = isBtnDepartureActive
    ? flightsList.departure.filter(
        flight =>
          flight.timeDepShedule.includes(moment(dateForRender).format('YYYY-MM-DD')) &&
          flight.fltNo.includes(searchedFlightNumber),
      )
    : flightsList.arrival.filter(
        flight =>
          flight.timeArrShedule.includes(moment(dateForRender).format('YYYY-MM-DD')) &&
          flight.fltNo.includes(searchedFlightNumber),
      );

  return (
    <main className="search-flights">
      <div className="search-flights__container">
        <h2 className="search-flights__title">Flight Search</h2>
        <FlightSearchForm handleFlightSearch={handleFlightSearch} />
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

// працюючий варіант
// const SearchFlights = () => {
//   const [navigationDate, setDateNavigation] = useState(testDate);
//   const [dateForRender, setDateForRender] = useState(navigationDate);

//   const [flightsList, setFlightsList] = useState([]);
//   const [isBtnDepartureActive, setBtnDepartureActive] = useState(true);

//   const [searchedFlightNumber, setSearchedFlightNumber] = useState('');

//   useEffect(() => {
//     getDepartures(moment(navigationDate).format('DD-MM-YYYY'));
//   }, []);

//   const getArrivals = date => {
//     fetchFlightsList(date)
//       .then(flightsList =>
//         flightsList.body.arrival.map(flight => ({
//           ...flight,
//           schedule: flight.timeArrShedule,
//           destination: flight['airportFromID.city_en'],
//           flightNumber: flight.fltNo,
//           terminal: flight.term,
//         })),
//       )
//       .then(arrivalFlightList => {
//         setFlightsList(arrivalFlightList);
//         setBtnDepartureActive(false);
//       });
//   };

//   const getDepartures = date => {
//     fetchFlightsList(date)
//       .then(flightsList =>
//         flightsList.body.departure.map(flight => ({
//           ...flight,
//           schedule: flight.timeDepShedule,
//           destination: flight['airportToID.city_en'],
//           flightNumber: flight.fltNo,
//           terminal: flight.term,
//         })),
//       )
//       .then(departureFlightList => {
//         setFlightsList(departureFlightList);
//         setBtnDepartureActive(true);
//       });
//   };

//   const goNextDate = () => {
//     setDateForRender(moment(navigationDate).add(1, 'days').format());
//   };

//   const goPrevDate = () => {
//     setDateForRender(moment(navigationDate).subtract(1, 'days').format());
//   };

//   const goCurrentDate = () => {
//     setDateForRender(navigationDate);
//   };

//   const getCalendarValue = date => {
//     setDateNavigation(date);
//     setDateForRender(date);
//     getDepartures(moment(date).format('DD-MM-YYYY'));
//   };

//   const handleFlightSearch = flightNumber => {
//     setSearchedFlightNumber(flightNumber);
//   };

//   const filteredByDateFlightsList = flightsList.filter(
//     flight =>
//       flight.schedule.includes(moment(dateForRender).format('YYYY-MM-DD')) &&
//       flight.fltNo.includes(searchedFlightNumber),
//   );

//   return (
//     <main className="search-flights">
//       <div className="search-flights__container">
//         <h2 className="search-flights__title">Flight Search</h2>
//         <FlightSearchForm handleFlightSearch={handleFlightSearch} />
//       </div>
//       <Timetable
//         navigationDate={navigationDate}
//         testDate={testDate}
//         goCurrentDate={goCurrentDate}
//         goNextDate={goNextDate}
//         goPrevDate={goPrevDate}
//         getArrivals={getArrivals}
//         getDepartures={getDepartures}
//         isBtnDepartureActive={isBtnDepartureActive}
//         getCalendarValue={getCalendarValue}
//         dateForRender={dateForRender}
//         filteredByDateFlightsList={filteredByDateFlightsList}
//       />
//     </main>
//   );
// };

// export default SearchFlights;
