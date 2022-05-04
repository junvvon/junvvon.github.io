import styled from 'styled-components';
import { media } from 'styles/theme';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  font-weight: normal;
  line-height: 35px;
  word-break: keep-all;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgDivider};
`;

export const Icons = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  padding: 10px;
`;
