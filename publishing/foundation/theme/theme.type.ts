import { KDSFoundation, lightTheme } from '../entity/foundationEntity';

export type KDSColorType = typeof lightTheme;
export type KDSFoundationType = typeof KDSFoundation;

export type ThemeType = KDSColorType & KDSFoundationType;
