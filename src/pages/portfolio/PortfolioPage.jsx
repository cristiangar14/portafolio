import React, { useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container } from '@mui/system';
import CardItem from '../../components/pure/cardItem/CardItem';
import { getPortfolio } from '../../services/data';

import './portfolioPage.scss';

const PortfolioPage = () => {
  const data = useMemo(() => (
        getPortfolio()
  ), []);

  // const dataE = useMemo(() => (
  //       getPortfolio('E')
  // ), []);

    return (
      <Container className="portfolio">
        <h2>Portafolio</h2>
        <ul className="portfolio--list">
          {
            data.map((el) => {
              return (
                <li key={`card-${el.id}`}>
                  <CardItem data={el} />
                </li>
              );
            })
          }
        </ul>
      </Container>
    );
};

export default PortfolioPage;
