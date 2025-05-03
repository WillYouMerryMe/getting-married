import { color, font } from '@merried/design-system';
import { IconSearch } from '@merried/icon';
import { flex } from '@merried/utils';
import { CSSProperties, InputHTMLAttributes, useRef } from 'react';
import styled from 'styled-components';

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: CSSProperties['width'];
}

const SearchInput = ({
  width,
  onChange,
  value,
  name,
  placeholder,
  type = 'text',
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <StyledSearchInput onClick={handleClick} style={{ width }}>
      <Input
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
      />
      <IconSearch width={16} height={16} />
    </StyledSearchInput>
  );
};

export default SearchInput;

const StyledSearchInput = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background-color: ${color.G10};
  padding: 14px 16px;
`;

const Input = styled.input`
  width: 90%;
  background-color: ${color.G10};
  ${font.P3}

  ::placeholder {
    ${font.P3}
    color: ${color.G60};
  }

  &::-webkit-input-placeholder {
    ${font.P3}
    color: ${color.G60};
  }
`;
