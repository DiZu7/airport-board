import React from 'react';
import './styles/common.scss';
import Header from './features/header/Header';
import SearchFlights from './features/search-flights/SearchFlights';

// import './styles/index.scss';
// import { Provider } from 'react-redux';
// import store from './store.js';

const App = () => {
  return (
    <div className="page">
      <Header />
      <SearchFlights />
      <section className="optional"></section>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
