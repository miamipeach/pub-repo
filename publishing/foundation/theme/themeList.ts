import { darkTheme, KDSFoundation, lightTheme } from '../entity/foundationEntity';

const ThemeList = {
  lightTheme: {
    ...lightTheme,
    ...KDSFoundation,
  },
  darkTheme: {
    ...darkTheme,
    ...KDSFoundation,
  },
};

export default ThemeList;
