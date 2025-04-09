'use client';

import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import theme from './theme/theme';

const EmotionProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
