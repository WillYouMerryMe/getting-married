import { css } from 'styled-components';

const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number
) => css`
  font-family: 'Pretendard Variable';
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: ${letterSpacing}%;
`;

const font = {
  H1: fontGenerator(700, 32, 120, -1),
  H2: fontGenerator(700, 24, 120, -1),
  H3: fontGenerator(700, 20, 120, -1),
  H3_140per: fontGenerator(700, 20, 140, -1),
  H4: fontGenerator(700, 16, 120, -1),

  P1: fontGenerator(400, 18, 140, 1),
  P2: fontGenerator(400, 16, 140, 1),
  P3: fontGenerator(400, 14, 140, 1),
  P3_160per: fontGenerator(400, 14, 160, 1),
  P4: fontGenerator(400, 12, 140, 1),

  Button1: fontGenerator(700, 14, 160, -0.2),
  Button2: fontGenerator(500, 16, 160, -1),
  Button3: fontGenerator(500, 14, 160, 0),
  Button4: fontGenerator(500, 12, 160, 0),
};

export default font;
