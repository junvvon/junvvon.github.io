import "styled-components";

declare module "styled-components" {
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
      main: string;

      // Background Colors
      basicBg: string;
      scrollThumbBg: string;
      scrollTrackBg: string;

      // Border Colors
      bgDivider: string;
      scrollBorder: string;
      selection: string;

      primary: string;
    };
  }
}
