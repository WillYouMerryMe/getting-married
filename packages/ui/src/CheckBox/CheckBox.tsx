import { color } from '@merried/design-system';
import { IconCheck } from '@merried/icon';
import { flex } from '@merried/utils';
import type { InputHTMLAttributes, ChangeEvent } from 'react';
import { styled } from 'styled-components';
import Row from '../Flex/Row';
import Text from '../Text/Text';

type Props = {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const CheckBox = ({ label, name, value, checked = false, onChange }: Props) => {
  const handleClick = () => {
    onChange?.(!checked);
  };

  return (
    <Row gap={8} alignItems="center">
      <StyledCheckBox $CheckBox={checked} onClick={handleClick}>
        {checked && <IconCheck width={12} height={12} color="red" />}
        <input
          type="checkbox"
          checked={checked}
          name={name}
          value={value}
          onChange={(e) => onChange?.(e.target.checked)}
          style={{ display: 'none' }}
        />
      </StyledCheckBox>
      <Text fontType="P3" color={color.G900}>
        {label}
      </Text>
    </Row>
  );
};

export default CheckBox;

const StyledCheckBox = styled.div<{ $CheckBox: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  background: ${({ $CheckBox }) => ($CheckBox ? color.primary : color.G0)};
  width: 16px;
  height: 16px;
  border: 1px solid ${color.G80};
  border-radius: 2px;

  cursor: pointer;
`;
