import React from 'react';
import {
    HashRouter as Router,
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
import ExperienceDetail from '../pages/experienceDetail/ExperienceDetail';
import HomePage from '../pages/home/HomePage';
import PortfolioPage from '../pages/portfolio/PortfolioPage';
import PortfolioDetail from '../pages/portfolioDetail/PortfolioDetail';
import ResourcesPage from '../pages/resources/ResourcesPage';

const Routing = () => {
    return (
      <Router>
        <Nav />
        <main className="main">
          <Background />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/experience" element={<ExperiencePage />} />
            <Route exact path="/experience/:id" element={<ExperienceDetail />} />
            <Route exact path="/portfolio" element={<PortfolioPage />} />
            <Route exact path="/portfolio/:id" element={<PortfolioDetail />} />
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
