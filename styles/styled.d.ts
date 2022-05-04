import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header1: string;
      header2: string;
      body: string;
    };

    fontFamily: {
      code: string;
      codeLigature: string;
      text: string;
    };

    colors: {
      // Font Colors
      bold: string;
      inlineCodeColor: string;
      main: string;
      placeholder: string;
      quotedColor: string;
      sub: string;

      // Background Colors
      background: string;
      basicBg: string;
      codeBg: string;
      disabledBg: string;
      inlineBg: string;
      scrollThumbBg: string;
      scrollTrackBg: string;
      shadow: string;
      tableBg: string;
      transparent: string;

      // Border Colors
      bgDivider: string;
      bgSubDivider: string;
      quotedBorder: string;
      scrollBorder: string;
      tableBorder: string;
    };
  }
}
