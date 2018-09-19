import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.darkGrey};
  height: ${props => props.theme.module * 8}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  top: ${props => props.theme.module * 1.2}px;
  width: ${props => props.theme.module * 8}px;
`;

const Graph = ({ types }) => (
  <Container>
    AWSOME GRAPH
    { types.map(item => (
      <div key={item.name}>{item.name}: {item.percentage}</div>
    ))}
  </Container>
);

export default Graph;