import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import features from '../constants/features';
import { circlePaths, graphPaths, oppositePaths } from '../constants/drawingPaths';
import { Container, InsideContainer, Position, Ilustration, Circle, Path, OpposedPath } from '../styles/components/_featuresColumn';

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
    <Fragment key={item.className}>
      <Circle
        activePers={activePers}
        className={item.className}
        cx={item.cx}
        cy={item.cy}
        key={item.cy}
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

FeaturesColumn.propTypes = {
  activePers: PropTypes.string.isRequired
};

export default FeaturesColumn;