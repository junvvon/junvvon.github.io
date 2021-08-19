import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuBarProps } from './MenuBar.type';

type StyledBarProp = Pick<MenuBarProps, 'scrolled'>;

export const StyledBar = styled.div<StyledBarProp>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: white;
  transition: top 0.2s ease-in-out;

  /* box-shadow: 0px 2px 0px gray; */

  ${(props) =>
    props.scrolled &&
    css`
      /* background-color: red; */
    `}
`;

export const MenuList = styled.div`
  width: 100%;
  display: flex;
  flex: auto;
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  color: black;
  padding: 10px;
  text-decoration: none;
  &:hover {
    background: gray;
    color: white;
  }
`;
