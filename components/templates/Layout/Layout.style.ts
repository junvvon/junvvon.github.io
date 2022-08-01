import styled from 'styled-components';
import { media } from 'styles/theme';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.basicBg};
  height: 100%;
  width: 100%;
`;

export const MenuBarSpace = styled.div`
  height: 64px;
  width: 100%;

  @media print {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.basicBg};
  height: 100%;
  padding: 2rem;
  width: 1200px;

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
`;
