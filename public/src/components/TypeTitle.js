import React from 'react';

import { Name } from '../styles/components/_typeTitle';

const TypeTitle = ({ title }) => (
  <div>
    {title &&
      <Name>{title}</Name>
    }
  </div>
);

export default TypeTitle;