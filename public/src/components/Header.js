import React from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

export default Header;