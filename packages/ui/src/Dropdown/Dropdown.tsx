import { styled } from 'styled-components';
import { useBooleanState, useOutsideClick } from '@merried/hooks';
import { flex } from '@merried/utils';
import { color, font } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import Row from '../Flex/Row';

type DropdownOption = 'DEFAULT' | 'COLOR';

interface Props {
  onChange: (value: string, name: string) => void;
  name: string;
  value?: string;
  data?: string[];
  option?: DropdownOption;
  placeholder?: string;
}

const Dropdown = ({
  value,
  data,
  option = 'DEFAULT',
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
      <Row gap={8}>
        {value && option === 'COLOR' && <DropdownColorBox $color={value} />}
        <StyledDropdown
          onClick={handleToggleButtonClick}
          $isOpen={isOpen}
          $option={option}
        >
          {value || placeholder}
          <IconArrow direction={isOpen ? 'top' : 'bottom'} />
        </StyledDropdown>
      </Row>
      <DropdownMenuBox $isOpen={isOpen}>
        <DropdownMenu $option={option}>
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

const StyledDropdown = styled.div<{ $isOpen: boolean; $option: DropdownOption }>`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: ${({ $option }) => ($option === 'DEFAULT' ? '384px' : '334px')};
  height: 42px;
  padding: 14px 16px;
  border: 1px solid ${({ $isOpen }) => ($isOpen ? color.G500 : color.G70)};
  border-radius: 8px;
  background: ${color.G0};
  ${font.P3}
  color: ${color.G900};
  cursor: pointer;
`;

const DropdownColorBox = styled.div<{ $color: string }>`
  width: 42px;
  height: 42px;
  background: ${({ $color }) => $color};
  border: 1px solid #a2a2a2;
  border-radius: 8px;
`;

const DropdownMenuBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const DropdownMenu = styled.div<{ $option: DropdownOption }>`
  position: absolute;
  right: 0;
  display: grid;
  width: ${({ $option }) => ($option === 'DEFAULT' ? '384px' : '334px')};
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
