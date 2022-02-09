import styled, { css } from "styled-components";

import { MenuBarProps } from "./MenuBar.type";

type MenuItemProp = { pathName: boolean };

export const StyledBar = styled.div<MenuBarProps>`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  height: 64px;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: 0.3s ease-in-out;
  width: 100%;
  z-index: 100;

  ${(props) =>
    props.isScroll &&
    css`
      box-shadow: 0 2px 6px 0 ${({ theme }) => theme.colors.shadow};
      position: fixed;
      top: -64px;
    `}

  ${(props) =>
    props.isDown &&
    props.isScroll &&
    css`
      top: -64px;
    `}

  ${(props) =>
    !props.isDown &&
    props.isScroll &&
    css`
      top: 0px;
    `}
`;

export const MenuList = styled.div`
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 1728px;
  @media (max-width: 1920px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
  }
`;

export const MenuItem = styled.a<MenuItemProp>`
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.bold};
    cursor: pointer;
  }

  ${(props) =>
    props.pathName
      ? css`
          color: ${({ theme }) => theme.colors.bold};
        `
      : css`
          color: ${({ theme }) => theme.colors.main};
        `}
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header1};
`;
