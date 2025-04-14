import React from 'react';
import { ColorKeyType, ColorKeyType2, ThemeInterface } from '../../foundation/theme/ThemeInterface';
import { radius } from '../../foundation/theme/default/radius';

export interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

export interface ButtonStyleProps {
  size: ButtonSize;
  spacing: ButtonSpacing;
  backgroundColor: ButtonBackgroundColor;
  pressedBackgroundColor: ButtonBackgroundColor;
  radius: ButtonRadius;
  colorSet: ButtonColor;
  borderColor: ButtonColor | ButtonBackgroundColor;
}

type ButtonSize = ThemeInterface['size'][keyof ThemeInterface['size']];
type ButtonSpacing = ThemeInterface['spacing'][keyof ThemeInterface['spacing']];
type ButtonBackgroundColor = ThemeInterface['background'][keyof ThemeInterface['background']];
type ButtonRadius = ThemeInterface['radius'][keyof ThemeInterface['radius']];
type ButtonColor = ThemeInterface['color'][keyof ThemeInterface['color']];
