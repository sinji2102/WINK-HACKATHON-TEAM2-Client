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
    black0: string;
    white100: string;

    neutral99: string;
    neutral95: string;
    neutral90: string;
    neutral80: string;
    neutral70: string;
    neutral60: string;
    neutral50: string;
    neutral40: string;
    neutral30: string;
    neutral22: string;
    neutral20: string;
    neutral15: string;
    neutral10: string;
    neutral5: string;

    coolNeutral99: string;
    coolNeutral98: string;
    coolNeutral97: string;
    coolNeutral96: string;
    coolNeutral95: string;
    coolNeutral90: string;
    coolNeutral80: string;
    coolNeutral70: string;
    coolNeutral60: string;
    coolNeutral50: string;
    coolNeutral40: string;
    coolNeutral30: string;
    coolNeutral25: string;
    coolNeutral23: string;
    coolNeutral22: string;
    coolNeutral20: string;
    coolNeutral17: string;
    coolNeutral15: string;
    coolNeutral10: string;
    coolNeutral7: string;
    coolNeutral5: string;

    blue99: string;
    blue95: string;
    blue90: string;
    blue80: string;
    blue70: string;
    blue60: string;
    blue50: string;
    blue40: string;
    blue30: string;
    blue20: string;
    blue10: string;

    red99: string;
    red95: string;
    red90: string;
    red80: string;
    red70: string;
    red60: string;
    red50: string;
    red40: string;
    red30: string;
    red20: string;
    red10: string;

    green99: string;
    green95: string;
    green90: string;
    green80: string;
    green70: string;
    green60: string;
    green50: string;
    green40: string;
    green30: string;
    green20: string;
    green10: string;

    orange99: string;
    orange95: string;
    orange90: string;
    orange80: string;
    orange70: string;
    orange60: string;
    orange50: string;
    orange40: string;
    orange30: string;
    orange20: string;
    orange10: string;

    redOrange99: string;
    redOrange95: string;
    redOrange90: string;
    redOrange80: string;
    redOrange70: string;
    redOrange60: string;
    redOrange50: string;
    redOrange40: string;
    redOrange30: string;
    redOrange20: string;
    redOrange10: string;

    lime99: string;
    lime95: string;
    lime90: string;
    lime80: string;
    lime70: string;
    lime60: string;
    lime50: string;
    lime40: string;
    lime30: string;
    lime20: string;
    lime10: string;

    cyan99: string;
    cyan95: string;
    cyan90: string;
    cyan80: string;
    cyan70: string;
    cyan60: string;
    cyan50: string;
    cyan40: string;
    cyan30: string;
    cyan20: string;
    cyan10: string;

    lightBlue99: string;
    lightBlue95: string;
    lightBlue90: string;
    lightBlue80: string;
    lightBlue70: string;
    lightBlue60: string;
    lightBlue50: string;
    lightBlue40: string;
    lightBlue30: string;
    lightBlue20: string;
    lightBlue10: string;

    violet99: string;
    violet95: string;
    violet90: string;
    violet80: string;
    violet70: string;
    violet60: string;
    violet50: string;
    violet40: string;
    violet30: string;
    violet20: string;
    violet10: string;

    purple99: string;
    purple95: string;
    purple90: string;
    purple80: string;
    purple70: string;
    purple60: string;
    purple50: string;
    purple40: string;
    purple30: string;
    purple20: string;
    purple10: string;

    pink99: string;
    pink95: string;
    pink90: string;
    pink80: string;
    pink70: string;
    pink60: string;
    pink50: string;
    pink40: string;
    pink30: string;
    pink20: string;
    pink10: string;
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
