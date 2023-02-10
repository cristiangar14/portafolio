import React, { useMemo } from 'react';
import CarrouselBasic from '../../components/containers/carouselBasic/CarouselBasic';
import { getPortfolio } from '../../services/data';

import './portfolioPage.scss';

const PortfolioPage = () => {
  const dataP = useMemo(() => (
        getPortfolio('P')
  ), []);

  const dataE = useMemo(() => (
        getPortfolio('E')
  ), []);

    return (
      <div className="portfolio">
        <h2>Portafolio</h2>
        <div className="">
          <h3>Profesional</h3>
          <CarrouselBasic data={dataP} />
        </div>
        <div className="">
          <h3>Educativo</h3>
          <CarrouselBasic data={dataE} />
        </div>
      </div>
    );
};

export default PortfolioPage;
