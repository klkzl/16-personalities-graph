import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => props.theme.sSize * 1.5}px;
  font-weight: 300;
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

const Header = ({ title, subtitle }) => (
  <div>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </div>
);

export default Header;