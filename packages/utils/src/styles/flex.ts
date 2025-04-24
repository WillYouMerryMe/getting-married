import type { CSSProperties } from 'react';
import { css } from 'styled-components';

interface Props {
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
}

const flex = ({ flexDirection, justifyContent, alignItems }: Props) => {
  return css`
    display: flex;
    ${flexDirection && `flex-direction: ${flexDirection};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
  `;
};

export default flex;
