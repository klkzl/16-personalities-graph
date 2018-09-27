import React from 'react';

import { Title, Subtitle } from '../styles/components/_header';

const Header = ({ title, subtitle, source }) => (
  <div>
    <Title>{title}</Title>
    <p>
      <Subtitle
        href={source}
        target="_blank"
      >
        {subtitle}
      </Subtitle>
    </p>
  </div>
);

export default Header;