import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import { ButtonStyleType, DesktopButtonSize } from './button.type';
import styled from 'styled-components';
import { flex } from '@merried/utils';
import { getDesktopButtonSize, getButtonStyle, getPointColorStyle } from './button.style';

type Props = {
  children: ReactNode;
  styleType?: ButtonStyleType;
  size?: DesktopButtonSize;
  width?: CSSProperties['width'];
  pointColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const DesktopButton = ({
  onClick,
  children,
  styleType = 'DEFAULT',
  size = 'SMALL',
  width,
  style,
  disabled,
  pointColor,
}: Props) => {
  return (
    <StyledDesktopButton
      style={{ width, ...style }}
      onClick={onClick}
      $styleType={styleType}
      $size={size}
      pointColor={pointColor}
      disabled={disabled || styleType === 'DISABLED'}
    >
      {children}
    </StyledDesktopButton>
  );
};

export default DesktopButton;

const StyledDesktopButton = styled.button<{
  $styleType: ButtonStyleType;
  $size: DesktopButtonSize;
  pointColor?: string;
}>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 8px;
  word-break: keep-all;

  ${(props) => props && getButtonStyle[props.$styleType]};
  ${(props) => props && getDesktopButtonSize[props.$size]};

  ${({ $styleType, pointColor }) =>
    $styleType === 'DEFAULT' && getPointColorStyle(pointColor)}
`;
