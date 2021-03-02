import React from 'react';
import Todos from '@components/Todos';
import { HomeProps } from './Home.type';

// eslint-disable-next-line
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Todos />
    </>
  );
};

export default Home;
