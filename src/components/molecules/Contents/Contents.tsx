import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContentsProps } from './Contents.type';

import About from '@pages/About';
import Home from '@pages/Home';
import Articles from '@pages/Articles';

const Contents: React.FC<ContentsProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
};

export default Contents;
