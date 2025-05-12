import React from 'react';
import GlobalTheme from '../../foundation/theme/globalTheme';
import { IKDSColor } from '../../foundation/entity/foundationEntity';

export interface ButtonProps extends ButtonStyleProps, ButtonEventProps {}

export interface ButtonEventProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonStyleProps {
  size: ButtonSize;
  spacing: ButtonSpacing;
  backgroundColor: IKDSColor;
  pressedBackgroundColor: IKDSColor;
  radius: ButtonRadius;
  fontColor: ButtonColor;
  borderColor: ButtonBorderColor;
  fontSize: ButtonFontSize;
}

// export const ButtonStyleProps = {
//   background: {
//     backgroundActivePrimary: GlobalTheme.backgroundActivePrimary,
//     backgroundDefaultPrimary: GlobalTheme.backgroundDefaultPrimary,
//     backgroundSurface: GlobalTheme.backgroundSurface,
//     backgroundAccentPrimary: GlobalTheme.backgroundAccentPrimary,
//     backgroundDisabledPrimary: GlobalTheme.backgroundDisabledPrimary,
//   },
//   radius: {
//     radius150: GlobalTheme.radius150,
//     radius125: GlobalTheme.radius125,
//     radius100: GlobalTheme.radius100,
//   },
//   fontColor: {
//     borderDisabled: GlobalTheme.borderDisabled,
//   },
//   borderColor: {
//     borderDisabled: GlobalTheme.borderDisabled,
//     borderDefaultQuinary: GlobalTheme.borderDefaultQuinary,
//   },
//   fontSize: {
//     fontSize225: GlobalTheme.fontSize225,
//     fontSize188: GlobalTheme.fontSize188,
//     fontSize175: GlobalTheme.fontSize175,
//   },
//   buttonSize: {
//     size400: GlobalTheme.size400,
//     size500: GlobalTheme.size500,
//     size600: GlobalTheme.size600,
//     size700: GlobalTheme.size700,
//   },
//   padding: {
//     spacing125: GlobalTheme.spacing125,
//     spacing175: GlobalTheme.spacing175,
//     spacing200: GlobalTheme.spacing200,
//   },
// };

// type ButtonSize = (typeof ButtonStyleProps.buttonSize)[keyof typeof ButtonStyleProps.buttonSize];
// type ButtonSpacing = (typeof ButtonStyleProps.padding)[keyof typeof ButtonStyleProps.padding];
// type ButtonBackground = (typeof ButtonStyleProps.background)[keyof typeof ButtonStyleProps.background];
// type ButtonRadius = (typeof ButtonStyleProps.radius)[keyof typeof ButtonStyleProps.radius];
// type ButtonColor = (typeof ButtonStyleProps.fontColor)[keyof typeof ButtonStyleProps.fontColor];
// type ButtonBorderColor = (typeof ButtonStyleProps.borderColor)[keyof typeof ButtonStyleProps.borderColor];
// type ButtonFontSize = (typeof ButtonStyleProps.fontSize)[keyof typeof ButtonStyleProps.fontSize];
