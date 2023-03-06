import dynamic from 'next/dynamic';

import Head from 'components/atoms/Head';

import { Wrapper, Content, ContentWrapper } from './Layout.style';
import { LayoutProps } from './Layout.type';

const Footer = dynamic(() => import('components/organisms/Footer'));

const Layout = ({ children, customMeta }: LayoutProps) => (
  <>
    <Head customMeta={customMeta} />
    <Wrapper>
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  </>
);

export default Layout;
