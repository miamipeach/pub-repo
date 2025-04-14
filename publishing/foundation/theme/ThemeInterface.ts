import { content } from './default/content';
import globalTheme from './globalTheme';

export interface ThemeInterface {
  background: {
    active: {
      primary: string;
    };
  };
  content: {
    default: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      primaryInvert: string;
      secondaryInvert: string;
    };
    accent: {
      primary: string;
      secondary: string;
    };
    disabled: {
      invert: string;
    };
    active: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      primaryInvert: string;
      secondaryInvert: string;
    };
  };
  color: {
    blue: Record<ColorKeyType, string>;
    indigo: Record<ColorKeyType, string>;
    gray: Record<ColorKeyType, string>;
    white: Record<ColorKeyType2, string>;
  };
  size: Record<SizeKeyType, string>;
  spacing: Record<SpacingKeyType, string>;
  radius: Record<RadiusKeyType, string>;
}

export type ColorKeyType2 =
  | '50'
  | '70'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '850'
  | '1000';

export type ColorKeyType =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000'
  | '1100'
  | '1200';

type RadiusKeyType = '25' | '50' | '75' | '100' | '125' | '150' | '200' | '250' | '300' | '350' | '400' | '12488';

type SizeKeyType =
  | '25'
  | '50'
  | '75'
  | '100'
  | '125'
  | '150'
  | '175'
  | '200'
  | '250'
  | '300'
  | '350'
  | '400'
  | '450'
  | '500'
  | '550'
  | '600'
  | '650'
  | '700'
  | '800'
  | '900'
  | '1000'
  | '1100'
  | '1200'
  | '1450'
  | '1600'
  | '1950'
  | '2100'
  | '2250'
  | '2450'
  | '3000'
  | '4000';

type SpacingKeyType =
  | '0'
  | '25'
  | '50'
  | '75'
  | '100'
  | '125'
  | '150'
  | '175'
  | '200'
  | '250'
  | '300'
  | '350'
  | '400'
  | '450'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000'
  | '1200'
  | '1500'
  | '1700'
  | '1950';
