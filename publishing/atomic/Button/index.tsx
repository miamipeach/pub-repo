import React from 'react';
import { ButtonEventProps, ButtonProps } from './interface';
import ButtonStyle from './Button.style';
import globalTheme from '../../foundation/theme/globalTheme';

export const Button = ({
  children,
  size,
  spacing,
  backgroundColor,
  colorSet,
  pressedBackgroundColor,
  radius,
  borderColor,
}: ButtonProps) => {
  return (
    <ButtonStyle
      size={size ?? globalTheme.size['700']}
      spacing={spacing ?? globalTheme.spacing['200']}
      colorSet={colorSet ?? globalTheme.content.active.primaryInvert}
      backgroundColor={backgroundColor ?? globalTheme.background.active.primary}
      pressedBackgroundColor={pressedBackgroundColor ?? globalTheme.background.active.primary}
      radius={radius ?? globalTheme.radius['150']}
      borderColor={borderColor ?? globalTheme.background.active.primary}
    >
      {children}
    </ButtonStyle>
  );
};

export const PrimaryButton = ({ children }: ButtonEventProps) => (
  <Button
    size={globalTheme.size['700']}
    spacing={globalTheme.spacing['200']}
    backgroundColor={globalTheme.background.active.primary}
    pressedBackgroundColor={globalTheme.background.active.primary}
    radius={globalTheme.radius['150']}
    colorSet={globalTheme.content.active.primaryInvert}
    borderColor={globalTheme.background.active.primary}
  >
    {children}
  </Button>
);
