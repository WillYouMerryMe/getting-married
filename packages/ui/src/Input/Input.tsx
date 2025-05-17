import { color, font } from '@merried/design-system';
import { css, styled } from 'styled-components';
import type { CSSProperties, InputHTMLAttributes } from 'react';
import type { InputSize, Platform } from './input.type';
import { getInputSize } from './input.style';
import ErrorMessage from './ErrorMessage';

type Props = {
  label?: string | React.ReactNode;
  width?: CSSProperties['width'];
  size?: InputSize;
  platform?: Platform;
  isError?: boolean;
  errorMessage?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Input = ({
  label,
  width,
  size = 'SMALL',
  platform = 'MOBILE',
  isError = false,
  errorMessage,
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
          <span style={{ color: color.red }}>{platform === 'DESKTOP' && '*'}</span>
        </Label>
      )}
      <div style={{ position: 'relative', width }}>
        <StyledInput
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onChange}
          $size={inputSize}
          $platform={platform}
          $isError={isError}
        />
      </div>
      {isError && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default Input;

const StyledInput = styled.input<{
  $size: InputSize;
  $platform: Platform;
  $isError: boolean;
}>`
  width: 100%;
  ${font.Button3}
  color: ${color.G600};
  height: 46px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${color.G70};
  background: ${color.G0};

  &::placeholder {
    ${font.P3}
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
