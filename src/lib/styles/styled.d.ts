import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header1: string;
      header2: string;
      body: string;
    };

    colors: {
      bold: string;
      main: string;
      sub: string;
      placeholder: string;
      inlineCodeColor: string;
      inlinebg: string;
      codebg: string;
      white: string;
      background: string;
      bgDivider: string;
      disabledbg: string;
      disabledborder: string;
      primary100: string;
      primary80: string;
      primary60: string;
      primary40: string;
      primary20: string;
      secondary100: string;
      secondary80: string;
      danger1: string;
      danger2: string;
      warning: string;
    };
  }
}
