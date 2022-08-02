import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Head from 'components/atoms/Head';
import MenuBar from 'components/organisms/MenuBar';

import { Wrapper, Content, ContentWrapper } from './Layout.style';
import { LayoutProps } from './Layout.type';

const Footer = dynamic(() => import('components/organisms/Footer'));

const Layout = ({ children, customMeta }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head customMeta={customMeta} />
      <Wrapper>
        {router.asPath !== '/about' && <MenuBar />}
        <ContentWrapper>
          <Content>{children}</Content>
        </ContentWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
