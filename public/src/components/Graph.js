import React from 'react';

import drawingCircles from '../constants/drawingCircles';

import { Container, Ilustration, Circle, Title, Text } from '../styles/components/_graph';

const Graph = ({ activePers }) => (
  <Container>
    {activePers &&
      <Title>Percentage in society:</Title>
    }
    <Ilustration>
      { drawingCircles.map(item => (
        <Circle
          isActive={item.name===activePers}
          key={item.name}
          cx={item.cx}
          cy={item.cy}
          r={item.r * 3.5}
        />
      ))}
      {drawingCircles.map(item => (
        <Text
          isActive={item.name===activePers}
          key={item.cy}
          x={item.cx}
          y={item.cy}
          textAnchor="middle"
          dy=".7em"
        >
          {item.r}
        </Text>
      ))}
    </Ilustration>
  </Container>
);

export default Graph;