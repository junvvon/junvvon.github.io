import React from 'react';
import { Wrapper } from './Home.style';
import { HomeProps } from './Home.type';
import MarkdownRenderer from '@components/atoms/MarkdownRenderer';

// eslint-disable-next-line
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Wrapper>
      <MarkdownRenderer />
    </Wrapper>
  );
};

export default Home;
