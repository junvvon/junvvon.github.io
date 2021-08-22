import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header1: string;
      header2: string;
      body: string;
    };

    colors: {
      // Font Colors
      bold: string;
      main: string;
      sub: string;
      placeholder: string;
      inlineCodeColor: string;
      quotedColor: string;

      // Background Colors
      inlinebg: string;
      codebg: string;
      background: string;
      white: string;
      disabledbg: string;

      // Border Colors
      quotedBorder: string;
      bgDivider: string;
      disabledborder: string;

      // Primary Colors
      primary100: string;
      primary80: string;
      primary60: string;
      primary40: string;
      primary20: string;

      // Secondary Colors
      secondary100: string;
      secondary80: string;

      // Danger Colors
      danger1: string;
      danger2: string;

      // Warning Colors
      warning: string;
    };
  }
}
