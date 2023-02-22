import { CircularProgress, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '../../../theme';

import './loader.scss';

const Loader = () => {
  return (
    <div className="loader--container">
      <ThemeProvider theme={theme}>
        <div className="loader--main">
          <CircularProgress />
          <p>Cargando...</p>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Loader;
