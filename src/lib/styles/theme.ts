import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 13}rem`;

const theme: DefaultTheme = {
  fontSizes: {
    header1: calcRem(34),
    header2: calcRem(20),
    body: calcRem(13),
  },

  colors: {
    // Font Colors
    bold: '#000000',
    main: '#333333',
    sub: '#666666',
    placeholder: '#999999',
    inlineCodeColor: '#212529',
    quotedColor: '#4d555f',

    // Background Colors
    inlinebg: '#dbdfe3',
    codebg: '#f5f7f9',
    background: '#fafafa',
    white: '#ffffff',
    disabledbg: '#f5f5f5',
    tableBg: '#f6f8fa',

    // Border Colors
    quotedBorder: '#cad1d9',
    bgDivider: '#f0f0f0',
    disabledborder: '#d9d9d9',
    tableBorder: '#d1d7dd',

    // Primary Colors
    primary100: '#064420',
    primary80: '#006241',
    primary60: '#006644',
    primary40: '#e4efe7',
    primary20: '#f2f7f4',

    // Secondary Colors
    secondary100: '#062a44',
    secondary80: '#06556a',

    // Danger Colors
    danger1: '#ff4d4f',
    danger2: '#ff7875',

    // Warning Colors
    warning: '#ff9400',
  },
};

export default theme;
