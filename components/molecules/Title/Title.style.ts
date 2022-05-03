import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  font-weight: normal;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgDivider};
`;
