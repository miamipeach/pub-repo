import React from 'react';
import { ThemeInterface } from '../../foundation/theme/ThemeInterface';

export interface ButtonProps extends ButtonStyleProps, ButtonEventProps {}

export interface ButtonEventProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonStyleProps {
  size: ButtonSize;
  spacing: ButtonSpacing;
  backgroundColor: string;
  pressedBackgroundColor: string;
  radius: ButtonRadius;
  colorSet: string;
  borderColor: ButtonColor | string;
}

type ButtonSize = ThemeInterface['size'][keyof ThemeInterface['size']];
type ButtonSpacing = ThemeInterface['spacing'][keyof ThemeInterface['spacing']];
type ButtonBackgroundColor = ThemeInterface['background'][keyof ThemeInterface['background']];
type ButtonRadius = ThemeInterface['radius'][keyof ThemeInterface['radius']];
type ButtonColor = ThemeInterface['color'][keyof ThemeInterface['color']];
