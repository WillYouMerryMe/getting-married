import { font } from '@merried/design-system';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Font = keyof typeof font;

type FontFamily =
  | 'Ownglyph Kundo'
  | 'Pretendard'
  | 'YUniverse-B'
  | 'BBB0003'
  | 'Paperlogy'
  | 'Diphylleia'
  | 'DOSGothic'
  | 'KoreanCNMM'
  | 'LeeSeoyun'
  | 'MapoDacapo'
  | 'Ownglyph Baek Subin'
  | 'Nelna Yesam'
  | 'White Angelica'
  | 'Heir of Light OTF';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties['color'];
  fontType?: Font;
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
  ellipsis?: boolean;
  whiteSpace?: CSSProperties['whiteSpace'];
  tag?: 'span' | 'p';
  fontFamily?: FontFamily;
}

const Text = ({
  children,
  color,
  fontType = 'H1',
  width = 'auto',
  textAlign = 'left',
  ellipsis = false,
  whiteSpace = 'nowrap',
  tag = 'span',
  fontFamily = 'Pretendard',
}: TextProps) => {
  return (
    <StyledText
      style={{ color, textAlign, width, whiteSpace }}
      fontType={fontType}
      as={tag}
      ellipsis={ellipsis}
      fontFamily={fontFamily}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.span.withConfig({
  shouldForwardProp: (prop) => !['fontType', 'ellipsis', 'fontFamily'].includes(prop),
})<{
  fontType: Font;
  ellipsis: boolean;
  fontFamily: FontFamily;
}>`
  ${({ fontType }) => font[fontType]};
  ${({ fontFamily }) => `font-family: '${fontFamily}';`}
  ${(props) =>
    props.ellipsis &&
    css`
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
