import React, { Fragment } from 'react';
import styled from 'styled-components';

import features from '../constants/features';
import { graphPaths, oppositePaths, circlePaths } from '../constants/drawingPaths';

const Container = styled.div`
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
  color: ${props => (props.className.includes(props.activePers)) ? props.theme.mediumBlue : 'black'};
  font-weight: 400;
  height: ${props => props.theme.module * 1.6}px;
  padding: ${props => props.theme.module * .5}px;
  padding-right: ${props => props.theme.module * 2}px;
  text-align: right;
  width: ${props => props.theme.module * 5}px;
`;

const Ilustration = styled.svg`
  height: ${props => props.theme.module * 12.8}px;
  position: absolute;
  right: 0;
  top: 0;
  width: ${props => props.theme.module * 5.7}px;
`;

const Circle = styled.circle`
  fill: ${props => (props.className.includes(props.activePers)) ? props.theme.mediumBlue: props.theme.lightGrey};
  stroke: black;
  stroke-width: 1;
`;

const Path = styled.path`
  fill: transparent;
  opacity: ${props => (props.activePers === props.className ? 1 : .5 )};
  stroke: ${props => (props.activePers === props.className ? props.theme.mediumBlue : props.theme.darkGrey)};
  stroke-width: ${props => (props.activePers === props.className ? 1.5 : 1)};
`;

const OpposedPath = styled.path`
  fill: transparent;
  opacity: .75;
  stroke: black;
`;

// const types = {
//   ARCHITECT: {
//     className: "architect",
//     paths: [
//       "M7 22 C 55 45, 145 75, 170 8",
//     ]
//   },
// }

// const RoleGenerator = ({ className, paths }) => ({ activePers }) => (
//   <Fragment>
//     {paths.map(path => (
//       <Path activePers={activePers} className={className} d={path} />
//     ))}
//   </Fragment>
// )

// const CircleContainer = () => {
//   return (
//     <Circle isActive={}
//   )
// }

const PathGenerator = (graphPaths) => ({ activePers }) => (
  graphPaths.map(item => (
    <Fragment key={item.className}>
      {item.paths.map(path => (
        <Path
          activePers={activePers}
          className={item.className}
          d={path}
          key={path}
         />
      ))}
  </Fragment>
  ))
);

const Paths = PathGenerator(graphPaths);

const CircleGenerator = (circlePaths) => ({ activePers }) => (
  circlePaths.map(item => (
    <Fragment>
      <Circle
        activePers={activePers}
        className={item.className}
        cx={item.cx}
        cy={item.cy}
        r={item.r}
      />
    </Fragment>
  ))
);

const CirclePaths = CircleGenerator(circlePaths);

const FeaturesColumn = ({ activePers }) => (
  <Container>
    <InsideContainer>
      {features.map(item => (
        <Position
          activePers={activePers}
          className={item.featureLinks}
          key={item.name}
        >
          {item.name}
        </Position>
      ))}
      <Ilustration>
        <Paths activePers={activePers}/>
        {oppositePaths.map(item => (
          <OpposedPath
            d={item}
            key={item}
          />
        ))}
        <CirclePaths activePers={activePers}/>
      </Ilustration>
    </InsideContainer>
  </Container>
);

export default FeaturesColumn;