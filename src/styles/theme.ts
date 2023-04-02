import { DefaultTheme } from "styled-components";

const calcRem = (size: number) => `${size / 16}rem`;

const defaultTheme = {
  fontSizes: {
    header1: calcRem(34),
    header2: calcRem(20),
    body: calcRem(16),
  },

  fontFamily: {
    code: "D2Coding",
    codeLigature: "D2Coding ligature",
    text: "Pretendard",
  },
};

const light = {
  colors: {
    // Font Colors
    bold: "#000000",
    main: "#333333",

    // Background Colors
    basicBg: "#FFFFFF",
    scrollThumbBg: "#7d7d7d",
    scrollTrackBg: "#fafafa",

    // Border Colors
    bgDivider: "#D0D7DE",
    scrollBorder: "#e8e8e8",
    selection: "#feccd4",

    primary: "#F34C55",
  },
};

const dark = {
  colors: {
    // Font Colors
    bold: "#c9d1d9",
    main: "#c9d1d9",

    // Background Colors
    basicBg: "#0d1116",
    scrollThumbBg: "#6b6b6b",
    scrollTrackBg: "#2c2c2c",

    // Border Colors
    bgDivider: "#30363d",
    scrollBorder: "#3d3d3d",
    selection: "#e77076",

    primary: "#F34C55",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(960),
  mobile: customMediaQuery(576),
};

export const lightTheme: DefaultTheme = { ...defaultTheme, ...light };
export const darkTheme: DefaultTheme = { ...defaultTheme, ...dark };
