import styled from 'styled-components';

export const Article = styled.article`
  border-radius: 15px;
  display: flex;
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-out 100ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors.inlineBg};
  }
`;

export const Image = styled.img`
  height: 300px;
  margin: 20px 40px;
  object-fit: scale-down;
  width: 30%;
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
