import { Button, Container, ThemeProvider } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Linksproyects from '../../components/containers/linksProyects/Linksproyects';
import Slider from '../../components/containers/slider/Slider';
import Tecnologies from '../../components/containers/technologies/Technologies';
import { getPortfolioDetail } from '../../services/data';
import theme from '../../theme';

import './portfolioDetail.scss';

const PortfolioDetail = () => {
  const params = useParams();

    const data = useMemo(() => (
      getPortfolioDetail(params.id)
    ), [params.id]);

    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate('/portfolio');
    };

    return (
      <div className="portfolioDetails">
        <div className="portfolioDetails--slider">
          <Slider data={data.images} />
        </div>
        <Container>
          <div className="portfolioDetails--title"><h2>{data.title}</h2></div>
          <div className="portfolioDetails--container">
            <div className="portfolioDetails--description">
              <p>{data.description}</p>
            </div>
            <div className="portfolioDetails--tecnologies">
              <Tecnologies technologies={data.technologies} />
            </div>
            <div className="portfolioDetails--links">
              {
                data.links.length ? <Linksproyects links={data.links} /> : <p>Links privados</p>
              }
            </div>
            <div className="portfolioDetails--bottom">
              <ThemeProvider theme={theme}>
                <Button onClick={handleNavigation} variant="outlined">Volver al portafolio</Button>
              </ThemeProvider>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default PortfolioDetail;
