import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import BasicLayout from '@components/templates/BasicLayout';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={BasicLayout} />
    </BrowserRouter>
  );
};

export default Routes;
