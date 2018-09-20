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

  &:hover {
    fill ${props => props.theme.mediumBlue};
  }
`;

const Path = styled.path`
  fill: transparent;
  opacity: .75;
  stroke: ${props => props.theme.darkGrey};
`;

const OpposedPath = styled.path`
  fill: transparent;
  opacity: .75;
  stroke: black;
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
        {/*architect*/}
        <Path d="M7 22 C 55 45, 145 75, 172 8" />
        <Path d="M7 118 C 65 125, 135 135, 172 8" />
        <Path d="M7 214 C 65 205, 135 195, 172 8" />
        <Path d="M7 310 C 65 285, 135 285, 172 8" />
        {/*logican*/}
        <Path d="M7 22 C 55 65, 155 95, 172 32" />
        <Path d="M7 118 C 65 145, 155 125, 172 32" />
        <Path d="M7 214 C 65 225, 155 185, 172 32" />
        <Path d="M7 358 C 65 315, 145 285, 172 32" />
        {/*commander*/}
        <Path d="M7 70 C 55 85, 135 105, 172 56" />
        <Path d="M7 118 C 65 125, 135 135, 172 56" />
        <Path d="M7 214 C 65 205, 135 195, 172 56" />
        <Path d="M7 310 C 65 285, 135 295, 172 56" />
        {/*debater*/}
        <Path d="M7 70 C 55 105, 155 125, 172 80" />
        <Path d="M7 118 C 65 145, 155 155, 172 80" />
        <Path d="M7 214 C 65 225, 155 205, 172 80" />
        <Path d="M7 358 C 65 335, 145 315, 172 80" />
        {/*advocate*/}
        <Path d="M7 22 C 55 85, 145 125, 172 104" />
        <Path d="M7 118 C 65 145, 135 175, 172 104" />
        <Path d="M7 262 C 65 245, 135 235, 172 104" />
        <Path d="M7 310 C 75 285, 135 305, 172 104" />
        {/*mediator*/}
        <Path d="M7 22 C 55 125, 145 165, 172 128" />
        <Path d="M7 118 C 65 175, 135 195, 172 128" />
        <Path d="M7 262 C 65 265, 135 275, 172 128" />
        <Path d="M7 358 C 85 325, 135 325, 172 128" />
        {/*protagonist*/}
        <Path d="M7 70 C 55 125, 145 185, 172 152" />
        <Path d="M7 118 C 65 175, 135 215, 172 152" />
        <Path d="M7 262 C 65 265, 135 275, 172 152" />
        <Path d="M7 310 C 75 305, 135 325, 172 152" />
        {/*campaigner*/}
        <Path d="M7 70 C 55 145, 145 215, 172 176" />
        <Path d="M7 118 C 65 195, 135 245, 172 176" />
        <Path d="M7 262 C 65 285, 135 295, 172 176" />
        <Path d="M7 358 C 85 345, 135 345, 172 176" />
        {/*logistician*/}
        <Path d="M7 22 C 55 105, 145 225, 172 200" />
        <Path d="M7 166 C 65 195, 135 245, 172 200" />
        <Path d="M7 214 C 65 245, 135 275, 172 200" />
        <Path d="M7 310 C 65 315, 135 345, 172 200" />
        {/*defender*/}
        <Path d="M7 22 C 55 125, 145 255, 172 224" />
        <Path d="M7 166 C 65 215, 135 275, 172 224" />
        <Path d="M7 262 C 65 275, 135 295, 172 224" />
        <Path d="M7 310 C 65 315, 135 345, 172 224" />
        {/*executive*/}
        <Path d="M7 70 C 55 195, 145 275, 172 248" />
        <Path d="M7 166 C 65 235, 135 295, 172 248" />
        <Path d="M7 214 C 65 275, 135 315, 172 248" />
        <Path d="M7 310 C 65 325, 135 375, 172 248" />
        {/*consul*/}
        <Path d="M7 70 C 55 215, 145 295, 172 272" />
        <Path d="M7 166 C 65 275, 135 315, 172 272" />
        <Path d="M7 262 C 65 315, 135 345, 172 272" />
        <Path d="M7 310 C 65 345, 135 385, 172 272" />
        {/*virtuoso*/}
        <Path d="M7 22 C 55 245, 145 315, 172 296" />
        <Path d="M7 166 C 65 295, 135 345, 172 296" />
        <Path d="M7 216 C 65 345, 135 375, 172 296" />
        <Path d="M7 358 C 65 365, 135 395, 172 296" />
        {/*adventurer*/}
        <Path d="M7 22 C 55 245, 145 345, 172 320" />
        <Path d="M7 166 C 65 295, 135 365, 172 320" />
        <Path d="M7 262 C 65 345, 135 375, 172 320" />
        <Path d="M7 358 C 65 375, 135 405, 172 320" />
        {/*entrepreneur*/}
        <Path d="M7 70 C 55 265, 145 365, 172 342" />
        <Path d="M7 166 C 65 315, 135 375, 172 342" />
        <Path d="M7 216 C 65 365, 135 385, 172 342" />
        <Path d="M7 358 C 65 375, 135 395, 172 342" />
        {/*entertainer*/}
        <Path d="M7 70 C 55 295, 145 385, 172 366" />
        <Path d="M7 166 C 65 335, 135 385, 172 366" />
        <Path d="M7 262 C 65 375, 135 385, 172 366" />
        <Path d="M7 358 C 65 375, 135 395, 172 366" />
        {/*opposed features strokes*/}
        <OpposedPath d="M7 22 C 15 38, 15 54, 7 70" />
        <OpposedPath d="M7 118 C 15 134, 15 150, 7 166" />
        <OpposedPath d="M7 214 C 15 230, 15 246, 7 262" />
        <OpposedPath d="M7 310 C 15 326, 15 342, 7 358" />
        {/*dots*/}
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