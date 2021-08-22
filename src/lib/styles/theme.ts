import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 13}rem`;

const theme: DefaultTheme = {
  fontSizes: {
    header1: calcRem(34),
    header2: calcRem(20),
    body: calcRem(13),
  },

  colors: {
    bold: '#000000',
    main: '#333333',
    sub: '#666666',
    placeholder: '#999999',
    inlineCodeColor: '#212529',
    inlinebg: '#dbdfe3',
    codebg: '#f5f7f9',
    white: '#ffffff',
    background: '#fafafa',
    bgDivider: '#f0f0f0',
    disabledbg: '#f5f5f5',
    disabledborder: '#d9d9d9',
    primary100: '#064420',
    primary80: '#006241',
    primary60: '#006644',
    primary40: '#e4efe7',
    primary20: '#f2f7f4',
    secondary100: '#062a44',
    secondary80: '#06556a',
    danger1: '#ff4d4f',
    danger2: '#ff7875',
    warning: '#ff9400',
  },
};

export default theme;
