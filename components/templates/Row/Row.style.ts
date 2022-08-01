import styled from 'styled-components';
import { media } from 'styles/theme';

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgDivider};
  display: flex;
  padding: 3rem 0;

  ${media.tablet} {
    -ms-flex-direction: column;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    flex-direction: column;
  }
`;

export const RowRight = styled.div`
  -ms-flex-positive: 1;
  -webkit-box-flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  div:first-child {
    padding-top: 0;
  }
`;

export const RowLeft = styled.div`
  -ms-flex-negative: 0;
  display: flex;
  flex-basis: 18rem;
  flex-direction: column;
  flex-shrink: 0;
  padding-right: 1rem;

  ${media.tablet} {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    padding-bottom: 1rem;
    padding-right: 0;
  }
`;
