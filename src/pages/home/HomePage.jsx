import { Container } from '@mui/material';
import React from 'react';

import './homePage.scss';

const HomePage = () => {
    return (
      <Container id="home" className="home">
        <div className="">
          <h1 className="home--name">Cristian Garzón Sanchez</h1>
          <h2 className="home--job">Software Developer</h2>
        </div>
      </Container>
    );
};

export default HomePage;
