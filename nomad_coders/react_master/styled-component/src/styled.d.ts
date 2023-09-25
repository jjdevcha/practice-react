import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    accentColor: string;
    bgColor: string;
  }
}
