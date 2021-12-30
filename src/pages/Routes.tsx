import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BasicLayout from '@components/templates/BasicLayout';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <BasicLayout />
    </BrowserRouter>
  );
};

export default Routes;
