import React from 'react';

import Main from './Main';
import types from '../constants/types';
import { TITLE, SUBTITLE } from '../constants/';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';

const PersApp = () => (
  <ThemeProvider theme={theme}>
    <Main
      title={TITLE}
      subtitle={SUBTITLE}
      types={types}
    />
  </ThemeProvider>
);

export default PersApp;