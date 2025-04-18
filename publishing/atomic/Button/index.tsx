import React from 'react';
import { ButtonProps } from './interface';
import ButtonStyle from './Button.style';
import GlobalTheme from '../../foundation/theme/globalTheme';

export const Button = ({
  children,
  size = GlobalTheme.size700,
  spacing = GlobalTheme.spacing200,
  backgroundColor = GlobalTheme.backgroundActivePrimary,
  fontColor = GlobalTheme.fontSize225,
  pressedBackgroundColor = GlobalTheme.backgroundActivePrimary,
  radius = GlobalTheme.radius150,
  borderColor = GlobalTheme.borderActivePrimary,
  fontSize = GlobalTheme.fontSize200,
}: ButtonProps) => {
  return (
    <ButtonStyle
      size={size}
      spacing={spacing}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      pressedBackgroundColor={pressedBackgroundColor}
      radius={radius}
      borderColor={borderColor}
      fontSize={fontSize}
    >
      {children}
    </ButtonStyle>
  );
};
