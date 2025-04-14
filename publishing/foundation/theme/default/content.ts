import globalTheme from '../globalTheme';

export const content = {
  default: {
    primary: globalTheme.color.gray['1200'],
    secondary: globalTheme.color.gray['1000'],
    tertiary: globalTheme.color.gray['800'],
    quaternary: globalTheme.color.gray['500'],
    primaryInvert: globalTheme.color.white['1000'],
    secondaryInvert: globalTheme.color.white['700'],
  },
  accent: {
    primary: globalTheme.color.indigo['700'],
    secondary: globalTheme.color.indigo['500'],
  },
  disabled: {
    invert: globalTheme.color.white['200'],
  },
  active: {
    primary: globalTheme.color.indigo['1100'],
    secondary: globalTheme.color.gray['1100'],
    tertiary: globalTheme.color.indigo['900'],
    quaternary: globalTheme.color.gray['800'],
    primaryInvert: globalTheme.color.white['1000'],
    secondaryInvert: globalTheme.color.white['700'],
  },
};
