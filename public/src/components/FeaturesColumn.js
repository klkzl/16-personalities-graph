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
        <Path d="M7 22 C 55 45, 145 75, 170 8" />
        <Path d="M7 118 C 65 125, 135 135, 170 8" />
        <Path d="M7 214 C 65 205, 135 195, 170 8" />
        <Path d="M7 310 C 65 285, 135 285, 170 8" />
        {/*logican*/}
        <Path d="M7 22 C 55 65, 155 95, 170 32" />
        <Path d="M7 118 C 65 145, 155 125, 170 32" />
        <Path d="M7 214 C 65 225, 155 185, 170 32" />
        <Path d="M7 358 C 65 315, 145 285, 170 32" />
        {/*commander*/}
        <Path d="M7 70 C 55 85, 135 105, 170 56" />
        <Path d="M7 118 C 65 125, 135 135, 170 56" />
        <Path d="M7 214 C 65 205, 135 195, 170 56" />
        <Path d="M7 310 C 65 285, 135 295, 170 56" />
        {/*debater*/}
        <Path d="M7 70 C 55 105, 155 125, 170 80" />
        <Path d="M7 118 C 65 145, 155 155, 170 80" />
        <Path d="M7 214 C 65 225, 155 205, 170 80" />
        <Path d="M7 358 C 65 335, 145 315, 170 80" />
        {/*advocate*/}
        <Path d="M7 22 C 55 85, 145 125, 170 104" />
        <Path d="M7 118 C 65 145, 135 175, 170 104" />
        <Path d="M7 262 C 65 245, 135 235, 170 104" />
        <Path d="M7 310 C 75 285, 135 305, 170 104" />
        {/*mediator*/}
        <Path d="M7 22 C 55 115, 145 165, 170 128" />
        <Path d="M7 118 C 65 175, 135 195, 170 128" />
        <Path d="M7 262 C 65 265, 135 275, 170 128" />
        <Path d="M7 358 C 85 325, 135 325, 170 128" />
        {/*protagonist*/}
        <Path d="M7 70 C 55 125, 145 185, 170 152" />
        <Path d="M7 118 C 65 175, 135 215, 170 152" />
        <Path d="M7 262 C 65 265, 135 275, 170 152" />
        <Path d="M7 310 C 75 305, 135 325, 170 152" />
        {/*campaigner*/}
        <Path d="M7 70 C 55 145, 145 215, 170 176" />
        <Path d="M7 118 C 65 195, 135 245, 170 176" />
        <Path d="M7 262 C 65 285, 135 295, 170 176" />
        <Path d="M7 358 C 85 345, 135 345, 170 176" />
        {/*logistician*/}
        <Path d="M7 22 C 55 105, 145 225, 170 200" />
        <Path d="M7 166 C 65 195, 135 245, 170 200" />
        <Path d="M7 214 C 65 245, 135 275, 170 200" />
        <Path d="M7 310 C 65 315, 135 345, 170 200" />
        {/*defender*/}
        <Path d="M7 22 C 55 125, 145 255, 170 224" />
        <Path d="M7 166 C 65 215, 135 275, 170 224" />
        <Path d="M7 262 C 65 275, 135 295, 170 224" />
        <Path d="M7 310 C 65 315, 135 345, 170 224" />
        {/*executive*/}
        <Path d="M7 70 C 55 195, 145 275, 170 248" />
        <Path d="M7 166 C 65 235, 135 295, 170 248" />
        <Path d="M7 214 C 65 275, 135 315, 170 248" />
        <Path d="M7 310 C 65 325, 135 375, 170 248" />
        {/*consul*/}
        <Path d="M7 70 C 55 215, 145 295, 170 272" />
        <Path d="M7 166 C 65 275, 135 315, 170 272" />
        <Path d="M7 262 C 65 315, 135 345, 170 272" />
        <Path d="M7 310 C 65 345, 135 385, 170 272" />
        {/*virtuoso*/}
        <Path d="M7 22 C 55 175, 145 315, 170 296" />
        <Path d="M7 166 C 65 295, 135 345, 170 296" />
        <Path d="M7 216 C 65 295, 135 375, 170 296" />
        <Path d="M7 358 C 65 365, 135 395, 170 296" />
        {/*adventurer*/}
        <Path d="M7 22 C 55 195, 145 345, 170 320" />
        <Path d="M7 166 C 65 295, 135 365, 170 320" />
        <Path d="M7 262 C 65 345, 135 375, 170 320" />
        <Path d="M7 358 C 65 375, 135 405, 170 320" />
        {/*entrepreneur*/}
        <Path d="M7 70 C 55 215, 145 365, 170 342" />
        <Path d="M7 166 C 65 315, 135 375, 170 342" />
        <Path d="M7 216 C 65 325, 135 385, 170 342" />
        <Path d="M7 358 C 65 375, 135 395, 170 342" />
        {/*entertainer*/}
        <Path d="M7 70 C 55 295, 145 385, 170 366" />
        <Path d="M7 166 C 65 335, 135 385, 170 366" />
        <Path d="M7 262 C 65 375, 135 385, 170 366" />
        <Path d="M7 358 C 65 375, 135 395, 170 366" />
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