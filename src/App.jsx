import React from 'react';
import { Provider } from 'react-redux';
import store from './features/store/store';
import AirportBoard from './features/airport-board/AirportBoard';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AirportBoard/>
      </Router>
    </Provider>
  );
};

export default App;
