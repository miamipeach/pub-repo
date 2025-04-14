import React from 'react';
import EmotionProvider from '../../foundation/EmotionProvider';

const DefaultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <EmotionProvider>{children}</EmotionProvider>
    </>
  );
};

export default DefaultLayout;
