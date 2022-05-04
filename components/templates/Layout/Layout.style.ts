import styled from 'styled-components';

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
  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1000px) {
    width: 736px;
  }
  @media (max-width: 736px) {
    width: 100%;
  }

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.basicBg};
`;
