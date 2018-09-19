import React from 'react';
import styled from 'styled-components';

import Description from './Description';
import FeaturesColumn from './FeaturesColumn';
import Graph from './Graph';
import Header from './Header';
import MainColumn from './MainColumn';
import TypeTitle from './TypeTitle';

import types from '../constants/types';
import { TITLE, SUBTITLE } from '../constants/';
import features from '../constants/features';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';

const Container = styled.div`
  border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  font-family: Arial;
  font-size: ${props => props.theme.sSize}px;
  font-weight: 300;
  height: ${props => props.theme.module * 18}px;
  margin: ${props => props.theme.module * 2}px auto 0;
  position: relative;
  width: ${props => props.theme.module * 27}px;
  text-align: center;
`;

const PersApp = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header
        title={TITLE}
        subtitle={SUBTITLE}
      />
      <TypeTitle />
      <FeaturesColumn features={features} />
      <MainColumn
        types={types}
      />
      <Graph />
      <Description />
    </Container>
  </ThemeProvider>
);

export default PersApp;