import styled from 'styled-components';
import { media } from 'styles/theme';

export const Title = styled.div`
  display: flex;
  height: 28.8px;
  margin: 16px 0px;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }

  ${media.mobile} {
    flex-direction: column;
    margin: 0px 16px;
    height: 86.4px;
  }
`;

export const Scrollable = styled.div`
  margin: 0px 5px;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  transition: all 0.2s;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile} {
    margin: 0px;
  }
`;
