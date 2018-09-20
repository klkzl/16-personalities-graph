import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  height: ${props => props.theme.module * 12.8}px;
  left: ${props => props.theme.module}px;
  position: absolute;
  top: ${props => props.theme.module * 2.7}px;
  width: ${props => props.theme.module * 9}px;
`;

const InsideContainer = styled.div`
  position: relative;
`;

const Position = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  height: ${props => props.theme.module * 1.6}px;
  padding: ${props => props.theme.module * .5}px;
  padding-right: ${props => props.theme.module * 2}px;
  text-align: right;
  width: ${props => props.theme.module * 5}px;

  // &:first-of-type {
  //   margin-top: ${props => props.theme.module * .75}px;
  // }

  &:hover {
    color: ${props => props.theme.mediumBlue};
  }
`;

// const Circle2 = styled.div`
//   background-color: ${props => props.theme.lightGrey};
//   border: 1px solid black;
//   border-radius: ${props => props.theme.module / 6}px;
//   box-sizing: border-box;
//   display: inline-block;
//   height: ${props => props.theme.module / 3}px;
//   margin-left:  ${props => props.theme.sSize}px;
//   width: ${props => props.theme.module / 3}px;
// `;

const Ilustration = styled.svg`
  // background-color: lightgrey;
  height: ${props => props.theme.module * 12.8}px;
  position: absolute;
  right: 0;
  top: 0;
  width: ${props => props.theme.module * 5.7}px;
`;

const Circle = styled.circle`
  fill: ${props => props.theme.lightGrey};
  stroke: black;
  stroke-width: 1;
`;

const FeaturesColumn = ({ features }) => (
  <Container>
    <InsideContainer>
      {features.map(item => (
        <Position key={item}>
          {item}
          {/*<Circle2></Circle2>*/}
        </Position>
      ))}
      <Ilustration>
        <Circle cx="7" cy="22" r="4.5" />
        <Circle cx="7" cy="70" r="4.5" />
        <Circle cx="7" cy="118" r="4.5" />
        <Circle cx="7" cy="166" r="4.5" />
        <Circle cx="7" cy="214" r="4.5" />
        <Circle cx="7" cy="262" r="4.5" />
        <Circle cx="7" cy="310" r="4.5" />
        <Circle cx="7" cy="358" r="4.5" />
      </Ilustration>
    </InsideContainer>
  </Container>
);

export default FeaturesColumn;