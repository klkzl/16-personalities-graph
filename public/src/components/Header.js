import React from 'react';

import { Title, Subtitle } from '../styles/components/_header';

const Header = ({ title, subtitle }) => (
  <div>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </div>
);

export default Header;