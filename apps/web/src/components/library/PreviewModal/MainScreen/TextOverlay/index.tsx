import { applyTextPositionStyle } from '@/utils';
import { getTemplateFontStyle } from '@merried/design-system';
import { styled } from 'styled-components';

interface Props {
  id: string;
  text: string;
  font: string;
  color: string;
}

const TextOverlay = ({ id, text, font, color }: Props) => {
  return (
    <StyledText $id={id} $font={font} $color={color}>
      {text}
    </StyledText>
  );
};

export default TextOverlay;

const StyledText = styled.div<{ $id: string; $font: string; $color: string }>`
  ${({ $id }) => applyTextPositionStyle($id)};
  ${({ $id, $font }) => getTemplateFontStyle(`template${$id}`, $font)};
  color: ${({ $color }) => $color};
  position: absolute;
  width: 100%;
  text-align: center;
  white-space: pre;
`;
