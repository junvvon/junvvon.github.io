import styled from 'styled-components';
import { media } from 'styles/theme';

export const Wrapper = styled.div`
  border-bottom: 1px solid #eee;
  display: flex;
  padding: 3rem 0;

  ${media.tablet} {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const RowRight = styled.div`
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  div:first-child {
    padding-top: 0;
  }
`;

export const RowLeft = styled.div`
  display: flex;
  flex-direction: column;
  -ms-flex-negative: 0;
  flex-basis: 18rem;
  flex-shrink: 0;
  padding-right: 1rem;

  ${media.tablet} {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    padding-bottom: 1rem;
    padding-right: 0;
  }
`;
