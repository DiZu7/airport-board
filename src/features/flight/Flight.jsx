import React from 'react';

const Flight = ({ schedule, destination, flightNumber, terminal, status }) => {
  return (
    <li className="board__flight-row">
      <div className="board__flight-col board__flight-col_schedule">{schedule}</div>
      <div className="board__flight-col board__flight-col_destination">{destination}</div>
      <div className="board__flight-col board__flight-col_flight">{flightNumber}</div>
      <div className="board__flight-col board__flight-col_terminal">{terminal}</div>
      <div className="board__flight-col board__flight-col_status">{status}</div>
    </li>
  );
};

export default Flight;
