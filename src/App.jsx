import React from 'react';
import './styles/common.scss';
import Header from './features/header/Header';
import MainSearch from './features/main-search/MainSearch';
import SearchFlights from './features/search-flights/SearchFlights';
// import './styles/index.scss';
// import { Provider } from 'react-redux';
// import store from './store.js';

const App = () => {
  return (
    <div class="page">
      <Header />
      <MainSearch />
      <SearchFlights />

      <section class="optional"></section>
      <footer class="footer"></footer>
    </div>
  );
};

export default App;
