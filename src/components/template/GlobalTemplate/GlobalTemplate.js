import React from 'react';
import Navigation from '../../bigger/Navigation/Navigation';
import { Container } from './GlobalTemplate.style.js';

const GlobalTemplate = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default GlobalTemplate;
