import styled from 'styled-components';

export const StyledBar = styled.header`
  background: ${({ theme }) => theme.colors.basicBg};
  display: flex;
  height: 112px;
  justify-content: center;
  width: 100%;
`;

export const MenuList = styled.div`
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: calc(800px - 4rem);
`;

export const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
`;
