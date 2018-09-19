import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  height: ${props => props.theme.module * 5.3}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  top: ${props => props.theme.module * 10.2}px;
  width: ${props => props.theme.module * 8}px;
`;

const Description = () => (
  <Container>apskik</Container>
);

export default Description;