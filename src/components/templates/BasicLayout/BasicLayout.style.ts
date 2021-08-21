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

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
`;
