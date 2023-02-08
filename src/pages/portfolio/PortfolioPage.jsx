import React from 'react';
import { Container } from 'reactstrap';
import CarrouselBasic from '../../components/containers/carouselBasic/CarouselBasic';

import './portfolioPage.scss';

const PortfolioPage = () => {
    return (
      <Container className="portfolio">
        <h2>Portafolio</h2>
        <div className="">
          <h3>Profesional</h3>
          <CarrouselBasic />
        </div>
        <div className="">
          <h3>Educativo</h3>
        </div>
      </Container>
    );
};

export default PortfolioPage;
