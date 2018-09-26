import React from 'react';

import drawingCircles from '../constants/drawingCircles';

import { Container, Ilustration, Circle, Title } from '../styles/components/_graph';

const Graph = ({ activePers }) => {
  return (
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
            r={item.r}
            text={item.name}
          >{item.name}
          </Circle>
        ))}
      </Ilustration>
    </Container>
  );
}

export default Graph;