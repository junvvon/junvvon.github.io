import React, { useState, useEffect, useRef, useCallback } from "react";
import { MenuBarProps } from "./MenuBar.type";
import { StyledBar, MenuList, MenuItem, Title } from "./MenuBar.style";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuBar: React.FC<MenuBarProps> = ({}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const router = useRouter();

  const prevScrollTop = useRef(0);

  const handleIsScrollEvent = useCallback(() => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const nextDirection = prevScrollTop.current > scrollTop ? "UP" : "DOWN";

    if (nextDirection === "UP") {
      setIsDown(false);
    } else if (nextDirection === "DOWN") {
      setIsDown(true);
    }

    prevScrollTop.current = scrollTop;

    if (window.scrollY > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleIsScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleIsScrollEvent);
    };
  }, [handleIsScrollEvent]);

  return (
    <StyledBar isScroll={isScroll} isDown={isDown}>
      <MenuList>
        <Title>
          <Link href="/" passHref>
            <MenuItem pathName={router.pathname === "/"}>Develog</MenuItem>
          </Link>
        </Title>
        <Link href="/about" passHref>
          <MenuItem pathName={router.pathname === "/about"}>About</MenuItem>
        </Link>
      </MenuList>
    </StyledBar>
  );
};

export default MenuBar;
