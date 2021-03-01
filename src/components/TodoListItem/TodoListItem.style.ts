import styled, { css } from 'styled-components';

export const StyledTodoListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

export interface CheckProps {
  checked?: boolean;
}

export const Checkbox = styled.div<CheckProps>`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }

  ${(props) =>
    props.checked &&
    css`
      svg {
        color: #22b8cf;
      }
    `}
`;

export const Text = styled.div<CheckProps>`
  margin-left: 0.5rem;
  flex: 1;

  ${({ checked }) =>
    checked &&
    css`
      color: #adb5db;
      text-decoration: line-through;
    `}
`;

export const Remove = styled.div`
  display: flex;
  align-items: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;
