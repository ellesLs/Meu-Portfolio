import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      common: {
        black: string;
        white: string;
        checkGreen: string;
        lightGray: string;
        darkGray: string;
      };
    };
    borderRadius: string;
  }
}
