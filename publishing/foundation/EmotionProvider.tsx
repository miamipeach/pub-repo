'use client';

import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import T from './theme/globalTheme';

const EmotionProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider theme={T}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
