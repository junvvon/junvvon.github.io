import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { MatchParams } from '@common/router.type';
import MenuBar from '@components/organisms/MenuBar';
import Home from '@pages/Home';
import {
  Wrapper,
  Content,
  ContentWrapper,
  MenuBarSpace,
} from './BasicLayout.style';
import About from '@pages/About';

const BasicLayout: React.FC<RouteComponentProps<MatchParams>> = ({}) => {
  return (
    <Wrapper>
      <MenuBar />
      <MenuBarSpace />
      <ContentWrapper>
        <Content>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default BasicLayout;
