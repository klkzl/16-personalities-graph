import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  height: ${props => props.theme.module * 1.5}px;
  left: ${props => props.theme.module}px;
  padding: ${props => props.theme.sSize}px;
  position: absolute;
  top: ${props => props.theme.module * 1.2}px;
  width: ${props => props.theme.module * 5}px;
`;

const TypeTitle = () => (
  <Name>Type Name</Name>
);

export default TypeTitle;