import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.bgDivider};
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const LinkText = styled.p`
  margin: 0px 20px;
`;
