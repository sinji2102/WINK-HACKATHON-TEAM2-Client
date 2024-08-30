// styled.d.ts

import "styled-components";

// Define the shape of the font generator return type
interface FontProperties {
  "font-family": string;
  "font-weight": string;
  "font-size": string;
  "line-height": string;
  "letter-spacing": string;
}

// Define the shape of your theme
interface Theme {
  colors: {
    b01: string;
  };
  fonts: {
    heading1: FontProperties;
    heading2: FontProperties;
    heading3: FontProperties;
    heading4: FontProperties;
    body1_normal_semi: FontProperties;
    body1_normal_medi: FontProperties;
    body1_long: FontProperties;
    body2_normal_semi: FontProperties;
    body2_normal_medi: FontProperties;
    body2_long: FontProperties;
    caption1_semi: FontProperties;
    caption1_medi: FontProperties;
    caption2_semi: FontProperties;
    caption2_medi: FontProperties;
  };
}

// Extend the styled-components default theme
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
