import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import SearchFlights from './components/search-flights/SearchFlights';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/departure" />} />
            <Route path="/departure" element={<SearchFlights />} />
            <Route path="/arrival" element={<SearchFlights />} />
          </Routes>
          <section className="optional"></section>
          <footer className="footer"></footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
