import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 13}rem`;

const theme: DefaultTheme = {
  fontSizes: {
    header1: calcRem(34),
    header2: calcRem(20),
    body: calcRem(13),
  },

  fontFamily: {
    code: 'D2Coding',
    codeLigature: 'D2Coding ligature',
    text: 'Pretendard',
  },

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
    shadow: 'rgba(0, 0, 0, 0.16)',
    tableBg: '#F6F8FA',
    transparent: 'rgba(255, 255, 255, 0)',

    // Border Colors
    bgDivider: '#F0F0F0',
    disabledBorder: '#D9D9D9',
    quotedBorder: '#CAD1D9',
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

export default theme;
