import React from 'react';
import { buttonProps } from './interface';
export const ButtonTest = ({ children }: buttonProps) => {
  return <div css={ButtonStyle}>Emotion 스타일 적용된 박스</div>;
};
