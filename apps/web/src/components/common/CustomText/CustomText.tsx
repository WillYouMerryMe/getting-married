import { ReactNode } from 'react';
import styled from 'styled-components';

interface CustomTextProps {
  children: ReactNode;
  fontType:
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
  color: string;
  size: number;
  line: number;
  weight: number;
  align?: 'left' | 'right' | 'center' | 'justify';
}

const CustomText = ({
  fontType,
  color,
  children,
  size,
  line,
  weight,
  align = 'center',
}: CustomTextProps) => {
  return (
    <StyledCustomText
      font={fontType}
      color={color}
      size={size}
      line={line}
      weight={weight}
      align={align}
    >
      {children}
    </StyledCustomText>
  );
};

export default CustomText;

const StyledCustomText = styled.div<{
  font: string;
  color: string;
  size: number;
  line: number;
  weight: number;
  align: string;
}>`
  font-family: ${(p) => p.font};
  font-size: ${(p) => p.size}px;
  font-weight: ${(p) => p.weight};
  line-height: ${(p) => p.line / 100};
  color: ${(p) => p.color};
  text-align: ${(p) => p.align};
  white-space: pre-wrap;
`;
