import Link from 'next/link';

import Logo from 'components/atoms/Icons/Logo';

import { StyledBar, MenuList, MenuItem } from './MenuBar.style';

const MenuBar = () => (
  <StyledBar>
    <MenuList>
      <Link href="/" passHref>
        <MenuItem>
          <Logo />
        </MenuItem>
      </Link>

      <Link href="/about" passHref>
        <MenuItem>Resume</MenuItem>
      </Link>
    </MenuList>
  </StyledBar>
);

export default MenuBar;
