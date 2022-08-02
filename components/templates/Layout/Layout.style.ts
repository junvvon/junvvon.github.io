import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.basicBg};
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.basicBg};
  height: 100%;
  padding: 2rem;
  width: 800px;
`;
