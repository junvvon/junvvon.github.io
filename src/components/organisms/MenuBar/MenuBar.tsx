import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MenuBarProps } from './MenuBar.type';
import { StyledBar, MenuList, MenuItem, Title } from './MenuBar.style';

const MenuBar: React.FC<MenuBarProps> = ({}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const prevScrollTop = useRef(0);

  const handleIsScrollEvent = useCallback(() => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const nextDirection = prevScrollTop.current > scrollTop ? 'UP' : 'DOWN';

    if (nextDirection === 'UP') {
      setIsDown(false);
    } else if (nextDirection === 'DOWN') {
      setIsDown(true);
    }

    prevScrollTop.current = scrollTop;

    if (window.scrollY > 40) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [isScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleIsScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleIsScrollEvent);
    };
  }, [handleIsScrollEvent]);

  return (
    <StyledBar isScroll={isScroll} isDown={isDown}>
      <MenuList>
        <Title>
          <MenuItem to="/">Develog</MenuItem>
        </Title>
        <MenuItem to="/about">About</MenuItem>
      </MenuList>
    </StyledBar>
  );
};

export default MenuBar;
