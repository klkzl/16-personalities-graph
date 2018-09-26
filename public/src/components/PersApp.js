import React, { Component } from 'react';

import Description from './Description';
import FeaturesColumn from './FeaturesColumn';
import Graph from './Graph';
import Header from './Header';
import TypeTitle from './TypeTitle';

import { Container, Position } from '../styles/components/_persApp';

import types from '../constants/types';
import { TITLE, SUBTITLE } from '../constants/';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';

class PersApp extends Component {
  state = {
    name: '',
    shortcut: '',
    percentage: '',
    features: '',
    summary: '',
    curiosity: '',
    famous: []
  }

  hoverEfect = (item) => {
    this.setState(() => item);
  }

  render() {
    const { shortcut, summary, curiosity } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header
            title={TITLE}
            subtitle={SUBTITLE}
          />
          <TypeTitle
            title={shortcut}
          />
          <FeaturesColumn
            activePers={this.state.name.toLowerCase()}
          />
          { types.map(item  => (
            <Position
              key={item.shortcut}
              onMouseEnter={() => this.hoverEfect(item)}
            >
              {item.name}
            </Position>
          ))}
          <Graph
            activePers={this.state.name}
          />
          <Description
            summary={summary}
            curiosity={curiosity}
          />
        </Container>
      </ThemeProvider>
    );
  }
}
export default PersApp;