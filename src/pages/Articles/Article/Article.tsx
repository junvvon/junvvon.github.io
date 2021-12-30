import React from 'react';
import { useParams } from 'react-router-dom';

import { dummydata } from './Article.dummydata';

const Article: React.FC = () => {
  const { title } = useParams();
  // const article = dummydata[title];
  // if (!article) {
  //   return <div>존재하지 않는 글입니다.</div>;
  // }
  return (
    <>
      <h3>a{/* {title}({article.title}) */}</h3>
      {/* <p>{article.text}</p> */}
    </>
  );
};

export default Article;
