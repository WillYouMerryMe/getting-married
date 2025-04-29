import { useBooleanState, useOutsideClick } from '@merried/hooks';
import { ChromePicker, ColorResult } from 'react-color';
import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  color: string;
  onChange: (color: string) => void;
}

const ColorBoxButton = ({ color, onChange }: Props) => {
  const {
    value: isOpen,
    setFalse: closeToggle,
    toggle: handleToggleButtonClick,
  } = useBooleanState(false);

  const ref = useOutsideClick(closeToggle);

  return (
    <StyledColorBox ref={ref}>
      {isOpen && <ColorPickerGlobalStyle />}
      <ColorBox $color={color} onClick={handleToggleButtonClick} />
      {isOpen && (
        <PickerBox>
          <ChromePicker
            color={color}
            onChange={(c: ColorResult) => onChange(c.hex)}
            disableAlpha
          />
        </PickerBox>
      )}
    </StyledColorBox>
  );
};

export default ColorBoxButton;

const ColorPickerGlobalStyle = createGlobalStyle`
  .chrome-picker input {
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
  }
`;

const StyledColorBox = styled.div`
  position: relative;
  display: inline-block;
`;

const ColorBox = styled.div<{ $color: string }>`
  width: 42px;
  height: 42px;
  background: ${({ $color }) => $color};
  border: 1px solid #a2a2a2;
  border-radius: 8px;
  cursor: pointer;
`;

const PickerBox = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  z-index: 10;
`;
