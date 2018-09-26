import React from 'react';

import drawingCircles from '../constants/drawingCircles';

import { Container, Ilustration, Circle } from '../styles/components/_graph';

const Graph = ({ activePers }) => {
  return (
    <Container>
      <Ilustration>
        { drawingCircles.map(item => (
          <Circle
            isActive={item.name===activePers}
            key={item.name}
            cx={item.cx}
            cy={item.cy}
            r={item.r}
            text={item.name}
          />
        ))}
      </Ilustration>
    </Container>
  );
}

export default Graph;