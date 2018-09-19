import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  left: ${props => props.theme.module}px;
  position: absolute;
  top: ${props => props.theme.module * 3.45}px;
`;

const Position = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  height: ${props => props.theme.module * 1.5}px;
  padding: ${props => props.theme.sSize}px;
  padding-left: ${props => props.theme.module * .5}px;
  text-align: left;
  width: ${props => props.theme.module * 5}px;

  &:hover {
    color: ${props => props.theme.mediumBlue};
  }
`;

const Circle = styled.div`
  background-color: ${props => props.theme.lightGrey};
  border: 1px solid black;
  border-radius: ${props => props.theme.module / 6}px;
  box-sizing: border-box;
  display: inline-block;
  height: ${props => props.theme.module / 3}px;
  margin-left:  ${props => props.theme.sSize}px;
  width: ${props => props.theme.module / 3}px;
`;

const FeaturesColumn = ({ features }) => (
  <Container>
    {features.map(item => (
      <Position key={item}>
        {item}
        <Circle></Circle>
      </Position>
    ))}
  </Container>
);

export default FeaturesColumn;