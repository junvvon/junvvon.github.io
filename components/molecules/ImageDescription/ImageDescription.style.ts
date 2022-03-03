import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  width: 100%;
`;

export const Image = styled.img`
  object-fit: scale-down;
  width: 50%;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 50%;
  word-break: keep-all;
`;
