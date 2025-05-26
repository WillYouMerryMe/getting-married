import { css } from 'styled-components';

interface TextPosition {
  top: string;
  left: string;
}

const textPositionMap: Record<string, TextPosition> = {
  '1': { top: '633px', left: '50%' },
  '2': { top: '116px', left: '50%' },
  '3': { top: '717px', left: '50%' },
  '4': { top: '611px', left: '50%' },
  '5': { top: '695px', left: '50%' },
  '6': { top: '362px', left: '50%' },
  '7': { top: '559px', left: '50%' },
  '8': { top: '38px', left: '50%' },
};

const applyTextPositionStyle = (id: string) => {
  const position = textPositionMap[id];
  if (!position) return css``;

  const transform =
    id === '8' ? 'translateX(-50%) rotate(-9.332deg)' : 'translateX(-50%)';

  return css`
    top: ${position.top};
    left: ${position.left};
    transform: ${transform};
  `;
};

export default applyTextPositionStyle;
