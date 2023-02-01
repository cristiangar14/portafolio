import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';
import Footer from '../components/containers/footer/Footer';
import Nav from '../components/containers/nav/Nav';
import Background from '../components/pure/background/Background';
import NotFoundPage from '../pages/404/NotFoundPage';
import HomePage from '../pages/home/HomePage';

const Routing = () => {
    return (
      <Router>
        <Background />
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    );
};

export default Routing;
