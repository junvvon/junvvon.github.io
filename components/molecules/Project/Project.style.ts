import styled, { css } from 'styled-components';

export const Block = styled.div<{ other: boolean }>`
  padding: 1.5rem 0;

  ${(props) =>
    props.other &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.bgDivider};
      padding: 3rem 0;
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
