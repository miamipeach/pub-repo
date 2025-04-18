import React from 'react';
import { KDSColorType, KDSFoundationType } from '../../foundation/theme/theme.type';

export interface ButtonProps extends ButtonStyleProps, ButtonEventProps {}

export interface ButtonEventProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonStyleProps {
  size: ButtonSize;
  spacing: ButtonSpacing;
  backgroundColor: ButtonBackgroundColor;
  pressedBackgroundColor: ButtonBackgroundColor;
  radius: ButtonRadius;
  fontColor: ButtonColor;
  borderColor: ButtonBorderColor;
  fontSize: ButtonFontSize;
}

// type ButtonSize = KDSFoundationType[keyof Pick<KDSFoundationType, 'size400' | 'size500' | 'size600' | 'size700'>];
type ButtonSize =
  | KDSFoundationType['size400']
  | KDSFoundationType['size500']
  | KDSFoundationType['size600']
  | KDSFoundationType['size700'];

type ButtonSpacing = KDSFoundationType[keyof Pick<KDSFoundationType, 'spacing125' | 'spacing175' | 'spacing200'>];
type ButtonBackgroundColor = KDSColorType[keyof Pick<
  KDSColorType,
  | 'backgroundActivePrimary'
  | 'backgroundDefaultPrimary'
  | 'backgroundSurface'
  | 'backgroundAccentPrimary'
  | 'backgroundDisabledPrimary'
>];
type ButtonRadius = KDSFoundationType[keyof Pick<KDSFoundationType, 'radius150' | 'radius125' | 'radius100'>];
type ButtonColor = KDSColorType[keyof Pick<KDSColorType, 'borderDisabled'>];
type ButtonBorderColor = KDSColorType[keyof Pick<KDSColorType, 'borderDisabled' | 'borderDefaultQuinary'>];
type ButtonFontSize = KDSFoundationType[keyof Pick<
  KDSFoundationType,
  'fontSize225' | 'fontSize200' | 'fontSize188' | 'fontSize175'
>];
