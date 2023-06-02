import React from 'react';
import GlobalTemplate from '../components/template/GlobalTemplate/GlobalTemplate';
import { Route, Routes } from 'react-router-dom';
import Third from './Third/Third';
import Dashboard from '../components/bigger/Dashboard/Dashboard';
import Second from './Second/Second';
import Fourth from './Fourth/Fourth';

const LoggedPage = () => {
  return (
    <GlobalTemplate>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
      </Routes>
    </GlobalTemplate>
  );
};

export default LoggedPage;
