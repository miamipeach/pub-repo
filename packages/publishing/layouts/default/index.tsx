import React from 'react';
import { Global } from '@emotion/react';
import globalStyle from '../../foundation/global.style';

const Index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <html lang="en">
        <Global styles={globalStyle} />
        <body>{children}</body>
      </html>
    </>
  );
};

export default Index;
