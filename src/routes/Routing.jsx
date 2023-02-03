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
import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import ExperiencePage from '../pages/experience/ExperiencePage';
import HomePage from '../pages/home/HomePage';
import PortfolioPage from '../pages/portfolio/PortfolioPage';
import ResourcesPage from '../pages/resources/ResourcesPage';

const Routing = () => {
    return (
      <Router>
        <Background />
        <Nav />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/experience" element={<ExperiencePage />} />
            <Route exact path="/portfolio" element={<PortfolioPage />} />
            <Route exact path="/resources" element={<ResourcesPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    );
};

export default Routing;
