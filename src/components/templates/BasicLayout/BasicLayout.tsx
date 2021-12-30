import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MenuBar from '@components/organisms/MenuBar';
import Home from '@pages/Home';
import About from '@pages/About';
import {
  Wrapper,
  Content,
  ContentWrapper,
  MenuBarSpace,
} from './BasicLayout.style';

const BasicLayout: React.FC = ({}) => {
  return (
    <Wrapper>
      <MenuBar />
      <MenuBarSpace />
      <ContentWrapper>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default BasicLayout;
