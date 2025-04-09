import { size } from './default/size';

export interface ThemeInterface {
  background: {
    active: {
      primary: string;
    };
  };
  color: {
    blue: ColorInterface;
    indigo: ColorInterface;
    gray: ColorInterface;
  };
  size: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: string;
  };
}

interface ColorInterface {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '1000': string;
  '1100': string;
  '1200': string;
}
