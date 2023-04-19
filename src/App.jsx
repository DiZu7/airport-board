import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import SearchFlights from './components/search-flights/SearchFlights';
import store from './store';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/departure" replace />} />
            <Route path="/departure" element={<SearchFlights />} />
            <Route path="/arrival" element={<SearchFlights />} />
          </Routes>
          <section className="optional"></section>
          <footer className="footer"></footer>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
