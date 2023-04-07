import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AirportBoard from './flights/components/airport-board/AirportBoard';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AirportBoard />
      </Router>
    </Provider>
  );
};

export default App;
