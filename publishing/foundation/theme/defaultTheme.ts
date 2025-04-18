import { darkTheme, KDSFoundation, lightTheme } from '../entity/foundationEntity';

const defaultTheme = {
  lightTheme: {
    ...lightTheme,
    ...KDSFoundation,
  },
  darkTheme: {
    ...darkTheme,
    ...KDSFoundation,
  },
};

export default defaultTheme;
