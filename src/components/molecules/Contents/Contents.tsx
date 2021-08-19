import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentsProps } from './Contents.type';

import About from '@pages/About';
import Home from '@pages/Home';
import Articles from '@pages/Articles';
import History from '@router/History';

const Contents: React.FC<ContentsProps> = ({}) => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="/history" component={History} />
      <Route
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  );
};

export default Contents;
