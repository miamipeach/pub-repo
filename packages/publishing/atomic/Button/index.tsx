import React from 'react';
import { buttonProps } from './interface';
import { buttonStyle } from './style.css';
export const ButtonTest = ({ children }: buttonProps) => {
  return <button className={buttonStyle}>{children} 나는야 테스트버튼</button>;
};
