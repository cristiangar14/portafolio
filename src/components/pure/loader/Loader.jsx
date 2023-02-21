import { CircularProgress, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '../../../theme';

import './loader.scss';

const Loader = () => {
  return (
    <div className="loader--container">
      <ThemeProvider theme={theme}>
        <CircularProgress />
      </ThemeProvider>
    </div>
  );
};

export default Loader;
