import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Paragraph } from '../styles/components/_container';

const Description = ({ activePers, curiosity, famous, summary }) => (
  <Container>
    { summary &&
      <Title>Description:</Title>
    }
    <Paragraph>{summary}</Paragraph>
    { curiosity
      && <Title>Curiosity:</Title>
    }
    <Paragraph>{curiosity}</Paragraph>
    { activePers &&
      <Title>Famous {activePers}s:</Title>
    }
    <Paragraph>{famous}</Paragraph>
  </Container>
);

Description.propTypes = {
  activePers: PropTypes.string.isRequired,
  curiosity: PropTypes.string.isRequired,
  famous: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default Description;