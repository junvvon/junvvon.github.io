import styled from 'styled-components';
import { media } from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  width: 100%;
  ${media.tablet} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  object-fit: scale-down;
  width: 50%;
  ${media.tablet} {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 50%;
  word-break: keep-all;
  ${media.tablet} {
    width: 100%;
  }
`;
