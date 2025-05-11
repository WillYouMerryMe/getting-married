import { color } from '@merried/design-system';
import { IconCheck } from '@merried/icon';
import { flex } from '@merried/utils';
import type { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import Row from '../Flex/Row';
import Text from '../Text/Text';

type Props = {
  label?: string;
  checked?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckBox = ({ label, name, value, onChange, checked = false }: Props) => {
  return (
    <Row gap={8} alignItems="center">
      <StyledCheckBox $CheckBox={checked}>
        {checked && <IconCheck width={12} height={12} color="red" />}
        <input
          type="checkbox"
          checked={checked}
          name={name}
          value={value}
          onChange={onChange}
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
`;
