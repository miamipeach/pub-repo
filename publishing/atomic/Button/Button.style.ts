import styled from '@emotion/styled';
import { ButtonStyleProps } from './interface';

const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ size }) => size};
  color: ${({ colorSet }) => colorSet};
  padding: ${({ spacing }) => spacing} 0;
  border-radius: ${({ radius }) => radius};
  &:active {
    background-color: ${({ pressedBackgroundColor }) => pressedBackgroundColor};
  }
`;

export default ButtonStyle;
