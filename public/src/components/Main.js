import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  font-family: Arial;
  font-size: ${props => props.theme.sSize}px;
  font-weight: 300;
  height: ${props => props.theme.module * 18}px;
  margin: ${props => props.theme.module * 2}px auto 0;
  width: ${props => props.theme.module * 27}px;
  text-align: center;
`;

const Position = styled.div`
  background-color: black;
  border-bottom: 1px solid white;
  box-sizing: border-box;
  color: white;
  height: ${props => props.theme.module * .8}px;
  padding: 5px;
  padding-left: ${props => props.theme.module * .5}px;
  margin: 0 auto;
  text-align: left;
  width: ${props => props.theme.module * 7}px;

  &:hover {
    background-color: ${props => props.theme.mediumBlue};
    cursor: pointer;
  }
`;

const Title = styled.h4`
  font-family: ${props => props.theme.mainFont};
  font-weight: 300;
  font-size: ${props => props.theme.sSize * 1.5}px;
  letter-spacing: 1px;
  margin: ${props => props.theme.module * .5}px 0 0;
`;

const Subtitle = styled.p`
  cursor: pointer;
  margin: ${props => props.theme.module / 4}px 0 ${props => props.theme.module * .8}px;

  &:hover {
    color: ${props => props.theme.mediumBlue};
  }
`;

const Main =({ title, subtitle, types}) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    { types.map(item  => (
      <Position key={item.shortcut}>
        {item.name}
      </Position>
    ))}
  </Container>
);

export default Main;