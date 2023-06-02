import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FontProvider from './FontProvider';

const AppProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <FontProvider>{children}</FontProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
