import styled from 'styled-components';
import { media } from 'styles/theme';

export const Article = styled.article`
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  margin: 20px;
  transition: background-color 0.3s ease-out 100ms;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 300px;
  margin: 20px 40px;
  object-fit: scale-down;
  width: 30%;
  ${media.tablet} {
    height: 200px;
    margin: 0px;
    width: 100%;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  flex: auto;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.sub};
`;
