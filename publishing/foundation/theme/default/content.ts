import color from './color';

const content = {
  default: {
    primary: color.gray['1200'],
    secondary: color.gray['1000'],
    tertiary: color.gray['800'],
    quaternary: color.gray['500'],
    primaryInvert: color.white['1000'],
    secondaryInvert: color.white['700'],
  },
  accent: {
    primary: color.indigo['700'],
    secondary: color.indigo['500'],
  },
  disabled: {
    invert: color.white['200'],
  },
  active: {
    primary: color.indigo['1100'],
    secondary: color.gray['1100'],
    tertiary: color.indigo['900'],
    quaternary: color.gray['800'],
    primaryInvert: color.white['1000'],
    secondaryInvert: color.white['700'],
  },
};

export default content;
