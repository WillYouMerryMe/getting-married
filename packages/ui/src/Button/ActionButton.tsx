import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import { ButtonIcon } from './button.type';
import styled from 'styled-components';
import { color } from '@merried/design-system';
import { IconAdd } from '@merried/icon';
import Text from '../Text/Text';

type Props = {
  children: ReactNode;
  icon?: ButtonIcon;
  width?: CSSProperties['width'];
  background: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton = ({
  onClick,
  children,
  width,
  icon = 'NONE',
  style,
  disabled,
  background,
}: Props) => {
  return (
    <StyledActionButton
      style={{ width, ...style }}
      onClick={onClick}
      disabled={disabled}
      background={background}
    >
      {icon === 'ADD_ICON' && <IconAdd color={color.G0} width={12} height={12} />}
      <Text fontType="Button3" color={color.G0}>
        {children}
      </Text>
    </StyledActionButton>
  );
};

export default ActionButton;

const StyledActionButton = styled.button<{ background: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  gap: 8px;
  border-radius: 999px;
  height: 34px;
  padding: 10px 24px;
  word-break: keep-all;
`;
