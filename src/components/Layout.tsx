import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import useDarkMode from "use-dark-mode";
import { media } from "../styles/theme";
import { lightTheme, darkTheme } from "../styles/theme";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.basicBg};
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.basicBg};
  height: 100%;
  padding: 2rem;
  width: 800px;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Content>{children}</Content>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default Layout;
