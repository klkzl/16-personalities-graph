import React from 'react';

import { Container, Title, Paragraph } from '../styles/components/_container';

const Description = ({ summary, curiosity }) => (
  <Container>
    { summary &&
      <Title>Description:</Title>
    }
    <Paragraph>{summary}</Paragraph>
    { curiosity
      && <Title>Curiosity:</Title>
    }
    <Paragraph>{curiosity}</Paragraph>
  </Container>
);

export default Description;