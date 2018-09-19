import React from 'react';
import styled from 'styled-components';

const Position = styled.div`
  background-color: black;
  border-bottom: 1px solid white;
  box-sizing: border-box;
  color: white;
  height: ${props => props.theme.module * .8}px;
  margin: 0 auto;
  padding: 5px;
  padding-left: ${props => props.theme.module * .5}px;
  text-align: left;
  width: ${props => props.theme.module * 7}px;

  &:hover {
    background-color: ${props => props.theme.mediumBlue};
    cursor: pointer;
  }
`;

const MainColumn =({ types}) => (
  <div>
    { types.map(item  => (
      <Position key={item.shortcut}>
        {item.name}
      </Position>
    ))}
  </div>
);

export default MainColumn;