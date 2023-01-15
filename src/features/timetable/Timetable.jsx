import React, { useEffect, useState } from 'react';
import { fetchFlightsList } from '../../gateway';
import Flight from '../flight/Flight';
// import NothingFound from '../nothing-found/NothingFound';
import './timetable.scss';
import moment from 'moment';
import Navigation from '../navigation/Navigation';
import NothingFound from '../nothing-found/NothingFound';

// const currentDate = '2022-02-22T00:00:00Z';
// const currentDate = new Date();

// solution 3 - не рендерить arrivals
// const Timetable = () => {
//   const [navigationDate, setDateNavigation] = useState(currentDate);
//   const [flightsList, setFlightsList] = useState([]);
//   // const [isBtnDeparture, setBtnDeparture] = useState(true);
//   const [isBtnDepartureActive, setBtnDepartureActive] = useState(true);

//   // useEffect(() => {
//   //   fetchFlightsList(moment(currentDate).format('DD-MM-YYYY')).then(flightsList =>
//   //     setFlightsList(flightsList.body.departure),
//   //   );
//   //   // getDepartures();
//   //   // getDepartures(moment(currentDate).format('DD-MM-YYYY'));
//   //   //   //   // getDepartures(moment(currentDate).format('DD-MM-YYYY'));
//   //   //   //   // getArrivals(moment(currentDate).format('DD-MM-YYYY'));
//   // }, []);

//   // const fetchFlights = date => {
//   //   return fetchFlightsList(date).then(flightsListAll => flightsListAll.body);
//   // };

//   // const fetchedFlightsList = fetchFlightsList(currentDate).then(
//   //   flightsListAll => flightsListAll.body,
//   // );

//   const getArrivals = date => {
//     fetchFlightsList(date).then(flightsList => setFlightsList(flightsList.body.arrival));
//     // fetchedFlightsList.then(({ arrival }) => setFlightsList(arrival));
//     // console.log(flightsList);

//     // setBtnDepartureActive(false);
//     // fetchedFlightsList.then(({ arrival }) => {

//     // fetchFlightsList(date).then(({ body }) => {
//     //   setFlightsList(body.arrival);
//     //   console.log(body);
//     //   console.log(body.arrival);
//     // });

//     // fetchFlights(date).then(({ arrival }) => {
//     //   setFlightsList(arrival);
//     //   console.log(flightsList);
//     // });
//   };

//   const getDepartures = date => {
//     fetchFlightsList(date).then(flightsList => setFlightsList(flightsList.body.departure));
//     // fetchedFlightsList.then(({ departure }) => setFlightsList(departure));

//     // console.log(flightsList);
//     // return setFlightsList(fetchedFlightsList.departure);
//     // setBtnDepartureActive(true);
//     //   fetchedFlightsList.then(({ departure }) => {

//     // fetchFlightsList(date).then(({ body }) => {
//     //   setFlightsList(body.departure);

//     //   console.log(body);
//     //   console.log(body.departure);
//     // });

//     // fetchFlights(date).then(({ departure }) => {
//     //   setFlightsList(departure);
//     // });
//   };

//   const goNextDate = () => {
//     setDateNavigation(moment(currentDate).add(1, 'days').format());
//   };

//   const goPrevDate = () => {
//     setDateNavigation(moment(currentDate).subtract(1, 'days').format());
//   };

//   const goCurrentDate = () => {
//     setDateNavigation(currentDate);
//   };

//   // const filteredByDateFlightsList = flightsList.filter(flight =>
//   //   flight.actual.includes(moment(navigationDate).format('YYYY-MM-DD')),
//   // );

//   // const filteredByDateFlightsList = isBtnDepartureActive
//   //   ? flightsList.filter(flight =>
//   //       flight.timeDepShedule.includes(moment(navigationDate).format('YYYY-MM-DD')),
//   //     )
//   //   : flightsList.filter(flight =>
//   //       flight.timeArrShedule.includes(moment(navigationDate).format('YYYY-MM-DD')),
//   //     );

//   return (
//     <div className="search-flights__timetable timetable">
//       <Navigation
//         navigationDate={navigationDate}
//         currentDate={currentDate}
//         goCurrentDate={goCurrentDate}
//         goNextDate={goNextDate}
//         goPrevDate={goPrevDate}
//         getArrivals={getArrivals}
//         getDepartures={getDepartures}
//         isBtnDepartureActive={isBtnDepartureActive}
//         setBtnDepartureActive={setBtnDepartureActive}
//       />
//       <ul className="timetable__board board">
//         <li className="board__flight-row">
//           <div className="board__flight-col board__flight-col_schedule">Schedule</div>
//           <div className="board__flight-col board__flight-col_destination">Destination</div>
//           <div className="board__flight-col board__flight-col_flight">Flight</div>
//           <div className="board__flight-col board__flight-col_terminal">Terminal</div>
//           <div className="board__flight-col board__flight-col_status">Status</div>
//         </li>
//         {
//           // filteredByDateFlightsLis
//           // (isBtnDepartureActive
//           //   ? flightsList.filter(flight =>
//           //       flight.actual.includes(moment(navigationDate).format('YYYY-MM-DD')),
//           //     )
//           //   : flightsList.filter(flight =>
//           //       flight.actual.includes(moment(navigationDate).format('YYYY-MM-DD')),
//           //     )
//           // )
//           flightsList
//             .filter(flight => {
//               if (flight.timeDepShedule.includes(moment(navigationDate).format('YYYY-MM-DD'))) {
//                 console.log(flight);
//                 console.log(flight.timeDepShedule);
//                 console.log(flight.actual);
//                 return flight;
//               }
//             })
//             // .filter(
//             //   flight => {
//             //     if (flight.actual.includes('2022')) {
//             //       console.log(flight);
//             //       return flight;
//             //     }
//             //   },
//             // flight.timeDepShedule.includes(moment(navigationDate).format('YYYY-MM-DD')),

//             .map(flight =>
//               isBtnDepartureActive ? (
//                 <Flight
//                   key={flight.ID}
//                   {...flight}
//                   schedule={moment(flight.timeDepShedule).format('HH:mm')}
//                   destination={flight['airportToID.city_en']}
//                   flightNumber={flight.fltNo}
//                   terminal={flight.term}
//                 />
//               ) : (
//                 <Flight
//                   key={flight.ID}
//                   {...flight}
//                   schedule={moment(flight.timeArrShedule).format('HH:mm')}
//                   destination={flight['airportFromID.city_en']}
//                   flightNumber={flight.fltNo}
//                   terminal={flight.term}
//                 />
//               ),
//             )
//         }
//       </ul>
//     </div>
//   );
// };

// solution 2 - все працює, але не подобається як витягує дані з сервера
// const testDate = '2022-02-22T04:13:00Z';

const Timetable = ({
  navigationDate,
  testDate,
  goCurrentDate,
  goNextDate,
  goPrevDate,
  getArrivals,
  getDepartures,
  isBtnDepartureActive,
  getCalendarValue,
  dateForRender,
  filteredByDateFlightsList,
  
}) => {
  return (
    <div className="search-flights__timetable timetable">
      <Navigation
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
      />

      <ul className="timetable__board board">
        <li className="board__flight-row">
          <div className="board__flight-col board__flight-col_schedule">Schedule</div>
          <div className="board__flight-col board__flight-col_destination">To</div>
          <div className="board__flight-col board__flight-col_flight">Flight</div>
          <div className="board__flight-col board__flight-col_terminal">Terminal</div>
          <div className="board__flight-col board__flight-col_status">Status</div>
        </li>
        {filteredByDateFlightsList

          //     flightsList.filter(flight =>
          // flight.timeDepShedule.includes(moment(currentDate).format('YYYY-MM-DD'))

          .map(flight => (
            <Flight
              key={flight.ID}
              {...flight}
              schedule={moment(flight.schedule).format('HH:mm')}
              // schedule={moment(flight.timeArrShedule).format('HH:mm')}
              destination={flight.destination}
              // destination={flight['airportFromID.city_en']}
              flightNumber={flight.flightNumber}
              terminal={flight.terminal}
            />
          ))}
        {filteredByDateFlightsList.length === 0 && <NothingFound />}
      </ul>
    </div>
  );
};

// const Timetable = () => {
//   const [navigationDate, setDateNavigation] = useState(currentDate);
//   const [flightsList, setFlightsList] = useState([]);
//   const [isBtnDeparture, setBtnDeparture] = useState(true);

//   useEffect(() => {
//     getDepartures(moment(currentDate).format('DD-MM-YYYY'));
//   }, []);

//   const fetchFlights = (date, type) => {
//     fetchFlightsList(date).then(flightsList => setFlightsList(flightsList[type]));
//   };

//   const getArrivals = date => {
//     fetchFlights(date, 'arrival');
//   };

//   const getDepartures = date => {
//     fetchFlights(date, 'departure');
//   };

//   const goNextDate = () => {
//     setDateNavigation(moment(currentDate).add(1, 'days').format());
//   };

//   const goPrevDate = () => {
//     setDateNavigation(moment(currentDate).subtract(1, 'days').format());
//   };

//   const goCurrentDate = () => {
//     setDateNavigation(currentDate);
//   };

//   const filteredByDateFlightsList = flightsList.filter(flight =>
//     flight.timeDepShedule.includes(moment(navigationDate).format('YYYY-MM-DD')),
//   );

//   return (
//     <div className="search-flights__timetable timetable">
//       <Navigation
//         navigationDate={navigationDate}
//         currentDate={currentDate}
//         goCurrentDate={goCurrentDate}
//         goNextDate={goNextDate}
//         goPrevDate={goPrevDate}
//       />
//       <ul className="timetable__board board">
//         <li className="board__flight-row">
//           <div className="board__flight-col board__flight-col_schedule">Schedule</div>
//           <div className="board__flight-col board__flight-col_destination">To</div>
//           <div className="board__flight-col board__flight-col_flight">Flight</div>
//           <div className="board__flight-col board__flight-col_terminal">Terminal</div>
//           <div className="board__flight-col board__flight-col_status">Status</div>
//         </li>
//         {filteredByDateFlightsList

//           //     flightsList.filter(flight =>
//           // flight.timeDepShedule.includes(moment(currentDate).format('YYYY-MM-DD'))

//           .map(flight => (
//             <Flight
//               key={flight.ID}
//               {...flight}
//               schedule={moment(flight.timeDepShedule).format('HH:mm')}
//               // schedule={moment(flight.timeArrShedule).format('HH:mm')}
//               destination={flight['airportToID.city_en']}
//               // destination={flight['airportFromID.city_en']}
//               flightNumber={flight.fltNo}
//               terminal={flight.term}
//             />
//           ))}
//       </ul>
//     </div>
//   );
// };

export default Timetable;

{
  /* <section className="timetable"> */
}
{
  /* <h2 className="timetable__title">Search Flight</h2>
      <form className="timetable__form form-search">
        <div className="form-search__icon">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className="form-search__input"
          type="text"
          placeholder="Airline, destination or flight #"
        />
        <button className="form-search__btn" type="submit">
          Search
        </button>
      </form> */
}

{
  /* <div className="timetable__board board">
  <div className="board__flight-row">
    <div className="board__flight-col board__board__flight-colschedule">Schedule</div>
    <div className="board__flight-col board__flight-col_destination">To</div>
    <div className="board__flight-col board__flight-col_flight">Flight</div>
    <div className="board__flight-col board__flight-col_terminal">Terminal</div>
    <div className="board__flight-col board__flight-col_status">Status</div>
  </div>
  <ul className="board__flight-row">
    {flights.map(flight => (
      <Flight key={flight.id} {...flight} />
    ))}
  </ul>
</div>; */
}
