import React from 'react';
import PropTypes from 'prop-types';

import { Name } from '../styles/components/_typeTitle';

const TypeTitle = ({ title }) => (
  <div>
    {title &&
      <Name>{title}</Name>
    }
  </div>
);

TypeTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default TypeTitle;