import React from 'react';
import { Button } from './index';
import GlobalTheme from '../../foundation/theme/globalTheme';
import { ButtonEventProps } from './interface';

const PrimaryButton = ({ children }: ButtonEventProps) => {
  return (
    <Button
      size={GlobalTheme.size700}
      spacing={GlobalTheme.spacing200}
      backgroundColor={GlobalTheme.contentAccentPrimary}
      fontColor={GlobalTheme.fontSize225}
      pressedBackgroundColor={GlobalTheme.backgroundActivePrimary}
      radius={GlobalTheme.radius150}
      borderColor={GlobalTheme.borderActivePrimary}
      fontSize={GlobalTheme.fontSize200}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
