import { color } from '@merried/design-system';
import { styled } from 'styled-components';

interface Props {
  isOpen: boolean;
}

const ToggleButton = ({ isOpen }: Props) => {
  return (
    <StyledToggleButton $isOpen={isOpen}>
      <ToggleObject />
    </StyledToggleButton>
  );
};

export default ToggleButton;

const StyledToggleButton = styled.div<{ $isOpen: boolean }>`
  display: flex;
  width: 56px;
  height: 27px;
  align-items: center;
  border-radius: 99px;
  ${({ $isOpen }) =>
    $isOpen
      ? `
      justify-content: flex-end;
      background: ${color.primary};
      `
      : `
      justify-content: flex-start;
      background: ${color.G40};
      `}
  padding: 4px 4px 3px 4px;

  cursor: pointer;
`;

const ToggleObject = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 99px;
  background: ${color.G0};
`;
