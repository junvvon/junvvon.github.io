import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MenuBarSpace = styled.div`
  width: 100%;
  height: 64px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 768px;
  height: 100%;
  @media (max-width: 1024px) {
    width: 736px;
  }
  @media (max-width: 736px) {
    width: 100%;
  }
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;
