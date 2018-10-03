import React from 'react';

import { Container, Title, Paragraph } from '../styles/components/_container';

const Description = ({ activePers, summary, curiosity, famous }) => (
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

export default Description;