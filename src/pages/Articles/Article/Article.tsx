import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouter from '@router/WithRouter';
import { ArticleProps } from './Article.type';
import { dummydata } from './Article.dummydata';

const Article: React.FC<ArticleProps> = ({ match }) => {
  const { title } = match.params;
  const article = dummydata[title];
  if (!article) {
    return <div>존재하지 않는 글입니다.</div>;
  }
  return (
    <>
      <h3>
        {title}({article.title})
      </h3>
      <p>{article.text}</p>
      <WithRouter />
    </>
  );
};

export default withRouter(Article);
