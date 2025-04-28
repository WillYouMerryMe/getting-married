import { color, font } from '@merried/design-system';
import { css, styled } from 'styled-components';
import type { CSSProperties, InputHTMLAttributes } from 'react';
import type { InputSize, Platform } from './input.type';
import { getInputSize } from './input.style';

type Props = {
  label?: string | React.ReactNode;
  size?: InputSize;
  platform?: Platform;
  errorMessage?: string;
  isError?: boolean;
  width?: CSSProperties['width'];
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Input = ({
  label,
  platform = 'MOBILE',
  size = 'SMALL',
  isError = false,
  placeholder,
  type,
  name,
  value,
  onChange,
  readOnly,
}: Props) => {
  const inputSize = platform === 'DESKTOP' ? 'VERY_LARGE' : size;

  return (
    <div>
      {label && (
        <Label>
          {label}
          <span style={{ color: color.red }}>{platform === 'DESKTOP' && ' *'}</span>
        </Label>
      )}
      <div style={{ position: 'relative' }}>
        <StyledInput
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          readOnly={readOnly}
          $size={inputSize}
          $platform={platform}
          $isError={isError}
        />
      </div>
    </div>
  );
};

export default Input;

const StyledInput = styled.input<{
  $size: InputSize;
  $platform: Platform;
  $isError: boolean;
}>`
  ${font.Button3}
  color: ${color.G600};
  height: 46px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${color.G70};
  background: ${color.G0};

  &::placeholder {
    color: ${color.G80};
  }

  &:focus {
    border: 1px solid ${color.primary};
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${color.red};

      &:focus {
        border: 1px solid ${color.red};
      }
    `}

  ${(props) => props && getInputSize[props.$size]};
`;

const Label = styled.p`
  ${font.P3}
  color: ${color.G700};
  margin-bottom: 8px;
`;
