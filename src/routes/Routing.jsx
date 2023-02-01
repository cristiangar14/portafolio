import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';
import Nav from '../components/containers/nav/Nav';
import NotFoundPage from '../pages/404/NotFoundPage';
import HomePage from '../pages/home/HomePage';

const Routing = () => {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
};

export default Routing;
