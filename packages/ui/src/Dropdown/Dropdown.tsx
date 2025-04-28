import { styled } from 'styled-components';
import { useBooleanState, useOutsideClick } from '@merried/hooks';
import { flex } from '@merried/utils';
import { color, font } from '@merried/design-system';

type DropdownOption = 'LARGE' | 'COLOR';

interface Props {
  onChange: (value: string, name: string) => void;
  name: string;
  value?: string;
  data?: string[];
  size?: DropdownOption;
  placeholder?: string;
}

const Dropdown = ({
  value,
  data,
  size = 'LARGE',
  onChange,
  name,
  placeholder,
}: Props) => {
  const {
    value: isOpen,
    setFalse: closeDropdown,
    toggle: handleToggleButtonClick,
  } = useBooleanState();
  const dropdownRef = useOutsideClick(closeDropdown);

  const handleDropdownItemButtonClick = (data: string) => {
    onChange(data, name);
    closeDropdown();
  };

  return (
    <div ref={dropdownRef}>
      <StyledDropdown onClick={handleToggleButtonClick} $isOpen={isOpen} $size={size}>
        {value || placeholder}
      </StyledDropdown>
      <DropdownMenuBox $isOpen={isOpen}>
        <DropdownMenu>
          {data?.map((item, index) => (
            <DropdownItem
              key={`dropdown ${index}`}
              onClick={() => handleDropdownItemButtonClick(item)}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownMenuBox>
    </div>
  );
};

export default Dropdown;

const StyledDropdown = styled.div<{ $isOpen: boolean; $size: DropdownOption }>`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: ${({ $size }) => ($size === 'LARGE' ? '384px' : '334px')};
  height: 42px;
  padding: 14px 16px;
  border: 1px solid ${({ $isOpen }) => ($isOpen ? color.G500 : color.G70)};
  border-radius: 8px;
  background: ${color.G0};
  ${font.P3}
  color: ${color.G900};
  cursor: pointer;
`;

const DropdownMenuBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const DropdownMenu = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  padding: 12px 0;
  background: ${color.G0};
  box-shadow:
    0px 36px 10px 0px rgba(99, 99, 99, 0),
    0px 23px 9px 0px rgba(99, 99, 99, 0.01),
    0px 13px 8px 0px rgba(99, 99, 99, 0.05),
    0px 6px 6px 0px rgba(99, 99, 99, 0.09),
    0px 1px 3px 0px rgba(99, 99, 99, 0.1);
  grid-template-columns: 1fr;
  border-radius: 8px;
  z-index: 1;
`;

const DropdownItem = styled.button`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 42px;
  padding: 11px 16px;
  background: ${color.G0};
  text-align: left;
  ${font.P3}
  color: ${color.G900};
  cursor: pointer;

  &:hover {
    background-color: ${color.G20};
  }
`;
