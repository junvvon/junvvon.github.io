import React from 'react';
import { Route } from 'react-router-dom';
import Article from './Article';
import { ArticlesProps } from './Articles.type';

const Articles: React.FC<ArticlesProps> = ({}) => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          {/* <NavLink activeStyle={activeStyle} to="/articles/first">
            first
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/articles/second">
            second
          </NavLink> */}
        </li>
      </ul>

      {/* <Route
        path="/articles"
        render={() => <div>사용자를 선택해 주세요.</div>}
      /> */}
      <Route path="/articles/:title" element={<Article />} />
    </div>
  );
};

export default Articles;
