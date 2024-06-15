import { DefaultTheme } from "styled-components";

type Font = {
  family: string;
  weight: number;
  size: number;
  lineHeight: number;
};

const FONT = ({ family, weight, size, lineHeight }: Font): string => {
  return `
  font-family: ${family};
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}rem;
  `;
};

const fonts = {
  head1: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 700,
    size: 2.5,
    lineHeight: 3.4,
  }),
  head2: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 700,
    size: 1.9,
    lineHeight: 3,
  }),

  title1: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 700,
    size: 1.9,
    lineHeight: 3.4,
  }),
  title2: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 400,
    size: 1.9,
    lineHeight: 2.8,
  }),
  title3: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 700,
    size: 1.4,
    lineHeight: 2.8,
  }),
  title4: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 700,
    size: 1.1,
    lineHeight: 2.6,
  }),
  title5: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 400,
    size: 1.3,
    lineHeight: 3.4,
  }),

  body1: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 400,
    size: 1.2,
    lineHeight: 2,
  }),
  body2: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 400,
    size: 1.1,
    lineHeight: 0.4,
  }),

  button1: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 600,
    size: 1.3,
    lineHeight: 2,
  }),
  button2: FONT({
    family: 'Spoqa Han Sans Neo',
    weight: 600,
    size: 1.1,
    lineHeight: 2,
  }),
};

export type FontsTypes = typeof fonts;

const colors = {
  main1: "#7AF3CA",
  main2: "#78E99B",
  main3: "#34BC1E",

  white: "#FFFFFF",
  black: "#000000",

  grey1: "#c0c0c0",
  grey2: "#e0e0e0",
  grey3: "#5E5D63",
  grey4: "#F8F8F8",

  red: "#F15454",
  blue: "#2FACEB",
  green: "#34BC1E",
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  fonts,
  colors,
};
