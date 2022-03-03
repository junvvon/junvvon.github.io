import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const defaultTheme = {
  fontSizes: {
    header1: calcRem(34),
    header2: calcRem(20),
    body: calcRem(16),
  },

  fontFamily: {
    code: 'D2Coding',
    codeLigature: 'D2Coding ligature',
    text: 'Pretendard',
  },
};

const light = {
  colors: {
    // Font Colors
    bold: '#000000',
    inlineCodeColor: '#212529',
    main: '#333333',
    placeholder: '#999999',
    quotedColor: '#4D555F',
    sub: '#666666',

    // Background Colors
    background: '#FAFAFA',
    basicBg: '#FFFFFF',
    codeBg: '#F5F7F9',
    disabledBg: '#F5F5F5',
    inlineBg: '#DBDFE3',
    scrollThumbBg: '#7d7d7d',
    scrollTrackBg: '#fafafa',
    shadow: 'rgba(0, 0, 0, 0.16)',
    tableBg: '#F6F8FA',
    transparent: 'rgba(255, 255, 255, 0)',

    // Border Colors
    bgDivider: '#F0F0F0',
    disabledBorder: '#D9D9D9',
    quotedBorder: '#CAD1D9',
    scrollBorder: '#e8e8e8',
    tableBorder: '#D1D7DD',

    // Primary Colors
    primary100: '#064420',
    primary80: '#006241',
    primary60: '#006644',
    primary40: '#E4EFE7',
    primary20: '#F2F7F4',

    // Secondary Colors
    secondary100: '#062A44',
    secondary80: '#06556A',

    // Danger Colors
    danger1: '#FF4D4F',
    danger2: '#FF7875',

    // Warning Colors
    warning: '#ff9400',
  },
};

const dark = {
  colors: {
    // Font Colors
    bold: '#c9d1d9',
    inlineCodeColor: '#bcc4cc',
    main: '#c9d1d9',
    placeholder: '#c2c3c4',
    quotedColor: '#8b939d',
    sub: '#7d858e',

    // Background Colors
    background: '#161b22',
    basicBg: '#0d1116',
    codeBg: '#161b22',
    disabledBg: '#21262d',
    inlineBg: '#343941',
    scrollThumbBg: '#6b6b6b',
    scrollTrackBg: '#2c2c2c',
    shadow: 'rgba(0, 0, 0, 0.16)',
    tableBg: '#0d1116',
    transparent: 'rgba(255, 255, 255, 0)',

    // Border Colors
    bgDivider: '#21262d',
    disabledBorder: '#2d3239',
    quotedBorder: '#30363d',
    scrollBorder: '#3d3d3d',
    tableBorder: '#1e242a',

    // Primary Colors
    primary100: '#064420',
    primary80: '#006241',
    primary60: '#006644',
    primary40: '#E4EFE7',
    primary20: '#F2F7F4',

    // Secondary Colors
    secondary100: '#062A44',
    secondary80: '#06556A',

    // Danger Colors
    danger1: '#FF4D4F',
    danger2: '#FF7875',

    // Warning Colors
    warning: '#ff9400',
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const lightTheme: DefaultTheme = { ...defaultTheme, ...light };
export const darkTheme: DefaultTheme = { ...defaultTheme, ...dark };
