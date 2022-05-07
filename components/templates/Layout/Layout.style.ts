import styled from 'styled-components';
import { media } from 'styles/theme';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.basicBg};
`;

export const MenuBarSpace = styled.div`
  width: 100%;
  height: 64px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  width: 1200px;
  height: 100%;
  padding: 2rem;

  ${media.pc} {
    width: 1000px;
  }
  ${media.tablet} {
    width: 600px;
  }
  ${media.mobile} {
    padding: 1rem;
    width: 100%;
  }

  background-color: ${({ theme }) => theme.colors.basicBg};
`;
