import type { CSSProperties } from 'react';
import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { useBooleanState, useOutsideClick } from '@merried/hooks';
import { color, font } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import { flex } from '@merried/utils';

interface Data {
  value: string;
  label: string;
}

interface MiniDropdownProps {
  label?: string;
  data: Data[] | string[];
  width?: CSSProperties['width'];
  value?: string;
  onChange: (value: string, name: string) => void;
  name: string;
  placeholder?: string;
  doubled?: number;
  disabled?: boolean;
}

const MiniDropdown = ({
  label,
  data,
  width = '110px',
  value = '',
  onChange,
  name,
  placeholder,
  doubled,
  disabled = false,
}: MiniDropdownProps) => {
  const {
    value: isOpen,
    setFalse: closeDropdown,
    toggle: handleToggleButtonClick,
  } = useBooleanState();
  const dropdownRef = useOutsideClick(closeDropdown);

  const handleDropdownItemButtonClick = (data: string) => {
    if (!disabled) {
      onChange(data, name);
      closeDropdown();
    }
  };

  const handleDropdownClick = () => {
    if (!disabled) {
      handleToggleButtonClick();
    }
  };

  return (
    <div ref={dropdownRef} style={{ width }}>
      {label && <Label>{label}</Label>}
      <StyledMiniDropdown onClick={handleDropdownClick} $isOpen={isOpen}>
        <Text fontType="P3" color={color.G900} ellipsis={true}>
          {value || placeholder}
        </Text>
        {isOpen ? (
          <IconArrow color={color.G60} direction="top" width={14} height={14} />
        ) : (
          <IconArrow color={color.G60} direction="bottom" width={14} height={14} />
        )}
      </StyledMiniDropdown>
      <MiniDropdownListBox $isOpen={isOpen && !disabled}>
        <MiniDropdownList $isMultiple={data.length > (doubled ?? 100)}>
          {data?.map((item, index) => {
            const isString = typeof item === 'string';
            const dropdownLabel = isString ? item : item.label;
            const dropdownValue = isString ? item : item.value;
            return (
              <MiniDropdownItem
                key={`dropdown ${index}`}
                onClick={() => handleDropdownItemButtonClick(dropdownValue)}
              >
                {dropdownLabel}
              </MiniDropdownItem>
            );
          })}
        </MiniDropdownList>
      </MiniDropdownListBox>
    </div>
  );
};

export default MiniDropdown;

const Label = styled.p`
  ${font.P3}
  color: ${color.G900};
  margin-bottom: 4px;
`;

const StyledMiniDropdown = styled.div<{
  $isOpen: boolean;
}>`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  border-radius: 99px;
  cursor: pointer;
  background-color: ${color.G10};
  padding: 14px 16px;
`;

const MiniDropdownListBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

const MiniDropdownList = styled.div<{ $isMultiple?: boolean }>`
  display: grid;
  z-index: 1;
  position: absolute;
  margin-top: 4px;
  width: ${(props) => (props.$isMultiple ? '200%' : '100%')};
  background-color: ${color.G0};
  box-shadow:
    0px 21px 6px 0px rgba(194, 194, 194, 0),
    0px 14px 6px 0px rgba(194, 194, 194, 0.01),
    0px 8px 5px 0px rgba(194, 194, 194, 0.05),
    0px 3px 3px 0px rgba(194, 194, 194, 0.09),
    0px 1px 2px 0px rgba(194, 194, 194, 0.1);
  grid-template-columns: ${(props) => (props.$isMultiple ? '1fr 1fr' : '1fr')};
  border-radius: 8px;
`;

const MiniDropdownItem = styled.button`
  ${flex({ alignItems: 'center' })}
  padding: 12px 16px;
  width: 100%;
  height: 44px;
  text-align: left;
  cursor: pointer;
`;
