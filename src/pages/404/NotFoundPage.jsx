import { Container } from '@mui/material';
import React from 'react';

import './notFoundPage.scss';

const NotFoundPage = () => {
    return (
      <Container className="notFound">
        <h2>Not Found 404</h2>
        <p>Contenido no encontrado, Por favor explora otro contenido de mi web.</p>
      </Container>
    );
};

export default NotFoundPage;
