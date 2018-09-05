import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ numberOfItems }) => {
  if (numberOfItems === 0) {
    return (<p>nothing to do :)</p>)
  } else if (numberOfItems === 1) {
    return (<p>only 1 thing left</p>)
  } else {
    return (<p>{numberOfItems} things left</p>)
  }
};

Footer.propTypes = {
  numberOfItems: PropTypes.number.isRequired
}

export default Footer;