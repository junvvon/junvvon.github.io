import React, { useState, useEffect } from 'react';
import { MenuBarProps } from './MenuBar.type';
import { StyledBar, MenuList, MenuItem } from './MenuBar.style';

const MenuBar: React.FC<MenuBarProps> = ({}) => {
  // const [scrolled, setScrolled] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // if (!scrolled && window.scrollY > 20) {
      //   setScrolled(true);
      // } else if (scrolled && window.scrollY <= 20) {
      //   setScrolled(false);
      // }
      setScrolled(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <StyledBar scrolled={scrolled < 64}>
      <MenuList>
        <MenuItem to="/">Develog</MenuItem>
        <MenuItem to="about">About</MenuItem>
      </MenuList>
    </StyledBar>
  );
};

export default MenuBar;
